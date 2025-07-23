import { useState } from 'react';

function Nav() {
    return (
        <>
            <nav className="bg-[#0C0F1B] w-full h-[13%] border-b-2 border-[#1F2331] flex justify-between items-center px-4">
                <h1 className="text-white text-4xl font-semibold" style={{ fontFamily: 'Rubik' }}>
                    ChemTable
                </h1>

                <input
                    type="text"
                    placeholder="What element u wanna know ?! "
                    className="w-[25%] h-[60%] px-4 py-2 bg-[#1F2331] border border-sky-400 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-gray-400"
                />
            </nav>

        </>
    )
} export default Nav