import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    classes?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, children, classes, ...props }, ref) => {
        const getButtonClasses = () => {
            switch (variant) {
                case 'primary':
                    return '';
                case 'secondary':
                    return '';
                case 'tertiary':
                    return '';
                case 'ghost':
                    return '';
            }
        }
        return (
            <button
                ref={ref}
                className={`${getButtonClasses()} ${classes}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;