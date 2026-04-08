"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Breadcrumb.css";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

/** Path → breadcrumb config map */
const CRUMB_MAP: Record<string, { parent?: BreadcrumbItem; label: string }> = {
    // About
    "/about":                      { label: "About Us" },
    "/sustainability-compliance":  { parent: { label: "About", href: "/about" }, label: "Sustainability & Compliance" },
    "/quality-safety-compliance":  { parent: { label: "About", href: "/about" }, label: "Quality, Safety & Compliance" },

    // Products
    "/vrla-batteries":             { parent: { label: "Products", href: "/#products" }, label: "VRLA Batteries" },
    "/wet-cell-batteries":         { parent: { label: "Products", href: "/#products" }, label: "Wet Cell Batteries" },
    "/battery-cabinets":           { parent: { label: "Products", href: "/#products" }, label: "Battery Cabinets" },

    // Services
    "/maintenance-monitoring":         { parent: { label: "Services", href: "/#services" }, label: "Maintenance & Monitoring" },
    "/emergency-support":              { parent: { label: "Services", href: "/#services" }, label: "Emergency Support" },
    "/safety-training-documentation":  { parent: { label: "Services", href: "/#services" }, label: "Safety Training" },
    "/replacement-upgrades":           { parent: { label: "Services", href: "/#services" }, label: "Replacement & Upgrades" },

    // Industries
    "/data-centers":               { parent: { label: "Industries", href: "/#industries" }, label: "Data Centers" },
    "/healthcare":                 { parent: { label: "Industries", href: "/#industries" }, label: "Healthcare" },
    "/industrial-infrastructure":  { parent: { label: "Industries", href: "/#industries" }, label: "Industrial & Infrastructure" },
    "/telecommunications":         { parent: { label: "Industries", href: "/#industries" }, label: "Telecommunications" },
    "/utilities-substations":      { parent: { label: "Industries", href: "/#industries" }, label: "Utilities & Substations" },

    // Resources
    "/engineering-resources":     { parent: { label: "Resources", href: "/#resources" }, label: "Engineering Resources" },
    "/consulting-engineer-hub":   { parent: { label: "Resources", href: "/#resources" }, label: "Consulting Engineer Hub" },
    "/faqs":                      { parent: { label: "Resources", href: "/#resources" }, label: "FAQs" },

    // Other
    "/contact": { label: "Contact" },
};

export default function Breadcrumb() {
    const pathname = usePathname();

    // Don't render on homepage
    if (!pathname || pathname === "/") return null;

    const crumb = CRUMB_MAP[pathname];
    if (!crumb) return null;

    // Only show: Parent / Page Name  (no "Home" prefix)
    const items: BreadcrumbItem[] = [
        ...(crumb.parent ? [crumb.parent] : []),
        { label: crumb.label },
    ];

    return (
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
            <div className="breadcrumb-inner">
                <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
                    {items.map((item, idx) => {
                        const isLast = idx === items.length - 1;
                        return (
                            <li
                                key={idx}
                                className={`breadcrumb-item${isLast ? " breadcrumb-item--current" : ""}`}
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                {!isLast && item.href ? (
                                    <Link href={item.href} className="breadcrumb-link" itemProp="item">
                                        <span itemProp="name">{item.label}</span>
                                    </Link>
                                ) : (
                                    <span className="breadcrumb-current" itemProp="name" aria-current="page">
                                        {item.label}
                                    </span>
                                )}
                                <meta itemProp="position" content={String(idx + 1)} />
                                {!isLast && (
                                    <svg className="breadcrumb-sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                                    </svg>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
