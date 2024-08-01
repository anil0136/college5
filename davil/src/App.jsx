import react from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Blog from "./Blog"
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./Nav";
const App = () => {
  
    return (
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Nav/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
    
      <Route path="*" element={<Error/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    );
};
export default App;