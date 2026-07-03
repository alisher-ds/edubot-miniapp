/**
 * BottomNav komponenti - Telegram Mini App uchun pastki navigatsiya menyusi
 * Hanyu botidagidek 6 ta elementdan iborat:
 * - Asosiy (Home)
 * - Darslar (Lessons)
 * - Oktagon (Octagon)
 * - Takror (Review)
 * - Ohang (Mood)
 * - Men (Profile)
 */

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Asosiy' },
    { id: 'lessons', icon: '📚', label: 'Darslar' },
    { id: 'octagon', icon: '🛡️', label: 'Oktagon' },
    { id: 'review', icon: '🔄', label: 'Takror' },
    { id: 'mood', icon: '😊', label: 'Ohang' },
    { id: 'profile', icon: '👤', label: 'Men' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-primary-600 bg-primary-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
