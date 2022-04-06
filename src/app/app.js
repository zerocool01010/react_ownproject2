import { Routes, Route } from "react-router-dom";
import '../css/style.css';
import Home from '../pages/Home';
import Flex from '../pages/Flex';

const App = () => {

    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="flex" element={<Flex />} />
    </Routes>)
}


export default App;