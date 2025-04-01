import React from 'react';
import Header from './Header';
import QuickLinks from './QuickLinks';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 ml-64 mt-28">
            <Header />
            <div className="mt-6">{children}</div>
            <QuickLinks />
        </div>
        </div>
    );
};

export default MainLayout;