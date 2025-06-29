import * as React from "react";
import { cn } from "@/lib/utils";

// Input Component
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || `input-${generatedId}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-navy-900 turkish-text block"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "border-border bg-white text-navy-900 turkish-text",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          aria-describedby={cn(errorId, helperId)}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-sm text-navy-600 turkish-text">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-600 turkish-text" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// Textarea Component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || `textarea-${generatedId}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperId = helperText ? `${textareaId}-helper` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-navy-900 turkish-text block"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "border-border bg-white text-navy-900 turkish-text resize-y",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          aria-describedby={cn(errorId, helperId)}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-sm text-navy-600 turkish-text">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-600 turkish-text" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// Select Component
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || `select-${generatedId}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperId = helperText ? `${selectId}-helper` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-navy-900 turkish-text block"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
            "disabled:opacity-50 appearance-none bg-white text-navy-900 turkish-text",
            "border-border",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          aria-describedby={cn(errorId, helperId)}
          aria-invalid={error ? "true" : undefined}
          {...props}
        >
          <option value="" disabled>
            Seçiniz...
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <p id={helperId} className="text-sm text-navy-600 turkish-text">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-600 turkish-text" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

// Checkbox Component
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || `checkbox-${generatedId}`;
    const errorId = error ? `${checkboxId}-error` : undefined;

    return (
      <div className="space-y-2">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              "h-4 w-4 rounded border-border text-primary-600 focus:ring-2 focus:ring-primary-500",
              "focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-0.5",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            ref={ref}
            aria-describedby={errorId}
            aria-invalid={error ? "true" : undefined}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className="text-sm text-navy-900 turkish-text leading-5 cursor-pointer"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
        {error && (
          <p id={errorId} className="text-sm text-red-600 turkish-text ml-7" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

// Radio Group Component
export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ name, label, options, value, onChange, error, required, className }, ref) => {
    const groupId = `radio-group-${React.useId()}`;
    const errorId = error ? `${groupId}-error` : undefined;

    return (
      <fieldset ref={ref} className={cn("space-y-3", className)} aria-describedby={errorId}>
        {label && (
          <legend className="text-sm font-medium text-navy-900 turkish-text">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </legend>
        )}
        <div className="space-y-2">
          {options.map((option) => {
            const radioId = `${name}-${option.value}`;
            return (
              <div key={option.value} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={radioId}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange?.(e.target.value)}
                  className={cn(
                    "h-4 w-4 border-border text-primary-600 focus:ring-2 focus:ring-primary-500",
                    "focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    error && "border-red-500 focus:ring-red-500"
                  )}
                  aria-invalid={error ? "true" : undefined}
                />
                <label
                  htmlFor={radioId}
                  className="text-sm text-navy-900 turkish-text cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
        {error && (
          <p id={errorId} className="text-sm text-red-600 turkish-text" role="alert">
            {error}
          </p>
        )}
      </fieldset>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { Input, Textarea, Select, Checkbox, RadioGroup };