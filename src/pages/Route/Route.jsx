import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Skill from "../Skill";


const myFirstProject= createBrowserRouter([
    
    {
      path:"/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/contact",
          element:<Contact></Contact>,
        },
        {
          path:"/skills",
          element:<Skill></Skill>,
        },
        {
          path:"/about",
          element:<About></About>
        }
    
        
      ]
    }
    ])
    
    export default myFirstProject;