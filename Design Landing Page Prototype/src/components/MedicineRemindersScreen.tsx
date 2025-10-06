import { motion } from 'motion/react';
import { Pill, Plus, Clock, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { useState } from 'react';

export function MedicineRemindersScreen() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Aspirin', time: '8:00 AM', dosage: '100mg', frequency: 'Daily', taken: true },
    { id: 2, name: 'Vitamin D', time: '12:00 PM', dosage: '1000 IU', frequency: 'Daily', taken: true },
    { id: 3, name: 'Metformin', time: '2:00 PM', dosage: '500mg', frequency: 'Twice daily', taken: false },
    { id: 4, name: 'Lisinopril', time: '8:00 PM', dosage: '10mg', frequency: 'Daily', taken: false },
  ]);

  const toggleMedicine = (id: number) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

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
            Medicine Reminders
          </h1>
          <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
            Manage your medication schedule
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white rounded-xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Reminder
        </Button>
      </div>

      {/* Medicine List */}
      <div className="grid gap-4">
        {medicines.map((medicine, index) => (
          <motion.div
            key={medicine.id}
            className={`bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border transition-all duration-300 ${
              medicine.taken 
                ? 'border-[#14B8A6]/30 opacity-75' 
                : 'border-white/10 hover:border-[#14B8A6]/30'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  medicine.taken 
                    ? 'bg-[#14B8A6]/20' 
                    : 'bg-[#38BDF8]/20'
                }`}>
                  <Pill className="w-7 h-7" style={{ color: medicine.taken ? '#14B8A6' : '#38BDF8' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                    {medicine.name}
                  </h3>
                  <div className="flex items-center gap-4 text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {medicine.time}
                    </span>
                    <span>•</span>
                    <span>{medicine.dosage}</span>
                    <span>•</span>
                    <span>{medicine.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center gap-4">
                <div className="text-right mr-4">
                  <div className={`${medicine.taken ? 'text-[#14B8A6]' : 'text-[#F97316]'}`}
                    style={{ fontWeight: 600 }}>
                    {medicine.taken ? 'Taken' : 'Pending'}
                  </div>
                  <div className="text-[#94a3b8]" style={{ fontSize: '0.75rem' }}>
                    {medicine.taken ? 'Completed' : 'Not taken yet'}
                  </div>
                </div>
                <Switch
                  checked={medicine.taken}
                  onCheckedChange={() => toggleMedicine(medicine.id)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#14B8A6]/30">
          <div className="flex items-center gap-3 mb-2">
            <Check className="w-5 h-5 text-[#14B8A6]" />
            <span className="text-[#94a3b8]">Taken Today</span>
          </div>
          <div className="text-[#14B8A6]" style={{ fontSize: '2rem', fontWeight: 700 }}>
            {medicines.filter(m => m.taken).length}/{medicines.length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#F97316]/30">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-[#F97316]" />
            <span className="text-[#94a3b8]">Pending</span>
          </div>
          <div className="text-[#F97316]" style={{ fontSize: '2rem', fontWeight: 700 }}>
            {medicines.filter(m => !m.taken).length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#38BDF8]/30">
          <div className="flex items-center gap-3 mb-2">
            <Pill className="w-5 h-5 text-[#38BDF8]" />
            <span className="text-[#94a3b8]">Total Medicines</span>
          </div>
          <div className="text-[#38BDF8]" style={{ fontSize: '2rem', fontWeight: 700 }}>
            {medicines.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
