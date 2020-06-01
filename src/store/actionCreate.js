import { CHANGE_DATA, REMOVE_ITEM, ADD_ITEM,GET_LIST, GET_TODOLIST,GET_Users_LIST,GET_ALLUSERSLIST } from "./actions";

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


export const getListAction = (data) => ({
  type: GET_LIST,
  data
});

export const getAllUsersListAction = (data) => ({
  type: GET_ALLUSERSLIST,
  data
});


export const getUsersListAction = () => ({
  type: GET_Users_LIST,
});

export const getToDoListAction = () => ({
  type: GET_TODOLIST,
});