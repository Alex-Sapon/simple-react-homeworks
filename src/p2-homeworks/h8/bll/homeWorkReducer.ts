import { ActionsType, UserType } from "../HW8"

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up':
                    return [...state.map(i => ({...i})).sort((a, b) => a.name < b.name ? -1 : 1)]
                case 'down':
                    return [...state.map(i => ({...i})).sort((a, b) => a.name > b.name ? -1 : 1)]
            }
        }
        case 'check': {
            return state.filter(i => i.age > action.payload)
        }
        default: 
            return state
    }
}

