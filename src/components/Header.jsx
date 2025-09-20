import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-400 tracking-wider">
          Monastery360
        </h1>
        <p className="text-gray-400 text-sm">Digital Heritage Explorer</p>
      </div>
    </header>
  );
}

export default Header;

