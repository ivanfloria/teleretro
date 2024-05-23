
import { DataProvider } from "./Context/DataProvider";

import Home from './Home';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App;
