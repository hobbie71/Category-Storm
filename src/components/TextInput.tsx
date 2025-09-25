import React from "react";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "accent" | "outline" | "minimal";
  size?: "sm" | "md" | "lg";
  label?: string;
  error?: string | boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const TextInput = ({
  variant = "primary",
  size = "md",
  label,
  error,
  className = "",
  disabled = false,
  loading = false,
  ...props
}: Props) => {
  const baseClasses =
    "font-subheading rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed w-full";

  const variantClasses = {
    primary:
      "border-2 border-primary-300 focus:border-primary-500 focus:ring-primary-500 bg-white",
    accent:
      "border-2 border-accent-300 focus:border-accent-500 focus:ring-accent-500 bg-white",
    outline:
      "border-2 border-gray-300 focus:border-primary-500 focus:ring-primary-500 bg-white",
    minimal:
      "border-b-2 border-gray-300 focus:border-primary-500 focus:ring-0 bg-transparent rounded-none",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg",
  };

  const errorClasses = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${errorClasses} ${className}`;

  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <input
          type="text"
          className={combinedClasses}
          disabled={disabled || loading}
          {...props}
        />
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="animate-spin h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default TextInput;
