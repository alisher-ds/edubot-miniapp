import { useState } from 'react'
import { motion } from 'framer-motion'
import BottomNav from './components/layout/BottomNav'
import { BookOpen, Target, Trophy, Flame, BrainCircuit, Cpu, BarChart3, Code2, TableProperties, LineChart, Bell, Moon, CircleHelp, ChevronRight, LogOut, Timer, Headphones, Play, Pause } from 'lucide-react'

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
          <BookOpen className="w-6 h-6 text-violet-400 stroke-[1.5] mb-2" />
          <h3 className="font-semibold text-lg text-white">Darslar</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">12 ta mavzu</p>
        </div>
        
        <div className="glass-card">
          <Target className="w-6 h-6 text-violet-400 stroke-[1.5] mb-2" />
          <h3 className="font-semibold text-lg text-white">Maqsadlar</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">5 ta faol</p>
        </div>
        
        <div className="glass-card">
          <Trophy className="w-6 h-6 text-violet-400 stroke-[1.5] mb-2" />
          <h3 className="font-semibold text-lg text-white">Ball</h3>
          <p className="text-sm text-slate-400 font-mono tabular-nums">1,250 XP</p>
        </div>
        
        <div className="glass-card">
          <Flame className="w-6 h-6 text-orange-500 stroke-[1.5] mb-2" />
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
    { id: 1, title: 'ML asoslari', progress: 75, icon: BrainCircuit },
    { id: 2, title: 'Neural tarmoqlar', progress: 45, icon: Cpu },
    { id: 3, title: 'Data Science', progress: 30, icon: BarChart3 },
    { id: 4, title: 'Python dasturlash', progress: 90, icon: Code2 },
    { id: 5, title: 'NumPy & Pandas', progress: 60, icon: TableProperties },
    { id: 6, title: 'Matplotlib', progress: 25, icon: LineChart },
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
            <lesson.icon className="w-6 h-6 text-violet-400 stroke-[1.5] flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white">{lesson.title}</h3>
              <p className="text-sm text-slate-400 font-mono tabular-nums">{lesson.progress}% tugallangan</p>
            </div>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="progress-shine h-full">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
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

// Focus Mode sahifasi - Premium Dark Mode (Pomodoro taymer)
function FocusMode() {
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 daqiqa soniyada
  const [mode, setMode] = useState('work') // 'work' yoki 'break'

  const toggleTimer = () => setIsActive(!isActive)
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = mode === 'work' 
    ? ((25 * 60 - timeLeft) / (25 * 60)) * 100 
    : ((5 * 60 - timeLeft) / (5 * 60)) * 100

  return (
    <motion.div 
      className="space-y-4 pt-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={itemVariants}>Focus Mode</motion.h1>
      
      <motion.div className="glass-card text-center py-8" variants={itemVariants}>
        <div className="mb-6">
          <p className="text-slate-400 text-sm mb-2">{mode === 'work' ? 'Diqqatni jamlash vaqti' : 'Dam olish vaqti'}</p>
          <Headphones className="w-8 h-8 text-violet-400 mx-auto mb-4 stroke-[1.5]" />
        </div>
        
        {/* Aylana taymer */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 88}
              strokeDashoffset={2 * Math.PI * 88 * (1 - progress / 100)}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-mono font-bold text-white tabular-nums">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Tugmalar */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={toggleTimer}
            className="btn-press px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-semibold flex items-center gap-2"
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isActive ? 'Pause' : 'Start Focus'}
          </button>
        </div>
        
        {/* Mode switch */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => { setMode('work'); setTimeLeft(25 * 60); setIsActive(false); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'work' 
                ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            25 min Ish
          </button>
          <button
            onClick={() => { setMode('break'); setTimeLeft(5 * 60); setIsActive(false); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === 'break' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            5 min Dam
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Profil sahifasi - Premium Dark Mode
function Profile() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

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
            <span className="font-semibold text-white font-mono tabular-nums flex items-center gap-1">7 kun <Flame className="w-4 h-4 text-orange-500 stroke-[1.5]" /></span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Tamomlangan darslar</span>
            <span className="font-semibold text-white font-mono tabular-nums">24 ta</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="glass-card" variants={itemVariants}>
        <h3 className="font-semibold text-white mb-4">Sozlamalar</h3>
        <div className="space-y-0">
          {/* Bildirishnomalar */}
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-slate-400 stroke-[1.5]" />
              <span className="text-slate-300">Bildirishnomalar</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-violet-500' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                notifications ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
          
          {/* Tungi rejim */}
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-slate-400 stroke-[1.5]" />
              <span className="text-slate-300">Tungi rejim</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-violet-500' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
          
          {/* Yordam */}
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <CircleHelp className="w-5 h-5 text-slate-400 stroke-[1.5]" />
              <span className="text-slate-300">Yordam</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 stroke-[1.5]" />
          </div>
          
          {/* Chiqish */}
          <div className="flex items-center justify-between py-3 mt-2">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-400 stroke-[1.5]" />
              <span className="text-red-400">Chiqish</span>
            </div>
          </div>
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
      case 'focus':
        return <FocusMode />
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
