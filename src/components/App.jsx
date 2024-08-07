import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "../scss/App.scss";
import callToApi from "../services/api";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <h1> Hola mundo</h1>
      {/* <pre>{data}</pre> */}

      <Routes>
        <Route path="/" element={<h1>Gato</h1>} />
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">ir al inicio</Link>
          </li>
          <li>
            <a href="/#/contacto">Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
