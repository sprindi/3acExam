import { exercices } from '../data/exercices'
import { resumes } from '../data/resumes'
import ResumeCard from './ResumeCard'
import Exercise from './Exercise'

const ACCENT = {
  blue: 'from-blue/[0.16] to-blue/[0.04] border-blue/30',
  orange: 'from-orange/[0.16] to-orange/[0.04] border-orange/30',
  green: 'from-green/[0.16] to-green/[0.04] border-green/30',
}

function SectionLabel({ children }) {
  return (
    <div className="my-[18px] mb-[10px] mt-[18px] flex items-center gap-2 text-[0.76rem] font-extrabold uppercase tracking-[1px] text-muted">
      <span className="h-[2px] w-4 flex-[0_0_16px] bg-line" />
      {children}
    </div>
  )
}

export default function ChapterSection({ chapter }) {
  const list = exercices.filter((e) => e.chapter === chapter.id)
  const firstHardIdx = list.findIndex((e) => e.difficulty === 'difficile')

  return (
    <section id={'chap-' + chapter.id} className="mb-[34px] scroll-mt-16">
      <div
        className={
          'mb-[18px] flex items-center gap-[13px] rounded-[14px] border bg-gradient-to-br px-[18px] py-4 ' +
          ACCENT[chapter.accent]
        }
      >
        <div className="text-[2rem]">{chapter.icon}</div>
        <div>
          <h2 className="text-[1.15rem] font-extrabold">{chapter.title}</h2>
          <p className="mt-0.5 text-[0.8rem] text-muted">{chapter.subtitle}</p>
        </div>
      </div>

      <ResumeCard blocks={resumes[chapter.id]} />

      <SectionLabel>Connaissances</SectionLabel>
      {list.map((ex, i) => (
        <div key={ex.id}>
          {i === firstHardIdx && firstHardIdx > 0 && (
            <SectionLabel>{chapter.hardLabel}</SectionLabel>
          )}
          <Exercise ex={ex} />
        </div>
      ))}
    </section>
  )
}
