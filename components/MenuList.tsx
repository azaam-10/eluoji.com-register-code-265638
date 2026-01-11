
import React from 'react';
import { ChevronRight } from 'lucide-react';

const MenuList: React.FC = () => {
  const items = [
    { 
      label: 'Profile', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="7" height="7" rx="1" fill="#9E9E9E" />
          <rect x="13" y="4" width="7" height="7" rx="1" fill="#9E9E9E" />
          <rect x="4" y="13" width="7" height="7" rx="1" fill="#9E9E9E" />
          <rect x="13" y="13" width="7" height="7" rx="1" fill="#9E9E9E" />
        </svg>
      ) 
    },
    { 
      label: 'Deposit records', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H16.82C16.4 1.84 15.3 1 14 1H10C8.7 1 7.6 1.84 7.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z" fill="#9E9E9E" />
        </svg>
      ) 
    },
    { 
      label: 'Withdrawal records', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="#9E9E9E" strokeWidth="2"/>
          <path d="M3 10H21" stroke="#9E9E9E" strokeWidth="2"/>
          <path d="M16 14L19 14" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) 
    },
    { 
      label: 'Setting', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19.14 12.94C19.17 12.63 19.19 12.32 19.19 12C19.19 11.68 19.17 11.37 19.14 11.06L21.35 9.33C21.55 9.17 21.6 8.9 21.48 8.68L19.38 5.04C19.26 4.82 18.99 4.73 18.77 4.82L16.16 5.87C15.62 5.45 15.02 5.1 14.38 4.83L13.98 2.05C13.94 1.81 13.73 1.63 13.48 1.63H9.28C9.03 1.63 8.82 1.81 8.78 2.05L8.38 4.83C7.74 5.1 7.14 5.45 6.6 5.87L3.99 4.82C3.77 4.73 3.5 4.82 3.38 5.04L1.28 8.68C1.16 8.9 1.21 9.17 1.41 9.33L3.62 11.06C3.59 11.37 3.57 11.68 3.57 12C3.57 12.32 3.59 12.63 3.62 12.94L1.41 14.67C1.21 14.83 1.16 15.1 1.28 15.32L3.38 18.96C3.5 19.18 3.77 19.27 3.99 19.18L6.6 18.13C7.14 18.55 7.74 18.9 8.38 19.17L8.78 21.95C8.82 22.19 9.03 22.37 9.28 22.37H13.48C13.73 22.37 13.94 22.19 13.98 21.95L14.38 19.17C15.02 18.9 15.62 18.55 16.16 18.13L18.77 19.18C18.99 19.27 19.26 19.18 19.38 18.96L21.48 15.32C21.6 15.1 21.55 14.83 21.35 14.67L19.14 12.94ZM11.38 15.5C9.45 15.5 7.88 13.93 7.88 12C7.88 10.07 9.45 8.5 11.38 8.5C13.31 8.5 14.88 10.07 14.88 12C14.88 13.93 13.31 15.5 11.38 15.5Z" fill="#9E9E9E" />
        </svg>
      ) 
    },
  ];

  return (
    <div className="bg-white rounded-[8px] overflow-hidden shadow-sm">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex items-center justify-between px-4 py-[14px] cursor-pointer active:bg-gray-50 transition-colors ${idx !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-6 h-6">
              {item.icon}
            </div>
            <span className="text-gray-700 text-[14px] font-medium">{item.label}</span>
          </div>
          <ChevronRight size={18} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
