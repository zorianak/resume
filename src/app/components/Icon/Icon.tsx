import { Menu } from "./icons/Menu";
import { Mail } from "./icons/Mail";
import { GitHub } from "./icons/Github";
import { LinkedIn } from "./icons/LinkedIn";
import { Twitch } from "./icons/Twitch";
import { IconProps as BaseIconProps } from "./icons/IconProps";

const iconComponents = {
  menu: Menu,
  mail: Mail,
  github: GitHub,
  linkedin: LinkedIn,
  twitch: Twitch,
} as const;

export type IconVariant = keyof typeof iconComponents;

export interface IconProps extends BaseIconProps {
  variant: IconVariant;
  size?: number;
  className?: string;
}

export const Icon = ({ variant, size, color, width, height }: IconProps) => {
  const IconComponent = iconComponents[variant];

  return <IconComponent color={color} width={size || width} height={size || height} />;
};

export default Icon;
