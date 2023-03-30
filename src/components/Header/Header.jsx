import React from 'react';

const Header = () => {
    return (
        <>
            <header className="p-5 bg-orange-400 flex items-center justify-between text-white">
                <h1 className="text-3xl font-bold">
                    fab MealCafe
                </h1>
                <nav>
                    <ul className="flex space-x-5 text-xs font-bold">
                        <li className="cursor-pointer hover:border-b hover:border-white">Home</li>
                        <li className="cursor-pointer hover:border-b hover:border-white">About</li>
                        <li className="cursor-pointer hover:border-b hover:border-white">+menu</li>
                        <li className="cursor-pointer hover:border-b hover:border-white">contact</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
