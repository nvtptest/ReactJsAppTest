import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    addOnClick = () => {
        if (!this.state.title) {
            toast.error('Vui lòng nhập liệu Todo');
            return;
        }


        this.props.addNewTodo({ id: Math.floor(Math.floor(Math.random() * 10000)), title: this.state.title });
        this.setState({
            title: ''
        })
    }

    textOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return (
            <div className='add-todo'>
                <input type="text" value={this.state.title} onChange={(event) => this.textOnChange(event)} />
                <button type="button" className='add' onClick={() => this.addOnClick()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;