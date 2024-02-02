import { useRoutes, BrowserRouter } from "react-router-dom";
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
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
};
export default App;
