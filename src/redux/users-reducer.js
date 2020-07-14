const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {
        //     id: 1, 
        //     photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: false, 
        //     fullName: 'Maximus', 
        //     status: 'My status', 
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2, 
        //     photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: true, 
        //     fullName: 'Olga', 
        //     status: 'My status', 
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3, photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', 
        //     followed: false, 
        //     fullName: 'Oleg', 
        //     status: 'My status', 
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: 4, 
        //     photoUrl: 'https://image.flaticon.com/icons/svg/147/147144.svg', followed: false, 
        //     fullName: 'Valery', 
        //     status: 'My status', 
        //     location: {city: 'Warsaw', country: 'Poland'}
        // },
    ]
};

const UsersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };

        case SET_USERS:
            return { 
                ...state, 
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default UsersReducer;