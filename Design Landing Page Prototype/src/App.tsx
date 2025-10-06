import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingPage } from './components/LoadingPage';
import { BrandingPage } from './components/BrandingPage';
import { LandingPage } from './components/LandingPage';
import { WelcomePage } from './components/WelcomePage';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { DashboardLayout } from './components/DashboardLayout';
import { UserDashboard } from './components/UserDashboard';
import { MedicineRemindersScreen } from './components/MedicineRemindersScreen';
import { AppointmentsScreen } from './components/AppointmentsScreen';
import { MedicalRecordsScreen } from './components/MedicalRecordsScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { VoiceAssistantScreen } from './components/VoiceAssistantScreen';
import { ReportScannerScreen } from './components/ReportScannerScreen';
import { InstitutionDashboard } from './components/InstitutionDashboard';
import { AdminPatientsPage } from './components/AdminPatientsPage';
import { PatientDetailPage } from './components/PatientDetailPage';
import { AdminReportsPage } from './components/AdminReportsPage';
import { AdminSettingsPage } from './components/AdminSettingsPage';

type PageState = 
  | 'loading' 
  | 'branding' 
  | 'landing' 
  | 'welcome' 
  | 'login' 
  | 'signup' 
  | 'dashboard'
  | 'medicines'
  | 'appointments'
  | 'records'
  | 'notifications'
  | 'voice'
  | 'scanner'
  | 'admin-dashboard'
  | 'admin-patients'
  | 'admin-appointments'
  | 'admin-records'
  | 'admin-notifications'
  | 'admin-reports'
  | 'admin-settings'
  | 'patient-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('loading');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<number | undefined>();

  useEffect(() => {
    // Loading page for 5 seconds
    const loadingTimer = setTimeout(() => {
      setCurrentPage('branding');
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Branding page for 7 seconds (only trigger when we enter branding page)
    if (currentPage === 'branding') {
      const brandingTimer = setTimeout(() => {
        setCurrentPage('landing');
      }, 7000);

      return () => clearTimeout(brandingTimer);
    }
  }, [currentPage]);

  const handleNavigation = (page: PageState | string, patientId?: number) => {
    setCurrentPage(page as PageState);
    if (patientId !== undefined) {
      setSelectedPatientId(patientId);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsAdmin(true);
    setCurrentPage('admin-dashboard');
  };

  const renderDashboardScreen = () => {
    switch (currentPage) {
      case 'dashboard':
        return <UserDashboard onNavigate={handleNavigation} />;
      case 'medicines':
        return <MedicineRemindersScreen />;
      case 'appointments':
        return <AppointmentsScreen />;
      case 'records':
        return <MedicalRecordsScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'voice':
        return <VoiceAssistantScreen />;
      case 'scanner':
        return <ReportScannerScreen />;
      case 'admin-dashboard':
        return <InstitutionDashboard />;
      case 'admin-patients':
        return <AdminPatientsPage onNavigate={handleNavigation} />;
      case 'patient-detail':
        return <PatientDetailPage onNavigate={handleNavigation} patientId={selectedPatientId} />;
      case 'admin-appointments':
        return <AppointmentsScreen />;
      case 'admin-records':
        return <MedicalRecordsScreen />;
      case 'admin-notifications':
        return <NotificationsScreen />;
      case 'admin-reports':
        return <AdminReportsPage />;
      case 'admin-settings':
        return <AdminSettingsPage />;
      default:
        return <UserDashboard onNavigate={handleNavigation} />;
    }
  };

  const dashboardPages: PageState[] = [
    'dashboard',
    'medicines',
    'appointments',
    'records',
    'notifications',
    'voice',
    'scanner',
    'admin-dashboard',
    'admin-patients',
    'admin-appointments',
    'admin-records',
    'admin-notifications',
    'admin-reports',
    'admin-settings',
    'patient-detail'
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      {/* Global Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #14B8A6 #0f172a;
        }
        
        *::-webkit-scrollbar {
          width: 10px;
        }
        
        *::-webkit-scrollbar-track {
          background: #0f172a;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #14B8A6;
          border-radius: 5px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #38BDF8;
        }
      `}</style>

      {isAuthenticated && dashboardPages.includes(currentPage) ? (
        /* Dashboard with Layout */
        <DashboardLayout
          currentScreen={currentPage}
          onNavigate={handleNavigation}
          isAdmin={isAdmin}
        >
          {renderDashboardScreen()}
        </DashboardLayout>
      ) : (
        /* Pre-authentication pages */
        <AnimatePresence mode="wait">
          {currentPage === 'loading' && (
            <LoadingPage key="loading" />
          )}
          
          {currentPage === 'branding' && (
            <BrandingPage key="branding" />
          )}
          
          {currentPage === 'landing' && (
            <LandingPage 
              key="landing" 
              onGetStarted={() => handleNavigation('welcome')}
            />
          )}
          
          {currentPage === 'welcome' && (
            <WelcomePage 
              key="welcome"
              onNavigate={(page) => handleNavigation(page as PageState)}
            />
          )}
          
          {currentPage === 'login' && (
            <LoginPage 
              key="login"
              onNavigate={(page) => {
                if (page === 'landing') {
                  handleLogin();
                } else {
                  handleNavigation(page as PageState);
                }
              }}
            />
          )}
          
          {currentPage === 'signup' && (
            <SignUpPage 
              key="signup"
              onNavigate={(page) => {
                if (page === 'landing') {
                  handleLogin();
                } else {
                  handleNavigation(page as PageState);
                }
              }}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
