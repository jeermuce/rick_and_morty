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
    try {
      const { data } = await axios.post(endpoint, character);
      if (!data.length) throw new Error("No favorites found");
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
function removeFavorite(id) {
  return async (dispatch) => {
    try {
      const endpoint = `${URL}/fav/${id}`;
      const response = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
function filterCards(gender) {
  return { type: FILTER, payload: gender };
}
function orderCards(order) {
  return { type: ORDER, payload: order };
}
export { addFavorite, removeFavorite, filterCards, orderCards };
