import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './store/Home';
import Collections from './store/Collections';
import ProductListing from './store/ProductListing';
import ProductDetails from './store/ProductDetails';
import Cart from './store/Cart';
import Checkout from './store/Checkout';
import About from './store/About';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import Products from './admin/Products';
import Orders from './admin/Orders';
import Customers from './admin/Customers';
import Categories from './admin/Categories';

// Layout wrapper to conditionaly show Navbar and Footer
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const isAuth = pathname.startsWith('/auth');
  
  return (
    <div className="bg-surface min-h-screen text-primary transition-colors duration-500">
      {!isAdmin && <Navbar />}
      <main>
        {children}
      </main>
      {!isAdmin && !isAuth && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Storefront */}
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/all" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />

          {/* Authentication */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />

          {/* Admin Dashboard (Nested) */}
          <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/products" element={<AdminLayout><Products /></AdminLayout>} />
          <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
          <Route path="/admin/customers" element={<AdminLayout><Customers /></AdminLayout>} />
          <Route path="/admin/categories" element={<AdminLayout><Categories /></AdminLayout>} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
