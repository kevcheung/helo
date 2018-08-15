import axios from 'axios';
// CONSTANTS
const GET_USER = 'GET_USER';
const ADD_USER = 'ADD_USER';

// ACTION CREATORS
export function getUser(username, password) {
    // console.log(username)
      return {
        type: GET_USER,
        payload: axios.post(`/api/getUser`, {username, password})
    }
}

// export function addUser(username, password) {
//     // console.log(username)
//     return {
//         type: ADD_USER,
//         payload: axios.post(`/api/addUser`, {username, password})
//     }
// }


// INITIAL STATE
const initialState = {
    username: '',
    profilePic: ''
};

// REDUCER

export default function reducer(state = initialState, action) {
      console.log("PAYLOAD                     ", action.payload)
    // console.log(action.type)
        switch (action.type) {
        case `${GET_USER}_FULFILLED`:
            return {
            ...state,
            username: action.payload.data[0].username
        };
        case `${ADD_USER}_FULFILLED`:
            return {
            ...state,
        };
        default:
            return state;
        }
    }