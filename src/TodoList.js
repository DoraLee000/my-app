import React, { Component } from "react";
import TodoListUI from "./TodoListUI";
import { List } from "antd";
import store from "./store"
// import { CHANGE_DATA, REMOVE_ITEM, ADD_ITEM } from "./store/actions";
import {
  changeInputAction,
  removeItemAction,
  addItemAction,
  getToDoListAction,
  getUsersListAction
} from "./store/actionCreate";
// import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.storeChange();
    });
  }

  componentDidMount() {
    store.dispatch(getToDoListAction())
    store.dispatch(getUsersListAction())
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
      <div>
      <TodoListUI
        inputValue={this.props.inputValue}
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
      <hr></hr>
      <h4>名單</h4>
      <List
        bordered
        dataSource={this.state.colleagueList}
        renderItem={(item, index) => (
          <List.Item>
            {item.name}
          </List.Item>
        )}
      />
    </div>
    );
  }
}

export default TodoList;
