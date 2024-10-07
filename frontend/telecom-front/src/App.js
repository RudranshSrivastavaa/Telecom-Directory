import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Components/Content';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import DeleteUser from './Components/DeleteUser';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/users/:letter" element={<UserList />} />
                <Route path="/add" element={<Add />}/>
                <Route path="/del" element={<DeleteUser />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
