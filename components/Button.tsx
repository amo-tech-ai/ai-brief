import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: 'px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm text-base',
    secondary: 'px-6 py-3 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-blue-500',
    icon: 'w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-blue-500 shadow-sm'
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;