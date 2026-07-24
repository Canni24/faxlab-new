import { capabilities } from "@/data/team";

// Doubled for a seamless infinite scroll loop
const items = [...capabilities, ...capabilities];

const CapabilityMarquee = () => {
  return (
    <div className="relative py-5 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-3 px-6 shrink-0">
            <span className="text-sm font-semibold text-primary/80 whitespace-nowrap">
              {label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-coral/50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilityMarquee;
