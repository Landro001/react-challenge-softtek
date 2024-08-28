import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
              <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
                <div className='absolute inset-0 backdrop-blur-sm' />
              </div>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Navigate to="/dashboard" replace />} />
                <Route path='/dashboard' element={<OverviewPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/sales' element={<SalesPage />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/analytics' element={<AnalyticsPage />} />
                <Route path='/settings' element={<SettingsPage />} />
              </Routes>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;