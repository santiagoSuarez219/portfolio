import { useRoutes, BrowserRouter } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import Home from "../Home";
import Menu from "../Menu";
import NotFound from "../NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/menu", element: <Menu /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Layaout>
        <AppRoutes />
      </Layaout>
    </BrowserRouter>
  );
};
export default App;
