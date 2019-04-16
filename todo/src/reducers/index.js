import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState = {
    todos: [{ todo: 'shop' }]
}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = {
                task: action.payload,
                completed: false
            };

            return {
                ...state,
                todos: [...state.todos, todo]
            };

        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index ? {...todo, completed: !todo.completed } : todo
                )
            }

        default:
            return state;

    }
}

export default todoReducer