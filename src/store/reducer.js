const defaultState = {
  inputValue: "write something",
  list: ["學習程式賺大錢", "拿錢用力環遊世界"],
};
export default (state = defaultState, actions) => {
  console.log(state,actions)
  switch (actions.type) {
    case 'ChangeData':
      return {
        ...state,
        ...{inputValue:actions.value}
      }
    case 'AddItem':
      // let newData = JSON.parse(JSON.stringify(state))
      // reducer 理只能接收state,不能改變state
      return {
        ...state,
        ...{ 
          list:[...state.list,state.inputValue],
          inputValue:'',
         }
      }
    case 'removeItem':
      return {
        ...state,
        ...{ 
          list: [...state.list].splice(actions.index,1),
         }
      }
    default:
      return state;
  }
};
