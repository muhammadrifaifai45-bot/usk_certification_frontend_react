import React from 'react';

export default function AlertMessage({ message, type = 'error' }) {
    if (!message) return null; 

    const isError = type === 'error';
    const bgClass = isError ? 'bg-red-50 text-red-600 border-red-200' : 'bg-green-50 text-green-600 border-green-200';

    return (
        <div className={`p-4 rounded-xl border text-xs font-medium animate-pulse ${bgClass}`}>
            {message}
        </div>
    );
}
