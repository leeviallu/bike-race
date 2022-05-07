import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Setup from "./routes/setup/setup.component";
import SpectatorView from "./routes/spectator-view/spectator-view.component";
import StaffView from './routes/staff-view/staff-view.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Setup />}/>
        <Route path='spectator-view' element={<SpectatorView />}/>
        <Route path='staff-view' element={<StaffView />}/>
      </Route>
    </Routes>
  )
}

export default App;
