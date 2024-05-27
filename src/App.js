import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/books" render={() => <Books books={books} />}></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
