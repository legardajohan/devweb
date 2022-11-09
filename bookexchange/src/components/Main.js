import { Routes, Route } from 'react-router-dom';

import CreateBooks from './book/CreateBooks';
import EditBooks from './book/EditBooks';
import ListBooks from './book/ListBooks';

import Home from './presentation/Home';
import Conocenos from './presentation/Conocenos';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createBook" element={<CreateBooks />}></Route>
            <Route path="/editBook" element={<EditBooks />}></Route>
            <Route path="/listBook" element={<ListBooks />}></Route>
            <Route path="/conocenos" element={<Conocenos />}></Route>
        </Routes>
    );
}

export default Main;
