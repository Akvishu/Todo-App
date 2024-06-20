import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import LogIn from './pages/LogIn';
import TodoList from './pages/TodoList';
import './App.css';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route index element={<TodoList/>}/>
  <Route path="login" element={<LogIn/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="todo" element={<TodoList/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
