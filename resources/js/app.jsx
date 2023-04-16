import "./bootstrap";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <button>Simple Button</button>
            <Button>Bootstrap</Button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
