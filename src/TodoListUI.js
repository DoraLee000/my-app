import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = (props) => {
  const { inputValue, changeInputValue, addItem, list, removeItem } = props;
  return (
    <div>
      <div>
        <Input
          placeholder={inputValue}
          value={inputValue}
          style={{ width: "250px" }}
          onChange={changeInputValue}
        />
        <Button type="primary" onClick={addItem}>
          ADD
        </Button>
      </div>
      <div style={{ width: "300px" }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                removeItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoListUI;
