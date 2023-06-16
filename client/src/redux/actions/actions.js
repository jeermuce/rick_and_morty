import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER,
  ORDER,
} from "../actions/actionTypes";
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty";
function addFavorite(character) {
  const endpoint = `${URL}/fav`;
  return async (dispatch) => {
    await axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
}
function removeFavorite(id) {
  const endpoint = `${URL}/fav/${id}`;
  return async (dispatch) => {
    await axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
}
async function filterCards(gender) {
  return { type: FILTER, payload: gender };
}
async function orderCards(order) {
  return { type: ORDER, payload: order };
}
export { addFavorite, removeFavorite, filterCards, orderCards };
