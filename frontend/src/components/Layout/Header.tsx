import React from 'react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="px-8 py-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h2>
      </div>
    </header>
  );
}