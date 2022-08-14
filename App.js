import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./common/Navbar/Navbar"
import Home from "./component/pages/Home"
import About from "./component/About/About"
import Gallery from "./component/gallery/Gallery"
import Accommodation from "./component/Accommodation/Home"
import SinglePage from "./SinglePage/SinglePage"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          
        <Routes>   
          <Route path='./' exact component={Home}></Route>
          <Route path='./about' exact component={About}></Route>
          <Route path='./gallery' exact component={Gallery}></Route>
          <Route path='./accommodation' exact component={Accommodation}></Route>
          <Route path='/singlepage/:id' exact component={SinglePage}></Route>
          </Routes>  
         <Home /> <About /> <Gallery /> <Accommodation />
      </Router>
      </>
  )
}

export default App
