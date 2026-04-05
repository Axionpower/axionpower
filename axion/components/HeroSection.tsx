import Image from "next/image";
import type { HeroData } from "@/lib/queries/hero";
import HeroButtons from "./HeroButtons";

interface Props {
    data: HeroData;
}

export default function HeroSection({ data }: Props) {
    const overlayOpacityDecimal = (data.overlayOpacity ?? 60) / 100;

    const alignItems =
        data.contentAlignment === "left"
            ? "flex-start"
            : data.contentAlignment === "right"
                ? "flex-end"
                : "center";

    const textAlign = data.contentAlignment || "center";

    // Auto-detect video URLs even if placed in the image field
    const VIDEO_EXT = /\.(mp4|webm|mov|ogg)(\?.*)?$/i;
    const bgImageUrl = data.backgroundImage?.node?.sourceUrl;
    const isImageActuallyVideo = bgImageUrl && VIDEO_EXT.test(bgImageUrl);

    // Resolve: explicit backgroundVideo OR image URL that's actually a video
    const resolvedVideo = data.backgroundVideo || (isImageActuallyVideo ? bgImageUrl : undefined);
    // Only use image for <Image> if it's NOT a video file
    const resolvedImage = !isImageActuallyVideo ? bgImageUrl : undefined;

    return (
        <section
            style={{
                position: "relative",
                minHeight: `${Math.max(data.sectionMinHeight || 100, 120)}vh`,
                paddingTop: "4rem",
                paddingBottom: "10rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* ── Background Video (Desktop) ── */}
            {resolvedVideo && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={resolvedImage || undefined}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                    className="hero-bg-desktop"
                >
                    <source src={resolvedVideo} type={resolvedVideo.endsWith(".webm") ? "video/webm" : "video/mp4"} />
                </video>
            )}

            {/* ── Background Image (Desktop) — shown only if no video ── */}
            {!resolvedVideo && resolvedImage && (
                <Image
                    src={resolvedImage}
                    alt={data.backgroundImage?.node?.altText || "Hero background"}
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    className="hero-bg-desktop"
                />
            )}

            {/* ── Background Image (Mobile) ── */}
            {data.backgroundImageMobile?.node?.sourceUrl && (
                <Image
                    src={data.backgroundImageMobile.node.sourceUrl}
                    alt={
                        data.backgroundImageMobile.node.altText ||
                        "Hero background mobile"
                    }
                    fill
                    priority
                    quality={85}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    className="hero-bg-mobile"
                />
            )}

            {/* ── Fallback if no images or video uploaded yet ── */}
            {!resolvedVideo && !resolvedImage && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, #0a0a2e 0%, #0d1b3e 50%, #0a1628 100%)",
                        zIndex: 0,
                    }}
                />
            )}

            {/* ── Overlay ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: data.overlayColor || "#000000",
                    opacity: overlayOpacityDecimal,
                    zIndex: 1,
                }}
            />

            {/* ── Content ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: `${data.contentMaxWidth || 800}px`,
                    width: "100%",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems,
                    textAlign: textAlign as React.CSSProperties["textAlign"],
                }}
            >
                {(() => {
                    const HeadingTag = (data.headingTag || 'h1') as React.ElementType;
                    return (
                        <HeadingTag
                            style={{
                                color: data.headingColor || "#FFFFFF",
                                fontSize: `clamp(${data.headingFontSizeMobile || 32}px, 5vw, ${data.headingFontSize || 56}px)`,
                                fontWeight: 700,
                                lineHeight: 1.15,
                                marginBottom: "1.25rem",
                            }}
                        >
                            {data.headingText || "Welcome"}
                        </HeadingTag>
                    );
                })()}

                <p
                    style={{
                        color: data.subheadingColor || "#CCCCCC",
                        fontSize: `clamp(${data.subheadingFontSizeMobile || 15}px, 2vw, ${data.subheadingFontSize || 18}px)`,
                        lineHeight: 1.7,
                        marginBottom: "2.5rem",
                        maxWidth: "680px",
                    }}
                >
                    {data.subheadingText || ""}
                </p>

                {/* CTA Buttons (Client Component for hover) */}
                {data.ctaPrimary && data.ctaSecondary && (
                    <HeroButtons
                        primary={data.ctaPrimary}
                        secondary={data.ctaSecondary}
                    />
                )}
            </div>
        </section>
    );
}
