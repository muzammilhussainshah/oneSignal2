import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    mainUrl:"https://safe-bayou-42516.herokuapp.com/",
    // mainUrl: `http://192.168.100.223:3002/`,
    user: "",


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return ({
                ...state,
                user: action.payload
            })

        default:
            return state;
    }

}