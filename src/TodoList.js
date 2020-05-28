import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import store from "./store";
import axios from "axios";
// import { CHANGE_DATA, REMOVE_ITEM, ADD_ITEM } from "./store/actions";
import {
  changeInputAction,
  removeItemAction,
  addItemAction,
} from "./store/actionCreate";
// import axios from "axios";
// import { connect } from "react-redux";

const settings = {
  headers: {
    Accept: "application/json",
  },
};
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // this.storeChange = this.storeChange.bind(this);
    // this.changeInputValue = this.changeInputValue.bind(this);
    // this.addItem = this.addItem.bind(this);
    // this.removeItem = this.removeItem.bind(this);
    store.subscribe(() => {
      this.storeChange();
    });
  }

  componentDidMount() {
    axios
      .get(
        "https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1",
        settings
      )
      .then((res) => {
        console.log("res", res);
      });
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  changeInputValue = (e) => {
    store.dispatch(changeInputAction(e.target.value));
  };

  addItem = () => {
    store.dispatch(addItemAction());
  };
  removeItem = (index) => {
    store.dispatch(removeItemAction(index));
  };
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={(e) => {
          this.changeInputValue(e);
        }}
        addItem={() => {
          this.addItem();
        }}
        list={this.state.list}
        removeItem={(index) => {
          this.removeItem(index);
        }}
      />
    );
  }
}

export default TodoList;
