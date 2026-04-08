"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Header.css";

interface SubLink {
    label: string;
    href: string;
}

interface NavItem {
    label: string;
    href: string;
    children?: SubLink[];
}

interface HeaderProps {
    logo?: {
        title: string;
        subtitle: string;
        image?: string;
        width?: number;
        height?: number;
        link: string;
    };
    navigation?: NavItem[];
    cta?: {
        text: string;
        link: string;
        bgColor?: string;
        textColor?: string;
    };
    style?: {
        bgColor?: string;
        textColor?: string;
        accentColor?: string;
        dropdownBg?: string;
        dropdownText?: string;
    };
}

const DEFAULT_NAV: NavItem[] = [
    { label: "HOME", href: "/" },
    {
        label: "ABOUT US",
        href: "/about",
        children: [
            { label: "About Axion", href: "/about" },
            { label: "Sustainability & Compliance", href: "/sustainability-compliance" },
            { label: "Quality, Safety & Compliance", href: "/quality-safety-compliance" },
        ],
    },
    {
        label: "PRODUCT",
        href: "/product",
        children: [
            { label: "VRLA Batteries", href: "/vrla-batteries" },
            { label: "Wet Cell Batteries", href: "/wet-cell-batteries" },
            { label: "Stationary Battery Cabinets", href: "/battery-cabinets" },
        ],
    },
    {
        label: "SERVICES",
        href: "/services",
        children: [
            { label: "Maintenance & Monitoring", href: "/maintenance-monitoring" },
            { label: "Emergency Support & Service Contracts", href: "/emergency-support" },
            { label: "Safety Training & Documentation", href: "/safety-training-documentation" },
            { label: "Replacement & Upgrades", href: "/replacement-upgrades" },
        ],
    },
    {
        label: "INDUSTRIES",
        href: "/industries",
        children: [
            { label: "Utilities & Substations", href: "/utilities-substations" },
            { label: "Telecommunications", href: "/telecommunications" },
            { label: "Industrial & Infrastructure", href: "/industrial-infrastructure" },
            { label: "Healthcare Power", href: "/healthcare" },
            { label: "Data Centers & Colocation", href: "/data-centers" },
        ],
    },
    {
        label: "RESOURCES",
        href: "/engineering-resources",
        children: [
            { label: "Engineering Resources", href: "/engineering-resources" },
            { label: "Consulting Engineer Hub", href: "/consulting-engineer-hub" },
            { label: "FAQs", href: "/faqs" },
        ],
    },
    { label: "CONTACT", href: "/contact" },
];

