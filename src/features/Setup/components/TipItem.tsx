interface TipItemProps {
  icon: string;
  text: string;
}

const TipItem = ({ icon, text }: TipItemProps) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-medium text-gray-700">{text}</span>
    </div>
  );
};

// Alternative for bullet lists
interface BulletTipItemProps {
  text: string;
  variant?: "primary" | "accent";
}

const BulletTipItem = ({ text, variant = "primary" }: BulletTipItemProps) => {
  const bulletColor =
    variant === "primary" ? "text-primary-500" : "text-accent-500";

  return (
    <li className="flex items-start space-x-2">
      <span className={`${bulletColor} font-bold`}>•</span>
      <span>{text}</span>
    </li>
  );
};

export default TipItem;
export { BulletTipItem };
