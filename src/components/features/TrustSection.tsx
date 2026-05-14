const TrustSection = () => {
  const trustItems = [
    { 
      name: "CAC", 
      label: "Accredited Agents", 
      logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Corporate_Affairs_Commission_Logo.png" 
    },
    { 
      name: "NBA", 
      label: "Legal Practitioners", 
      logo: "https://nigerianbar.org.ng/wp-content/uploads/2021/11/NBA-Logo-Small.png" 
    },
    { 
      name: "FIRS", 
      label: "Tax Compliance", 
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/FIRS_Logo.png" 
    },
    { 
      name: "Paystack", 
      label: "Secure Payments", 
      logo: "https://paystack.com/assets/img/login/paystack-logo.png" 
    },
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
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col items-center group transition-all duration-300"
              >
                <div className="h-16 w-24 md:w-32 bg-[hsl(25,30%,98%)] border border-[hsl(25,15%,90%)] rounded-xl p-3 mb-2 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-[hsl(28,95%,52%)] transition-all duration-300">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="h-full w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-lg font-black text-[hsl(20,85%,28%)]">${item.name}</span>`;
                      }
                    }}
                  />
                </div>
                <div className="text-[9px] uppercase font-bold tracking-widest text-[hsl(25,10%,50%)] group-hover:text-[hsl(28,95%,52%)] transition-colors">
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
