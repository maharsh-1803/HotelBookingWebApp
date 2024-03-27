import { BrowserRouter as Router , Routes ,Route, Navigate} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import AddHotel from './pages/AddHotel';
// import { useAppContext } from './contexts/AppContext';

const App = () => {
  // const {isLoggedIn} = useAppContext();
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts><p>Home Page</p></Layouts>}></Route>
          <Route path='/search' element={<Layouts><p>Search Page</p></Layouts>}></Route>
          <Route path='/register' element={<Layouts><Register/></Layouts>}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
          <Route path='/sign-in' element={<Layouts><SignIn/></Layouts>}/>
          {/* {isLoggedIn && <> */}
            <Route path="/add-hotel" element={<Layouts><AddHotel/></Layouts>}/>
          {/* </>} */}
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App