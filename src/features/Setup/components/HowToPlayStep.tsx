interface HowToPlayStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const HowToPlayStep = ({
  stepNumber,
  title,
  description,
}: HowToPlayStepProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
        {stepNumber}
      </div>
      <div>
        <h4 className="font-subheading text-lg text-primary-600">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HowToPlayStep;
