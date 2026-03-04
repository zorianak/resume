import * as Icons from "./icons";
import { IconProps as BaseIconProps } from "./icons/IconProps";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export interface IIcon {
  className?: string;
  color?: string;
  height?: number | string;
  width?: number | string;
  size?: number | string;
  type: keyof typeof Icons | string;
}

const toPascalCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

type IconComponentProps = {
  color?: string;
  height: number | string;
  width?: number | string;
};

type IconsMap = {
  [K in keyof typeof Icons]: React.ComponentType<IconComponentProps>;
};

const iconMap: IconsMap = Icons as IconsMap;

export const Icon = ({ className = "", color, height, size = 24, type, width }: IconProps) => {
  const resolveWidth = width ?? size;
  const resolveHeight = height ?? size;
  let IconComponent: React.ComponentType<IconComponentProps> | undefined = (iconMap as Partial<IconsMap>)[
    type as keyof typeof Icons
  ];

  if (!IconComponent && typeof type === "string") {
    const pascalKey = toPascalCase(type);
    if (pascalKey in iconMap) {
      IconComponent = iconMap[pascalKey as keyof typeof Icons];
    }
  }

  if (!IconComponent) {
    return null;
  }

  return (
    <div className={`block ${className}`}>
      <IconComponent color={color} width={resolveWidth} height={resolveHeight} />
    </div>
  );
};

export default Icon;
