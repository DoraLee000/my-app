import { CHANGE_DATA, REMOVE_ITEM, ADD_ITEM } from "./actions";

export const changeInputAction = (value) => ({
  type: CHANGE_DATA,
  value,
});

export const removeItemAction = (index) => ({
  type: REMOVE_ITEM,
  index,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});
