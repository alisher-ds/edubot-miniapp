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
 * - Smooth & Elegant animatsiyalar
 * - Glassmorphism 2.0 foni (Deep Space Black + blur-40px)
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
      <div className="flex justify-around items-center w-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              whileTap={{ scale: 0.95 }}
              initial={false}
            >
              {/* Icon with animation - Smooth & Elegant */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>
              
              {/* Label */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
