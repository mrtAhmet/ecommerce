import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./subComponents/Navbar";
import { routerList } from "./shared/routerList";

function App() {
  const location = useLocation();

  const hideNavbarPaths = ["/payment"];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        {routerList.map((item) => {
          const { id, element, path } = item;
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
