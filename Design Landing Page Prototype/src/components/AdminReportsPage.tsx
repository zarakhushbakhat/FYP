import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, FileText, Download, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function AdminReportsPage() {
  const medicineComplianceData = [
    { month: 'Apr', compliance: 85, missed: 15 },
    { month: 'May', compliance: 88, missed: 12 },
    { month: 'Jun', compliance: 82, missed: 18 },
    { month: 'Jul', compliance: 90, missed: 10 },
    { month: 'Aug', compliance: 92, missed: 8 },
    { month: 'Sep', compliance: 94, missed: 6 },
    { month: 'Oct', compliance: 91, missed: 9 },
  ];

  const appointmentData = [
    { month: 'Apr', completed: 145, cancelled: 12, noShow: 8 },
    { month: 'May', completed: 158, cancelled: 10, noShow: 7 },
    { month: 'Jun', completed: 162, cancelled: 15, noShow: 10 },
    { month: 'Jul', completed: 170, cancelled: 9, noShow: 5 },
    { month: 'Aug', completed: 180, cancelled: 11, noShow: 6 },
    { month: 'Sep', completed: 175, cancelled: 8, noShow: 4 },
    { month: 'Oct', completed: 190, cancelled: 10, noShow: 5 },
  ];

  const departmentData = [
    { name: 'Cardiology', value: 45, color: '#14B8A6' },
    { name: 'Neurology', value: 30, color: '#38BDF8' },
    { name: 'Orthopedics', value: 25, color: '#F97316' },
    { name: 'Pediatrics', value: 20, color: '#94a3b8' },
    { name: 'Others', value: 15, color: '#1e293b' },
  ];

  const stats = [
    {
      label: 'Medicine Adherence',
      value: '91%',
      change: '+3%',
      trend: 'up',
      color: '#14B8A6'
    },
    {
      label: 'Appointment Completion',
      value: '92.5%',
      change: '+2.5%',
      trend: 'up',
      color: '#38BDF8'
    },
    {
      label: 'Patient Satisfaction',
      value: '4.7/5',
      change: '+0.3',
      trend: 'up',
      color: '#F97316'
    },
    {
      label: 'Avg. Recovery Time',
      value: '12.5 days',
      change: '-1.2 days',
      trend: 'down',
      color: '#14B8A6'
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
            Reports & Analytics
          </h1>
          <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
            Comprehensive institutional performance metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-xl"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button
            className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white px-6 rounded-xl"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-6 h-6" style={{ color: stat.color }} />
                <div className={`flex items-center gap-1 px-2 py-1 rounded ${
                  stat.trend === 'up' ? 'bg-[#14B8A6]/20' : 'bg-[#F97316]/20'
                }`}>
                  <TrendIcon className={`w-4 h-4 ${
                    stat.trend === 'up' ? 'text-[#14B8A6]' : 'text-[#F97316]'
                  }`} />
                  <span className={`${
                    stat.trend === 'up' ? 'text-[#14B8A6]' : 'text-[#F97316]'
                  }`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="mb-2" style={{ fontSize: '2rem', fontWeight: 700, color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Medicine Compliance Chart */}
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            Medicine Adherence Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={medicineComplianceData}>
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
              <Legend />
              <Line
                type="monotone"
                dataKey="compliance"
                stroke="#14B8A6"
                strokeWidth={3}
                dot={{ fill: '#14B8A6', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="missed"
                stroke="#F97316"
                strokeWidth={3}
                dot={{ fill: '#F97316', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Appointment Status Chart */}
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            Appointment Completion Rate
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentData}>
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
              <Legend />
              <Bar dataKey="completed" fill="#14B8A6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="cancelled" fill="#F97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="noShow" fill="#94a3b8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Department Distribution */}
      <motion.div
        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-white mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
          Patient Distribution by Department
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="flex-1 space-y-3">
            {departmentData.map((dept, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: dept.color }}
                  />
                  <span className="text-white" style={{ fontWeight: 500 }}>
                    {dept.name}
                  </span>
                </div>
                <span className="text-[#94a3b8]" style={{ fontWeight: 600 }}>
                  {dept.value} patients
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10">
          <p className="text-[#94a3b8] mb-2">Total Appointments (Oct)</p>
          <p className="text-white" style={{ fontSize: '2rem', fontWeight: 700 }}>205</p>
          <p className="text-[#14B8A6]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
            +8% from last month
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10">
          <p className="text-[#94a3b8] mb-2">Medicines Prescribed</p>
          <p className="text-white" style={{ fontSize: '2rem', fontWeight: 700 }}>3,892</p>
          <p className="text-[#38BDF8]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
            +12% from last month
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10">
          <p className="text-[#94a3b8] mb-2">Critical Alerts</p>
          <p className="text-white" style={{ fontSize: '2rem', fontWeight: 700 }}>23</p>
          <p className="text-[#F97316]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
            -15% from last month
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
