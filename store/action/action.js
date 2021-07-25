import ActionTypes from '../constant/constant';

export function userSaveInStore(data) {
    return dispatch => {
        dispatch({ type: ActionTypes.LOGIN, payload: data })

    }
}