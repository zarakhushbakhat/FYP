import { motion } from 'motion/react';
import { FileText, Upload, Download, Eye, User, Calendar, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';

export function MedicalRecordsScreen() {
  const userProfile = {
    name: 'John Doe',
    age: 34,
    bloodType: 'A+',
    allergies: 'Penicillin, Peanuts',
    conditions: 'Type 2 Diabetes, Hypertension',
  };

  const medicalHistory = [
    { year: '2024', event: 'Annual Physical Examination', doctor: 'Dr. Sarah Johnson' },
    { year: '2024', event: 'Dental Checkup', doctor: 'Dr. Mark Williams' },
    { year: '2023', event: 'Blood Pressure Monitoring', doctor: 'Dr. Sarah Johnson' },
    { year: '2023', event: 'Diabetes Management Review', doctor: 'Dr. Michael Chen' },
  ];

  const reports = [
    { name: 'Blood Test Results', date: 'Oct 1, 2024', type: 'Lab Report', size: '2.4 MB' },
    { name: 'X-Ray - Chest', date: 'Sep 15, 2024', type: 'Imaging', size: '5.1 MB' },
    { name: 'Annual Physical Report', date: 'Aug 10, 2024', type: 'General', size: '1.8 MB' },
    { name: 'Prescription - Metformin', date: 'Jul 20, 2024', type: 'Prescription', size: '0.5 MB' },
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
            Medical Records
          </h1>
          <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
            Your complete health history
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white rounded-xl"
        >
          <Upload className="w-5 h-5 mr-2" />
          Upload Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile */}
        <motion.div
          className="lg:col-span-1 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white mb-4"
                style={{ fontSize: '2rem', fontWeight: 700 }}>
                JD
              </div>
              <h3 className="text-white mb-1" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
                {userProfile.name}
              </h3>
              <p className="text-[#94a3b8]">{userProfile.age} years old</p>
            </div>
            
            <div className="space-y-3 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Blood Type</span>
                <span className="text-white" style={{ fontWeight: 600 }}>{userProfile.bloodType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Allergies</span>
                <span className="text-white" style={{ fontWeight: 600 }}>{userProfile.allergies}</span>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10">
            <h3 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
              Medical History
            </h3>
            <div className="space-y-3">
              {medicalHistory.map((item, index) => (
                <div key={index} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="text-white mb-1" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                    {item.event}
                  </div>
                  <div className="text-[#94a3b8]" style={{ fontSize: '0.75rem' }}>
                    {item.year} • {item.doctor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reports */}
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-white mb-4" style={{ fontWeight: 600, fontSize: '1.25rem' }}>
            Stored Reports
          </h2>
          {reports.map((report, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-[#14B8A6]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1" style={{ fontWeight: 600 }}>
                      {report.name}
                    </h3>
                    <div className="flex items-center gap-3 text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8]">
                        {report.type}
                      </span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[#38BDF8] hover:bg-[#38BDF8]/10"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[#14B8A6] hover:bg-[#14B8A6]/10"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Upload Area */}
          <motion.div
            className="mt-6 border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[#14B8A6]/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Upload className="w-12 h-12 text-[#94a3b8] mx-auto mb-4" />
            <p className="text-white mb-2" style={{ fontWeight: 600 }}>
              Upload New Report
            </p>
            <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
              Drag and drop files here or click to browse
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
