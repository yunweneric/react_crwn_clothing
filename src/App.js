
import './categories.styles.scss';
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';

const Shop = () => {
  return (<h1>Shop Page</h1>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route element={<Home />} index />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;