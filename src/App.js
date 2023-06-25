import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserControler from './components/UserController';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Hii !! </h1>   
      <UserControler/>
      </div>
    </Provider>
  );
}

export default App;
