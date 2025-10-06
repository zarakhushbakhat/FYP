import { motion } from 'motion/react';
import { Heart, Home, Pill, Calendar, FileText, Bell, Mic, Scan, Users, Menu, X, Search, Settings } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import hayaatLogo from '@/assets/Hayaat_Logo.png';

interface DashboardLayoutProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  children: React.ReactNode;
  isAdmin?: boolean;
}

export function DashboardLayout({ currentScreen, onNavigate, children, isAdmin = false }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'medicines', label: 'Medicines', icon: Pill },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'voice', label: 'Voice Assistant', icon: Mic },
    { id: 'scanner', label: 'Report Scanner', icon: Scan },
  ];

  const adminMenuItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: Home },
    { id: 'admin-patients', label: 'Patients', icon: Users },
    { id: 'admin-appointments', label: 'Appointments', icon: Calendar },
    { id: 'admin-records', label: 'Records', icon: FileText },
    { id: 'admin-notifications', label: 'Notifications', icon: Bell },
    { id: 'voice', label: 'Voice Assistant', icon: Mic },
    { id: 'scanner', label: 'Report Scanner', icon: Scan },
    { id: 'admin-reports', label: 'Reports', icon: FileText },
    { id: 'admin-settings', label: 'Settings', icon: Settings },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1a] to-[#0f172a] flex flex-col">
      {/* Top Navigation Bar - Admin Only */}
      {isAdmin && (
        <motion.header
          className="bg-gradient-to-r from-[#1e293b]/95 to-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 z-30"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                <img src={hayaatLogo} alt="Hayaat" className="w-full h-full object-contain" />
              </div>
              <span 
                className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent hidden md:block"
                style={{ fontSize: '1.5rem', fontWeight: 700 }}
              >
                Hayaat
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
              <Input
                placeholder="Search patients, records, appointments..."
                className="w-full bg-[#0f172a] border-white/10 text-white rounded-xl pl-12"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                variant="ghost"
                className="relative text-[#94a3b8] hover:text-white hover:bg-white/5"
                onClick={() => onNavigate('admin-notifications')}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#F97316] rounded-full"></span>
              </Button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white cursor-pointer"
                style={{ fontWeight: 600 }}>
                A
              </div>
            </div>
          </div>
        </motion.header>
      )}

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed z-50 p-3 rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 text-white"
          style={{ top: isAdmin ? '5rem' : '1rem', left: '1rem' }}
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <motion.aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-[#1e293b]/95 to-[#0f172a]/95 backdrop-blur-xl border-r border-white/10 lg:translate-x-0 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ top: isAdmin ? '4.5rem' : '0', height: isAdmin ? 'calc(100vh - 4.5rem)' : '100vh' }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 flex flex-col h-full">
            {/* Logo - Only show if not admin (admin has it in top bar) */}
            {!isAdmin && (
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                  <img src={hayaatLogo} alt="Hayaat" className="w-full h-full object-contain" />
                </div>
                <span 
                  className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] bg-clip-text text-transparent"
                  style={{ fontSize: '1.5rem', fontWeight: 700 }}
                >
                  Hayaat
                </span>
              </div>
            )}

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#14B8A6]/20 to-[#38BDF8]/20 border border-[#14B8A6]/30 text-[#14B8A6]'
                        : 'text-[#94a3b8] hover:bg-white/5 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span style={{ fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* User Profile - Only show if not admin */}
            {!isAdmin && (
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                    U
                  </div>
                  <div className="flex-1">
                    <div className="text-white" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                      John Doe
                    </div>
                    <div className="text-[#94a3b8]" style={{ fontSize: '0.75rem' }}>
                      Patient
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
