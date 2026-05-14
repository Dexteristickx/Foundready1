import { useState, FormEvent } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { NIGERIAN_STATES, BUSINESS_SECTORS } from '@/constants/data';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { usePaystackPayment } from 'react-paystack';

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  defaultTier?: 2 | 3;
}

type Step = 'form' | 'processing' | 'success';

const ConsultationModal = ({ open, onClose, defaultTier = 2 }: ConsultationModalProps) => {
  const [step, setStep] = useState<Step>('form');
  const [duration, setDuration] = useState<'30' | '60'>('60');
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    sector: '',
    state: '',
    stage: '',
    tierInterest: String(defaultTier),
    notes: '',
  });

  if (!open) return null;

  const priceVal = duration === '30' ? 75000 : 100000;
  const price = duration === '30' ? '₦75,000' : '₦100,000';

  const config = {
    reference: (new Date()).getTime().toString(),
    email: form.email,
    amount: priceVal * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    setStep('success');
    toast.success('Consultation booked and paid!');
  };

  const onClosePayment = () => {
    toast.error('Payment cancelled. Please complete payment to book your slot.');
    setStep('form');
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.sector) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setStep('processing');
    
    const submitData = async () => {
      try {
        const { error } = await supabase
          .from('inquiries')
          .insert([{
            full_name: form.fullName,
            phone: form.phone,
            email: form.email,
            business_name: form.businessName,
            sector: form.sector,
            state: form.state,
            stage: form.stage,
            tier_interest: form.tierInterest,
            notes: form.notes,
            duration,
            price,
            submitted_at: new Date().toISOString()
          }]);

        if (error) throw error;

        // Trigger Email Notification
        fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'consultation',
            data: {
              full_name: form.fullName,
              email: form.email,
              phone: form.phone,
              business_name: form.businessName,
              duration,
              price,
              notes: form.notes
            }
          })
        }).catch(err => console.error('Notification error:', err));

        // Trigger payment
        initializePayment({ onSuccess, onClose: onClosePayment });
      } catch (error: any) {
        console.error('Error submitting inquiry:', error);
        toast.error(`Booking failed: ${error.message || 'Unknown error'}`);
        setStep('form');
      }
    };

    submitData();
  };

  const handleClose = () => {
    setStep('form');
    setForm({
      fullName: '', phone: '', email: '', businessName: '', sector: '',
      state: '', stage: '', tierInterest: String(defaultTier), notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[hsl(20,85%,28%)] px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <p className="text-[hsl(42,90%,62%)] text-xs font-semibold uppercase tracking-widest">Expert Advisory</p>
            <h3 className="text-white text-xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Book a Consultation
            </h3>
            <p className="text-[hsl(25,15%,70%)] text-xs mt-1">Aviel Alpha Secretaries Limited & AALP</p>
          </div>
          <button onClick={handleClose} className="text-[hsl(25,15%,70%)] hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-6">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Duration Selection */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(150,10%,45%)] mb-3">Select Session Duration</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: '30', label: '30 Minutes', price: '₦75,000', desc: 'Focused advisory' },
                    { val: '60', label: '60 Minutes', price: '₦100,000', desc: 'Comprehensive review' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setDuration(opt.val as '30' | '60')}
                      className={`border-2 rounded-xl p-4 text-left transition-all duration-200 ${
                        duration === opt.val
                          ? 'border-[hsl(20,85%,28%)] bg-[hsl(25,30%,96%)]'
                          : 'border-[hsl(25,15%,88%)] hover:border-[hsl(20,85%,44%)]'
                      }`}
                    >
                      <p className="font-semibold text-[hsl(150,30%,8%)] text-sm">{opt.label}</p>
                      <p className="text-[hsl(20,85%,28%)] font-bold text-base mt-0.5">{opt.price}</p>
                      <p className="text-[hsl(20,10%,50%)] text-xs mt-0.5">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name *" value={form.fullName} onChange={(v) => handleChange('fullName', v)} placeholder="Your full name" />
                <Field label="Phone Number *" value={form.phone} onChange={(v) => handleChange('phone', v)} placeholder="+234 800 0000 000" type="tel" />
                <Field label="Email Address *" value={form.email} onChange={(v) => handleChange('email', v)} placeholder="you@email.com" type="email" />
                <Field label="Business / Brand Name" value={form.businessName} onChange={(v) => handleChange('businessName', v)} placeholder="Your business name" />
                <SelectField
                  label="Business Sector *"
                  value={form.sector}
                  onChange={(v) => handleChange('sector', v)}
                  options={BUSINESS_SECTORS}
                  placeholder="Select your sector"
                />
                <SelectField
                  label="State of Operation"
                  value={form.state}
                  onChange={(v) => handleChange('state', v)}
                  options={NIGERIAN_STATES}
                  placeholder="Select state"
                />
                <SelectField
                  label="Package Interest"
                  value={form.tierInterest}
                  onChange={(v) => handleChange('tierInterest', v)}
                  options={['1 — The Pro Pack', '2 — Growth Pack', '3 — Regulatory Pack', "I'm not sure yet"]}
                  placeholder="Which tier?"
                />
                <SelectField
                  label="Company Stage"
                  value={form.stage}
                  onChange={(v) => handleChange('stage', v)}
                  options={['Pre-revenue (building)', 'Operating (unregistered)', 'Registered, needs more docs', 'Scaling / Raising funding']}
                  placeholder="Select stage"
                />
              </div>

              <TextareaField
                label="What would you like to discuss?"
                value={form.notes}
                onChange={(v) => handleChange('notes', v)}
                placeholder="Tell us briefly about your business and what you need help with..."
              />

              <div className="bg-[hsl(25,30%,96%)] border border-[hsl(25,15%,88%)] rounded-lg p-4 text-xs text-[hsl(20,10%,40%)] leading-relaxed">
                Consultation fee ({price}) is fully redeemable against Tiers 1, 2, or 3 purchased within 30 days (Excludes Tier 0).
                Sessions are available via video call or in-person in Abuja, Lagos, or Ibadan.
              </div>

              <button
                type="submit"
                className="w-full bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-sm shadow-md hover:shadow-lg"
              >
                Book Consultation — {price}
              </button>
            </form>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 size={48} className="text-[hsl(20,85%,28%)] animate-spin" />
              <p className="text-[hsl(20,30%,8%)] font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Processing booking...
              </p>
              <p className="text-[hsl(20,10%,45%)] text-sm text-center max-w-xs">
                Preparing your booking. Please do not close this window.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
              <div className="w-20 h-20 rounded-full bg-[hsl(28,95%,52%)]/15 flex items-center justify-center">
                <CheckCircle size={40} className="text-[hsl(20,85%,28%)]" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(20,30%,8%)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Booking Received!
              </h3>
              <p className="text-[hsl(20,10%,40%)] text-sm leading-relaxed max-w-md">
                Thank you. Our team will contact you within 1 business day to confirm your slot and send a payment link.
                Check your email for a confirmation.
              </p>
              <div className="bg-[hsl(25,30%,96%)] border border-[hsl(25,15%,88%)] rounded-lg p-5 text-sm text-left w-full max-w-sm">
                <p className="font-semibold text-[hsl(20,30%,8%)] mb-2">Direct Transfer Details</p>
                <div className="space-y-2 text-[hsl(20,10%,40%)] mb-4 bg-white p-3 rounded border">
                  <p className="text-xs uppercase font-semibold">Bank</p>
                  <p className="text-sm font-bold text-[hsl(20,85%,28%)]">Providus Bank</p>
                  <p className="text-xs uppercase font-semibold">Account Number</p>
                  <p className="text-sm font-bold text-[hsl(20,85%,28%)]">1307912069</p>
                  <p className="text-xs uppercase font-semibold">Account Name</p>
                  <p className="text-sm font-bold text-[hsl(20,85%,28%)]">AVIEL-ALPHA SECRETARIES LIMITED</p>
                </div>
                <p className="font-semibold text-[hsl(20,30%,8%)] mb-2">Next steps</p>
                <ul className="space-y-1.5 text-[hsl(20,10%,40%)]">
                  <li>✓ Transfer the consultation fee to the account above</li>
                  <li>✓ Send proof of payment to WhatsApp/Email</li>
                  <li>✓ Calendar invite sent after payment clears</li>
                  <li>✓ Fee fully redeemable within 30 days</li>
                </ul>
              </div>
              <button
                onClick={handleClose}
                className="bg-[hsl(20,85%,28%)] hover:bg-[hsl(20,85%,22%)] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-sm"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, value, onChange, placeholder, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) => (
  <div>
    <label className="block text-xs font-semibold text-[hsl(20,25%,20%)] mb-1.5">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-[hsl(25,15%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(20,30%,8%)] placeholder:text-[hsl(20,10%,65%)] focus:outline-none focus:border-[hsl(20,85%,38%)] focus:ring-2 focus:ring-[hsl(20,85%,38%)]/20 transition-colors"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder?: string;
}) => (
  <div>
    <label className="block text-xs font-semibold text-[hsl(20,25%,20%)] mb-1.5">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-[hsl(25,15%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(20,30%,8%)] focus:outline-none focus:border-[hsl(20,85%,38%)] focus:ring-2 focus:ring-[hsl(20,85%,38%)]/20 transition-colors bg-white"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

const TextareaField = ({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) => (
  <div>
    <label className="block text-xs font-semibold text-[hsl(20,25%,20%)] mb-1.5">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full border border-[hsl(25,15%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(20,30%,8%)] placeholder:text-[hsl(20,10%,65%)] focus:outline-none focus:border-[hsl(20,85%,38%)] focus:ring-2 focus:ring-[hsl(20,85%,38%)]/20 transition-colors resize-none"
    />
  </div>
);

export default ConsultationModal;
