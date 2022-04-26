import { Routes, Route, Outlet} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path={'sign-in'} element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default App;
