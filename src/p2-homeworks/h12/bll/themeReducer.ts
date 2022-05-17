export type ThemeStateType = {
    theme: string
}

const initState: ThemeStateType = {
    theme: 'some'
};

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.option};
        }
        default: return state;
    }
};

type ChangeThemeType = {
    type: 'CHANGE-THEME'
    option: string
};

type ActionType = ReturnType<typeof changeThemeC>;

export const changeThemeC = (option: string): ChangeThemeType => ({type: 'CHANGE-THEME', option});