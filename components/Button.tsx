import React from 'react';

// fix: Add `size` prop to allow for different button sizes and resolve type error.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  fullWidth?: boolean;
  size?: 'base' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, size = 'base', ...props }) => {
  const baseClasses = "font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md";
  
  // fix: Refactor class logic to support the new `size` prop by separating variant styles from size styles.
  const variantColorClasses = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500 shadow-sm',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500',
    icon: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500 shadow-sm'
  };
  
  const sizeClass = (() => {
    if (variant === 'icon') {
        return size === 'lg' ? 'w-14 h-14' : 'w-12 h-12';
    }
    return size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base';
  })();

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantColorClasses[variant]} ${sizeClass} ${widthClass} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;