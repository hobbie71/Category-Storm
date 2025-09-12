interface EducationalBenefitProps {
  title: string;
  description: string;
  variant?: "primary" | "accent";
}

const EducationalBenefit = ({
  title,
  description,
  variant = "primary",
}: EducationalBenefitProps) => {
  const colorClasses =
    variant === "primary"
      ? "bg-primary-50 border-l-4 border-primary-500"
      : "bg-accent-50 border-l-4 border-accent-500";

  const titleColorClass =
    variant === "primary" ? "text-primary-700" : "text-accent-700";

  return (
    <div className={`${colorClasses} p-4 rounded-r-lg`}>
      <h4 className={`font-subheading text-lg ${titleColorClass}`}>{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EducationalBenefit;
