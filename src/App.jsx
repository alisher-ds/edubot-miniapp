import { useState } from 'react'
import BottomNav from './components/layout/BottomNav'

// Asosiy sahifa komponenti - Premium Dark Mode
function Home() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold gradient-text mb-2">Smart Tutor</h1>
        <p className="text-gray-400 text-sm">ML o'rgatuvchi platformaga xush kelibsiz!</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-semibold text-lg text-white">Darslar</h3>
          <p className="text-sm text-gray-400 mono-number">12 ta mavzu</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-semibold text-lg text-white">Maqsadlar</h3>
          <p className="text-sm text-gray-400 mono-number">5 ta faol</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="font-semibold text-lg text-white">Ball</h3>
          <p className="text-sm text-gray-400 mono-number">1,250 XP</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="font-semibold text-lg text-white">Streak</h3>
          <p className="text-sm text-gray-400 mono-number">7 kun</p>
        </div>
      </div>
      
      {/* Progress Section */}
      <div className="glass-card mt-6">
        <h2 className="text-lg font-semibold text-white mb-4">Bugungi progress</h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">ML asoslari</span>
              <span className="text-violet-400 mono-number">75%</span>
            </div>
            <div className="progress-shine">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Neural tarmoqlar</span>
              <span className="text-violet-400 mono-number">45%</span>
            </div>
            <div className="progress-shine">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Darslar sahifasi - Premium Dark Mode
function Lessons() {
  const lessons = [
    { id: 1, title: 'ML asoslari', progress: 75, icon: '🤖' },
    { id: 2, title: 'Neural tarmoqlar', progress: 45, icon: '🧠' },
    { id: 3, title: 'Data Science', progress: 30, icon: '📊' },
    { id: 4, title: 'Python dasturlash', progress: 90, icon: '🐍' },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold gradient-text mb-6">Darslar</h1>
      
      {lessons.map((lesson) => (
        <div key={lesson.id} className="glass-card">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{lesson.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white">{lesson.title}</h3>
              <p className="text-sm text-gray-400">{lesson.progress}% tugallangan</p>
            </div>
          </div>
          <div className="progress-shine">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
              style={{ width: `${lesson.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Oktagon sahifasi - Premium Dark Mode
function Octagon() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold gradient-text mb-6">Oktagon</h1>
      <div className="glass-card text-center py-12">
        <div className="text-6xl mb-4 float-animation">🛡️</div>
        <h2 className="text-xl font-semibold text-white mb-2">Oktagon Challenge</h2>
        <p className="text-gray-400 mb-6">8 ta yo'nalish bo'yicha bilimlaringizni sinab ko'ring</p>
        <button className="btn-glow w-full ripple-container">Boshlash</button>
      </div>
    </div>
  )
}

// Takror sahifasi - Premium Dark Mode
function Review() {
  const reviews = [
    { id: 1, topic: 'Supervised Learning', due: 'Bugun', count: 15 },
    { id: 2, topic: 'Regression', due: 'Ertaga', count: 8 },
    { id: 3, topic: 'Classification', due: '2 kun', count: 12 },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold gradient-text mb-6">Takror</h1>
      
      {reviews.map((review) => (
        <div key={review.id} className="glass-card">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-white">{review.topic}</h3>
              <p className="text-sm text-gray-400">{review.count} ta savol • {review.due}</p>
            </div>
            <button className="btn-glow text-sm px-4 py-2 ripple-container">Takrorlash</button>
          </div>
        </div>
      ))}
    </div>
  )
}

// Ohang (Kayfiyat) sahifasi - Premium Dark Mode
function Mood() {
  const [selectedMood, setSelectedMood] = useState(null)
  
  const moods = [
    { emoji: '😄', label: 'Zo\'r!', value: 'great' },
    { emoji: '😊', label: 'Yaxshi', value: 'good' },
    { emoji: '😐', label: 'Normal', value: 'ok' },
    { emoji: '😔', label: 'Charchagan', value: 'tired' },
    { emoji: '😫', label: 'Qiyin', value: 'hard' },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold gradient-text mb-6">Ohang</h1>
      
      <div className="glass-card">
        <h2 className="text-lg font-semibold text-white mb-4">Bugungi kayfiyatingiz qanday?</h2>
        <div className="grid grid-cols-3 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`p-4 rounded-xl transition-all ripple-container ${
                selectedMood === mood.value
                  ? 'bg-violet-500/20 border-2 border-violet-500'
                  : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-1">{mood.emoji}</div>
              <div className="text-xs font-medium text-gray-300">{mood.label}</div>
            </button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
            <p className="text-green-400 text-sm">
              ✓ Kayfiyatingiz saqlandi! Davom eting 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Profil sahifasi - Premium Dark Mode
function Profile() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold gradient-text mb-6">Men</h1>
      
      <div className="glass-card text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
          A
        </div>
        <h2 className="text-xl font-semibold text-white">Alisher</h2>
        <p className="text-gray-400">9-sinf</p>
      </div>
      
      <div className="glass-card">
        <h3 className="font-semibold text-white mb-4">Statistika</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Jami ball</span>
            <span className="font-semibold text-white mono-number">1,250 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Daraja</span>
            <span className="font-semibold text-white mono-number">Level 12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Streak</span>
            <span className="font-semibold text-white mono-number">7 kun 🔥</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tamomlangan darslar</span>
            <span className="font-semibold text-white mono-number">24 ta</span>
          </div>
        </div>
      </div>
      
      <div className="glass-card">
        <h3 className="font-semibold text-white mb-4">Sozlamalar</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-gray-300">
            🔔 Bildirishnomalar
          </button>
          <button className="w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-gray-300">
            🌙 Tungi rejim
          </button>
          <button className="w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-gray-300">
            ❓ Yordam
          </button>
        </div>
      </div>
    </div>
  )
}

// Asosiy App komponenti
function App() {
  const [activeTab, setActiveTab] = useState('home')
  
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'lessons':
        return <Lessons />
      case 'octagon':
        return <Octagon />
      case 'review':
        return <Review />
      case 'mood':
        return <Mood />
      case 'profile':
        return <Profile />
      default:
        return <Home />
    }
  }
  
  return (
    <div className="min-h-screen pb-24">
      {/* Asosiy kontent */}
      <main className="p-4">
        {renderPage()}
      </main>
      
      {/* Pastki menyu */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
