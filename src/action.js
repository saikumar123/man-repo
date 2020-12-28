import  store   from './store';

export const LOGIN = (data) => {
    return {
        type : "Login",
        data : data
    }
}

export const FETCH = () => {
    return {
        type : "Fetch"
    }
}

export const create_user = ( data) => {
    return store.dispatch(LOGIN(data));
}

export const fetch_user = () => {
    return store.dispatch(FETCH());
}