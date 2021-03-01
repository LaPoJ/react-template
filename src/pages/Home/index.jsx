import React, { Component } from "react"
import { Button, Table, Input } from "antd"
import { Link } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import store from "@/store/index"

import {
  addTodoAction,
  deleteTodoAction,
  getTodoAction,
} from "@store/modules/TodoList/creators"
export default class Home extends Component {
  state = {
    tableColumns: [
      {
        title: "id",
        dataIndex: "id",
        key: "1",
        width: 100,
        align: "center",
      },
      {
        title: "val",
        dataIndex: "val",
        key: "2",
      },
      {
        title: "编辑",
        align: "center",
        key: "operation",
        render: (item) => (
          <Button type="primary" danger onClick={() => this.deleteTodo(item.key)}>
            删除
          </Button>
        ),
      },
    ],
  }

  constructor(props) {
    super(props)
    console.log(store.getState());
		this.state = {
			...this.state,
			...store.getState()
		}
    this.stateChange = this.stateChange.bind(this)
    this.addTodoList = this.addTodoList.bind(this)
    store.subscribe(this.stateChange)
  }

  stateChange() {
    this.setState({
      ...store.getState()
    })
	}

  componentDidMount() {
    const action = getTodoAction()
    store.dispatch(action)
  }

  addTodoList(val) {
    // const data = {
    //   id: this.state.todoList.length + 1,
    //   val: val,
    //   key: this.state.todoList.length
    // }
    const action = addTodoAction(val)
    store.dispatch(action)
  }

	deleteTodo(index) {
		console.log(index);
    const action = deleteTodoAction(index)
		store.dispatch(action)
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <Input.Search
            className="todolistAdd"
            bordered
            placeholder="add todo list value"
            maxLength="800"
            enterButton="增加"
            onSearch={this.addTodoList}
          />
        </div>
        <Table
          className="todolist"
					columns={this.state.tableColumns}
          dataSource={this.state.todoList}
          pagination={ {hideOnSinglePage: true}  }
					bordered
				/>
        <h2>This is the page for show home.</h2>
        <ul>
          <li>
            <Link to="/home/test01">test01</Link>
          </li>
          <li>
            <Link to="/home/test02">test02</Link>
          </li>
        </ul>
        {renderRoutes(this.props.route.routes)}
      </React.Fragment>
    )
  }
}
