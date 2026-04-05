"use client";

/**
 * CmsMedia – Reusable Image/Video component for CMS-driven media
 *
 * Usage:
 *   <CmsMedia
 *     imageUrl="/path/to/image.jpg"
 *     videoUrl="https://example.com/video.mp4"   ← if set, shows video instead
 *     alt="Description"
 *     fill                                        ← for background covers
 *     width={600} height={400}                    ← for sized images
 *     className="my-class"
 *   />
 */

import Image from "next/image";

interface CmsMediaProps {
    /** Image source URL */
    imageUrl?: string;
    /** Video source URL (.mp4 or .webm) — overrides image when set */
    videoUrl?: string;
    /** Alt text for the image */
    alt?: string;
    /** Use Next.js fill mode (for background covers) */
    fill?: boolean;
    /** Fixed width (ignored if fill=true) */
    width?: number;
    /** Fixed height (ignored if fill=true) */
    height?: number;
    /** CSS class name */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Image priority (preload) */
    priority?: boolean;
    /** Image quality (1-100) */
    quality?: number;
    /** Image sizes attribute */
    sizes?: string;
    /** Object fit for both image and video */
    objectFit?: "cover" | "contain" | "fill" | "none";
    /** Border radius (applied to both) */
    borderRadius?: string | number;
}

export default function CmsMedia({
    imageUrl,
    videoUrl,
    alt = "",
    fill = false,
    width,
    height,
    className,
    style,
    priority = false,
    quality = 90,
    sizes = "100vw",
    objectFit = "cover",
    borderRadius,
}: CmsMediaProps) {
    // Auto-detect video file extensions even if pasted in the image field
    const VIDEO_EXT = /\.(mp4|webm|mov|ogg)(\?.*)?$/i;

    // If imageUrl is actually a video file, treat it as the video source
    const resolvedVideoUrl =
        videoUrl?.trim() ||
        (imageUrl && VIDEO_EXT.test(imageUrl) ? imageUrl : undefined);
    // Only use imageUrl for the image if it's NOT a video file
    const resolvedImageUrl =
        imageUrl && !VIDEO_EXT.test(imageUrl) ? imageUrl : undefined;

    const hasVideo = resolvedVideoUrl && resolvedVideoUrl.trim().length > 0;
    const hasImage = resolvedImageUrl && resolvedImageUrl.trim().length > 0;

    // ── Video ──
    if (hasVideo) {
        const isWebm = resolvedVideoUrl.endsWith(".webm");
        const videoStyle: React.CSSProperties = {
            objectFit,
            ...(borderRadius !== undefined ? { borderRadius } : {}),
            ...style,
        };

        if (fill) {
            return (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={hasImage ? resolvedImageUrl : undefined}
                    className={className}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        ...videoStyle,
                    }}
                >
                    <source src={resolvedVideoUrl} type={isWebm ? "video/webm" : "video/mp4"} />
                </video>
            );
        }

        return (
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={hasImage ? resolvedImageUrl : undefined}
                className={className}
                style={{
                    width: width || "100%",
                    height: height || "auto",
                    display: "block",
                    ...videoStyle,
                }}
            >
                <source src={resolvedVideoUrl} type={isWebm ? "video/webm" : "video/mp4"} />
            </video>
        );
    }

    // ── Image ──
    if (hasImage) {
        if (fill) {
            return (
                <Image
                    src={resolvedImageUrl!}
                    alt={alt}
                    fill
                    priority={priority}
                    quality={quality}
                    sizes={sizes}
                    className={className}
                    style={{ objectFit, ...(borderRadius !== undefined ? { borderRadius } : {}), ...style }}
                />
            );
        }

        return (
            <Image
                src={resolvedImageUrl!}
                alt={alt}
                width={width || 600}
                height={height || 400}
                priority={priority}
                quality={quality}
                className={className}
                style={{ objectFit, ...(borderRadius !== undefined ? { borderRadius } : {}), ...style }}
            />
        );
    }

    // ── Nothing provided ──
    return null;
}
