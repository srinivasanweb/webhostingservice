import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gototop from './Components/Gototop';
import Loaderfile from './Components/Loader';
import Contact from './Components/Contact';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Blogdetails from './Components/Blogdetails';


function App() {
  return (
    <HashRouter basename='/'>
    <Fragment>
    <Loaderfile/>
    <Header/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/services" component={Services}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/blogdetails" component={Blogdetails} />
    <Route exact path="/contact" component={Contact}/>
    <Footer/>
    <Gototop/>
    </Fragment>
    </HashRouter>
  );
}

export default App;
