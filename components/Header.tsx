import React from 'react';
import { MessageSquareText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] pt-12 pb-8 px-5 text-white">
      {/* Top right icon */}
      <div className="absolute top-12 right-5">
        <MessageSquareText size={24} className="text-white opacity-90" />
      </div>

      {/* User Info Section */}
      <div className="flex items-center space-x-4 mb-8">
        {/* Profile Avatar - Precise 5-pentagon icon from image */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-white flex items-center justify-center p-1">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g transform="translate(50, 50)">
              {/* Red - Top */}
              <g transform="rotate(0) translate(0, -22)">
                <path d="M0,-14 L13,-5 L8,11 L-8,11 L-13,-5 Z" fill="#E7534D" />
              </g>
              {/* Yellow - Right/Top-Right */}
              <g transform="rotate(72) translate(0, -22)">
                <path d="M0,-14 L13,-5 L8,11 L-8,11 L-13,-5 Z" fill="#F7D047" />
              </g>
              {/* Purple - Bottom-Right */}
              <g transform="rotate(144) translate(0, -22)">
                <path d="M0,-14 L13,-5 L8,11 L-8,11 L-13,-5 Z" fill="#9063AC" />
              </g>
              {/* Blue - Bottom-Left */}
              <g transform="rotate(216) translate(0, -22)">
                <path d="M0,-14 L13,-5 L8,11 L-8,11 L-13,-5 Z" fill="#3A9CC7" />
              </g>
              {/* Green - Top-Left */}
              <g transform="rotate(288) translate(0, -22)">
                <path d="M0,-14 L13,-5 L8,11 L-8,11 L-13,-5 Z" fill="#6AB365" />
              </g>
            </g>
          </svg>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold tracking-wide">alaalsaleh94</h1>
            <div className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-[4px] font-bold italic flex items-center justify-center">
              VIP 0
            </div>
          </div>
          <p className="text-sm opacity-90 mt-1">Invitation code: 804461</p>
        </div>
      </div>

      {/* Account Balance Section */}
      <div className="flex justify-between items-end mt-4">
        <div className="flex flex-col pb-2">
          <span className="text-sm font-semibold opacity-100 mb-1">My Account</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-xs font-semibold">USDT</span>
            <span className="text-3xl font-bold">0</span>
          </div>
        </div>

        {/* Action Buttons - Pixel-perfect Icons from Screenshot */}
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm active:scale-95 transition-transform">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="12" rx="4" fill="#1F6AE1" />
                <circle cx="16" cy="12" r="2.5" fill="white" />
                <path d="M3 10H7V14H3V10Z" fill="#0B4DB8" fillOpacity="0.2" />
              </svg>
            </button>
            <span className="text-[12px] mt-2 font-medium">Deposit</span>
          </div>

          <div className="flex flex-col items-center">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm active:scale-95 transition-transform">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="12" rx="4" fill="#1F6AE1" />
                <rect x="5" y="9" width="10" height="2" rx="0.5" fill="white" />
                <rect x="15" y="13" width="4" height="2" rx="0.5" fill="white" />
              </svg>
            </button>
            <span className="text-[12px] mt-2 font-medium">Withdrawal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;