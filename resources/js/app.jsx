import "./bootstrap";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import Header from "./components/Layout/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <button className="btn btn-danger">Simple werwer</button>
            <Button variant="info">Bootstrap</Button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
