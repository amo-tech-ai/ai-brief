import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, ...props }) => {
  const baseClasses = "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md";
  
  const variantClasses = {
    primary: 'px-6 py-3 bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500 shadow-sm text-base',
    secondary: 'px-6 py-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500',
    icon: 'w-12 h-12 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500 shadow-sm'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;