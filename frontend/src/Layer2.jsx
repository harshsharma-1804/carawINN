// App.js or your main routing file
import { Outlet } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';


function Layer2() {
  return (
      <Outlet />
  );
}

export default Layer2;
