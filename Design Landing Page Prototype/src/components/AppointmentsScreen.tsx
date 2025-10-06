import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Plus, Clock, MapPin, User } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { useState } from 'react';

export function AppointmentsScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const appointments = [
    {
      id: 1,
      title: 'General Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: 'Today, 2:00 PM',
      location: 'City Medical Center',
      type: 'In-person',
      color: '#14B8A6'
    },
    {
      id: 2,
      title: 'Blood Test',
      doctor: 'Lab Services',
      date: 'Tomorrow, 9:00 AM',
      location: 'Medical Lab',
      type: 'Test',
      color: '#F97316'
    },
    {
      id: 3,
      title: 'Follow-up Consultation',
      doctor: 'Dr. Michael Chen',
      date: 'Oct 10, 3:30 PM',
      location: 'Virtual',
      type: 'Telemedicine',
      color: '#38BDF8'
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
            style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Appointments & Tests
          </h1>
          <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
            Manage your healthcare schedule
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white rounded-xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <motion.div
          className="lg:col-span-1 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
            Calendar
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </motion.div>

        {/* Appointments List */}
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
            Upcoming Appointments
          </h2>
          {appointments.map((appointment, index) => (
            <motion.div
              key={appointment.id}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-opacity-30 transition-all duration-300"
              style={{ borderColor: `${appointment.color}30` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${appointment.color}20` }}
                >
                  <CalendarIcon className="w-6 h-6" style={{ color: appointment.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white mb-1" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                        {appointment.title}
                      </h3>
                      <p className="text-[#94a3b8] flex items-center gap-2" style={{ fontSize: '0.875rem' }}>
                        <User className="w-4 h-4" />
                        {appointment.doctor}
                      </p>
                    </div>
                    <span 
                      className="px-3 py-1 rounded-full" 
                      style={{ 
                        backgroundColor: `${appointment.color}20`,
                        color: appointment.color,
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {appointment.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {appointment.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {appointment.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
