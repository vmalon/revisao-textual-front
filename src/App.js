import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Provider } from "react-redux";
import store from "./store";
import ServicoRevisao from './components/ServicoRevisao';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header></Header>
        <ServicoRevisao />
      </div>
    </Provider>

  );
}

export default App;
