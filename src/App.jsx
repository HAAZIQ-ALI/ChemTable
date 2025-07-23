import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Nav from "./components/Nav.jsx"
import Elements from "./components/Elements.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <main className="bg-gradient-to-b from-[#0D101D] to-[#0B101C] h-screen w-screen border-black border-2 overflow-hidden flex flex-col ">
      <Nav />
      <div className="w-full flex-1 overflow-y-auto overflow-x-hidden">
        <Elements />
      </div>
      <Footer />
    </main>
  );
}

export default App;
