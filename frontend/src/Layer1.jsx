import {Outlet} from 'react-router-dom'
import {Header,Footer} from './components/index.js'
import { HeaderProvider } from './context/HeaderContext.jsx';

function Layer1() {
  
  return (
    <HeaderProvider>
    <div className='scroll-smooth'>
        <Header />
      <div className=''>
          <Outlet />
      </div>
      <Footer />
    </div>
    </HeaderProvider>
  )
}

export default Layer1
