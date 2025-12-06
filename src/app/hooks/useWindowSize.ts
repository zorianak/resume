import { useEffect, useState } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
        width: typeof window !== 'undefined' ? window.innerWidth : undefined,
        height: typeof window !== 'undefined' ? window.innerHeight : undefined,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Resize detected!")
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log('window size: ', windowSize);

    return windowSize;
}