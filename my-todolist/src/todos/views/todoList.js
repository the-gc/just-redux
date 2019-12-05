import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem'
import {filterTypes} from '../../constants'
import { toggleTodo, removeTodo } from '../actions'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => {
                    return (
                        <TodoItem
                          key={item.id}
                          text={item.text}
                          completed={item.completed}
                          onToggle={() => onToggleTodo(item.id)}
                          onRemove={() => onRemoveTodo(item.id)}
                        />
                    )
                })
            }
        </ul>
    )
}
const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filterTypes.ALL:
            return todos
        case filterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case filterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupport filter')
                
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        onToggleTodo: (id) => {
            dispacth(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispacth(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);