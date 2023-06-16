import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER,
  ORDER,
} from "../actions/actionTypes";
import axios from "axios";
function addFavorite(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
}
function removeFavorite(id) {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
}
function filterCards(gender) {
  return { type: FILTER, payload: gender };
}
function orderCards(order) {
  return { type: ORDER, payload: order };
}
export { addFavorite, removeFavorite, filterCards, orderCards };
