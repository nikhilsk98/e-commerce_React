import { ActionTypes } from "../constant/action-types";

const initailState = {
  prodects: [
    {
      id: 1,
      title: "Nikhil",
      category: "CEO",
    },
  ],
};

export const productReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
