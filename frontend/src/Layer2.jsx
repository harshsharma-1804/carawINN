// App.js or your main routing file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn, Auth} from './components/index.js';


function Layer2() {
  return (
      <Routes>
        <Route path="signin" element={<SignIn />}>
          <Route path="authenticate" element={<Auth />} />
        </Route>
        {/* Other routes */}
      </Routes>
  );
}

export default Layer2;
