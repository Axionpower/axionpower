import Link from "next/link";
import Image from "next/image";
import "./Footer.css";
import type { FooterData, FooterColumn, FooterLink } from "@/lib/queries/footer";
import { FOOTER_DEFAULTS } from "@/lib/queries/footer";

interface Props {
    data?: FooterData;
}

function BrandColumn({ col }: { col: FooterColumn }) {
    return (
        <div className="footer-col footer-brand">
            <div className="footer-logo">
                {col.logoImage ? (
                    <Image
                        src={col.logoImage}
                        alt={col.logoMain || "Logo"}
                        width={180}
                        height={50}
                        className="footer-logo-img"
                    />
                ) : (
                    <>
                        <p className="footer-logo-main">{col.logoMain || "AXION"}</p>
                        {col.logoSub && <p className="footer-logo-sub">{col.logoSub}</p>}
                    </>
                )}
            </div>
            <p className="footer-brand-desc">
                Reliable battery solutions for mission-critical power systems. Engineering excellence backed by responsive service and lifecycle support.
            </p>
            {(col.phone || col.email) && (
                <div className="footer-contact-info">
                    {col.phone && (
                        <a href={`tel:${col.phone}`} className="footer-contact-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                            {col.phone}
                        </a>
                    )}
                    {col.email && (
                        <a href={`mailto:${col.email}`} className="footer-contact-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            {col.email}
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

function LinksColumn({ col }: { col: FooterColumn }) {
    return (
        <div className="footer-col footer-links-col">
            {col.title && <h3 className="footer-col-title">{col.title}</h3>}
            {col.links && col.links.length > 0 && (
                <ul className="footer-links">
                    {col.links.map((link: FooterLink, i: number) => (
                        <li key={i}>
                            <Link href={link.url || "#"}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function TextColumn({ col }: { col: FooterColumn }) {
    return (
        <div className="footer-col footer-text-col">
            {col.title && <h3 className="footer-col-title">{col.title}</h3>}
            {col.content && (
                <div
                    className="footer-text-content"
                    dangerouslySetInnerHTML={{ __html: col.content }}
                />
            )}
        </div>
    );
}

export default function Footer({ data = FOOTER_DEFAULTS }: Props) {
    const colCount = data.columns.length;

    // Build grid template: brand columns get 1.4fr, others get 1fr
    const gridTemplate = data.columns
        .map((col) => (col.type === "brand" ? "1.4fr" : "1fr"))
        .join(" ");

    return (
        <footer
            className="footer-section"
            style={{
                "--footer-bg": data.bgColor,
                "--footer-text": data.textColor,
                "--footer-heading": data.headingColor,
                "--footer-hover": data.linkHoverColor,
                "--footer-divider": data.dividerColor,
                "--footer-cols": String(colCount),
                "--footer-grid": gridTemplate,
            } as React.CSSProperties}
        >
            {/* Decorative top glow */}
            <div className="footer-glow" />

            <div className="footer-container">
                {data.columns.map((col, i) => {
                    switch (col.type) {
                        case "brand":
                            return <BrandColumn key={i} col={col} />;
                        case "text":
                            return <TextColumn key={i} col={col} />;
                        case "links":
                        default:
                            return <LinksColumn key={i} col={col} />;
                    }
                })}
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p className="footer-copyright">{data.copyright}</p>
                <div className="footer-bottom-links">
                    <Link href="/terms" className="footer-bottom-link">Terms</Link>
                    <span className="footer-bottom-dot">·</span>
                    <Link href="/privacy" className="footer-bottom-link">Privacy</Link>
                </div>
            </div>
        </footer>
    );
}
