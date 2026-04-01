import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { timingSafeEqual } from "crypto";

const KNOWN_PATHS = [
    "/",
    "/vrla-batteries",
    "/wet-cell-batteries",
    "/battery-cabinets",
    "/engineering-resources",
    "/consulting-engineer-hub",
    "/faqs",
    "/data-centers",
    "/healthcare",
    "/industrial-infrastructure",
    "/telecommunications",
    "/utilities-substations",
    "/maintenance",
    "/emergency-support",
    "/replacement-upgrades",
    "/safety-training",
    "/quality-safety",
    "/sustainability",
    "/about",
    "/contact",
];

export async function POST(req: NextRequest) {
    const secret = req.headers.get("x-revalidate-secret");
    const expected = process.env.REVALIDATE_SECRET;

    // Constant-time comparison prevents timing attacks
    if (!expected || !secret) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const expectedBuf = Buffer.from(expected, "utf8");
        const secretBuf   = Buffer.from(secret,   "utf8");
        if (expectedBuf.length !== secretBuf.length || !timingSafeEqual(expectedBuf, secretBuf)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
    } catch {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Revalidate all known page paths
        for (const path of KNOWN_PATHS) {
            revalidatePath(path);
        }

        return NextResponse.json({ revalidated: true, paths: KNOWN_PATHS });
    } catch (error) {
        console.error("Revalidation error:", error);
        return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
    }
}
