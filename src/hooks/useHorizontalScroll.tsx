import {useEffect, useRef, useState} from "react";

export function useHorizontalScroll() {
    const elRef = useRef<any>();
    const [elementId, setElementId] = useState(0);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();

                const childId = e.deltaY > 0 ? elementId + 1 : elementId - 1;
                if (childId < 0 || childId === el.children.length) return;

                el.children[childId].scrollIntoView({
                    behavior: 'smooth',
                    block: "center",
                    inline: "center"
                });
                setElementId(childId);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [elementId]);

    return elRef;
}
