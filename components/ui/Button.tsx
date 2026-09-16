import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white',
  secondary: 'bg-white border border-slate-800 text-slate-800 hover:bg-slate-50',
};

export function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [variantClasses[variant], className].join(' ');

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
