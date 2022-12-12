import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Layout from './layout';
import NavbarM from './navbar/mobile/Navbar';
import NavbarC from './navbar/computer/navbar';


 
const MainLayout = () => {
  

  return (
        <Layout> 
        <main >
          {window.innerWidth >= 768 ? <NavbarC /> : <NavbarM />}
          <Footer/>
          <Outlet />
        </main>
      </Layout>
  );
}

export default MainLayout;
