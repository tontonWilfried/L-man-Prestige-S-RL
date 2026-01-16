'use client';

import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      variant = 'primary', 
      isLoading = false, 
      isDisabled = false, 
      children, 
      className,
      ...props 
    },
    ref
  ) => {
    const isButtonDisabled = isDisabled || isLoading;

    return (
      <button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${isButtonDisabled ? styles.disabled : ''} ${className || ''}`}
        disabled={isButtonDisabled}
        {...props}
      >
        <span className={`${styles.content} ${isLoading ? styles.loading : ''}`}>
          {isLoading && <span className={styles.spinner} />}
          <span className={styles.text}>{children}</span>
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';