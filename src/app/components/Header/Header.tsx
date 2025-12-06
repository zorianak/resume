'use client';
import { useState } from "react";
import * as headerLinks from "./links.json";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useWindowSize } from "@/app/hooks/useWindowSize";

export const Header = () => {
    const [showMobileMenu, setShowMobileMenu] =  useState(false);
    const RenderNav = () => {
        const size = useWindowSize();
        if (size.width && size.width < 640) {
            const handleMenuBtnClick = () => {
                setShowMobileMenu(!showMobileMenu);
            }
            // return mobile
            return (
                <div className="fixed top-2 left-2 rounded-xl bg-black px-2 pt-2 border border-white">
                    <Button variant="primary" onClick={handleMenuBtnClick}>
                        {/* <Icon variant="menu" /> */}
                    </Button>
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