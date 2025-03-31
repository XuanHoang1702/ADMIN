import { ChartOptions } from 'chart.js';
import React from 'react';
import Notifications from '../../components/home/Notifications';
import QuickLinks from '../../components/home/QuickLinks';
import RecentOrders from '../../components/home/RecentOrders';
import RevenueChart from '../../components/home/RevenueChart';
import StatsOverview from '../../components/home/StatsOverview';
import Tasks from '../../components/home/Tasks';
import TopProducts from '../../components/home/TopProducts';
import UserMessages from '../../components/home/UserMessages';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';

const Home: React.FC = () => {

    const stats = {
        revenue: '$12,345',
        orders: 56,
        inventory: 120,
        newCustomers: 8,
    };

    const recentOrders = [
        { id: 'ORD001', customer: 'John Doe', total: '$150', status: 'Pending' },
        { id: 'ORD002', customer: 'Jane Smith', total: '$250', status: 'Shipped' },
        { id: 'ORD003', customer: 'Bob Johnson', total: '$80', status: 'Delivered' },
        { id: 'ORD004', customer: 'Alice Brown', total: '$300', status: 'Pending' },
        { id: 'ORD005', customer: 'Charlie Davis', total: '$120', status: 'Shipped' },
        { id: 'ORD006', customer: 'Emma Wilson', total: '$200', status: 'Delivered' },
        { id: 'ORD007', customer: 'David Lee', total: '$90', status: 'Pending' },
        { id: 'ORD001', customer: 'John Doe', total: '$150', status: 'Pending' },
        { id: 'ORD002', customer: 'Jane Smith', total: '$250', status: 'Shipped' },
        { id: 'ORD003', customer: 'Bob Johnson', total: '$80', status: 'Delivered' },
        { id: 'ORD004', customer: 'Alice Brown', total: '$300', status: 'Pending' },
        { id: 'ORD005', customer: 'Charlie Davis', total: '$120', status: 'Shipped' },
        { id: 'ORD006', customer: 'Emma Wilson', total: '$200', status: 'Delivered' },
        { id: 'ORD007', customer: 'David Lee', total: '$90', status: 'Pending' },
        { id: 'ORD001', customer: 'John Doe', total: '$150', status: 'Pending' },
        { id: 'ORD002', customer: 'Jane Smith', total: '$250', status: 'Shipped' },
        { id: 'ORD003', customer: 'Bob Johnson', total: '$80', status: 'Delivered' },
        { id: 'ORD004', customer: 'Alice Brown', total: '$300', status: 'Pending' },
        { id: 'ORD005', customer: 'Charlie Davis', total: '$120', status: 'Shipped' },
        { id: 'ORD006', customer: 'Emma Wilson', total: '$200', status: 'Delivered' },
        { id: 'ORD007', customer: 'David Lee', total: '$90', status: 'Pending' },
    ];

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
        {
            label: 'Revenue',
            data: [1200, 1900, 3000, 2500, 4000, 3200, 5000],
            fill: false,
            borderColor: '#4f46e5',
        },
        ],
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        plugins: { legend: { position: 'top'} },
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6 ml-64 mt-28">
                <Header />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cột chính */}
                    <div className="lg:col-span-2">
                        <StatsOverview stats={stats} />
                        <RevenueChart chartData={chartData} chartOptions={chartOptions} />
                        <RecentOrders orders={recentOrders} />
                    </div>
                    {/* Cột phụ */}
                    <div className="lg:col-span-1">
                        <Notifications />
                        <Tasks />
                        <TopProducts />
                        <UserMessages />
                    </div>
                </div>
                <QuickLinks />
            </div>
        </div>
    );
};

export default Home;