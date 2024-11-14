import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  ariaDescribedBy: string;
}

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  ariaDescribedBy,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="focus:shadow-outline w-full appearance-none p-4 text-sm leading-tight text-gray-700 shadow-md focus:outline-none"
        placeholder={placeholder}
        aria-describedby={ariaDescribedBy}
      />
      {error && (
        <p id={ariaDescribedBy} className="ps-1 text-start text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
