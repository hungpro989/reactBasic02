import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error("Title is null")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1091),
            title: this.state.title

        }
        //truyền ngược từ child tới parent để thêm Todo
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <button className="add" type="button" onClick={() => this.handleAddTodo()}>Add</button>
                </div>
            </div>
        )
    }
}
export default AddTodo