export default function Header({ logo, navigation, cta, style }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const NAV_LINKS = navigation && navigation.length > 0 ? navigation : DEFAULT_NAV;
    const logoTitle = logo?.title || "AXION";
    const logoSubtitle = logo?.subtitle || "CRITICAL POWER SOLUTIONS";
    const logoLink = logo?.link || "/";
    const logoImage = logo?.image || undefined;  // treat empty string as no image
    const logoWidth = logo?.width || 180;
    const logoHeight = logo?.height || 40;
    const ctaText = cta?.text || "Get In Touch";
    const ctaLink = cta?.link || "/contact";

    // Close dropdown on outside click — but NOT on Ctrl/Cmd/Shift+click (opens link in new tab)
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey) return;
            setOpenDropdown(null);
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    const handleMouseEnter = (label: string) => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
    };

    return (
        <header className="site-header" style={{
            ...(style?.bgColor && { backgroundColor: style.bgColor }),
        }}>
            {/* ── Blue accent line at top ── */}
            <div className="header-accent-line" style={{
                ...(style?.accentColor && { background: style.accentColor }),
            }} />

            <div className="header-inner">
                {/* ── Logo ── */}
                <Link href={logoLink} className="header-logo">
                    {logoImage ? (
                        // Use regular img to avoid Next.js remote pattern issues with dynamic WP URLs
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={logoImage} alt={logoTitle} width={logoWidth} height={logoHeight} style={{ objectFit: "contain", maxHeight: logoHeight }} />
                    ) : (
                        <>
                            <span className="logo-title">{logoTitle}</span>
                            <span className="logo-subtitle">{logoSubtitle}</span>
                        </>
                    )}
                </Link>

                {/* ── Desktop Nav ── */}
                <nav className="header-nav">
                    {NAV_LINKS.map((link) =>
                        link.children ? (
                            <div
                                key={link.href}
                                className="nav-dropdown"
                                onMouseEnter={() => handleMouseEnter(link.label)}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link href={link.href} className="nav-link nav-link-dropdown" style={{
                                    ...(style?.textColor && { color: style.textColor }),
                                }}>
                                    {link.label}
                                    <svg
                                        className={`dropdown-chevron ${openDropdown === link.label ? "open" : ""}`}
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </Link>
                                <div className={`dropdown-menu ${openDropdown === link.label ? "active" : ""}`} style={{
                                    ...(style?.dropdownBg && { backgroundColor: style.dropdownBg }),
                                }}>
                                    {link.children.map((sub) => (
                                        <Link key={sub.href} href={sub.href} className="dropdown-item" style={{
                                            ...(style?.dropdownText && { color: style.dropdownText }),
                                        }}>
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={link.href} href={link.href} className="nav-link" style={{
                                ...(style?.textColor && { color: style.textColor }),
                            }}>
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* ── CTA Button ── */}
                <Link href={ctaLink} className="header-cta" style={{
                    ...(cta?.bgColor && { backgroundColor: cta.bgColor }),
                    ...(cta?.textColor && { color: cta.textColor }),
                }}>
                    {ctaText}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>

                {/* ── Mobile Hamburger ── */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileOpen ? "open" : ""}`}>
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            </div>

            {/* ── Mobile Sidebar Overlay ── */}
            <div
                className={`mobile-overlay ${mobileOpen ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* ── Mobile Sidebar (slides from right) ── */}
            <div className={`mobile-sidebar ${mobileOpen ? "active" : ""}`}>
                <div className="mobile-sidebar-header">
                    <Link href={logoLink} className="header-logo" onClick={() => setMobileOpen(false)}>
                        {logoImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={logoImage} alt={logoTitle} width={Math.round(logoWidth * 0.78)} height={Math.round(logoHeight * 0.8)} style={{ objectFit: "contain", maxHeight: Math.round(logoHeight * 0.8) }} />
                        ) : (
                            <>
                                <span className="logo-title" style={{ color: "#fff" }}>{logoTitle}</span>
                                <span className="logo-subtitle" style={{ color: "rgba(255,255,255,0.6)" }}>{logoSubtitle}</span>
                            </>
                        )}
                    </Link>
                    <button
                        className="mobile-close"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="mobile-sidebar-nav">
                    {NAV_LINKS.map((link) =>
                        link.children ? (
                            <div key={link.href} className="mobile-dropdown">
                                <button
                                    className="mobile-link mobile-link-dropdown"
                                    onClick={() =>
                                        setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                                    }
                                >
                                    {link.label}
                                    <svg
                                        className={`dropdown-chevron ${mobileDropdown === link.label ? "open" : ""}`}
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                <div
                                    className={`mobile-sub-menu ${mobileDropdown === link.label ? "active" : ""}`}
                                >
                                    {link.children.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="mobile-link mobile-sub-link"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="mobile-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                <Link
                    href={ctaLink}
                    className="header-cta mobile-cta"
                    onClick={() => setMobileOpen(false)}
                    style={{
                        ...(cta?.bgColor && { backgroundColor: cta.bgColor }),
                        ...(cta?.textColor && { color: cta.textColor }),
                    }}
                >
                    {ctaText}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            {/* ── Bottom border line ── */}
            <div className="header-bottom-line" />
        </header>
    );
}
