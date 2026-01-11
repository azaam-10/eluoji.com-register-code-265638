
import React from 'react';

const QuickActions: React.FC = () => {
  const actions = [
    { 
      label: 'Teams', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#F9A825" />
          <path d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#F9A825" />
        </svg>
      )
    },
    { 
      label: 'Record', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9Z" fill="#4DB6AC" />
        </svg>
      )
    },
    { 
      label: 'Wallet management', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#EF5350" />
          <path d="M7 13L10 10L13 13L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      label: 'Invite friends', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#42A5F5" />
        </svg>
      )
    },
  ];

  return (
    <div className="bg-white py-6 flex justify-around items-start">
      {actions.map((action, idx) => (
        <div key={idx} className="flex flex-col items-center w-1/4 group cursor-pointer">
          <div className="mb-2 group-active:scale-90 transition-transform">
            {action.icon}
          </div>
          <span className="text-[12px] text-gray-500 text-center leading-tight max-w-[70px]">
            {action.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
