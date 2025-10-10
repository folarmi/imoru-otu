import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error" | "cta" | "outline";
  children: ReactNode;
  loading?: boolean;
  primaryButtonSize?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  loading,
  primaryButtonSize = "base",
  disabled,
  ...rest
}) => {
  let baseClasses = "";
  let disabledClasses = "cursor-not-allowed opacity-50";

  switch (variant) {
    case "primary":
      baseClasses = `border border-border bg-primary text-black text-${primaryButtonSize}`;
      break;
    case "secondary":
      baseClasses = `bg-secondary text-white text-${primaryButtonSize}`;
      break;
    case "cta":
      baseClasses = `bg-orange_200 text-secondary font-semibold uppercase tracking-wide transition-colors`;
      break;
    case "outline":
      baseClasses = `border-2 border-white text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wide transition-colors`;
      break;
    default:
      baseClasses = "text-white py-2 px-3 rounded-xl";
      break;
  }

  if (disabled) {
    disabledClasses += ` bg-${
      variant === "error" ? "red_200" : "blue_400"
    } border border-${
      variant === "error" ? "red_200" : "blue_400"
    } shadow-disabled-button`;
  }

  const mergedClassName = `${baseClasses} ${
    disabled ? disabledClasses : ""
  } ${className} whitespace-nowrap py-2 px-3 rounded-xl font-normal`;

  return (
    <button
      disabled={loading || disabled}
      className={mergedClassName}
      {...rest}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
