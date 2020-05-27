import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
// import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange)
    
  }
  storeChange=()=>{
    this.setState(store.getState())
  }
  changeInputValue = (e) =>{
    const actions = {
      type:'ChangeData',
      value:e.target.value
    }
    store.dispatch(actions)
  }

  addItem = () =>{
    store.dispatch({
      type:'AddItem'
    })
  }

  removeItem = (index) =>{
    console.log('index',index)
    store.dispatch({
      type:'removeItem',
      index
    })
  }
  render() {
    return (
      <div>
        <div>
          <Input
            placeholder={this.state.inputValue}
            value={this.state.inputValue}
            style={{ width: "250px" }}
            onChange={()=>{this.changeInputValue()}}
          />
          <Button type="primary" onClick={()=>{this.addItem()}}>ADD</Button>
        </div>
        <div style={{ width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => <List.Item onClick={()=>{this.removeItem(index)}}>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
