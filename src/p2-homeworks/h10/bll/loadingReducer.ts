type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false,
}

export const loadingReducer = (state: LoadingStateType = initState, action: ActionsType): LoadingStateType => {
    switch (action.type) {
        case 'CHANGE-IS-LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default: return state
    }
}

type LoadingAC = {
    type: 'CHANGE-IS-LOADING'
    payload: {
        isLoading: boolean
    }
}

export type ActionsType = LoadingAC

export const loadingAC = (isLoading: boolean): LoadingAC => ({
    type: 'CHANGE-IS-LOADING',
    payload: {
        isLoading
    }
})