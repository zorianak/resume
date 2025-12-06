export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
    classes?: string;
}

export const Button = ({ variant, onClick, disabled, children, classes }: ButtonProps) => {
    const getButtonClasses = () =>  {
        switch(variant) {
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
    return <button className={`${getButtonClasses()} ${classes}`} onClick={onClick} disabled={disabled}>{children}</button>
};

export default Button;