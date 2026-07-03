/**
 * BottomNav komponenti - Premium Dark Mode Floating Dock 2026
 * Hanyu botidagagi 6 ta elementdan iborat:
 * - Asosiy (Home) - Home icon
 * - Darslar (Lessons) - Book icon
 * - Oktagon (Octagon) - Shield icon
 * - Takror (Review) - RefreshCw icon
 * - Ohang (Mood) - Smile icon
 * - Men (Profile) - User icon
 * 
 * Features:
 * - Floating dock dizayni (ekran tagiga yopishmaydi)
 * - Lucide React ikonkalari
 * - Active state uchun glow effekti (Electric Violet)
 * - Framer Motion animatsiyalari (Smooth & Elegant)
 * - Glassmorphism 2.0 foni (Deep Space Black + blur-2xl)
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, Shield, RefreshCw, Smile, User } from 'lucide-react';

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Asosiy' },
    { id: 'lessons', icon: BookOpen, label: 'Darslar' },
    { id: 'octagon', icon: Shield, label: 'Oktagon' },
    { id: 'review', icon: RefreshCw, label: 'Takror' },
    { id: 'mood', icon: Smile, label: 'Ohang' },
    { id: 'profile', icon: User, label: 'Men' },
  ];

  return (
    <nav className="floating-dock">
      <div className="flex justify-around items-center px-2 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                isActive ? 'text-accent-primary' : 'text-gray-400 hover:text-white'
              }`}
              whileTap={{ scale: 0.95 }}
              initial={false}
            >
              {/* Active glow effect - Electric Violet */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-accent-primary/20 rounded-2xl shadow-glow-soft"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </AnimatePresence>
              
              {/* Icon with animation - Smooth & Elegant */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={isActive ? 'drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]' : ''}
                />
              </motion.div>
              
              {/* Label - faqat katta ekranlarda */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 text-[10px] font-medium mt-1 hidden sm:block ${
                  isActive ? 'text-accent-primary' : 'text-gray-400'
                }`}
              >
                {tab.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
