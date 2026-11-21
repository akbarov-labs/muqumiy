// This site is a redesign concept, not the theatre's own site. The strip says so on every
// page, so nobody takes the phones, prices or dates here for the theatre's real ones.
export function ConceptNotice() {
  return (
    <div className="concept-notice" role="note">
      <div className="container">
        Бу Муқимий театрининг расмий сайти эмас: бу{" "}
        <a href="https://akbarovlabs.uz" target="_blank" rel="noopener">
          Akbarov Labs
        </a>{" "}
        тайёрлаган концепт дизайн. Маълумотлар намуна учун.
      </div>
    </div>
  );
}
