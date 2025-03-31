// src/components/home/Notifications.tsx
import { Message } from 'primereact/message';
import React from 'react';

interface Notification {
  id: number;
  severity: 'warn' | 'info' | 'error' | 'success';
  text: string;
}

const Notifications: React.FC = () => {
  // Dữ liệu thông báo (có thể thay bằng API sau)
  const notifications: Notification[] = [
    { id: 1, severity: 'warn', text: 'Kho hàng sắp hết (dưới 10 sản phẩm)' },
    { id: 2, severity: 'info', text: 'Đơn hàng #ORD004 đã được giao' },
    { id: 3, severity: 'success', text: 'Đơn hàng #ORD005 đã hoàn tất thanh toán' }, // Thêm để thử scroll
    { id: 4, severity: 'error', text: 'Lỗi hệ thống khi xử lý đơn #ORD006' },
    { id: 5, severity: 'error', text: 'Lỗi hệ thống khi xử lý đơn #ORD006' },
    { id: 6, severity: 'error', text: 'Lỗi hệ thống khi xử lý đơn #ORD006' },
    { id: 7, severity: 'error', text: 'Lỗi hệ thống khi xử lý đơn #ORD006' },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Notifications</h2>
      <div
        className="bg-white shadow-md rounded-lg p-4"
        style={{ maxHeight: '300px', overflowY: 'auto' }} // Giới hạn chiều cao và bật scroll
      >
        {notifications.length === 0 ? (
          <p className="text-gray-600 text-center">Hiện chưa có thông báo nào.</p>
        ) : (
          notifications.map((notification) => (
            <Message
              key={notification.id}
              severity={notification.severity}
              text={notification.text}
              className="mb-2 last:mb-0 border-l-4" // Thêm border trái cho đẹp
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;