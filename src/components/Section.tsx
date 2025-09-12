import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "centered";
}

const Section = ({
  children,
  className = "",
  variant = "default",
}: SectionProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "bg-white border-2 border-primary-200 rounded-2xl p-8";
      case "centered":
        return "text-center py-12";
      default:
        return "space-y-6";
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>{children}</div>
  );
};

export default Section;
