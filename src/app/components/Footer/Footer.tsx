import footerItems from "./footerItems.json";
import { Icon } from "../Icon";

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 w-full py-2 h-10 bg-black shadow-md px-20 sm:px-8"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.95) 100%)",
      }}
    >
      {Object.entries(footerItems).map(([key, value]) => (
        <a
          key={key}
          href={value.link}
          className="text-white mx-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type={value.icon} size={24} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
