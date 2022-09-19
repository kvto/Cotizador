import {
    GET_USERS

} from "../Actions/index"

const initialState = {
    allUser: [],
    
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {


        case GET_USERS:
            return {
                ...state,
                allUser: payload,
            };
};
}
