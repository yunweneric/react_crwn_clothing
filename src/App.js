
import './categories.styles.scss';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component.jsx';

const Shop = () => {
  return (<h1>Shop Page</h1>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route element={<Home />} index />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;