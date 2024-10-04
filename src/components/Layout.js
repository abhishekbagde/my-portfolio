import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Head>
        {/* Add Google Fonts for Fira Code or any other font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Abhishek Bagde Portfolio</title>
      </Head>
      
      <header style={{ zIndex: 1, position: 'relative', padding: '20px', textAlign: 'center' }}>
        {/* You can add content here if needed */}
      </header>
      <main style={{ zIndex: 1, position: 'relative' }}>{children}</main>
    </div>
  );
};

export default Layout;