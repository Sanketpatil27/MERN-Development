import { useEffect, useState } from "react";

export function useMousePointer() {
    const [position, setPosition] = useState({x: 0, y: 0});

    const mouseHandler = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseHandler);

        return () => {
            window.removeEventListener('mousemove', mouseHandler);
        }
    }, []);

    return position;
}