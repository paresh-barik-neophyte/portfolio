import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;