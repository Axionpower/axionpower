import { NextRequest, NextResponse } from "next/server";

// RFC-5322 inspired — requires TLD of at least 2 chars
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Allowed form types — prevents injection via arbitrary form_type values
const ALLOWED_FORM_TYPES = ["contact", "quote", "support", "general"];

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { formType, ...fields } = body;

        // ── Validate formType ──
        if (!formType || typeof formType !== "string") {
            return NextResponse.json(
                { error: "Form type is required." },
                { status: 400 }
            );
        }
        // Sanitise: strip to alphanumeric/dash/underscore only
        const safeFormType = formType.replace(/[^a-zA-Z0-9_\- ]/g, "").trim().slice(0, 50);

        // ── Validate required fields ──
        const errors: string[] = [];

        if (!fields.fullName?.trim()) {
            errors.push("Full name is required.");
        } else if (fields.fullName.trim().length > 200) {
            errors.push("Full name must be under 200 characters.");
        }

        if (!fields.email?.trim()) {
            errors.push("Email address is required.");
        } else if (!EMAIL_REGEX.test(fields.email.trim())) {
            errors.push("Please enter a valid email address.");
        }

        if (fields.message && fields.message.length > 5000) {
            errors.push("Message must be under 5000 characters.");
        }

        if (errors.length > 0) {
            return NextResponse.json({ error: errors[0], errors }, { status: 400 });
        }

        // ── Forward to WordPress REST API ──
        // WP_URL is a private server-side env var (not NEXT_PUBLIC_) to avoid
        // exposing the WordPress origin in client-side bundles.
        const wpBase = process.env.WP_URL
            || process.env.NEXT_PUBLIC_WP_GRAPHQL_URL?.replace("/graphql", "");

        if (!wpBase) {
            console.error("WP_URL not configured");
            return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
        }

        const wpRestUrl = `${wpBase}/wp-json/axion/v1/contact-form`;

        const wpRes = await fetch(wpRestUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                form_type: safeFormType,
                fields,
            }),
        });

        if (!wpRes.ok) {
            console.error("WordPress API returned:", wpRes.status);
            return NextResponse.json(
                { error: "Could not save your submission. Please try again." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
