import { motion } from 'motion/react';
import { Users, Search, Filter, MoreVertical, AlertCircle, Pill } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface AdminPatientsPageProps {
  onNavigate: (page: string, patientId?: number) => void;
}

export function AdminPatientsPage({ onNavigate }: AdminPatientsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const patients = [
    { 
      id: 1, 
      name: 'Sarah Anderson', 
      age: 45, 
      room: 'A-204',
      condition: 'Diabetes Type 2', 
      lastVisit: '2 days ago', 
      medicines: 3, 
      status: 'active',
      alert: false,
      image: 'SA'
    },
    { 
      id: 2, 
      name: 'Michael Brown', 
      age: 62, 
      room: 'B-102',
      condition: 'Hypertension', 
      lastVisit: '1 week ago', 
      medicines: 2, 
      status: 'active',
      alert: true,
      image: 'MB'
    },
    { 
      id: 3, 
      name: 'Emily Davis', 
      age: 34, 
      room: 'C-301',
      condition: 'Asthma', 
      lastVisit: '3 days ago', 
      medicines: 1, 
      status: 'pending',
      alert: false,
      image: 'ED'
    },
    { 
      id: 4, 
      name: 'James Wilson', 
      age: 51, 
      room: 'A-105',
      condition: 'Heart Disease', 
      lastVisit: '5 days ago', 
      medicines: 4, 
      status: 'active',
      alert: true,
      image: 'JW'
    },
    { 
      id: 5, 
      name: 'Lisa Martinez', 
      age: 28, 
      room: 'B-209',
      condition: 'Anxiety', 
      lastVisit: '1 day ago', 
      medicines: 1, 
      status: 'active',
      alert: false,
      image: 'LM'
    },
    { 
      id: 6, 
      name: 'Robert Taylor', 
      age: 58, 
      room: 'C-407',
      condition: 'COPD', 
      lastVisit: '4 days ago', 
      medicines: 3, 
      status: 'active',
      alert: true,
      image: 'RT'
    },
    { 
      id: 7, 
      name: 'Jennifer White', 
      age: 41, 
      room: 'A-308',
      condition: 'Arthritis', 
      lastVisit: '1 week ago', 
      medicines: 2, 
      status: 'pending',
      alert: false,
      image: 'JW'
    },
    { 
      id: 8, 
      name: 'David Garcia', 
      age: 67, 
      room: 'B-510',
      condition: 'Alzheimer\'s', 
      lastVisit: '2 days ago', 
      medicines: 5, 
      status: 'active',
      alert: true,
      image: 'DG'
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
            Patients
          </h1>
          <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
            Manage all patient records and information
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white px-6 py-6 rounded-xl"
          style={{ fontWeight: 600 }}
        >
          <Users className="w-5 h-5 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Search and Filter */}
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
          <Input
            placeholder="Search patients by name, condition, or room..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1e293b] border-white/10 text-white rounded-xl pl-12 py-6"
            style={{ fontSize: '1rem' }}
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setFilterOpen(!filterOpen)}
          className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10 rounded-xl px-6"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </Button>
      </motion.div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {patients.map((patient, index) => (
          <motion.div
            key={patient.id}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-[#14B8A6]/30 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => onNavigate('patient-detail', patient.id)}
          >
            {/* Alert Badge */}
            {patient.alert && (
              <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#F97316]/20 w-fit">
                <AlertCircle className="w-4 h-4 text-[#F97316]" />
                <span className="text-[#F97316]" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                  Alert
                </span>
              </div>
            )}

            {/* Patient Info */}
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white flex-shrink-0"
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                {patient.image}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white truncate" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                  {patient.name}
                </h3>
                <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                  {patient.age} years • {patient.room}
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-[#94a3b8] hover:text-white hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            {/* Condition */}
            <div className="mb-4">
              <p className="text-[#94a3b8] mb-1" style={{ fontSize: '0.75rem' }}>
                Condition
              </p>
              <p className="text-white" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                {patient.condition}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-[#38BDF8]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  {patient.medicines} Medicines
                </span>
              </div>
              <Badge
                className={`${
                  patient.status === 'active'
                    ? 'bg-[#14B8A6]/20 text-[#14B8A6]'
                    : 'bg-[#F97316]/20 text-[#F97316]'
                }`}
              >
                {patient.status}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        className="flex items-center justify-between pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
          Showing 1-8 of 247 patients
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-white/10 text-[#94a3b8] hover:bg-white/5"
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-white/10 text-[#94a3b8] hover:bg-white/5"
          >
            Next
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
