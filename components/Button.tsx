import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tag' | 'tag-active';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: 'px-8 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm',
    secondary: 'px-8 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300',
    tag: 'px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm',
    'tag-active': 'px-4 py-2 rounded-lg bg-orange-500 text-white text-sm shadow-md',
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