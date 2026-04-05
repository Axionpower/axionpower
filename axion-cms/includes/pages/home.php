<?php
/**
 * Axion CMS – Home Page Config
 * Defines all sections and fields for the Home page.
 * Default values here are served via GraphQL when a section has not yet been saved,
 * so the Next.js frontend never needs hardcoded fallback content.
 */
if (!defined('ABSPATH'))
    exit;

return [
    'slug' => 'home',
    'label' => 'Home',
    'sections' => [

        // ═══════════════════════════════════════
        // HERO SECTION
        // ═══════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon' => 'target',
            'fields' => [
                ['name' => 'background_image', 'label' => 'Background Image (Desktop)', 'type' => 'image', 'description' => 'Recommended: 1920×1080px. Used as fallback if no video is set.'],
                ['name' => 'background_image_mobile', 'label' => 'Background Image (Mobile)', 'type' => 'image', 'description' => 'Recommended: 768×1024px'],
                ['name' => 'background_video', 'label' => 'Background Video URL', 'type' => 'text',
                    'default' => '',
                    'description' => 'Paste a direct video URL (.mp4, .webm). Overrides the background image on desktop. Leave empty to use image.'],
                ['name' => 'overlay_color', 'label' => 'Overlay Color', 'type' => 'text', 'default' => '#000000', 'placeholder' => '#000000'],
                ['name' => 'overlay_opacity', 'label' => 'Overlay Opacity (%)', 'type' => 'text', 'default' => '60', 'placeholder' => '0-100'],
                ['name' => 'heading_text', 'label' => 'Heading Text', 'type' => 'text', 'default' => 'Reliable Battery Solutions for Mission-Critical Power Systems'],
                ['name' => 'heading_tag', 'label' => 'Heading Tag (SEO)', 'type' => 'select', 'choices' => ['h1' => 'H1', 'h2' => 'H2', 'h3' => 'H3'], 'default' => 'h1'],
                ['name' => 'subtitle_text', 'label' => 'Subtitle Text', 'type' => 'textarea', 'rows' => 3, 'default' => 'Axion Critical Power Solutions specializes in VRLA and wet cell batteries for critical power applications where reliability is non-negotiable.'],
                ['name' => 'badge_text', 'label' => 'Badge/Label Text', 'type' => 'text', 'default' => ''],
                ['name' => 'cta_text', 'label' => 'CTA Button Text', 'type' => 'text', 'default' => 'Request a Quote'],
                ['name' => 'cta_link', 'label' => 'CTA Button Link', 'type' => 'text', 'default' => '/contact'],
                ['name' => 'secondary_cta_text', 'label' => 'Secondary CTA Text', 'type' => 'text', 'default' => 'Speak with an Expert'],
                ['name' => 'secondary_cta_link', 'label' => 'Secondary CTA Link', 'type' => 'text', 'default' => '/contact'],
                [
                    'name' => 'stats',
                    'label' => 'Stats',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['number' => '500+', 'label' => 'Installations Completed'],
                        ['number' => '15+', 'label' => 'Years of Experience'],
                        ['number' => '24/7', 'label' => 'Technical Support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // ABOUT SECTION
        // ═══════════════════════════════════════
        'about' => [
            'label' => 'About Section',
            'icon' => 'clipboard',
            'fields' => [
                // ── Section Styling ──
                ['name' => 'section_bg_color', 'label' => 'Section Background Color', 'type' => 'color', 'default' => '#f5f5f5'],
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'ABOUT US'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#64748b'],
                ['name' => 'label_bar_color', 'label' => 'Label Bar Color', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'label_font_size', 'label' => 'Label Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px'],
                // ── Heading ──
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'textarea', 'rows' => 2, 'default' => "About Axion\nCritical Power\nSolutions"],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'heading_font_size_desktop', 'label' => 'Heading Font Size (Desktop)', 'type' => 'number', 'default' => '38', 'unit' => 'px'],
                ['name' => 'heading_font_size_mobile', 'label' => 'Heading Font Size (Mobile)', 'type' => 'number', 'default' => '28', 'unit' => 'px'],
                // ── Descriptions ──
                ['name' => 'description_left', 'label' => 'Description (Left Column)', 'type' => 'textarea', 'rows' => 5, 'default' => 'Axion Critical Power Solutions is dedicated to supplying reliable battery systems for mission-critical power applications. Our focus is on VRLA and wet cell batteries used in UPS systems, DC power plants, and standby power environments.'],
                ['name' => 'description_right', 'label' => 'Description (Right Column)', 'type' => 'textarea', 'rows' => 5, 'default' => 'We work closely with consulting engineers, contractors, and end users to ensure each battery solution is properly specified, compliant, and aligned with long-term operational requirements. Our approach is practical, technically sound, and reliability-driven.'],
                ['name' => 'description_color', 'label' => 'Description Color', 'type' => 'color', 'default' => '#475569'],
                ['name' => 'description_font_size', 'label' => 'Description Font Size', 'type' => 'number', 'default' => '14', 'unit' => 'px'],
                // ── Button ──
                ['name' => 'button_text', 'label' => 'Button Text', 'type' => 'text', 'default' => 'ABOUT US'],
                ['name' => 'button_link', 'label' => 'Button Link', 'type' => 'text', 'default' => '/about'],
                ['name' => 'button_bg_color', 'label' => 'Button Background', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'button_text_color', 'label' => 'Button Text Color', 'type' => 'color', 'default' => '#FFFFFF'],
                ['name' => 'button_font_size', 'label' => 'Button Font Size', 'type' => 'number', 'default' => '12', 'unit' => 'px'],
                ['name' => 'button_border_radius', 'label' => 'Button Border Radius', 'type' => 'number', 'default' => '50', 'unit' => 'px'],
                // ── Approach ──
                ['name' => 'approach_title', 'label' => 'Approach Title', 'type' => 'text', 'default' => 'Our Approach'],
                ['name' => 'approach_title_color', 'label' => 'Approach Title Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'approach_title_font_size', 'label' => 'Approach Title Font Size', 'type' => 'number', 'default' => '18', 'unit' => 'px'],
                ['name' => 'tag_text_color', 'label' => 'Tag Text Color', 'type' => 'color', 'default' => '#334155'],
                ['name' => 'tag_border_color', 'label' => 'Tag Border Color', 'type' => 'color', 'default' => '#d1d5db'],
                ['name' => 'tag_font_size', 'label' => 'Tag Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px'],
                [
                    'name' => 'approach_tags',
                    'label' => 'Approach Tags',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['tag' => 'Reliability-first mindset'],
                        ['tag' => 'Technical accuracy and transparency'],
                        ['tag' => 'Long-term customer partnerships'],
                        ['tag' => 'Commitment to safety and compliance'],
                    ],
                    'sub_fields' => [
                        ['name' => 'tag', 'label' => 'Tag', 'type' => 'text'],
                    ]
                ],
                // ── Stats ──
                ['name' => 'stat_value_color', 'label' => 'Stat Value Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'stat_value_font_size', 'label' => 'Stat Value Font Size', 'type' => 'number', 'default' => '30', 'unit' => 'px'],
                ['name' => 'stat_desc_color', 'label' => 'Stat Description Color', 'type' => 'color', 'default' => '#64748b'],
                ['name' => 'stat_desc_font_size', 'label' => 'Stat Description Font Size', 'type' => 'number', 'default' => '12', 'unit' => 'px'],
                ['name' => 'stat_divider_color', 'label' => 'Stat Divider Color', 'type' => 'color', 'default' => '#e2e8f0'],
                [
                    'name' => 'stats',
                    'label' => 'Stats',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['number' => '500+',  'label' => 'Battery Systems Deployed'],
                        ['number' => '15+',   'label' => 'Years of Experience'],
                        ['number' => '24/7',  'label' => 'Technical Support Available'],
                        ['number' => '100%',  'label' => 'Compliance Focus'],
                    ],
                    'sub_fields' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // COMPLIANCE SECTION (Two-Column Layout)
        // ═══════════════════════════════════════
        'compliance' => [
            'label' => 'Compliance Section',
            'icon' => 'shield',
            'fields' => [
                // ── Section-level styling ──
                ['name' => 'section_bg_color', 'label' => 'Section Background Color', 'type' => 'color', 'default' => '#0a0a14'],
                ['name' => 'card_bg_color', 'label' => 'Card Background Color', 'type' => 'color', 'default' => '#111827'],
                ['name' => 'card_border_color', 'label' => 'Card Border Color', 'type' => 'text', 'default' => 'rgba(255, 255, 255, 0.06)'],
                ['name' => 'card_border_radius', 'label' => 'Card Border Radius', 'type' => 'number', 'default' => '14', 'unit' => 'px', 'min' => 0, 'max' => 50],

                // ── Column 1: Sustainability & Compliance ──
                ['name' => 'col1_heading', 'label' => 'Column 1 – Heading', 'type' => 'text', 'default' => 'Sustainability & Compliance'],
                ['name' => 'col1_heading_color', 'label' => 'Column 1 – Heading Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col1_heading_font_size', 'label' => 'Column 1 – Heading Font Size', 'type' => 'number', 'default' => '30', 'unit' => 'px', 'min' => 12, 'max' => 72],
                ['name' => 'col1_image', 'label' => 'Column 1 – Card Image', 'type' => 'image', 'description' => 'Recommended: 480×360px'],
                ['name' => 'col1_description', 'label' => 'Column 1 – Description', 'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions prioritizes environmental responsibility and regulatory compliance across the full lifecycle of every battery system. From recycling programs to safe handling and operational guidance, our solutions support sustainable, reliable, and responsible power system operations.'],
                ['name' => 'col1_description_color', 'label' => 'Column 1 – Description Color', 'type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'col1_description_font_size', 'label' => 'Column 1 – Description Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px', 'min' => 10, 'max' => 24],
                ['name' => 'col1_button_label', 'label' => 'Column 1 – Button Label', 'type' => 'text', 'default' => 'LEARN MORE'],
                ['name' => 'col1_button_url', 'label' => 'Column 1 – Button URL', 'type' => 'text', 'default' => '/sustainability-compliance'],
                ['name' => 'col1_button_bg_color', 'label' => 'Column 1 – Button Background', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'col1_button_text_color', 'label' => 'Column 1 – Button Text Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col1_button_font_size', 'label' => 'Column 1 – Button Font Size', 'type' => 'number', 'default' => '11', 'unit' => 'px', 'min' => 8, 'max' => 24],
                ['name' => 'col1_button_radius', 'label' => 'Column 1 – Button Border Radius', 'type' => 'number', 'default' => '50', 'unit' => 'px', 'min' => 0, 'max' => 50],
                ['name' => 'col1_highlights_title', 'label' => 'Column 1 – Highlights Title', 'type' => 'text', 'default' => 'Key Highlights:'],
                ['name' => 'col1_highlights_title_color', 'label' => 'Column 1 – Highlights Title Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col1_highlights_title_font_size', 'label' => 'Column 1 – Highlights Title Font Size', 'type' => 'number', 'default' => '15', 'unit' => 'px', 'min' => 10, 'max' => 36],
                ['name' => 'col1_highlights_text', 'label' => 'Column 1 – Highlights (one per line)', 'type' => 'textarea', 'rows' => 5, 'default' => "Environmentally responsible recycling programs\nCompliance with applicable environmental regulations\nResponsible sourcing of battery products\nSafe handling and installation guidance"],
                ['name' => 'col1_highlights_text_color', 'label' => 'Column 1 – Highlights Text Color', 'type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'col1_highlights_text_font_size', 'label' => 'Column 1 – Highlights Text Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px', 'min' => 10, 'max' => 24],
                ['name' => 'col1_highlights_icon_color', 'label' => 'Column 1 – Highlights Icon Color', 'type' => 'color', 'default' => '#0EA5E9'],

                // ── Column 2: Quality, Safety & Compliance ──
                ['name' => 'col2_heading', 'label' => 'Column 2 – Heading', 'type' => 'text', 'default' => 'Quality, Safety & Compliance'],
                ['name' => 'col2_heading_color', 'label' => 'Column 2 – Heading Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col2_heading_font_size', 'label' => 'Column 2 – Heading Font Size', 'type' => 'number', 'default' => '30', 'unit' => 'px', 'min' => 12, 'max' => 72],
                ['name' => 'col2_image', 'label' => 'Column 2 – Card Image', 'type' => 'image', 'description' => 'Recommended: 480×360px'],
                ['name' => 'col2_description', 'label' => 'Column 2 – Description', 'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions prioritizes quality, safety, and compliance across all battery solutions. We partner with trusted manufacturers and follow recognized industry standards to ensure reliable, safe, and long-lasting mission-critical power systems.'],
                ['name' => 'col2_description_color', 'label' => 'Column 2 – Description Color', 'type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'col2_description_font_size', 'label' => 'Column 2 – Description Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px', 'min' => 10, 'max' => 24],
                ['name' => 'col2_button_label', 'label' => 'Column 2 – Button Label', 'type' => 'text', 'default' => 'LEARN MORE'],
                ['name' => 'col2_button_url', 'label' => 'Column 2 – Button URL', 'type' => 'text', 'default' => '/quality-safety-compliance'],
                ['name' => 'col2_button_bg_color', 'label' => 'Column 2 – Button Background', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'col2_button_text_color', 'label' => 'Column 2 – Button Text Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col2_button_font_size', 'label' => 'Column 2 – Button Font Size', 'type' => 'number', 'default' => '11', 'unit' => 'px', 'min' => 8, 'max' => 24],
                ['name' => 'col2_button_radius', 'label' => 'Column 2 – Button Border Radius', 'type' => 'number', 'default' => '50', 'unit' => 'px', 'min' => 0, 'max' => 50],
                ['name' => 'col2_highlights_title', 'label' => 'Column 2 – Highlights Title', 'type' => 'text', 'default' => 'Key Highlights:'],
                ['name' => 'col2_highlights_title_color', 'label' => 'Column 2 – Highlights Title Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'col2_highlights_title_font_size', 'label' => 'Column 2 – Highlights Title Font Size', 'type' => 'number', 'default' => '15', 'unit' => 'px', 'min' => 10, 'max' => 36],
                ['name' => 'col2_highlights_text', 'label' => 'Column 2 – Highlights (one per line)', 'type' => 'textarea', 'rows' => 5, 'default' => "Adherence to industry standards and best practices\nManufacturer quality assurance and verification\nSafe handling, installation, and maintenance guidance\nEnvironmental responsibility throughout the battery lifecycle"],
                ['name' => 'col2_highlights_text_color', 'label' => 'Column 2 – Highlights Text Color', 'type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'col2_highlights_text_font_size', 'label' => 'Column 2 – Highlights Text Font Size', 'type' => 'number', 'default' => '13', 'unit' => 'px', 'min' => 10, 'max' => 24],
                ['name' => 'col2_highlights_icon_color', 'label' => 'Column 2 – Highlights Icon Color', 'type' => 'color', 'default' => '#0EA5E9'],
            ],
        ],

        // ═══════════════════════════════════════
        // PRODUCTS SECTION
        // ═══════════════════════════════════════
        'products' => [
            'label' => 'Products Section',
            'icon' => 'battery',
            'fields' => [
                // ── Intro Block ──
                ['name' => 'intro_bg_color', 'label' => 'Intro Background Color', 'type' => 'color', 'default' => '#f5f5f5'],
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'OUR PRODUCTS'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'label_bar_color', 'label' => 'Label Bar Color', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'intro_heading', 'label' => 'Intro Heading (HTML allowed)', 'type' => 'textarea', 'html' => true, 'rows' => 4, 'default' => '<span class="grey-text">Axion Critical Power Solutions delivers reliable,</span> high-performance battery solutions for mission-critical power systems. Our products are engineered for safety, durability, and predictable performance across data centers, industrial sites, healthcare facilities, and utility applications.'],
                ['name' => 'intro_heading_color', 'label' => 'Intro Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'intro_button_label', 'label' => 'Intro Button Label', 'type' => 'text', 'default' => 'VIEW MORE'],
                ['name' => 'intro_button_url', 'label' => 'Intro Button URL', 'type' => 'text', 'default' => '/products'],

                // ── Cards Section ──
                ['name' => 'cards_bg_color', 'label' => 'Cards Section Background Color', 'type' => 'color', 'default' => '#0a0a14'],
                ['name' => 'card_heading_tag', 'label' => 'Card Heading Tag', 'type' => 'select', 'choices' => ['h2' => 'H2', 'h3' => 'H3', 'h4' => 'H4'], 'default' => 'h3'],
                ['name' => 'card_title_color', 'label' => 'Card Title Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'highlights_label', 'label' => 'Highlights Section Label', 'type' => 'text', 'default' => 'Key Highlights'],
                ['name' => 'applications_label', 'label' => 'Applications Section Label', 'type' => 'text', 'default' => 'Typical Applications:'],

                // ── Product Cards (Repeater) ──
                [
                    'name' => 'products',
                    'label' => 'Product Cards',
                    'type' => 'repeater',
                    'default_rows' => [
                        [
                            'title' => 'VRLA Batteries',
                            'description' => 'Axion Critical Power Solutions provides high-performance, low-maintenance VRLA (Valve-Regulated Lead-Acid) batteries for mission-critical applications. Sealed and reliable, they are ideal for UPS, DC power plants, and standby systems where space efficiency, predictable performance, and operational reliability are essential.',
                            'image' => 0,
                            'highlights' => "Maintenance-free operation\nCompact footprint\nHigh power density\nProven reliability in critical environments",
                            'applications' => "Data center UPS systems\nTelecom power systems\nHealthcare facilities\nCommercial and industrial UPS installations facilities",
                            'button_label' => 'Learn More',
                            'button_url' => '/vrla-batteries',
                        ],
                        [
                            'title' => 'Wet Cell (Flooded) Batteries',
                            'description' => 'Axion Critical Power Solutions offers robust Wet Cell (Flooded Lead-Acid) batteries for large-scale, mission-critical DC power systems. Ideal for utility, substation, and industrial applications, these batteries deliver long life, durability, and reliable performance while being fully supported through the lifecycle from selection to replacement and recycling.',
                            'image' => 0,
                            'highlights' => "Long design life\nProven, field-tested technology\nExcellent deep-cycle performance\nIdeal for critical infrastructure",
                            'applications' => "Utility substations\nPower generation facilities\nIndustrial DC systems\nLong-duration backup power systems",
                            'button_label' => 'Learn More',
                            'button_url' => '/wet-cell-batteries',
                        ],
                        [
                            'title' => 'Stationary Battery Cabinets',
                            'description' => 'Axion Critical Power Solutions provides engineered stationary battery cabinet solutions designed to integrate seamlessly with UPS and DC power systems. Our cabinets are built for safety, durability, and optimal battery performance in mission-critical environments, including data centers, healthcare facilities, and industrial operations.',
                            'image' => 0,
                            'highlights' => "Maintenance-free operation\nCompact footprint\nHigh power density\nProven reliability in critical environments",
                            'applications' => '',
                            'button_label' => 'Learn More',
                            'button_url' => '/battery-cabinets',
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Product Name', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Full Description', 'type' => 'textarea', 'rows' => 4],
                        ['name' => 'image', 'label' => 'Product Image', 'type' => 'image', 'description' => 'Recommended: 520×400px'],
                        ['name' => 'highlights', 'label' => 'Key Highlights (one per line)', 'type' => 'textarea', 'rows' => 5],
                        ['name' => 'applications', 'label' => 'Typical Applications (one per line)', 'type' => 'textarea', 'rows' => 5],
                        ['name' => 'button_label', 'label' => 'Button Label', 'type' => 'text'],
                        ['name' => 'button_url', 'label' => 'Button URL', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // SERVICES SECTION
        // ═══════════════════════════════════════
        'services' => [
            'label' => 'Services Section',
            'icon' => 'zap',
            'fields' => [
                // ── Section Styling ──
                ['name' => 'intro_bg_color', 'label' => 'Intro Background Color', 'type' => 'color', 'default' => '#0284c7'],
                ['name' => 'mid_bg_color', 'label' => 'Middle Background Color', 'type' => 'color', 'default' => '#0369a1'],
                ['name' => 'bottom_bg_color', 'label' => 'Bottom Background Color', 'type' => 'color', 'default' => '#0c4a6e'],
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'Our Services'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'intro_heading', 'label' => 'Intro Heading', 'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions offers comprehensive services to ensure your critical power systems remain reliable, compliant, and optimized throughout their lifecycle. From preventive maintenance to emergency support, we help you maximize uptime and minimize operational risk.'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'intro_button_label', 'label' => 'Intro Button Label', 'type' => 'text', 'default' => 'VIEW MORE'],
                ['name' => 'intro_button_url', 'label' => 'Intro Button URL', 'type' => 'text', 'default' => '/services'],
                ['name' => 'card_heading_tag', 'label' => 'Card Heading Tag', 'type' => 'select', 'choices' => ['h2' => 'H2', 'h3' => 'H3', 'h4' => 'H4'], 'default' => 'h3'],
                ['name' => 'card_title_color', 'label' => 'Card Title Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color', 'label' => 'Body Text Color', 'type' => 'color', 'default' => '#475569'],
                // ── Service Cards ──
                [
                    'name' => 'services',
                    'label' => 'Service Cards',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['title' => 'Maintenance and Monitoring', 'description' => 'Keep your UPS and DC power systems performing at peak efficiency with proactive maintenance and battery health monitoring. Axion helps prevent unexpected downtime and extends system life.', 'bg_image' => 0, 'button_text' => 'Schedule Maintenance & Monitoring', 'button_link' => '/maintenance-monitoring'],
                        ['title' => 'Emergency Support and Service Contracts', 'description' => 'Rapid response for urgent power issues. Our service contracts provide priority support, emergency replacements, and expert guidance to restore uptime quickly.', 'bg_image' => 0, 'button_text' => 'Request Emergency Support', 'button_link' => '/emergency-support'],
                        ['title' => 'Replacement and Upgrades', 'description' => 'Plan and execute battery replacements or system upgrades with minimal disruption. Axion coordinates lifecycle transitions for VRLA and flooded batteries in mission-critical environments.', 'bg_image' => 0, 'button_text' => 'Plan Replacement & Upgrades', 'button_link' => '/replacement-upgrades'],
                        ['title' => 'Safety Training and Documentation', 'description' => 'Ensure your teams handle batteries safely and effectively. Axion provides training, operational manuals, and compliance documentation to reduce risk and support long-term reliability.', 'bg_image' => 0, 'button_text' => 'Access Safety Training & Documentation', 'button_link' => '/safety-training-documentation'],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 3],
                        ['name' => 'bg_image', 'label' => 'Background Image (hover)', 'type' => 'image', 'description' => 'Shown on hover. Recommended: 1200×400px'],
                        ['name' => 'button_text', 'label' => 'Button Text', 'type' => 'text'],
                        ['name' => 'button_link', 'label' => 'Button Link', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // INDUSTRIES SECTION
        // ═══════════════════════════════════════
        'industries' => [
            'label' => 'Industries Section',
            'icon' => 'factory',
            'fields' => [
                ['name' => 'section_bg_color', 'label' => 'Section Background Color', 'type' => 'color', 'default' => '#f8f9fa'],
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'Industries We Serve'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#64748b'],
                ['name' => 'intro_heading', 'label' => 'Intro Heading (HTML allowed)', 'type' => 'textarea', 'html' => true, 'rows' => 3, 'default' => '<span class="grey-text">Axion Critical Power Solutions provides mission-critical battery</span> solutions across a range of industries, ensuring continuous uptime, regulatory compliance, and reliable performance.'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'body_color', 'label' => 'Body Text Color', 'type' => 'color', 'default' => '#475569'],
                [
                    'name' => 'industries',
                    'label' => 'Industry Cards',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['title' => 'Data Centers & Colocation Power Solutions', 'subtitle' => 'Always-On Power for Always-On Infrastructure', 'description' => 'Data centers and colocation facilities cannot afford downtime. Axion Critical Power Solutions delivers resilient, scalable, and compliant battery solutions to keep mission-critical infrastructure running 24/7.', 'image' => 0, 'features' => "VRLA and wet cell batteries for critical infrastructure\nPreventive maintenance, monitoring, & lifecycle management\nCompliance with electrical, safety, & environmental standards\nIntegration with UPS, DC power plants, & backup systems", 'button_label' => 'Explore Data Center Power Solutions', 'button_url' => '/data-centers-colocation'],
                        ['title' => 'Reliable Battery Systems for Mission-Critical Telecom Networks', 'subtitle' => '', 'description' => 'Telecommunications networks require uninterrupted power to maintain connectivity, service quality, and emergency communications. Axion provides VRLA and flooded battery systems with full lifecycle management.', 'image' => 0, 'features' => "VRLA and flooded batteries for central offices, cell sites, and data hubs\nEngineering guidance for sizing, redundancy, and system integration\nMaintenance, monitoring, and emergency response services\nCompliance with telecom, electrical, and environmental standards", 'button_label' => '', 'button_url' => '/telecommunications'],
                        ['title' => 'Reliable Battery Systems for Utility & Substation Applications', 'subtitle' => '', 'description' => 'Utility and substation environments require battery systems that provide long-term reliability, predictable performance, and compliance with industry standards.', 'image' => 0, 'features' => "VRLA and flooded batteries for substations and utility infrastructure\nTechnical consultation for battery sizing, configuration, and system integration\nMaintenance, monitoring, and end-of-life support\nCompliance with IEEE, utility, and environmental standards", 'button_label' => '', 'button_url' => '/utilities-substations'],
                        ['title' => 'Reliable Battery Systems for Healthcare Facilities', 'subtitle' => '', 'description' => 'Healthcare facilities require uninterrupted power to protect life-safety systems, critical medical equipment, and essential operations.', 'image' => 0, 'features' => "VRLA and wet cell batteries for hospitals and medical centers\nEngineering support for system sizing, redundancy, and UPS integration\nMaintenance, monitoring, and emergency response services\nCompliance with healthcare and electrical safety standards", 'button_label' => '', 'button_url' => '/healthcare'],
                        ['title' => 'Reliable Battery Systems for Industrial & Critical Infrastructure', 'subtitle' => '', 'description' => 'Industrial facilities require uninterrupted power for process control, safety systems, and critical operations. Axion provides durable, reliable, and compliant power solutions.', 'image' => 0, 'features' => "VRLA and wet cell batteries for industrial and infrastructure systems\nEngineering support for sizing, redundancy, and UPS/DC integration\nMaintenance, monitoring, and emergency response services\nCompliance with electrical, safety, and environmental standards", 'button_label' => '', 'button_url' => '/industrial-infrastructure'],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                        ['name' => 'subtitle', 'label' => 'Subtitle', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 3],
                        ['name' => 'image', 'label' => 'Image', 'type' => 'image', 'description' => 'Recommended: 600×400px'],
                        ['name' => 'features', 'label' => 'Features (one per line)', 'type' => 'textarea', 'rows' => 5],
                        ['name' => 'button_label', 'label' => 'Button Label', 'type' => 'text'],
                        ['name' => 'button_url', 'label' => 'Button URL', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // ENGINEERING SECTION
        // ═══════════════════════════════════════
        'engineering' => [
            'label' => 'Engineering Section',
            'icon' => 'wrench',
            'fields' => [
                ['name' => 'bg_color', 'label' => 'Background Color', 'type' => 'color', 'default' => '#0a0a14'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => 'Engineering Resources'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions provides engineers, designers, and facility managers with technical resources to support informed decisions about mission-critical battery systems. From battery sizing and VRLA vs Wet Cell selection to UPS integration and environmental requirements, our guidance ensures reliable, compliant, and long-lasting power solutions.'],
                ['name' => 'body_color', 'label' => 'Body Text Color', 'type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'accent_color', 'label' => 'Accent Color', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'highlights_title', 'label' => 'Highlights Title', 'type' => 'text', 'default' => 'Key Highlights'],
                ['name' => 'button_label', 'label' => 'Button Label', 'type' => 'text', 'default' => 'Access Our Engineering Resources Library'],
                ['name' => 'button_url', 'label' => 'Button URL', 'type' => 'text', 'default' => '/engineering-resources'],
                [
                    'name' => 'features',
                    'label' => 'Highlights',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['title' => 'Battery sizing guidelines and runtime calculations'],
                        ['title' => 'VRLA vs Wet Cell performance and lifecycle comparison'],
                        ['title' => 'UPS system integration and redundancy considerations'],
                        ['title' => 'Environmental and ventilation best practices'],
                        ['title' => 'Ready-to-use specification language for project documentation'],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Highlight Text', 'type' => 'text'],
                    ]
                ],
                // ── Decorative Floating Images (7 slots) ──
                [
                    'name' => 'decor_images',
                    'label' => 'Floating Decorative Images (7 images)',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['image' => 0],
                        ['image' => 0],
                        ['image' => 0],
                        ['image' => 0],
                        ['image' => 0],
                        ['image' => 0],
                        ['image' => 0],
                    ],
                    'sub_fields' => [
                        ['name' => 'image', 'label' => 'Image', 'type' => 'image', 'description' => 'Recommended: 320×240px. Shown as floating decoration.'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // CONSULTING SECTION
        // ═══════════════════════════════════════
        'consulting' => [
            'label' => 'Consulting Section',
            'icon' => 'briefcase',
            'fields' => [
                ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'default' => 'Consulting Engineer Hub'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => 'Technical Support for Specifiers & Engineers'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions provides a dedicated hub for consulting engineers, specifiers, and project managers. Access technical guidance, basis-of-design resources, and ready-to-use specification language to streamline critical power project design, documentation, and approval.'],
                ['name' => 'body_color', 'label' => 'Body Text Color', 'type' => 'color', 'default' => 'rgba(255,255,255,0.85)'],
                ['name' => 'button_label', 'label' => 'Button Label', 'type' => 'text', 'default' => 'Visit Our Consulting Engineer Hub'],
                ['name' => 'button_url', 'label' => 'Button URL', 'type' => 'text', 'default' => '/consulting-engineer-hub'],
                ['name' => 'image', 'label' => 'Section Image', 'type' => 'image', 'description' => 'Recommended: 600×400px'],
                [
                    'name' => 'points',
                    'label' => 'Consulting Points',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['title' => 'Specification support and project guidance for VRLA and flooded batteries'],
                        ['title' => 'Basis-of-design documentation and selection criteria'],
                        ['title' => 'Ready-to-use cut sheets and datasheets for battery systems'],
                        ['title' => 'CSI / MasterFormat language templates for consistent documentation'],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Point Text', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // FAQ SECTION
        // ═══════════════════════════════════════
        'faq' => [
            'label' => 'FAQ Section',
            'icon' => 'help-circle',
            'fields' => [
                ['name' => 'bg_color', 'label' => 'Background Color', 'type' => 'color', 'default' => '#f8f9fa'],
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'Frequently Asked Questions'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#64748b'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => 'Answers for Critical Power Battery Systems'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'intro_text', 'label' => 'Intro Text (HTML allowed)', 'type' => 'textarea', 'html' => true, 'rows' => 3, 'default' => '<span class="blue-text">Have questions about VRLA or flooded (wet cell)</span> batteries? Axion Critical Power Solutions provides clear, reliable answers to common questions about battery performance, maintenance, warranties, and end-of-life management.'],
                [
                    'name' => 'faqs',
                    'label' => 'FAQ Items',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['question' => 'How long do VRLA and flooded (wet cell) batteries last?', 'answer' => 'VRLA batteries generally last 5–12 years, depending on load, temperature, and operating conditions. Flooded (wet cell) batteries typically last 10–20 years with proper maintenance and monitoring.'],
                        ['question' => 'What maintenance is required for VRLA and wet cell batteries?', 'answer' => 'VRLA batteries are largely maintenance-free but should be inspected periodically for voltage, temperature, and visual signs of wear. Flooded batteries require regular electrolyte checks, cleaning, terminal maintenance, and periodic equalization charging.'],
                        ['question' => 'What are typical lead times for battery orders?', 'answer' => 'Lead times depend on battery type, size, quantity, and project requirements. Typically ranging 2–8 weeks depending on inventory availability and project complexity.'],
                        ['question' => 'What warranties are offered on batteries?', 'answer' => 'VRLA and wet cell batteries come with manufacturer warranties covering defects in materials and workmanship. Axion ensures that documentation and warranty claims are supported throughout the system lifecycle.'],
                        ['question' => 'How should batteries be disposed of or recycled?', 'answer' => 'Axion provides environmentally responsible battery recycling in coordination with certified partners, ensuring compliance with federal, provincial, and local regulations.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'question', 'label' => 'Question', 'type' => 'text'],
                        ['name' => 'answer', 'label' => 'Answer', 'type' => 'textarea', 'rows' => 3],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // CONTACT SECTION
        // ═══════════════════════════════════════
        'contact' => [
            'label' => 'Contact Section',
            'icon' => 'phone',
            'fields' => [
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text', 'default' => 'Contact Axion Critical Power Solutions'],
                ['name' => 'label_color', 'label' => 'Label Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => 'Get Expert Guidance on Your Battery Systems'],
                ['name' => 'heading_color', 'label' => 'Heading Color', 'type' => 'color', 'default' => '#0f172a'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 3, 'default' => 'Connect with Axion Critical Power Solutions to discuss your mission-critical power requirements, upcoming battery replacements, or technical inquiries. Our team provides engineering guidance, lifecycle support, and system recommendations to ensure reliable, compliant, and safe battery solutions.'],
                ['name' => 'body_color', 'label' => 'Body Text Color', 'type' => 'color', 'default' => 'rgba(255,255,255,0.85)'],
                ['name' => 'highlights_title', 'label' => 'Highlights Title', 'type' => 'text', 'default' => 'Key Highlights'],
                ['name' => 'highlights_color', 'label' => 'Highlights Title Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'button_label', 'label' => 'Button Label', 'type' => 'text', 'default' => 'Contact Axion Today'],
                ['name' => 'button_url', 'label' => 'Button URL', 'type' => 'text', 'default' => '/contact'],
                ['name' => 'image', 'label' => 'Section Image', 'type' => 'image', 'description' => 'Recommended: 600×400px'],
                [
                    'name' => 'highlights',
                    'label' => 'Key Highlights',
                    'type' => 'repeater',
                    'default_rows' => [
                        ['text' => 'Request a quote for VRLA or flooded battery systems'],
                        ['text' => 'Technical consultation for UPS, DC, or backup power systems'],
                        ['text' => 'General inquiries about solutions, compliance, or lifecycle support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Highlight', 'type' => 'text'],
                    ]
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // GET IN TOUCH SECTION
        // ═══════════════════════════════════════
        'getintouch' => [
            'label' => 'Get In Touch Form',
            'icon' => 'envelope',
            'fields' => [
                ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'default' => 'Get In Touch'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => "Let's Work Together For Your Next Projects"],
                ['name' => 'button_label', 'label' => 'Submit Button Text', 'type' => 'text', 'default' => 'Send Message'],
                ['name' => 'sending_label', 'label' => 'Sending Label', 'type' => 'text', 'default' => 'Sending...'],
                ['name' => 'success_message', 'label' => 'Success Message', 'type' => 'text', 'default' => 'Your message has been sent successfully! We\'ll get back to you soon.'],
                ['name' => 'error_message', 'label' => 'Error Message', 'type' => 'text', 'default' => 'Something went wrong. Please try again later.'],
            ],
        ],

        // ═══════════════════════════════════════
        // FOOTER
        // ═══════════════════════════════════════
        'footer' => [
            'label' => 'Footer',
            'icon' => 'triangle-down',
            'fields' => [
                // ── Global Settings ──
                ['name' => 'copyright', 'label' => 'Copyright Text', 'type' => 'text', 'default' => '© 2025 Axion Critical Power Solutions. All rights reserved.'],
                ['name' => 'bg_color', 'label' => 'Background Color', 'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'text_color', 'label' => 'Default Text Color', 'type' => 'color', 'default' => '#8BA3C7'],
                ['name' => 'heading_color', 'label' => 'Column Heading Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'link_hover_color', 'label' => 'Link Hover Color', 'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'divider_color', 'label' => 'Bottom Divider Color', 'type' => 'color', 'default' => '#1a2035'],

                // ── Dynamic Columns ──
                [
                    'name' => 'columns',
                    'label' => 'Footer Columns',
                    'type' => 'repeater',
                    'description' => 'Add columns to your footer. Each column can be a Brand block, Link list, or Text block.',
                    'default_rows' => [
                        // ── Column 1: Brand ──
                        [
                            'type' => 'brand',
                            'logo_main' => 'AXION',
                            'logo_sub' => 'Critical Power Solutions',
                            'phone' => '',
                            'email' => '',
                            'title' => '',
                            'links_text' => '',
                            'content' => '',
                        ],
                        // ── Column 2: Products ──
                        [
                            'type' => 'links',
                            'logo_main' => '',
                            'logo_sub' => '',
                            'phone' => '',
                            'email' => '',
                            'title' => 'Products',
                            'links_text' => "VRLA Batteries|/vrla-batteries\nWet Cell Batteries|/wet-cell-batteries\nBattery Cabinets|/battery-cabinets\nReplacement & Upgrades|/replacement-upgrades",
                            'content' => '',
                        ],
                        // ── Column 3: Services ──
                        [
                            'type' => 'links',
                            'logo_main' => '',
                            'logo_sub' => '',
                            'phone' => '',
                            'email' => '',
                            'title' => 'Services',
                            'links_text' => "Emergency Support|/emergency-support\nMaintenance & Monitoring|/maintenance-monitoring\nSafety Training|/safety-training-documentation\nQuality & Compliance|/quality-safety-compliance",
                            'content' => '',
                        ],
                        // ── Column 4: Industries ──
                        [
                            'type' => 'links',
                            'logo_main' => '',
                            'logo_sub' => '',
                            'phone' => '',
                            'email' => '',
                            'title' => 'Industries',
                            'links_text' => "Data Centers & Colocation|/data-centers-colocation\nHealthcare|/healthcare\nIndustrial Infrastructure|/industrial-infrastructure\nTelecommunications|/telecommunications\nUtilities & Substations|/utilities-substations",
                            'content' => '',
                        ],
                        // ── Column 5: Resources ──
                        [
                            'type' => 'links',
                            'logo_main' => '',
                            'logo_sub' => '',
                            'phone' => '',
                            'email' => '',
                            'title' => 'Resources',
                            'links_text' => "Engineering Resources|/engineering-resources\nConsulting Engineer Hub|/consulting-engineer-hub\nFAQs|/faqs\nAbout Us|/about\nSustainability|/sustainability-compliance\nContact|/contact",
                            'content' => '',
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'type', 'label' => 'Column Type', 'type' => 'select', 'choices' => ['brand' => 'Brand / Logo', 'links' => 'Link List', 'text' => 'Text Block']],
                        ['name' => 'logo_image', 'label' => 'Logo Image (optional)', 'type' => 'image', 'description' => 'Used when type is "Brand". Leave empty to use text logo.'],
                        ['name' => 'logo_main', 'label' => 'Logo Main Text', 'type' => 'text'],
                        ['name' => 'logo_sub', 'label' => 'Logo Subtitle', 'type' => 'text'],
                        ['name' => 'phone', 'label' => 'Phone', 'type' => 'text'],
                        ['name' => 'email', 'label' => 'Email', 'type' => 'text'],
                        ['name' => 'title', 'label' => 'Column Title', 'type' => 'text'],
                        ['name' => 'links_text', 'label' => 'Links (one per line: Label|/url)', 'type' => 'textarea'],
                        ['name' => 'content', 'label' => 'Text Content (HTML allowed)', 'type' => 'textarea', 'html' => true],
                    ]
                ],
            ],
        ],
    ],
];
