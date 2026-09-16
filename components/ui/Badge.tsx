import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <div
      className={[
        'inline-flex items-center bg-[var(--color-primary-soft)]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
