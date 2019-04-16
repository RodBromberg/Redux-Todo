import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from './reducers'
import TodoForm from './components/TodoForm';

// const rootReducer = () => {
//     return {
//         todo: 'jim'
//     }
// }

const store = createStore(todoReducer)

function App() {
    return (
        <div>
            <TodoForm />
        </div>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
