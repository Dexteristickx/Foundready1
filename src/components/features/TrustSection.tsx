const TrustSection = () => {
  const trustItems = [
    { name: "CAC", label: "Corporate Affairs Commission", description: "Accredited Agents" },
    { name: "NBA", label: "Nigerian Bar Association", description: "Legal Practitioners" },
    { name: "FIRS", label: "Federal Inland Revenue", description: "Tax Compliance" },
    { name: "Paystack", label: "Secure Payments", description: "PCI-DSS Certified" },
  ];

  return (
    <section className="py-12 bg-white border-y border-[hsl(25,15%,95%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Headline */}
          <div className="text-center md:text-left shrink-0">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(25,10%,60%)] mb-1">
              Authorized & Compliant
            </h3>
            <p className="text-xl font-bold text-[hsl(20,30%,8%)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trusted by 50+ Founders
            </p>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 opacity-60">
            {trustItems.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col items-center group transition-all duration-300 hover:opacity-100"
              >
                <div className="text-2xl font-black text-[hsl(20,10%,20%)] tracking-tighter mb-1 select-none">
                  {item.name}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[hsl(25,10%,50%)] group-hover:text-[hsl(28,95%,52%)] transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
