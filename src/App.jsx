/**
 * src/App.jsx - Asosiy sahifa (Home, Lessons, Profile) o'rtasida o'tish logikasi
 * 
 * Bu fayl Smart Tutor aplikatsiyasining asosiy komponenti.
 * BottomNav orqali navigatsiya boshqariladi va har bir sahifa render qilinadi.
 */

import { useState } from 'react'
import BottomNav from './components/layout/BottomNav'

// Home sahifasi komponenti
function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">🏠 Bosh sahifa</h1>
      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <h2 className="text-lg font-semibold text-blue-400 mb-2">Xush kelibsiz!</h2>
        <p className="text-gray-300">Smart Tutor platformasida ML ni o'rganishni boshlang.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-3xl mb-2">📚</div>
          <div className="text-white font-bold">Darslar</div>
          <div className="text-gray-400 text-sm">12 ta dars</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-white font-bold">Ball</div>
          <div className="text-gray-400 text-sm">450 XP</div>
        </div>
      </div>
    </div>
  )
}

// Lessons sahifasi komponenti
function Lessons() {
  const lessons = [
    { id: 1, title: 'ML ga kirish', progress: 100, icon: '🎯' },
    { id: 2, title: 'Supervised Learning', progress: 75, icon: '📊' },
    { id: 3, title: 'Neural Networks', progress: 45, icon: '🧠' },
    { id: 4, title: 'Deep Learning', progress: 20, icon: '⚡' },
    { id: 5, title: 'NLP asoslari', progress: 0, icon: '💬' },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">📚 Darslar</h1>
      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lesson.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{lesson.title}</h3>
                  <p className="text-gray-400 text-sm">{lesson.progress}% tugallandi</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Profile sahifasi komponenti
function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">👤 Profil</h1>
      <div className="bg-gray-800 rounded-xl p-6 mb-4 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
          ST
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Smart Tutor</h2>
        <p className="text-gray-400 mb-4">ML o'rganuvchi</p>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">12</div>
            <div className="text-gray-400 text-sm">Darslar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">450</div>
            <div className="text-gray-400 text-sm">XP</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">5</div>
            <div className="text-gray-400 text-sm">Sertifikat</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-4 space-y-3">
        <button className="w-full text-left text-white py-2 px-3 hover:bg-gray-700 rounded-lg">⚙️ Sozlamalar</button>
        <button className="w-full text-left text-white py-2 px-3 hover:bg-gray-700 rounded-lg">❓ Yordam</button>
        <button className="w-full text-left text-red-400 py-2 px-3 hover:bg-gray-700 rounded-lg">🚻 Chiqish</button>
      </div>
    </div>
  )
}

// Oktagon sahifasi komponenti
function Octagon() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">🛡️ Oktagon</h1>
      <div className="bg-gray-800 rounded-xl p-4">
        <p className="text-gray-300">Oktagon bo'limi tez orada qo'shiladi.</p>
      </div>
    </div>
  )
}

// Takror (Review) sahifasi komponenti
function Review() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">🔄 Takror</h1>
      <div className="bg-gray-800 rounded-xl p-4">
        <p className="text-gray-300">Takrorlash bo'limi tez orada qo'shiladi.</p>
      </div>
    </div>
  )
}

// Ohang (Mood) sahifasi komponenti
function Mood() {
  const moods = [
    { emoji: '😊', label: 'Ajoyib', color: 'bg-green-500' },
    { emoji: '😐', label: 'Normal', color: 'bg-yellow-500' },
    { emoji: '😔', label: 'Yomon', color: 'bg-red-500' },
    { emoji: '😴', label: 'Charchoq', color: 'bg-blue-500' },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">😊 Kayfiyat</h1>
      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <p className="text-gray-300 mb-4">Bugungi kayfiyatingiz qanday?</p>
        <div className="grid grid-cols-2 gap-3">
          {moods.map((mood, index) => (
            <button
              key={index}
              className={`${mood.color} rounded-xl p-4 text-white font-semibold hover:opacity-90 transition-opacity`}
            >
              <div className="text-3xl mb-1">{mood.emoji}</div>
              <div className="text-sm">{mood.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  // Hozirgi aktiv sahifa uchun state
  const [activeTab, setActiveTab] = useState('home')

  // Sahifalarni render qilish funksiyasi
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
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Asosiy sahifa kontenti */}
      {renderPage()}
      
      {/* Pastki navigatsiya menyusi */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
