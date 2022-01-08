import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import About from './modules/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route index element={ <Home/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='*' element={ <NoMatch /> } />
      </Routes>
    </div>
  );
}

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App;
