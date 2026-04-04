import { Star } from "lucide-react";

const MarqueeTrustBar = () => {
  const items = [
    "🎉 2,000+ Accounts Recovered",
    "⭐ 93% Customer Satisfaction",
    "🚀 Proven Recovery Workflow",
    "🔒 Appeal Cadence + Channels",
    "💯 Handled by a Specialist Team",
    "🏆 Human Support",
  ];

  return (
    <div className="w-full overflow-hidden bg-foreground py-4 border-y-4 border-foreground">
      <div className="marquee-track">
        {/* First set */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, index) => (
            <MarqueeItem key={index} text={item} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-8 px-4">
          {items.map((item, index) => (
            <MarqueeItem key={`dup-${index}`} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 whitespace-nowrap">
    <span className="text-background font-bold text-lg">{text}</span>
    <Star size={16} className="text-yellow fill-yellow" />
  </div>
);

export default MarqueeTrustBar;
