import React from 'react'

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    return (
        <li 
          className="todo-item"
          style={{textDecoration: completed ? 'line-through' : 'none'}}>
            <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    )
}

export default TodoItem