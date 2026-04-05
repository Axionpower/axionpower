/**
 * HeroBackground – Wrapper that renders either a CSS background-image or a fullscreen video
 * 
 * Designed for hero sections that currently use CSS `backgroundImage` inline style.
 * When a videoUrl is provided, it renders a <video> element instead of the CSS background.
 *
 * Usage:
 *   <HeroBackground imageUrl={data.bgImage} videoUrl={data.bgVideoUrl} className="dc-hero">
 *     <div className="dc-hero-inner">...</div>
 *   </HeroBackground>
 */

import React from "react";

interface HeroBackgroundProps {
    /** The background image URL (used for CSS backgroundImage or as video poster) */
    imageUrl?: string;
    /** Optional video URL – overrides the image when set */
    videoUrl?: string;
    /** CSS class for the section element */
    className?: string;
    /** Additional inline styles for the section element */
    style?: React.CSSProperties;
    /** Children rendered inside the section */
    children: React.ReactNode;
}

export default function HeroBackground({
    imageUrl,
    videoUrl,
    className,
    style,
    children,
}: HeroBackgroundProps) {
    // Auto-detect video file extensions even if pasted in the image field
    const VIDEO_EXT = /\.(mp4|webm|mov|ogg)(\?.*)?$/i;

    const resolvedVideoUrl =
        videoUrl?.trim() ||
        (imageUrl && VIDEO_EXT.test(imageUrl) ? imageUrl : undefined);
    const resolvedImageUrl =
        imageUrl && !VIDEO_EXT.test(imageUrl) ? imageUrl : undefined;

    const hasVideo = resolvedVideoUrl && resolvedVideoUrl.trim().length > 0;
    const hasImage = resolvedImageUrl && resolvedImageUrl.trim().length > 0;

    // When video is set, don't use CSS background — the video element replaces it
    const bgStyle = (!hasVideo && hasImage)
        ? { backgroundImage: `url(${resolvedImageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
        : {};

    return (
        <section
            className={className}
            style={{ position: "relative", overflow: "hidden", ...bgStyle, ...style }}
        >
            {/* Fullscreen background video */}
            {hasVideo && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={hasImage ? resolvedImageUrl : undefined}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                >
                    <source
                        src={resolvedVideoUrl}
                        type={resolvedVideoUrl.endsWith(".webm") ? "video/webm" : "video/mp4"}
                    />
                </video>
            )}
            {children}
        </section>
    );
}
