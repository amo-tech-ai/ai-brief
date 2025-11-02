
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
    secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300',
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
