import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';
import Login from './Login';
import LayoutAdmin from './admindashboard/LayoutAdmin';
import AdminHome from './admindashboard/AdminHome';
import AdminViewFeed from './admindashboard/AdminViewFeed';
import Logout from './admindashboard/Logout';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home/>} />
           <Route path='about' element={<About />} />
           <Route path='services' element={<Services />} />
           <Route path='gallery' element={<Gallery />} />
           <Route path='contact' element={<Contact />} />
       </Route>
       <Route path="login" element={<Login />} />
       <Route path="/admin" element={<LayoutAdmin />}>
           <Route index element={<AdminHome/>} />
           <Route path='viewfeed' element={<AdminViewFeed />} />
           <Route path='logout' element={<Logout />} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
