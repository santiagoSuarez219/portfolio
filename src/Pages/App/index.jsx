import { useRoutes, BrowserRouter } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import Home from "../Home";
import Project from "../Project";
import NotFound from "../NotFound";
import { Provider } from "../../Context";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Layaout>
          <AppRoutes />
        </Layaout>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
