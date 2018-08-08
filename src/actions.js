import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

//Way of using higher order function to return a function from a function. 
// Redux thunk will note that the action returns a function, and therefore give it the dispatch function.
//Redux thunk helps with actions that return a function, and redux thunk will then provide the dispatch function to the returned function.

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}


//Normal way, doesnt use redux thunk
/*
export const requestRobots = (dispatch) => { 
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}*/