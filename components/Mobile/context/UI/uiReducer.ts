import { UiState } from './';

type UiActionType = { type: '[UI] - isMenuOpen' } | { type: '[UI] - isMenuClose' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch (action.type) {
        case '[UI] - isMenuOpen':
            return {
                ...state,
                menu: false,
            };
        case '[UI] - isMenuClose':
            return {
                ...state,
                menu: true,
            };

        default:
            return state;
    }
};
