import { useRoutes, BrowserRouter } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import Home from "../Home";
import Project from "../Project";
import NotFound from "../NotFound";
import { Provider } from "../../Context";
import MyEducation from "../../Components/MyEducation";

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
    {
      path: "/education",
      element: <MyEducation />,
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
