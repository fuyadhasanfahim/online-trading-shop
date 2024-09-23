import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import Navbar from './components/shared/navbar/Navbar';

function App() {
    const location = useLocation();

    const hideVerticalMenu = location.pathname === '/login';

    return (
        <div className="flex h-screen">
            {!hideVerticalMenu && (
                <div className="bg-gray-800 text-white w-full max-w-sm">
                    <Navbar />
                </div>
            )}

            <div className={`flex-1 p-6 ${hideVerticalMenu && 'w-full'}`}>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
