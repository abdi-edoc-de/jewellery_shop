import Card from "./Component/card/card";
// import Nav from "./Component/nav";
import Login from "./Component/login/login";
import SearchBar from "./Component/searchBar/searchBar";
// import AddProduct from "./Component/AddProduct/addProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from './pages/Drawer'
import './App.css'
import LogInu from "./Component/login/loginU"
import {useSelector} from 'react-redux';
import {getUser} from './store/user'
function App() {
  let user = useSelector((state)=>getUser(state));

  return (

    <Router>
      
      {user.value?<Drawer/>:<LogInu/>}
    </Router>
  );
}

export default App;
