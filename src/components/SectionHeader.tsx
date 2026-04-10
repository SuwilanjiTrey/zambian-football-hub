import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  action?: string;
}

const SectionHeader = ({ title, action }: SectionHeaderProps) => (
  <div className="flex items-center justify-between mb-3">
    <h2 className="font-display text-base text-foreground">{title}</h2>
    {action && (
      <button className="flex items-center gap-0.5 text-[11px] font-body text-primary hover:text-primary/80 transition-colors">
        {action}
        <ChevronRight size={14} />
      </button>
    )}
  </div>
);

export default SectionHeader;
