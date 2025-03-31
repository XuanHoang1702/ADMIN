import { useMountEffect } from 'primereact/hooks';
import { Toast } from 'primereact/toast';
import React, { FormEvent, useRef } from 'react';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const toast = useRef<Toast>(null);

    useMountEffect(() => {
        if (toast.current) {
        toast.current.show({ severity: 'info', detail: 'Login page loaded', sticky: true });
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === 'admin' && password === '12345') {
        onLogin();
        if (toast.current) {
            toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful',
            life: 3000,
            });
        }
        } else {
        if (toast.current) {
            toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Invalid credentials',
            life: 3000,
            });
        }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Toast ref={toast} />
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
                </label>
                <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
};

export default Login;