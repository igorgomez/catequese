import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import ProfilePage from './pages/ProfilePage';
import QuizPage from './pages/QuizPage';
import './styles/globals.css';

function App() {
  return (
    <ProgressProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/modulo/:moduleId" element={<ModulePage />} />
              <Route path="/quiz/:moduleId" element={<QuizPage />} />
              <Route path="/perfil" element={<ProfilePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;