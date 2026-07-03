/**
 * src/components/layout/BottomNav.jsx - Hanyu botidagidek pastki menyu
 * 
 * Bu komponent aplikatsiyaning pastki qismida joylashgan navigatsiya menyusini taqdim etadi.
 * 6 ta asosiy bo'lim: Asosiy, Darslar, Oktagon, Takror, Ohang, Men
 * Aktiv holatni ko'rsatish va sahifalar o'rtasida o'tish imkoniyati.
 */

import WebApp from '@twa-dev/sdk';

function BottomNav({ activeTab, setActiveTab }) {
  // Telegram WebApp Haptic Feedback (vibratsiya) funksiyasi
  const handleTabChange = (tabName) => {
    if (WebApp.HapticFeedback) {
      WebApp.HapticFeedback.impactOccurred('light');
    }
    setActiveTab(tabName);
  };

  // Navigatsiya elementlari ro'yxati
  const navItems = [
    { id: 'home', label: 'Asosiy', icon: '🏠' },
    { id: 'lessons', label: 'Darslar', icon: '📚' },
    { id: 'octagon', label: 'Oktagon', icon: '🛡️' },
    { id: 'review', label: 'Takror', icon: '🔄' },
    { id: 'mood', label: 'Ohang', icon: '😊' },
    { id: 'profile', label: 'Men', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-gray-700 safe-bottom">
      <div className="flex justify-around items-center py-2 px-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 px-1 transition-all duration-200 ${
                isActive 
                  ? 'text-primary-400 scale-105' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                outline: 'none'
              }}
            >
              {/* Ikonka */}
              <span className={`text-xl mb-1 ${isActive ? 'drop-shadow-lg' : ''}`}>
                {item.icon}
              </span>
              
              {/* Label (yozuv) */}
              <span className={`text-xs font-medium ${
                isActive ? 'font-semibold' : ''
              }`}>
                {item.label}
              </span>
              
              {/* Aktiv indikator (nuqta) */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-primary-400 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
