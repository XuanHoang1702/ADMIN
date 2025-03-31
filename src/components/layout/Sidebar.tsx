// src/components/layout/Sidebar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Trạng thái mở/rút gọn Sidebar

  // Danh sách menu (có thể mở rộng)
    const menuItems = [
        { path: '/home', label: 'Dashboard', icon: '🏠' },
        { path: '/products', label: 'Products', icon: '🛍️' },
        { path: '/orders', label: 'Orders', icon: '📦' },
        { path: '/customers', label: 'Customers', icon: '👥' },
        { path: '/settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
            isOpen ? 'w-64' : 'w-16'
        }`}
        >
        {/* Header của Sidebar */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
            <h2 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Fashion Admin</h2>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none hover:text-gray-300"
            >
            {isOpen ? '✕' : '☰'}
            </button>
        </div>

        {/* Menu */}
        <nav className="mt-4">
            {menuItems.map((item) => (
            <Link
                key={item.path}
                to={item.path}
                className="flex items-center py-3 px-4 hover:bg-gray-700 transition-colors"
            >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className={`${isOpen ? 'inline' : 'hidden'}`}>{item.label}</span>
            </Link>
            ))}
        </nav>
        </div>
    );
};

export default Sidebar;