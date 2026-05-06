const regulators = [
  { name: 'CBN', full: 'Central Bank of Nigeria' },
  { name: 'SEC', full: 'Securities & Exchange Commission' },
  { name: 'NAFDAC', full: 'Food & Drug Administration' },
  { name: 'NCC', full: 'Nigerian Communications Commission' },
  { name: 'NAICOM', full: 'National Insurance Commission' },
  { name: 'CAC', full: 'Corporate Affairs Commission' },
  { name: 'HEFAMAA', full: 'Health Facility Monitoring Agency' },
];

const RegulatorsBanner = () => {
  return (
    <section className="bg-[hsl(25,30%,97%)] border-y border-[hsl(25,15%,88%)] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(20,10%,50%)] shrink-0 mr-4">
            Regulatory Bodies Covered
          </p>
          <div className="flex items-center gap-4 flex-nowrap">
            {regulators.map((r, i) => (
              <div key={r.name} className="flex items-center gap-4 shrink-0">
                <div className="bg-white border border-[hsl(25,15%,88%)] rounded-lg px-4 py-2.5 text-center shadow-sm">
                  <p className="text-[hsl(20,85%,28%)] font-bold text-sm">{r.name}</p>
                  <p className="text-[hsl(20,10%,50%)] text-xs mt-0.5 whitespace-nowrap">{r.full}</p>
                </div>
                {i < regulators.length - 1 && (
                  <div className="w-px h-8 bg-[hsl(25,15%,88%)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatorsBanner;
