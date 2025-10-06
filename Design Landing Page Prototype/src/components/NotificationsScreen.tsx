import { motion } from 'motion/react';
import { Bell, Pill, Calendar, AlertCircle, Check } from 'lucide-react';

export function NotificationsScreen() {
  const notifications = [
    { id: 1, type: 'critical', icon: AlertCircle, title: 'Critical: Blood Pressure Check Required', message: 'Your blood pressure reading is overdue. Please check immediately.', time: '5 min ago', color: '#F97316' },
    { id: 2, type: 'medicine', icon: Pill, title: 'Medicine Reminder', message: 'Time to take your Metformin (500mg)', time: '30 min ago', color: '#14B8A6' },
    { id: 3, type: 'appointment', icon: Calendar, title: 'Upcoming Appointment', message: 'Checkup with Dr. Sarah Johnson tomorrow at 2:00 PM', time: '2 hours ago', color: '#38BDF8' },
    { id: 4, type: 'medicine', icon: Pill, title: 'Medicine Taken', message: 'You marked Aspirin as taken', time: '4 hours ago', color: '#14B8A6' },
    { id: 5, type: 'appointment', icon: Calendar, title: 'Appointment Confirmed', message: 'Your blood test is confirmed for Oct 10', time: '1 day ago', color: '#38BDF8' },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h1 className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Notifications
        </h1>
        <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
          Stay updated with your health alerts
        </p>
      </div>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          const isCritical = notification.type === 'critical';

          return (
            <motion.div
              key={notification.id}
              className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-5 rounded-xl border transition-all duration-300 hover:border-opacity-50 ${
                isCritical ? 'border-[#F97316]/50' : 'border-white/10'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isCritical ? 'animate-pulse' : ''
                  }`}
                  style={{ backgroundColor: `${notification.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: notification.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white" style={{ fontWeight: 600, fontSize: '1.rem' }}>
                      {notification.title}
                    </h3>
                    <span className="text-[#94a3b8] whitespace-nowrap ml-4" style={{ fontSize: '0.75rem' }}>
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                    {notification.message}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Check className="w-12 h-12 text-[#14B8A6] mx-auto mb-3" />
        <p className="text-[#94a3b8]">You're all caught up!</p>
      </motion.div>
    </motion.div>
  );
}
