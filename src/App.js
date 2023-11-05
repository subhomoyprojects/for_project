
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Reg from "./Pages/Reg"
// import Log from "./Pages/Log"
// import ResponsiveAppBar from "./Pages/Nav"


// function App() {
//   return (
//     <>
    
//    <Router>
//    <ResponsiveAppBar/>
// <Routes>

//   <Route path="/Reg" element={<Reg/>} />
//   <Route path="/Log" element={<Log/>}/>

  
  
// </Routes>

// </Router>
// </>
    
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Pages/Nav";
import Ffooter from "./Pages/Footer"
import { Suspense, lazy } from "react";



import { Navigate } from "react-router-dom";


const Home = lazy(() => import("../src/Pages/Home"));
const Login = lazy(() => import("../src/Pages/Log"));
const Register = lazy(() => import("../src/Pages/Reg"));
const Product = lazy(() => import("../src/Pages/Product"));
const Cc=lazy(() => import("../src/Pages/Cc"))
const Update=lazy(() => import("../src/Pages/Update"))

function App() {
  // const dispatch = useDispatch();

  function PrivateRoute({ children }) {
   // console.log(children, "children");
    const token = localStorage.getItem("token")

    return  token !== null && token !== undefined && token !== ""? (
      children
    ) : (
      <>
        <Navigate to="/log" />
        {alert("Please go for login either you can't access product list")}
      </>
    );
  }

  const PrivateRouteNames = [
    {
      path: "/Product",
      Component: <Product/>,
    },
    {
      path: "/Create",
      Component: <Cc/>,
    },
    {
      path: "/Update/:id",
      Component: <Update/>,
    },
  ];

  const PublicRouteNames = [
    {
      path: "/reg",
      Component: <Register />,
    },
    {
      path: "/log",
      Component: <Login />,
    },
    {
      path: "/",
      Component:<Home /> ,
    },
  ];

  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> */}
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Router>
          <ResponsiveAppBar />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return <Route key={index} exact path={route.path} element={route.Component} />;
            })}

            {PrivateRouteNames?.map((route, index) => {
              return <Route key={index}  exact path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />;
            })}
          </Routes>
          <Ffooter/>
          
        </Router>
      </Suspense>
    </>
  );
}

export default App;

