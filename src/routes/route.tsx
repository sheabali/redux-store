
import App from "@/App";
import Login from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
{  
  path: '',
  element: <App/>
},
{  
  path: '/login',
  element: <Login/>
}
])

export default routes