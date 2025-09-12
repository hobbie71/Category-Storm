import { type ReactNode } from "react";

interface TipsListProps {
  title: string;
  children: ReactNode;
  variant?: "primary" | "accent";
}

const TipsList = ({ title, children, variant = "primary" }: TipsListProps) => {
  const titleColorClass =
    variant === "primary" ? "text-primary-600" : "text-accent-600";

  return (
    <div className="space-y-4">
      <h3 className={`font-subheading text-xl ${titleColorClass}`}>{title}</h3>
      <ul className="space-y-2 text-gray-700">{children}</ul>
    </div>
  );
};

export default TipsList;
