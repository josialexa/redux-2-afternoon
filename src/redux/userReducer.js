import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    console.log('fetching data')
    let data = axios.get('/auth/user-data')
        .then(res => res.data)
    console.log(data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}


export default function reducer(state = initialState, action) {
    const {type, payload} = action
    // const handler = {get: (target, name) => target.hasOwnProperty[name] ? target[name] : () => state}

    // let swtch = new Proxy({
    //     REQUEST_USER_DATA_FULFILLED: () => {
    //         console.log('hit')
    //         const {email, firstName, lastName} = payload.user
    //         return {
    //             ...state,
    //             email,
    //             firstName,
    //             lastName
    //         }
    //     }
    // }, handler)

    // return swtch[type]()
    switch (type) {
        case REQUEST_USER_DATA + '_FULFILLED':
          const { email, firstName, lastName } = payload.user
          return { email, firstName, lastName };
        default:
          return state;
      }
}