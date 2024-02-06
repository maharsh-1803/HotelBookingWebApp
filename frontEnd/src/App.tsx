import { BrowserRouter as Router , Routes ,Route, Navigate} from 'react-router-dom';
import Layouts from './layouts/Layouts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts><p>Home Page</p></Layouts>}></Route>
          <Route path='/search' element={<Layouts><p>Search Page</p></Layouts>}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App