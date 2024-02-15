import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAnimations = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, []);

    return {
        fadeOut: 'fade-out',
        fadeDown: 'fade-down',
        fadeIn: 'fade-in',
    };
};
