import footerItems from "./footerItems.json";
import { Icon, type IconVariant } from "../Icon";

const validIconVariants = ["menu", "mail", "github", "linkedin", "twitch"] as const satisfies readonly IconVariant[];

const isIconVariant = (icon: string): icon is IconVariant => {
  return validIconVariants.includes(icon as IconVariant);
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-2 h-10 bg-black shadow-md">
      {Object.entries(footerItems).map(([key, value]) => (
        <a
          key={key}
          href={value.link}
          className="text-white mx-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isIconVariant(value.icon) ? <Icon variant={value.icon} size={24} /> : null}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
