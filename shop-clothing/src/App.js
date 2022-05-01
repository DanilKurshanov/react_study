import { Routes, Route, Outlet} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";
import Authenticating from "./routes/authenticating/authenticating.component";
import Shop from "./routes/shop/shop.component";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path={'shop'} element={<Shop />} />
                <Route path={'auth'} element={<Authenticating />} />
            </Route>
        </Routes>
    );
};

export default App;
