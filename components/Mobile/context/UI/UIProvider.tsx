import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    menu: boolean;
}

export interface ChildrenProp {
    children: JSX.Element | JSX.Element[];
}

const UI_INITIAL_STATE: UiState = {
    menu: false,
};

export const UiProvider: FC<ChildrenProp> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const isMenuOpen = () => {
        dispatch({ type: '[UI] - isMenuOpen' });
    };
    const isMenuClose = () => {
        dispatch({ type: '[UI] - isMenuClose' });
    };

    return (
        <UiContext.Provider
            value={{
                ...state,

                isMenuOpen,
                isMenuClose,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};
