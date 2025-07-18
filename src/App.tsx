import React, { useState } from 'react';
import { ThemeProvider, UserProvider, ProductsProvider } from './components/ThemeContext';
import { CartLikeProvider } from './components/CartLikeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import DiscountNewsletter from './components/DiscountNewsletter';
import Footer from './components/Footer';
import BedsPage from './components/pages/BedsPage';
import StationaryPage from './components/pages/StationaryPage';
import BathwarePage from './components/pages/BathwarePage';
import DormPage from './components/pages/DormPage';
import NewCollectionsPage from './components/pages/NewCollectionsPage';
import Dashboard from './components/pages/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'beds':
        return <BedsPage />;
      case 'stationary':
        return <StationaryPage />;
      case 'bathware':
        return <BathwarePage />;
      case 'dorm':
        return <DormPage />;
      case 'new-collections':
        return <NewCollectionsPage />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return (
          <>
            <Hero />
            <ProductGrid />
            <DiscountNewsletter />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <UserProvider>
        <ProductsProvider>
          <CartLikeProvider>
            <div className="min-h-screen">
              <Navigation onPageChange={handlePageChange} />
              <div className={currentPage === 'dashboard' ? 'pt-24' : 'pt-16'}>
                {renderPage()}
                <Footer />
              </div>
            </div>
          </CartLikeProvider>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;