import React from 'react';
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions'
import { todoReducer } from '../reducers';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
      }
    state = {
        todo: ''
    }

    handleChanges = e => {
        this.setState({
            todo: e.target.value
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
    }

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index)
    }

  
      render() {
        return (
            <>
            <div className='todo-list'>
                {this.props.todos.map((todo, index) => (
                    <h3 onClick={e => this.toggleTodo(e, index)} key={index}>
                        {todo.task}
                        {todo.completed &&  <i className="fas fa-dragon" />}
                    </h3>
                ))}

            </div>

            <form>
                <input
                type='text'
                value={this.state.todo}
                onChange={this.handleChanges}
                placeholder='Add Todo'
                />
                <button onClick={this.handleClick}>Add Todo</button>
            </form>
            </>

        );
    }
};

const mapStateToProps = state => {
    return {
    todos: state.todos
    }
}


export default connect(
    mapStateToProps,
    { addTodo, toggleTodo }
)(TodoForm)






// import React from 'react'

// class TodoList extends React.Component {

//     state = {
//         newTodo: ''
//     }

//     handleChanges = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     updateTodo = e => {
//         e.preventDefault();
//         this.props.addTodo(this.state.newTodo)
//         this.setState({ newTodo: ''})
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.updateTodo}>
//                     <input
//                     type='text'
//                     value={this.state.newTodo}
//                     name='todo'
//                     onChange={this.handleChanges}>
                    
//                     </input>
//                     <button>Add Todo</button>
//                 </form>
//             </div>
//         )
//     }

// }

// const mapStateToProps = state => {
//     return {
//         todoOnProps: state.todo
//     }
// }



// export default TodoList