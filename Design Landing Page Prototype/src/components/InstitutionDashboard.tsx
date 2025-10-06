import { motion } from 'motion/react';
import { Users, Pill, Calendar, FileText, AlertCircle, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function InstitutionDashboard() {
  const stats = [
    { label: 'Total Patients', value: '1,247', change: '+12%', color: '#14B8A6', icon: Users },
    { label: 'Appointments Today', value: '45', change: '+5%', color: '#38BDF8', icon: Calendar },
    { label: 'Active Alerts', value: '23', change: '-15%', color: '#F97316', icon: AlertCircle },
    { label: 'Medicines Today', value: '892', change: '+8%', color: '#14B8A6', icon: Pill },
  ];

  const patientActivityData = [
    { day: 'Mon', patients: 120 },
    { day: 'Tue', patients: 145 },
    { day: 'Wed', patients: 132 },
    { day: 'Thu', patients: 158 },
    { day: 'Fri', patients: 170 },
    { day: 'Sat', patients: 95 },
    { day: 'Sun', patients: 80 },
  ];

  const medicineAdherenceData = [
    { month: 'Apr', rate: 85 },
    { month: 'May', rate: 88 },
    { month: 'Jun', rate: 82 },
    { month: 'Jul', rate: 90 },
    { month: 'Aug', rate: 92 },
    { month: 'Sep', rate: 94 },
  ];

  const recentActivity = [
    { id: 1, patient: 'Sarah Anderson', action: 'Completed appointment', time: '5 min ago', type: 'success' },
    { id: 2, patient: 'Michael Brown', action: 'Missed medicine dose', time: '15 min ago', type: 'alert' },
    { id: 3, patient: 'Emily Davis', action: 'Uploaded new report', time: '1 hour ago', type: 'info' },
    { id: 4, patient: 'James Wilson', action: 'Scheduled follow-up', time: '2 hours ago', type: 'success' },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div>
        <h1 className="mb-2 bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
          style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Institution Dashboard
        </h1>
        <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
          Comprehensive patient management and analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith('+');
          
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-opacity-30 transition-all duration-300"
              style={{ borderColor: `${stat.color}30` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <span
                  className={`px-2 py-1 rounded ${
                    isPositive ? 'bg-[#14B8A6]/20 text-[#14B8A6]' : 'bg-[#F97316]/20 text-[#F97316]'
                  }`}
                  style={{ fontSize: '0.75rem', fontWeight: 600 }}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mb-1" style={{ fontSize: '2rem', fontWeight: 700, color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Activity Chart */}
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            Patient Activity (This Week)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={patientActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="patients" fill="#14B8A6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Medicine Adherence Chart */}
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            Medicine Adherence Trend
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={medicineAdherenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#38BDF8"
                strokeWidth={3}
                dot={{ fill: '#38BDF8', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/10 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-white" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
            Recent Activity
          </h2>
          <Activity className="w-5 h-5 text-[#38BDF8]" />
        </div>

        <div className="divide-y divide-white/5">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="p-6 hover:bg-white/5 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-[#14B8A6]' :
                  activity.type === 'alert' ? 'bg-[#F97316]' :
                  'bg-[#38BDF8]'
                }`} />
                <div className="flex-1">
                  <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                    {activity.patient}
                  </p>
                  <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                    {activity.action}
                  </p>
                </div>
                <span className="text-[#94a3b8]" style={{ fontSize: '0.75rem' }}>
                  {activity.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
