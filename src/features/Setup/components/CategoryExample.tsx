interface CategoryExampleProps {
  category: string;
  variant?: "primary" | "accent";
}

const CategoryExample = ({
  category,
  variant = "primary",
}: CategoryExampleProps) => {
  const colorClasses =
    variant === "primary"
      ? "bg-primary-100 text-primary-700"
      : "bg-accent-100 text-accent-700";

  return (
    <div className={`${colorClasses} px-4 py-3 rounded-lg font-medium`}>
      {category}
    </div>
  );
};

export default CategoryExample;
