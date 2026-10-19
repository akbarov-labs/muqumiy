import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <span className="footer-name">{site.fullName}</span>

          <div className="footer-col-address">
            <span className="footer-label">Манзил</span>
            <span>{site.address.short}</span>
            <span>Метро: {site.address.metro}</span>
          </div>

          <div className="footer-col-contact">
            <span className="footer-label">Алоқа</span>
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>

          <div className="footer-col-social">
            <span className="footer-label">Тармоқлар</span>
            {site.socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">© 2026 Муқимий театри · muqimiyteatr.uz</div>
      </div>
    </footer>
  );
}
