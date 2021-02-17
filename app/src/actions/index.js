import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchData = () => (dispatch) => {
    dispatch({type: FETCH_DATA_START});
    setTimeout(() => {
        axios.get("https://swapi.dev/api/people/1")
        .then(res =>{
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: {
                    name: res.data.name,
                    height: res.data.height,
                    mass: res.data.mass,
                    birth_year: res.data.birth_year
                }
            });
        })
        .catch(error => {
            console.error('error from api, error.message');
            dispatch({
                type: FETCH_DATA_FAIL,
                payload: `error from api, ${error.message}`
            })
        })
    }, 3000)
}