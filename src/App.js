import './App.css';
import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import AllBlogs from './components/AllBlogs';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';


//function that has a scroll to top button appear upon scrolling down on pages which, when clicked, will take you to top of page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {


  return (
    
    <main className="App">
      <div className='content-wrap'>
        <header>
          <Navigation/>
        </header>
    
  
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact} />

        <Route path="/:index" component={AllBlogs}/>


        <Route component={ErrorPage} />
      </Switch>
     </div>
      <footer className="footer">
      <Footer />
     </footer>
    </main>
    
   
  );
}

export default App;
