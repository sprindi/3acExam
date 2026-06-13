export default function Header() {
  return (
    <header className="border-b border-border px-5 pb-[22px] pt-[30px] text-center bg-gradient-to-b from-[#141a2b] to-surface">
      <div className="text-[2rem]">🧬</div>
      <h1 className="title-gradient mt-1.5 text-[clamp(1.3rem,4.5vw,2rem)] font-extrabold tracking-[-0.5px]">
        SVT — Semestre 2 · 3ème Collège
      </h1>
      <p className="mt-1.5 text-[0.88rem] text-muted">
        Système nerveux · Système musculaire · Immunité
      </p>
      <div className="mt-2.5 inline-block rounded-full bg-yellow px-2.5 py-[3px] text-[0.7rem] font-extrabold text-[#211a05]">
        ⭐ La partie la plus importante de l'examen régional
      </div>
    </header>
  )
}
