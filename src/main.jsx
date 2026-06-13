import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import LessonsHome from './components/lessons/LessonsHome'
import LessonPage from './components/lessons/LessonPage'
import { ScoreProvider } from './hooks/useScore'
import './index.css'

// `basename` reprend le `base` de Vite pour fonctionner sur GitHub Pages.
//   "/"                  → redirige vers l'accueil des leçons
//   "/lecons"            → accueil des leçons (3 chapitres)
//   "/lecons/:chapitre"  → page de leçon d'un chapitre (nerveux|muscle|immunite)
//   "/exercices"         → site d'exercices (accepte ?chap=<chapitre>)
const basename = import.meta.env.BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScoreProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Navigate to="/lecons" replace />} />
          <Route path="/lecons" element={<LessonsHome />} />
          <Route path="/lecons/:chapitre" element={<LessonPage />} />
          <Route path="/exercices" element={<App />} />
          {/* Anciennes URLs → on garde un fallback propre */}
          <Route path="/lecon/:chapitre" element={<LessonPage />} />
          <Route path="*" element={<Navigate to="/lecons" replace />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  </React.StrictMode>
)
