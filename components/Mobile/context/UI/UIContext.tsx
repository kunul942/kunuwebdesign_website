import { createContext } from 'react';

interface ContextProps {
    menu: boolean;

    isMenuOpen: () => void;
    isMenuClose: () => void;
}

export const UiContext = createContext({} as ContextProps);
