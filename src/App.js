import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserControler from './components/UserController';
import LiquorSection from './components/LiquorSection';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Hii !! </h1>   
      <UserControler/>
      <LiquorSection/>
      </div>
    </Provider>
  );
}

export default App;
