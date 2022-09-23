import React from 'react';
import AddTodo from './AddTodo';
import './Todo.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    };

    addNewTodo = (Todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, Todo]
        })

        toast('Add success!');
    }

    deleteTodo = (Todo) => {
        let ListTodo = this.state.listTodos;
        ListTodo.splice(ListTodo.indexOf(Todo), 1);
        this.setState({
            listTodos: ListTodo
        })

        toast.success('Delete success!')
    }

    editOnclick = (Todo) => {
        console.log('checkEditOnclick', Todo);
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save
        if (isEmptyObj === false && Todo.id === editTodo.id) {
            let ListTodosCopy = [...this.state.listTodos]
            let findIndex = ListTodosCopy.findIndex(zTodo => zTodo.id === Todo.id);
            ListTodosCopy[findIndex].title = editTodo.title;
            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {}
            })

            toast.success('Edit success!');
        }
        else {
            this.setState({
                editTodo: Todo
            })
        }
    }

    editTodoOnChange = (event) => {
        console.log('>>editTodoOnChange', event);
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('Check empty object', isEmptyObj);
        return (
            <>
                <p>
                    Simple Todo Apps With React.js
                </p>

                <div className='list-todo-container'>
                    <AddTodo addNewTodo={this.addNewTodo} deleteTodo={this.deleteTodo} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <>
                                        <div className='todo-child' key={item.id}>

                                            {
                                                isEmptyObj === false && editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title} onChange={(event) => this.editTodoOnChange(event)}></input>
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}  </span>
                                            }

                                            {/* <input value={item.title}></input> */}
                                            <button className='edit' onClick={() => this.editOnclick(item)}>
                                                {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </button>
                                            <button className='delete'
                                                onClick={() => this.deleteTodo(item)}
                                            >Delete</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;