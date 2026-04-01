import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  disabled = false,
  required = false
}) => {
  return (
    <div className={`space-y-4 font-sans ${className}`}>
      {label && (
        <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary opacity-40 block">
          {label} {required && <span className="text-tertiary">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-[0.2em] uppercase focus:border-primary outline-none transition-all placeholder:opacity-20 disabled:opacity-30 disabled:cursor-not-allowed text-primary"
      />
    </div>
  );
};

export default Input;
