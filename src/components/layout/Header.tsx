import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/Logo.png';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
            <div className="flex items-center h-16 px-6">
                {/* Logo ở bên trái ngoài cùng */}
                <img
                    src={logo}
                    alt="Logo"
                    className="w-20 h-20 border-gray-300 mr-4" // mr-4 để tạo khoảng cách với nội dung bên phải
                />
                {/* Nội dung còn lại */}
                <div className="flex items-center justify-between flex-1 ml-64"> {/* flex-1 để chiếm hết không gian còn lại */}
                    <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Xin chào, Admin</span>
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;