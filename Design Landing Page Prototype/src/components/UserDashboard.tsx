import { motion } from 'motion/react';
import { Pill, Calendar, FileSearch, Bell, Activity, Heart, Droplet, Moon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface UserDashboardProps {
  onNavigate: (screen: string) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const upcomingMedicines = [
    { name: 'Aspirin', time: '2:00 PM', dosage: '100mg', taken: false },
    { name: 'Vitamin D', time: '4:00 PM', dosage: '1000 IU', taken: false },
    { name: 'Metformin', time: '8:00 PM', dosage: '500mg', taken: false },
  ];

  const quickActions = [
    { label: 'Add Reminder', icon: Pill, screen: 'medicines', color: '#14B8A6' },
    { label: 'View Reports', icon: FileSearch, screen: 'scanner', color: '#38BDF8' },
    { label: 'Schedule Appointment', icon: Calendar, screen: 'appointments', color: '#F97316' },
  ];

  const healthStats = [
    { label: 'Steps Today', value: '8,432', max: 10000, icon: Activity, color: '#14B8A6' },
    { label: 'Heart Rate', value: '72 bpm', subtext: 'Normal', icon: Heart, color: '#F97316' },
    { label: 'Hydration', value: '6/8 cups', max: 8, icon: Droplet, color: '#38BDF8' },
    { label: 'Sleep', value: '7.5 hrs', subtext: 'Good', icon: Moon, color: '#14B8A6' },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div>
        <motion.h1
          className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Welcome Back, John!
        </motion.h1>
        <motion.p
          className="text-[#94a3b8]"
          style={{ fontSize: '1.125rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's your health overview for today
        </motion.p>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="mb-4 text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <button
                  onClick={() => onNavigate(action.screen)}
                  className="w-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-opacity-30 transition-all duration-300 text-left group"
                  style={{ borderColor: `${action.color}40` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${action.color}20`,
                      boxShadow: `0 0 20px ${action.color}30`
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: action.color }} />
                  </div>
                  <h3 className="text-white" style={{ fontWeight: 600 }}>
                    {action.label}
                  </h3>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Upcoming Medicine Reminders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
            Upcoming Reminders
          </h2>
          <Button
            onClick={() => onNavigate('medicines')}
            variant="ghost"
            className="text-[#38BDF8] hover:text-[#14B8A6] hover:bg-white/5"
          >
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {upcomingMedicines.map((medicine, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#14B8A6]/30 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center">
                  <Pill className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontWeight: 600 }}>
                    {medicine.name}
                  </h3>
                  <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                    {medicine.time} • {medicine.dosage}
                  </p>
                </div>
              </div>
              <Bell className="w-5 h-5 text-[#F97316]" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Health Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="mb-4 text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          Health Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {healthStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-opacity-30 transition-all duration-300"
                style={{ borderColor: `${stat.color}30` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="mb-2" style={{ fontSize: '1.75rem', fontWeight: 700, color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[#94a3b8] mb-3" style={{ fontSize: '0.875rem' }}>
                  {stat.label}
                </div>
                {stat.max && (
                  <Progress 
                    value={(parseInt(stat.value.replace(/,/g, '')) / stat.max) * 100} 
                    className="h-2"
                    style={{ backgroundColor: `${stat.color}20` }}
                  />
                )}
                {stat.subtext && (
                  <div className="text-[#94a3b8] mt-2" style={{ fontSize: '0.75rem' }}>
                    {stat.subtext}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
