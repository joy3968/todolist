import "./bootstrap";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/ToDoTemplate';
import TodoHead from './components/ToDoHead';
import TodoList from './components/ToDoList';
import TodoCreate from './components/ToDoCreate';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
