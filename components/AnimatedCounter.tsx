import React, { useState, useEffect, useRef } from 'react';

// Internal Component for Number Animation
export const AnimatedCounter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    // Extract numeric part and non-numeric suffix (e.g., "4,000+" -> 4000 and "+")
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9,]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTimestamp: number | null = null;
                    const duration = 2000; // 2 seconds animation

                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        // Easing function (easeOutExpo) for smooth landing
                        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                        setCount(Math.floor(easeProgress * numericValue));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};
