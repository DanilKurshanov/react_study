import { Routes, Route, Outlet} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
