import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dictionary from "./components/Dictionary"; 
import { Provider } from "react-redux";
import store from "./redux/store"; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <nav>
            <Link to="/">Inicio</Link> | <Link to="/diccionario">Diccionario</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Bienvenido a la App</h1>} />
            <Route path="/diccionario" element={<Dictionary />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
