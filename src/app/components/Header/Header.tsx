'use client';
import { useState, useEffect } from "react";
import * as headerLinks from "./links.json";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { Popover, PopoverTrigger, PopoverContent } from "../shadcn/popover";

export const Header = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const RenderNav = () => {
        const size = useWindowSize();
        
        if (!isMounted) {
            // Render a placeholder during SSR
            return null;
        }
        
        if (size.width && size.width < 640) {
            // return mobile
            return (
                <div className="fixed top-2 left-2 rounded-xl bg-black px-2 pt-2 border border-white">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="primary">
                                <Icon variant="menu" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto mt-5" side="bottom" align="start">
                            <ul className="flex flex-col gap-6 flex-wrap items-center justify-left">
                                {Object.entries(headerLinks).map(([key, value]) => (<li key={key}><a href={value}>{key}</a></li>))}
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            )

        }

        //desktop
        return (<ul className="flex gap-6 flex-wrap items-center justify-center">
                    {Object.entries(headerLinks).map(([key, value]) => (<li key={key}><a href={value}>{key}</a></li>))}
                </ul>);
    }

    return (
        <header>
            <nav>
                <RenderNav />
            </nav>
        </header>
    )
}

export default Header;