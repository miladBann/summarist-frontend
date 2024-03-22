
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ForYou from "./pages/ForYou";
import Book from "./pages/Book";
import MyLibrary from "./pages/MyLibrary";
import Player from "./pages/Player";
import GetPlan from "./pages/GetPlan";
import Settings from "./pages/Settings";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancle from "./pages/PaymentCancled";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/for-you" Component={ForYou}/>
        <Route path="/book/:id" Component={Book}/>
        <Route path="/my-library" Component={MyLibrary}/>
        <Route path="/player/:id" Component={Player} />
        <Route path="/get-plan" Component={GetPlan} />
        <Route path="/settings" Component={Settings}/>
        <Route path="/success" Component={PaymentSuccess}/>
        <Route path="cancel" Component={PaymentCancle}/>
      </Routes> 
    </Router>  
  );
}

export default App;
