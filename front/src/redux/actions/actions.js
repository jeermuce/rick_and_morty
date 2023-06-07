import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER,
  ORDER,
} from "../actions/actionTypes";
function addFavorite(character) {
  return { type: ADD_FAVORITE, payload: character };
}
function removeFavorite(id) {
  return { type: REMOVE_FAVORITE, payload: id };
}
function filterCards(gender) {
  return { type: FILTER, payload: gender };
}
function orderCards(order) {
  return { type: ORDER, payload: order };
}
export { addFavorite, removeFavorite, filterCards, orderCards };
