import React, { Component } from "react"
import { Button, Table } from "antd"
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
		this.state = {
			...this.state,
			...store.getState()
		}
		this.stateChange = this.stateChange.bind(this)
		store.subscribe(this.stateChange)
  }

	stateChange() {
		this.setState(store.getState())
	}

  componentDidMount() {
    const action = getTodoAction()
    store.dispatch(action)
  }

  addTodoList(data) {
    const action = addTodoAction(data)
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
				<Table
					columns={this.state.tableColumns}
					dataSource={this.state.todoList.list}
					bordered
					sticky
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
