/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useController, type UseControllerProps } from "react-hook-form";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: any;
  rules?: UseControllerProps["rules"];
  label?: string;
  placeholder?: string;
  readOnly?: boolean;
  isVerified?: boolean;
  type?: string;
  className?: string;
  onBlur?: () => void;
  as?: "input" | "textarea";
  rows?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules,
  label,
  readOnly,
  type,
  className,
  onBlur,
  isVerified,
  placeholder,
  as = "input",
  rows = 4,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isTextarea = as === "textarea";

  return (
    <div
      className={`relative flex flex-col gap-2 w-full ${
        isTextarea ? "h-auto" : "h-[49px]"
      } rounded-lg ${className}`}
    >
      <label htmlFor={name} className={`text-sm font-medium text-secondary`}>
        {label}
      </label>

      {isTextarea ? (
        <textarea
          readOnly={readOnly}
          id={name}
          {...field}
          {...(rest as any)}
          rows={rows}
          className={`block w-full rounded-md p-4 text-sm focus:outline-none border border-gray_300 resize-vertical ${
            error ? "border border-red-500" : ""
          } ${isVerified ? "pr-12" : ""}`}
          placeholder={placeholder}
          value={field.value || ""}
          onBlur={() => {
            field.onBlur();
            if (onBlur) onBlur();
          }}
          style={{
            backgroundColor: readOnly ? "hsl(0,0%, 90%)" : "",
            cursor: readOnly ? "not-allowed" : "initial",
          }}
        />
      ) : (
        <input
          readOnly={readOnly}
          id={name}
          type={showPassword ? "text" : type}
          {...field}
          {...rest}
          className={`block w-full h-8 rounded-md p-4 text-sm focus:outline-none border border-gray_300 ${
            error ? "border border-red-500" : ""
          } ${isVerified ? "pr-12" : ""}`}
          placeholder={placeholder}
          value={field.value || ""}
          onBlur={() => {
            field.onBlur();
            if (onBlur) onBlur();
          }}
          style={{
            backgroundColor: readOnly ? "hsl(0,0%, 90%)" : "",
            cursor: readOnly ? "not-allowed" : "initial",
          }}
        />
      )}

      {/* Verification Icon */}
      {isVerified && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
          <CheckCircle2 className="text-green-500" />
        </div>
      )}

      {/* Password Toggle */}
      {type === "password" && !isTextarea && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-3 text-gray-500 focus:outline-none"
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      )}

      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
