import { useState } from 'react'
import { motion } from 'framer-motion'
import BottomNav from './components/layout/BottomNav'

// Animation variants for staggered fade-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

// Asosiy sahifa komponenti - Premium Dark Mode
function Home() {
  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="mb-8 pt-[60px]" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-white mb-2">Smart Tutor</h1>
        <p className="text-slate-400 text-sm">ML o'rgatuvchi platformaga xush kelibsiz!</p>
      </motion.div>
      
      {/* Stats Grid */}
      <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
        <div className="glass-card">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-semibold text-lg text-white">Darslar</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">12 ta mavzu</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-semibold text-lg text-white">Maqsadlar</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">5 ta faol</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="font-semibold text-lg text-white">Ball</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">1,250 XP</p>
        </div>
        
        <div className="glass-card">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="font-semibold text-lg text-white">Streak</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">7 kun</p>
        </div>
      </motion.div>
      
      {/* Progress Section */}
      <motion.div className="glass-card mt-6" variants={itemVariants}>
        <h2 className="text-lg font-semibold text-white mb-4">Bugungi progress</h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-400">ML asoslari</span>
              <span className="text-violet-400 font-mono tabular-nums">75%</span>
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
              <span className="text-slate-400">Neural tarmoqlar</span>
              <span className="text-violet-400 font-mono tabular-nums">45%</span>
            </div>
            <div className="progress-shine">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Darslar</motion.h1>
      
      {lessons.map((lesson, index) => (
        <motion.div 
          key={lesson.id} 
          className="glass-card"
          variants={itemVariants}
          custom={index}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{lesson.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white">{lesson.title}</h3>
              <p className="text-sm text-slate-400 font-mono tabular-nums">{lesson.progress}% tugallangan</p>
            </div>
          </div>
          <div className="progress-shine">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
              style={{ width: `${lesson.progress}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Oktagon sahifasi - Premium Dark Mode
function Octagon() {
  return (
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Oktagon</motion.h1>
      <motion.div className="glass-card text-center py-12" variants={itemVariants}>
        <div className="text-6xl mb-4 float-animation">🛡️</div>
        <h2 className="text-xl font-semibold text-white mb-2">Oktagon Challenge</h2>
        <p className="text-slate-400 mb-6">8 ta yo'nalish bo'yicha bilimlaringizni sinab ko'ring</p>
        <button className="btn-press w-full py-3 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-semibold">Boshlash</button>
      </motion.div>
    </motion.div>
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
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Takror</motion.h1>
      
      {reviews.map((review, index) => (
        <motion.div key={review.id} className="glass-card" variants={itemVariants} custom={index}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-white">{review.topic}</h3>
              <p className="text-sm text-slate-400 font-mono tabular-nums">{review.count} ta savol • {review.due}</p>
            </div>
            <button className="btn-press text-sm px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-semibold">Takrorlash</button>
          </div>
        </motion.div>
      ))}
    </motion.div>
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
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Ohang</motion.h1>
      
      <motion.div className="glass-card" variants={itemVariants}>
        <h2 className="text-lg font-semibold text-white mb-4">Bugungi kayfiyatingiz qanday?</h2>
        <div className="grid grid-cols-3 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`btn-press p-4 rounded-xl transition-all ${
                selectedMood === mood.value
                  ? 'bg-violet-500/20 border-2 border-violet-500'
                  : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-1">{mood.emoji}</div>
              <div className="text-xs font-medium text-slate-300">{mood.label}</div>
            </button>
          ))}
        </div>
        
        {selectedMood && (
          <motion.div 
            className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-green-400 text-sm">
              ✓ Kayfiyatingiz saqlandi! Davom eting 🎉
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

// Profil sahifasi - Premium Dark Mode
function Profile() {
  return (
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Men</motion.h1>
      
      <motion.div className="glass-card text-center" variants={itemVariants}>
        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
          A
        </div>
        <h2 className="text-xl font-semibold text-white">Alisher</h2>
        <p className="text-slate-400">9-sinf</p>
      </motion.div>
      
      <motion.div className="glass-card" variants={itemVariants}>
        <h3 className="font-semibold text-white mb-4">Statistika</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-400">Jami ball</span>
            <span className="font-semibold text-white font-mono tabular-nums">1,250 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Daraja</span>
            <span className="font-semibold text-white font-mono tabular-nums">Level 12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Streak</span>
            <span className="font-semibold text-white font-mono tabular-nums">7 kun 🔥</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Tamomlangan darslar</span>
            <span className="font-semibold text-white font-mono tabular-nums">24 ta</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="glass-card" variants={itemVariants}>
        <h3 className="font-semibold text-white mb-4">Sozlamalar</h3>
        <div className="space-y-2">
          <button className="btn-press w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-slate-300">
            🔔 Bildirishnomalar
          </button>
          <button className="btn-press w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-slate-300">
            🌙 Tungi rejim
          </button>
          <button className="btn-press w-full text-left p-3 hover:bg-white/10 rounded-xl transition-colors text-slate-300">
            ❓ Yordam
          </button>
        </div>
      </motion.div>
    </motion.div>
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
