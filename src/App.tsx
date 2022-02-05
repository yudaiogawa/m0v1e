

import './App.css';
import { Row } from './Row';
import { requests } from './request';


function App() {
  return (
    <div className="App">
      <Row
        title="ORIGINAL"
        fetchUrl={requests.feachOriginals}
        isLargeRow
      />
    </div>
  );
}

export default App;
