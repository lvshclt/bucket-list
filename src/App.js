import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GNB from './components/GNB';
import TabBar from './components/TabBar';
import Content from './components/Content';
import AddGoals from './components/AddGoals';
import Sorry from './components/Sorry';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <div className="row">
          <GNB />
          <TabBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:aaa" element={<Content />} />
            <Route path="/add-goals" element={<AddGoals />} />
            <Route path="/sorry" element={<Sorry />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
