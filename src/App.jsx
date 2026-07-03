import { useState } from 'react'
import BottomNav from './components/layout/BottomNav'

// Asosiy sahifa komponenti
function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary-700">Smart Tutor</h1>
      <p className="text-gray-600">ML o'rgatuvchi platformaga xush kelibsiz!</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-semibold text-lg">Darslar</h3>
          <p className="text-sm text-gray-500">12 ta mavzu</p>
        </div>
        
        <div className="card">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-semibold text-lg">Maqsadlar</h3>
          <p className="text-sm text-gray-500">5 ta faol</p>
        </div>
        
        <div className="card">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="font-semibold text-lg">Ball</h3>
          <p className="text-sm text-gray-500">1,250 XP</p>
        </div>
        
        <div className="card">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="font-semibold text-lg">Streak</h3>
          <p className="text-sm text-gray-500">7 kun</p>
        </div>
      </div>
    </div>
  )
}

// Darslar sahifasi
function Lessons() {
  const lessons = [
    { id: 1, title: 'ML asoslari', progress: 75, icon: '🤖' },
    { id: 2, title: 'Neural tarmoqlar', progress: 45, icon: '🧠' },
    { id: 3, title: 'Data Science', progress: 30, icon: '📊' },
    { id: 4, title: 'Python dasturlash', progress: 90, icon: '🐍' },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary-700">Darslar</h1>
      
      {lessons.map((lesson) => (
        <div key={lesson.id} className="card">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{lesson.icon}</span>
            <div>
              <h3 className="font-semibold text-lg">{lesson.title}</h3>
              <p className="text-sm text-gray-500">{lesson.progress}% tugallangan</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${lesson.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Oktagon sahifasi
function Octagon() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary-700">Oktagon</h1>
      <div className="card text-center py-12">
        <div className="text-6xl mb-4">🛡️</div>
        <h2 className="text-xl font-semibold mb-2">Oktagon Challenge</h2>
        <p className="text-gray-600 mb-6">8 ta yo'nalish bo'yicha bilimlaringizni sinab ko'ring</p>
        <button className="btn-primary w-full">Boshlash</button>
      </div>
    </div>
  )
}

// Takror sahifasi
function Review() {
  const reviews = [
    { id: 1, topic: 'Supervised Learning', due: 'Bugun', count: 15 },
    { id: 2, topic: 'Regression', due: 'Ertaga', count: 8 },
    { id: 3, topic: 'Classification', due: '2 kun', count: 12 },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary-700">Takror</h1>
      
      {reviews.map((review) => (
        <div key={review.id} className="card">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{review.topic}</h3>
              <p className="text-sm text-gray-500">{review.count} ta savol • {review.due}</p>
            </div>
            <button className="btn-secondary text-sm px-3 py-1">Takrorlash</button>
          </div>
        </div>
      ))}
    </div>
  )
}

// Ohang (Kayfiyat) sahifasi
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
      <h1 className="text-2xl font-bold text-primary-700">Ohang</h1>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Bugungi kayfiyatingiz qanday?</h2>
        <div className="grid grid-cols-3 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`p-4 rounded-xl transition-all ${
                selectedMood === mood.value
                  ? 'bg-primary-100 border-2 border-primary-500'
                  : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <div className="text-3xl mb-1">{mood.emoji}</div>
              <div className="text-xs font-medium">{mood.label}</div>
            </button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-700 text-sm">
              ✓ Kayfiyatingiz saqlandi! Davom eting 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Profil sahifasi
function Profile() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary-700">Men</h1>
      
      <div className="card text-center">
        <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-600">
          A
        </div>
        <h2 className="text-xl font-semibold">Alisher</h2>
        <p className="text-gray-500">9-sinf</p>
      </div>
      
      <div className="card">
        <h3 className="font-semibold mb-4">Statistika</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Jami ball</span>
            <span className="font-semibold">1,250 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Daraja</span>
            <span className="font-semibold">Level 12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Streak</span>
            <span className="font-semibold">7 kun 🔥</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tamomlangan darslar</span>
            <span className="font-semibold">24 ta</span>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3 className="font-semibold mb-4">Sozlamalar</h3>
        <div className="space-y-2">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
            🔔 Bildirishnomalar
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
            🌙 Tungi rejim
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
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
    <div className="min-h-screen bg-gray-50 pb-20">
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
