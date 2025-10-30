// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import { CartProvider } from './context/CartContext';
// // User Pages
// import Home from './pages/user/Home';
// import Boxes from './pages/user/boxes';
// import Policy from './pages/user/policy';
// import Delivery from './pages/user/delivery';
// import About from './pages/user/about';
// import ContactPage from './pages/user/Contactus';

// // Admin Pages
// import AdminLogin from './pages/admin/AdminLogin';
// import AdminLayout from './pages/admin/AdminLayout';
// import AdminBoxes from './pages/admin/AdminBoxes';
// import Dashboard from './pages/admin/Dashboard';
// import AdminMessagesPage from './pages/admin/AdminMessage';
// import Occasion from './pages/user/occasions';
// import AdminOccasionProducts from './pages/admin/AdminOccasionProducts';
// import ProductDetail from './pages/user/productdetail';
// import Keychains from './pages/user/Keychains';
// import AdminKeychains from './pages/admin/AdminKeychains';
// import AdminBouquetPage from './pages/admin/AdminBouquet';
// import Bouquets from './pages/user/Bouquets';

// function App() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <Router>
//        <CartProvider>
//       <Routes>
//         {/* ✅ Admin routes should be FIRST */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/*" element={<AdminLayout />}>
//           <Route path="boxes" element={<AdminBoxes />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="messages" element={<AdminMessagesPage />} />
//           <Route path="occasion" element={<AdminOccasionProducts />} />
//           <Route path="keychain" element={<AdminKeychains/>} />
//           <Route path="bouquet" element={<AdminBouquetPage/>} />

//         </Route>

//         {/* User routes */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <Header />
//               <div className="pt-20">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/boxes" element={<Boxes />} />
//                   <Route path="/contact" element={<ContactPage />} />
//                   <Route path="/policy" element={<Policy />} />
//                   <Route path="/delivery" element={<Delivery />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/occasions" element={<Occasion/>} />
//                   <Route path="/keychain" element={<Keychains/>} />
//                   <Route path="/bouquets" element={<Bouquets/>} />
//                   <Route path="/occasions/:id" element={<ProductDetail type="occasion" />} />
// <Route path="/bouquets/:id" element={<ProductDetail type="bouquet" />} />


//                 </Routes>
//               </div>
//               <Footer />

              
//                 {/* ✅ Global Drawer & Checkout Modal */}
//                 <CartDrawer
//                   open={drawerOpen}
//                   onClose={() => setDrawerOpen(false)}
//                   onCheckout={() => {
//                     setDrawerOpen(false);
//                     setCheckoutOpen(true);
//                   }}
//                 />
//                 {checkoutOpen && (
//                   <CheckoutModal onClose={() => setCheckoutOpen(false)} />
//                 )}
//             </>
//           }
//         />
//       </Routes>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;




import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop"; 

import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// User Pages
import Home from './pages/user/Home';
import Boxes from './pages/user/boxes';
import Policy from './pages/user/policy';
import Delivery from './pages/user/delivery';
import About from './pages/user/about';
import ContactPage from './pages/user/Contactus';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminBoxes from './pages/admin/AdminBoxes';
import Dashboard from './pages/admin/Dashboard';
import AdminMessagesPage from './pages/admin/AdminMessage';
import Occasion from './pages/user/occasions';
import AdminOccasionProducts from './pages/admin/AdminOccasionProducts';
import ProductDetail from './pages/user/productdetail';
import Keychains from './pages/user/Keychains';
import AdminKeychains from './pages/admin/AdminKeychains';
import AdminBouquetPage from './pages/admin/AdminBouquet';
import Bouquets from './pages/user/Bouquets';
import MyOrders from './pages/user/Orders';
import AdminOrders from './pages/admin/AdminOrder';
import CustomOrder from './pages/user/CustomOrder';
import CustomOrdersAdmin from './pages/admin/CustomOrdersAdmin';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          {/* ✅ Admin routes should be FIRST */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="boxes" element={<AdminBoxes />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="messages" element={<AdminMessagesPage />} />
            <Route path="occasion" element={<AdminOccasionProducts />} />
            <Route path="keychain" element={<AdminKeychains />} />
            <Route path="bouquet" element={<AdminBouquetPage />} />
            <Route path="orders" element={<AdminOrders/>} />
          <Route path="custom-orders" element={<CustomOrdersAdmin/>} />

          </Route>

          {/* User routes */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <div className="pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/boxes" element={<Boxes />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/occasions" element={<Occasion />} />
                    <Route path="/keychain" element={<Keychains />} />
                    <Route path="/bouquets" element={<Bouquets />} />
                    <Route path="/orders" element={<MyOrders/>} />
                    <Route path="/custom-orders" element={<CustomOrder/>} />
                    <Route
                      path="/occasions/:id"
                      element={<ProductDetail type="occasion" />}
                    />
                    <Route
                      path="/bouquets/:id"
                      element={<ProductDetail type="bouquet" />}
                    />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
