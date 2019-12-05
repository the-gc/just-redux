import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodos = (props) => {
    const [inputValue, setInputValue] = useState('');
    const {onAdd} = props;
    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        // 如果是空字符串
        if (!inputValue.trim()) {
            return;
        }
        onAdd(inputValue);
        setInputValue('');
    }
    return (
        <div className="add-todo">
            <form onSubmit={handleOnSubmit}>
                <input className="new-todo" 
                  value={inputValue} 
                  onChange={(event) => {
                      setInputValue(event.target.value)
                   }}/>
                <button className="add-btn" type="submit">
                    添加
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddTodos);