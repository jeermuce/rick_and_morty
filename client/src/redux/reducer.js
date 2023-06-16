import {
  ADD_FAVORITE,
  FILTER,
  ORDER,
  REMOVE_FAVORITE,
} from "./actions/actionTypes";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload,
      };
    case FILTER:
      return {
        ...state,
        myFavorites:
          action.payload === "All"
            ? [...state.allCharactersFav]
            : state.allCharactersFav.filter(
                (character) => character.gender === action.payload
              ),
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
  }
};
export default rootReducer;
