import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import Navbar from './components/shared/navbar/Navbar';
import SalesPage from './pages/sales/SalesPage';
import SalesInvoice from './components/sales/SalesInvoice';

function App() {
    const location = useLocation();

    const hideVerticalMenu = location.pathname === '/login';

    return (
        <div className="flex h-dvh">
            {!hideVerticalMenu && (
                <div className="w-full max-w-sm">
                    <Navbar />
                </div>
            )}

            <div className={`flex-1 p-6 ${hideVerticalMenu && 'w-full'}`}>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/sales" element={<SalesPage />} />
                    <Route
                        path="/sales-invoice/:invoiceNo"
                        element={<SalesInvoice />}
                    />
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
