"use client";
import { useState, useEffect } from "react";
import headerLinks from "./links.json";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { Popover, PopoverTrigger, PopoverContent } from "../shadcn/popover";

export const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    console.log("scrolling", window.scrollY);
    setHasScrolled(window.scrollY > 20);
  };

  // track scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const RenderNav = () => {
    const size = useWindowSize();

    if (!isMounted) {
      // Render a placeholder during SSR
      return null;
    }

    const NavLinks = () => {
      return Object.entries(headerLinks).map(([key, value]) => (
        <li key={key}>
          <a href={value}>{key}</a>
        </li>
      ));
    };

    const Links = NavLinks();

    if (size.width && size.width < 640) {
      // return mobile
      return (
        <div className="fixed top-2 left-2 rounded-xl bg-black px-2 pt-2 border border-white">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="primary">
                <Icon type="menu" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto mt-5" side="bottom" align="start">
              <ul className="flex flex-col gap-6 flex-wrap items-center justify-left">{Links}</ul>
            </PopoverContent>
          </Popover>
        </div>
      );
    }

    //desktop
    return (
      <div>
        {hasScrolled && <div className="h-[73px]" />}
        <ul
          className={`${
            hasScrolled ? "fixed top-0 shadow-md animate-slideDown" : ""
          } flex gap-6 flex-wrap items-left justify-left bg-black w-full py-5 px-20 sm:px-8`}
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0) 100%)",
          }}
        >
          {Links}
        </ul>
      </div>
    );
  };

  return (
    <header className="w-full">
      <nav>
        <RenderNav />
      </nav>
    </header>
  );
};

export default Header;
