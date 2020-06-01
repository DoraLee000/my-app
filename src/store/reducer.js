import { CHANGE_DATA, REMOVE_ITEM, ADD_ITEM, GET_ALLUSERSLIST ,GET_LIST } from "./actions";

const defaultState = {
  inputValue: "write something",
  list: [],
  colleagueList:[]
};
export default (state = defaultState, actions) => {
  console.log(state, actions);
  switch (actions.type) {
    case CHANGE_DATA:
      return {
        ...state,
        ...{ inputValue: actions.value },
      };

    case ADD_ITEM:
      // let newData = JSON.parse(JSON.stringify(state))
      // reducer 理只能接收state,不能改變state
      return {
        ...state,
        ...{
          list: [...state.list, state.inputValue],
          inputValue: "",
        },
      };
    case REMOVE_ITEM:
      return {
        ...state,
        ...{
          list: [
            ...state.list.slice(0, actions.index),
            ...state.list.slice(actions.index + 1),
          ],
        },
      };
    case GET_LIST:
      return {
        ...state,
        ...{ 
          list:actions.data
        }
      }

    case GET_ALLUSERSLIST:
      return {
        ...state,
        ...{
          colleagueList:actions.data
        }
      }
    default:
      return state;
  }
};
