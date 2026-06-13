import { Link, useLocation } from 'react-router-dom'

// Barre de navigation haute, partagée par les pages de leçons.
// Permet de revenir à l'accueil des leçons et de filer vers les exercices.
export default function LessonNav() {
  const { pathname } = useLocation()
  const onLessons = pathname.startsWith('/lecon') // /lecons et /lecons/:chapitre

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/[0.93] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-wrap items-center gap-3 px-4 py-[11px]">
        <Link to="/lecons" className="flex items-center gap-2 font-extrabold">
          <span className="text-lg">🧬</span>
          <span className="title-gradient text-[0.98rem]">SVT · Leçons</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2 text-[0.8rem] font-bold">
          <Link
            to="/lecons"
            className={
              'rounded-full border-[1.5px] px-3 py-[6px] transition-colors ' +
              (onLessons
                ? 'border-blue bg-blue text-white'
                : 'border-border text-muted hover:border-blue hover:text-blue')
            }
          >
            📖 Leçons
          </Link>
          <Link
            to="/exercices"
            className="rounded-full border-[1.5px] border-border px-3 py-[6px] text-muted transition-colors hover:border-green hover:text-green"
          >
            ✏️ S’entraîner
          </Link>
        </nav>
      </div>
    </header>
  )
}
