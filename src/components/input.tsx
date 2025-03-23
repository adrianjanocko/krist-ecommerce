import {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import ErrorMessage from "./error-message";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  error?: FieldError;
  isPending?: boolean;
  className?: string;
  icon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      error,
      isPending,
      className,
      icon,
      ...props
    },
    ref
  ) => {
    const isCheckbox = type === "checkbox";

    return (
      <div className="grid gap-1">
        {label && (
          <label htmlFor={props.id} className="text-sm">
            {label}
          </label>
        )}
        <div
          className={twMerge(
            "flex items-center gap-3",
            !isCheckbox &&
              "input input-bordered border-black !outline-none w-full",
            className
          )}
        >
          {icon && !isCheckbox && (
            <span className="size-5 flex-shrink-0">{icon}</span>
          )}
          <input
            id={props.id}
            type={type}
            ref={ref}
            placeholder={placeholder}
            className={twMerge(
              "grow w-full",
              isCheckbox
                ? "checkbox rounded-md border-black size-5"
                : "border-0"
            )}
            disabled={isPending}
            {...props}
          />
          {isCheckbox && label && (
            <label htmlFor={props.id} className="ml-2 text-sm">
              {label}
            </label>
          )}
        </div>
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
