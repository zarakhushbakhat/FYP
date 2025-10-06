import { motion } from 'motion/react';
import { Building2, Users, Bell, Shield, Database, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

export function AdminSettingsPage() {
  const [selectedTab, setSelectedTab] = useState('institution');
  const [settings, setSettings] = useState({
    institutionName: 'Hayaat Medical Center',
    email: 'admin@hayaat.health',
    phone: '+1 (555) 123-4567',
    address: '123 Healthcare Blvd, Medical District',
    emailNotifications: true,
    pushNotifications: true,
    smsAlerts: false,
    criticalAlerts: true,
    twoFactorAuth: true,
    autoBackup: true,
  });

  const staffMembers = [
    { id: 1, name: 'Dr. Emily Chen', role: 'Chief Medical Officer', email: 'emily.chen@hayaat.health', status: 'active' },
    { id: 2, name: 'Dr. Robert Smith', role: 'Cardiologist', email: 'robert.smith@hayaat.health', status: 'active' },
    { id: 3, name: 'Sarah Johnson', role: 'Head Nurse', email: 'sarah.johnson@hayaat.health', status: 'active' },
    { id: 4, name: 'Mike Davis', role: 'Administrator', email: 'mike.davis@hayaat.health', status: 'inactive' },
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
          Settings
        </h1>
        <p className="text-[#94a3b8]" style={{ fontSize: '1.125rem' }}>
          Manage institution settings and preferences
        </p>
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="bg-[#1e293b] border border-white/10 p-1 grid grid-cols-4 gap-1 mb-6">
            <TabsTrigger 
              value="institution"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Institution
            </TabsTrigger>
            <TabsTrigger 
              value="staff"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Staff
            </TabsTrigger>
            <TabsTrigger 
              value="notifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="security"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14B8A6] data-[state=active]:to-[#38BDF8] data-[state=active]:text-white"
            >
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Institution Profile Tab */}
          <TabsContent value="institution">
            <motion.div
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Institution Profile
              </h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="institutionName" className="text-[#E5E7EB] mb-2 block">
                    Institution Name
                  </Label>
                  <Input
                    id="institutionName"
                    value={settings.institutionName}
                    onChange={(e) => setSettings({ ...settings, institutionName: e.target.value })}
                    className="bg-[#0f172a] border-white/10 text-white rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#E5E7EB] mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="bg-[#0f172a] border-white/10 text-white rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#E5E7EB] mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="bg-[#0f172a] border-white/10 text-white rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-[#E5E7EB] mb-2 block">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className="bg-[#0f172a] border-white/10 text-white rounded-xl"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white px-8"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/10 text-[#94a3b8] hover:bg-white/5"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Staff Management Tab */}
          <TabsContent value="staff">
            <motion.div
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Staff Accounts
                </h3>
                <Button
                  className="bg-gradient-to-r from-[#14B8A6] to-[#38BDF8] hover:from-[#14B8A6]/90 hover:to-[#38BDF8]/90 text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Add Staff Member
                </Button>
              </div>
              <div className="space-y-3">
                {staffMembers.map((staff, index) => (
                  <motion.div
                    key={staff.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#38BDF8] flex items-center justify-center text-white"
                        style={{ fontWeight: 600 }}>
                        {staff.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white" style={{ fontWeight: 600 }}>
                          {staff.name}
                        </p>
                        <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                          {staff.role} • {staff.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full ${
                        staff.status === 'active' 
                          ? 'bg-[#14B8A6]/20 text-[#14B8A6]' 
                          : 'bg-[#94a3b8]/20 text-[#94a3b8]'
                      }`} style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        {staff.status}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/10 text-[#94a3b8] hover:bg-white/5"
                      >
                        Manage
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <motion.div
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Notification Preferences
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Email Notifications
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Push Notifications
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Get instant alerts on your device
                    </p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      SMS Alerts
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Receive critical alerts via SMS
                    </p>
                  </div>
                  <Switch
                    checked={settings.smsAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, smsAlerts: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Critical Patient Alerts
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Always notify for critical patient events
                    </p>
                  </div>
                  <Switch
                    checked={settings.criticalAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, criticalAlerts: checked })}
                  />
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <motion.div
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Security Settings
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Two-Factor Authentication
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Automatic Backup
                    </p>
                    <p className="text-[#94a3b8]" style={{ fontSize: '0.875rem' }}>
                      Automatically backup data daily
                    </p>
                  </div>
                  <Switch
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoBackup: checked })}
                  />
                </div>
                <div className="p-4 rounded-xl bg-white/5 space-y-4">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Change Password
                    </p>
                    <p className="text-[#94a3b8] mb-4" style={{ fontSize: '0.875rem' }}>
                      Update your password regularly for better security
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/10"
                  >
                    Update Password
                  </Button>
                </div>
                <div className="p-4 rounded-xl bg-white/5 space-y-4">
                  <div>
                    <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                      Data Export
                    </p>
                    <p className="text-[#94a3b8] mb-4" style={{ fontSize: '0.875rem' }}>
                      Download all your institutional data
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#14B8A6]/30 text-[#14B8A6] hover:bg-[#14B8A6]/10"
                  >
                    <Database className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
