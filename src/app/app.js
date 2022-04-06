import { Routes, Route } from "react-router-dom";
import Grid from '../pages/Grid';
import Flex from '../pages/Flex';
import Home from '../pages/Home';

const App = () => {

    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/flex" element={<Flex />} />
    </Routes>)
}


export default App;