import { useState, FormEvent } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { NIGERIAN_STATES, BUSINESS_SECTORS } from '@/constants/data';
import { toast } from 'sonner';

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  tier?: 0 | 1;
}

type Step = 'form' | 'processing' | 'success';

const PurchaseModal = ({ open, onClose, tier = 1 }: PurchaseModalProps) => {
  const [step, setStep] = useState<Step>('form');
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    sector: '',
    state: '',
    stage: '',
    companyName1: '',
    companyName2: '',
    companyName3: '',
    businessObjects: '',
    director1: '',
    shareStructure: '',
    brandName: '',
    trademarkClass: '',
    notes: '',
  });

  if (!open) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.companyName1 || !form.sector) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setStep('processing');
    console.log('Purchase form submitted:', form);
    setTimeout(() => {
      setStep('success');
      toast.success('Purchase initiated successfully!');
    }, 2500);
  };

  const handleClose = () => {
    setStep('form');
    setForm({
      fullName: '', phone: '', email: '', companyName: '', sector: '', state: '',
      stage: '', companyName1: '', companyName2: '', companyName3: '',
      businessObjects: '', director1: '', shareStructure: '', brandName: '',
      trademarkClass: '', notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[hsl(24,100%,45%)] px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <p className="text-[hsl(25,30%,95%)] text-xs font-semibold uppercase tracking-widest">
              {tier === 0 ? 'Tier 0 — The Essentials Pack' : 'Tier 1 — The Pro Pack'}
            </p>
            <h3 className="text-white text-xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Purchase FoundReady — {tier === 0 ? '₦250,000' : '₦1,000,000'}
            </h3>
            <p className="text-[hsl(25,15%,85%)] text-xs mt-1">
              {tier === 0 ? '100% upfront payment' : 'Initial payment: ₦700,000 · Balance ₦300,000 on delivery'}
            </p>
          </div>
          <button onClick={handleClose} className="text-[hsl(25,15%,70%)] hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-6">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name *" value={form.fullName} onChange={(v) => handleChange('fullName', v)} placeholder="Your full legal name" />
                <Field label="Phone Number *" value={form.phone} onChange={(v) => handleChange('phone', v)} placeholder="+234 800 0000 000" type="tel" />
                <Field label="Email Address *" value={form.email} onChange={(v) => handleChange('email', v)} placeholder="you@email.com" type="email" />
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
                  label="Company Stage"
                  value={form.stage}
                  onChange={(v) => handleChange('stage', v)}
                  options={['Pre-revenue (building)', 'Operating (unregistered)', 'Scaling / Raising funding']}
                  placeholder="Select stage"
                />
              </div>

              <div className="border-t border-[hsl(150,15%,90%)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(150,10%,45%)] mb-4">Company Name Options (for CAC)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Field label="1st Choice *" value={form.companyName1} onChange={(v) => handleChange('companyName1', v)} placeholder="Preferred name" />
                  <Field label="2nd Choice" value={form.companyName2} onChange={(v) => handleChange('companyName2', v)} placeholder="Alternative" />
                  <Field label="3rd Choice" value={form.companyName3} onChange={(v) => handleChange('companyName3', v)} placeholder="Alternative" />
                </div>
              </div>

              <TextareaField label="Business Objects / Activities" value={form.businessObjects} onChange={(v) => handleChange('businessObjects', v)} placeholder="Briefly describe what the company will do..." />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Director 1 Full Name" value={form.director1} onChange={(v) => handleChange('director1', v)} placeholder="First director's name" />
                <Field label="Share Structure" value={form.shareStructure} onChange={(v) => handleChange('shareStructure', v)} placeholder="e.g. 60/40 or equal shares" />
                {tier === 1 && (
                  <>
                    <Field label="Brand Name for Trademark" value={form.brandName} onChange={(v) => handleChange('brandName', v)} placeholder="Name or logo to trademark" />
                    <Field label="Trademark Class" value={form.trademarkClass} onChange={(v) => handleChange('trademarkClass', v)} placeholder="e.g. Class 35 (Business Services)" />
                  </>
                )}
              </div>

              <TextareaField label="Additional Notes" value={form.notes} onChange={(v) => handleChange('notes', v)} placeholder="Any other information..." />

              <div className="bg-[hsl(25,30%,96%)] border border-[hsl(25,15%,88%)] rounded-lg p-4 text-xs text-[hsl(20,10%,40%)] leading-relaxed">
                By submitting this form, you agree to proceed with payment of {tier === 0 ? '₦250,000 (100% of the package price)' : '₦700,000 (70% of the ₦1,000,000 package price)'}.
                {tier === 1 && ' The balance of ₦300,000 will be due upon delivery of your documents.'} All information is handled in strict
                confidence per our Privacy Policy and the Nigeria Data Protection Act 2023.
              </div>

              <button
                type="submit"
                className="w-full bg-[hsl(24,100%,45%)] hover:bg-[hsl(24,100%,40%)] text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-sm shadow-md hover:shadow-lg"
              >
                Proceed to Payment — {tier === 0 ? '₦250,000' : '₦700,000'}
              </button>
            </form>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 size={48} className="text-[hsl(20,85%,28%)] animate-spin" />
              <p className="text-[hsl(20,30%,8%)] font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                Processing your order...
              </p>
              <p className="text-[hsl(20,10%,45%)] text-sm text-center max-w-xs">
                Preparing your order. Please do not close this window.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
              <div className="w-20 h-20 rounded-full bg-[hsl(25,30%,95%)] flex items-center justify-center">
                <CheckCircle size={40} className="text-[hsl(20,85%,28%)]" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(20,30%,8%)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Order Received!
              </h3>
              <p className="text-[hsl(20,10%,40%)] text-sm leading-relaxed max-w-md">
                Thank you for choosing FoundReady. Our team will contact you within 1 business day to confirm your
                payment and begin the onboarding process. Check your email for a confirmation receipt.
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
                <p className="font-semibold text-[hsl(20,30%,8%)] mb-2">What happens next?</p>
                <ul className="space-y-1.5 text-[hsl(20,10%,40%)]">
                  <li>✓ Transfer the amount to the account above</li>
                  <li>✓ Send proof of payment to WhatsApp/Email</li>
                  <li>✓ Onboarding begins after payment clears</li>
                  <li>✓ Documents delivered in 7–10 working days</li>
                </ul>
              </div>
              <button
                onClick={handleClose}
                className="bg-[hsl(28,95%,52%)] hover:bg-[hsl(28,95%,44%)] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-sm"
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

// Form field helpers
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

export default PurchaseModal;
