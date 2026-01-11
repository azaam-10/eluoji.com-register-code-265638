
import React from 'react';
import { Home, Headphones, Layout, Calendar, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: 'Home', icon: <Home size={22} /> },
    { name: 'Service', icon: <Headphones size={22} /> },
    { name: 'Menu', icon: <Layout size={22} /> },
    { name: 'Record', icon: <Calendar size={22} /> },
    { name: 'Mine', icon: <User size={22} /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 flex justify-around items-center py-2 px-1 z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`flex flex-col items-center w-1/5 transition-colors ${
              isActive ? 'text-gray-900 font-semibold' : 'text-gray-400'
            }`}
          >
            <div className={`mb-1 transition-transform ${isActive ? 'scale-110' : 'scale-100'}`}>
              {tab.icon}
            </div>
            <span className="text-[10px]">{tab.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
