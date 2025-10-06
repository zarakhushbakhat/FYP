import { motion } from 'motion/react';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Pill, FileText, Bell, Upload, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

interface PatientDetailPageProps {
  onNavigate: (page: string) => void;
  patientId?: number;
}

export function PatientDetailPage({ onNavigate, patientId = 1 }: PatientDetailPageProps) {
  const [selectedTab, setSelectedTab] = useState('medicines');

  const patient = {
    id: patientId,
    name: 'Sarah Anderson',
    age: 45,
    gender: 'Female',
    room: 'A-204',
    condition: 'Diabetes Type 2',
    admittedDate: 'March 15, 2025',
    phone: '+1 (555) 123-4567',
    email: 'sarah.anderson@email.com',
    address: '123 Main St, New York, NY 10001',
    emergencyContact: 'John Anderson - +1 (555) 987-6543',
    image: 'SA'
  };

  const medicines = [
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      time: '8:00 AM, 8:00 PM',
      status: 'taken',
      nextDose: '8:00 PM Today'
    },
    {
      id: 2,
      name: 'Insulin Glargine',
      dosage: '10 units',
      frequency: 'Once daily',
      time: '10:00 PM',
      status: 'pending',
      nextDose: '10:00 PM Today'
    },
    {
      id: 3,
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      time: '9:00 AM',
      status: 'taken',
      nextDose: '9:00 AM Tomorrow'
    },
  ];

  const appointments = [
    {
      id: 1,
      type: 'Consultation',
      doctor: 'Dr. Emily Chen',
      date: 'Oct 5, 2025',
      time: '10:00 AM',
      status: 'upcoming',
      department: 'Endocrinology'
    },
    {
      id: 2,
      type: 'Blood Test',
      doctor: 'Lab Technician',
      date: 'Oct 8, 2025',
      time: '8:00 AM',
      status: 'scheduled',
      department: 'Laboratory'
    },
    {
      id: 3,
      type: 'Follow-up',
      doctor: 'Dr. Emily Chen',
      date: 'Sep 28, 2025',
      time: '2:00 PM',
      status: 'completed',
      department: 'Endocrinology'
    },
  ];

  const records = [
    {
      id: 1,
      name: 'Blood Sugar Report',
      date: 'Oct 1, 2025',
      type: 'Lab Result',
      doctor: 'Dr. Emily Chen',
      status: 'normal'
    },
    {
      id: 2,
      name: 'HbA1c Test',
      date: 'Sep 15, 2025',
      type: 'Lab Result',
      doctor: 'Dr. Emily Chen',
      status: 'attention'
    },
    {
      id: 3,
      name: 'ECG Report',
      date: 'Sep 10, 2025',
      type: 'Diagnostic',
      doctor: 'Dr. Robert Smith',
      status: 'normal'
    },
  ];

  const alerts = [
    {
      id: 1,
      message: 'Insulin dose missed at 10:00 PM yesterday',
      time: '12 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      message: 'Blood sugar reading above normal range',
      time: '1 day ago',
      priority: 'medium'
    },
    {
      id: 3,
      message: 'Upcoming appointment tomorrow at 10:00 AM',
      time: '2 days ago',
      priority: 'low'
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => onNavigate('admin-patients')}
        className="flex items-center gap-2 text-[#94a3b8] hover:text-[#14B8A6] transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Patients
      </motion.button>

      {/* Patient Header */}
      <motion.div
        className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div 
            className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white flex-shrink-0"
            style={{ fontSize: '3rem', fontWeight: 700 }}
          >
            {patient.image}
          </div>

          {/* Patient Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-white mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  {patient.name}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="text-[#94a3b8]">
                    {patient.age} years • {patient.gender}
                  </span>
                  <span className="text-[#94a3b8]">•</span>
                  <span className="text-[#38BDF8]" style={{ fontWeight: 600 }}>
                    Room {patient.room}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10"
                >
                  Edit Details
                </Button>
                <Button
                  className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white"
                >
                  Send Alert
                </Button>
              </div>
            </div>

            {/* Condition Badge */}
            <div className="mb-6">
              <Badge className="bg-[#F97316]/20 text-[#F97316] px-4 py-2" style={{ fontSize: '0.875rem' }}>
                {patient.condition}
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <Phone className="w-5 h-5 text-[#14B8A6]" />
                <span>{patient.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <Mail className="w-5 h-5 text-[#38BDF8]" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <MapPin className="w-5 h-5 text-[#F97316]" />
                <span>{patient.address}</span>
              </div>
              <div className="flex items-center gap-3 text-[#94a3b8]">
                <Calendar className="w-5 h-5 text-[#14B8A6]" />
                <span>Admitted: {patient.admittedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="bg-[#1e293b] border border-white/10 p-1 grid grid-cols-4 gap-1 mb-6">
            <TabsTrigger 
              value="medicines"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Pill className="w-4 h-4 mr-2" />
              Medicines
            </TabsTrigger>
            <TabsTrigger 
              value="appointments"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Appointments
            </TabsTrigger>
            <TabsTrigger 
              value="records"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              Records
            </TabsTrigger>
            <TabsTrigger 
              value="alerts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </TabsTrigger>
          </TabsList>

          {/* Medicines Tab */}
          <TabsContent value="medicines">
            <div className="space-y-4">
              {medicines.map((medicine, index) => (
                <motion.div
                  key={medicine.id}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                          {medicine.name}
                        </h3>
                        <Badge className={medicine.status === 'taken' ? 'bg-[#14B8A6]/20 text-[#14B8A6]' : 'bg-[#F97316]/20 text-[#F97316]'}>
                          {medicine.status === 'taken' ? (
                            <><CheckCircle className="w-3 h-3 mr-1" /> Taken</>
                          ) : (
                            <><Clock className="w-3 h-3 mr-1" /> Pending</>
                          )}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#94a3b8]">
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Dosage</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{medicine.dosage}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Frequency</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{medicine.frequency}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Next Dose</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{medicine.nextDose}</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10"
                    >
                      Mark Taken
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                          {appointment.type}
                        </h3>
                        <Badge className={
                          appointment.status === 'upcoming' ? 'bg-[#14B8A6]/20 text-[#14B8A6]' :
                          appointment.status === 'scheduled' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' :
                          'bg-[#94a3b8]/20 text-[#94a3b8]'
                        }>
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#94a3b8]">
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Doctor</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{appointment.doctor}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Date & Time</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{appointment.date} • {appointment.time}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.75rem' }} className="mb-1">Department</p>
                          <p className="text-white" style={{ fontWeight: 600 }}>{appointment.department}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="records">
            <div className="space-y-4">
              <Button
                className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white mb-4"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload New Record
              </Button>
              {records.map((record, index) => (
                <motion.div
                  key={record.id}
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-[#38BDF8]" />
                        <h3 className="text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                          {record.name}
                        </h3>
                        <Badge className={record.status === 'normal' ? 'bg-[#14B8A6]/20 text-[#14B8A6]' : 'bg-[#F97316]/20 text-[#F97316]'}>
                          {record.status === 'normal' ? 'Normal' : 'Needs Attention'}
                        </Badge>
                      </div>
                      <div className="flex gap-6 text-[#94a3b8]">
                        <span>{record.type}</span>
                        <span>•</span>
                        <span>{record.doctor}</span>
                        <span>•</span>
                        <span>{record.date}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10"
                    >
                      View Report
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts">
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border ${
                    alert.priority === 'high' ? 'border-[#F97316]/30' :
                    alert.priority === 'medium' ? 'border-[#38BDF8]/30' :
                    'border-white/10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      alert.priority === 'high' ? 'bg-[#F97316]/20' :
                      alert.priority === 'medium' ? 'bg-[#38BDF8]/20' :
                      'bg-[#94a3b8]/20'
                    }`}>
                      <AlertCircle className={`w-5 h-5 ${
                        alert.priority === 'high' ? 'text-[#F97316]' :
                        alert.priority === 'medium' ? 'text-[#38BDF8]' :
                        'text-[#94a3b8]'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                        {alert.message}
                      </p>
                      <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                        {alert.time}
                      </p>
                    </div>
                    <Badge className={
                      alert.priority === 'high' ? 'bg-[#F97316]/20 text-[#F97316]' :
                      alert.priority === 'medium' ? 'bg-[#38BDF8]/20 text-[#38BDF8]' :
                      'bg-[#94a3b8]/20 text-[#94a3b8]'
                    }>
                      {alert.priority}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
