import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Provider } from "react-redux";
import store from "./store";
import ServicoRevisao from './components/ServicoRevisao';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <h4 style={{textAlign: 'center'}}>Confira os Serviços de Revisão disponíveis</h4>
        <ServicoRevisao />
      </div>
    </Provider>

  );
}

export default App;
