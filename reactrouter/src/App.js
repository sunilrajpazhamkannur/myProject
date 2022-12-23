import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import Todo from "./Components/TodoApp/Todo";
import {Routes, Route} from "react-router-dom"; 
import { Navbar } from "./Components/Navbar";
import OrderSummery from "./Components/Pages/OrderSummery";
import PageNotFound from "./Components/Pages/PageNotFound";
import Products from "./Components/Products";
import FeaturedProduct from "./Components/FeaturedProduct";
import NewProduct from "./Components/NewProduct";
import UserPage from "./Components/Users/UserPage";
import UserDetails from "./Components/Users/UserDetails";
import Admin from "./Components/Users/Admin";

function App(){

  return (
   <>
    <Navbar/>
      <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/order-summery" element={<OrderSummery/>}></Route>
      <Route path="/products" element={<Products/>}>
        <Route path="feature" element={<FeaturedProduct/>}/>
        <Route path="new" element={<NewProduct/>}/>
      </Route>
      <Route path="users" element={<UserPage/>}>
        <Route path="users/:userId" element={<UserDetails/>}/>
        <Route path="users/admin" element={<Admin/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}></Route>
        
     </Routes>
  </>
  );
};

export default App


