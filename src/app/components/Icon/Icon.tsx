import { Menu } from './icons/Menu';
import { IconProps as BaseIconProps } from './icons/IconProps';

const iconComponents = {
    menu: Menu,
    // Add more icons here as you create them
} as const;

export type IconVariant = keyof typeof iconComponents;

export interface IconProps extends BaseIconProps {
    variant: IconVariant;
    size?: number;
    className?: string;
}

export const Icon = ({ 
    variant, 
    size,
    color, 
    width, 
    height, 
}: IconProps) => {
    const IconComponent = iconComponents[variant];
    
    return (
        <IconComponent 
            color={color}
            width={size || width}
            height={size || height}
        />
    );
}

export default Icon;