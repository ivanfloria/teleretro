
import { DataProvider } from "./Context/DataProvider";

import './App.css';
import Home from './Home';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App;
