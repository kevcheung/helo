import axios from 'axios';
// CONSTANTS
const GET_USER = 'GET_USER';
const GET_SESSION = 'GET_SESSION';
// const ADD_USER = 'ADD_USER';

// ACTION CREATORS
export function getUser(username, password) {
    // console.log(username)
      return {
        type: GET_USER,
        payload: axios.post('/api/getUser', {username, password})
    }
}

export function getSession() {
      return {
          type: GET_SESSION,
          payload: axios.get('/api/getSession')
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
            username: action.payload.data[0].username,
            profilePic: action.payload.data[0].profile_pic
        };
        case `${GET_SESSION}_FULFILLED`:
            return {
            ...state
            };
        // case `${ADD_USER}_FULFILLED`:
        //     return {
        //     ...state,
        // };
        default:
            return state;
        }
    }