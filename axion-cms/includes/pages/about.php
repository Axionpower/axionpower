<?php
/**
 * Axion CMS – About Page Config
 * Sections: hero, hero-stats, intro, mission, mission-features,
 *           approach, approach-cards, advantage, advantage-stats,
 *           advantage-cards, cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'about',
    'label' => 'About',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => '🏢',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×600px'],
                ['name' => 'breadcrumb',  'label' => 'Breadcrumb Text',  'type' => 'text',
                    'default' => 'HOME / ABOUT US'],
                ['name' => 'heading',     'label' => 'Heading',          'type' => 'textarea', 'rows' => 2,
                    'default' => "About Axion Critical Power\nSolutions"],
                ['name' => 'subtext',     'label' => 'Subtext',          'type' => 'textarea', 'rows' => 3,
                    'default' => 'Dedicated to supplying reliable battery systems for mission-critical power applications. VRLA, wet cell, and DC power solutions built for uptime.'],
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text', 'default' => 'Our Story →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text', 'default' => '/about/story'],
                ['name' => 'btn_ghost_label',   'label' => 'Ghost Button Label',   'type' => 'text', 'default' => 'View Products'],
                ['name' => 'btn_ghost_url',     'label' => 'Ghost Button URL',     'type' => 'text', 'default' => '/products'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size in pixels (default: 46px)'],
                // ── Colors ──
                ['name' => 'heading_color',  'label' => '🎨 Heading Color',   'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'subtext_color',  'label' => '🎨 Subtext Color',   'type' => 'color', 'default' => '#9db8cc'],
                ['name' => 'overlay_color',  'label' => '🎨 Overlay Color',   'type' => 'color', 'default' => '#0a0e1a',
                    'description' => 'Background overlay tint color'],
                // ── Spacing ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Section top padding (default: 120px)'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Section bottom padding (default: 80px)'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // HERO STATS BAR
        // ══════════════════════════════════════════════════
        'hero-stats' => [
            'label' => 'Hero Stats Bar',
            'icon'  => '📊',
            'fields' => [
                [
                    'name'         => 'stats',
                    'label'        => 'Stats',
                    'type'         => 'repeater',
                    'description'  => 'The 4 stats shown in the hero section bottom bar',
                    'default_rows' => [
                        ['value' => '20+',  'label' => 'Years Experience'],
                        ['value' => '500+', 'label' => 'Projects Delivered'],
                        ['value' => '100%', 'label' => 'Compliance Focus'],
                        ['value' => '24/7', 'label' => 'Emergency Support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value (e.g. 20+)', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label (e.g. Years Experience)', 'type' => 'text'],
                    ],
                ],
                // ── Colors ──
                ['name' => 'stat_value_color', 'label' => '🎨 Stat Value Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'stat_label_color', 'label' => '🎨 Stat Label Color', 'type' => 'color', 'default' => '#9db8cc'],
                ['name' => 'divider_color',    'label' => '🎨 Divider Color',    'type' => 'color', 'default' => '#1e2a3a'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INTRODUCTION (Who We Are)
        // ══════════════════════════════════════════════════
        'intro' => [
            'label' => 'Introduction — Who We Are',
            'icon'  => '👥',
            'fields' => [
                // ── Content ──
                ['name' => 'label',       'label' => 'Section Label',  'type' => 'text',     'default' => 'WHO WE ARE'],
                ['name' => 'heading',     'label' => 'Heading',        'type' => 'textarea', 'rows' => 2,
                    'default' => "About Axion Critical\nPower Solutions"],
                ['name' => 'body1',       'label' => 'Paragraph 1',    'type' => 'textarea', 'rows' => 3,
                    'default' => 'Axion Critical Power Solutions is dedicated to supplying reliable battery systems and technical solutions for mission-critical power applications.'],
                ['name' => 'body2',       'label' => 'Paragraph 2',    'type' => 'textarea', 'rows' => 3,
                    'default' => 'Our focus is on VRLA and wet cell batteries used in UPS systems, DC power plants, and standby power environments — built to perform when it matters most.'],
                ['name' => 'badge1',      'label' => 'Badge 1 Text',   'type' => 'text',     'default' => '⚡  VRLA & Wet Cell Specialist'],
                ['name' => 'badge2',      'label' => 'Badge 2 Text',   'type' => 'text',     'default' => '🔒  Industry Compliant Solutions'],
                ['name' => 'image',       'label' => 'Section Image',  'type' => 'image',    'description' => 'Recommended: 800×600px'],
                ['name' => 'image_alt',   'label' => 'Image Alt Text', 'type' => 'text',     'default' => 'Battery room installation'],
                ['name' => 'badge_since', 'label' => 'Image Badge — "Since" Line', 'type' => 'text', 'default' => 'Since 2004'],
                ['name' => 'badge_years', 'label' => 'Image Badge — "Years" Line', 'type' => 'text', 'default' => '20+ Years'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 80, 'unit' => 'px'],
                ['name' => 'body_font_size', 'label' => '🔤 Body Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 24, 'unit' => 'px'],
                // ── Colors ──
                ['name' => 'bg_color',        'label' => '🎨 Section Background',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',   'label' => '🎨 Heading Color',       'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',      'label' => '🎨 Body Text Color',     'type' => 'color', 'default' => '#e8f4ff'],
                ['name' => 'label_color',     'label' => '🎨 Label Color',         'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'badge_bg_color',  'label' => '🎨 Badge Background',    'type' => 'color', 'default' => '#1565c4'],
                ['name' => 'accent_color',    'label' => '🎨 Accent / Bar Color',  'type' => 'color', 'default' => '#ffffff'],
                // ── Spacing ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // MISSION (Our Mission)
        // ══════════════════════════════════════════════════
        'mission' => [
            'label' => 'Our Mission',
            'icon'  => '🎯',
            'fields' => [
                // ── Content ──
                ['name' => 'label',     'label' => 'Section Label', 'type' => 'text', 'default' => 'OUR MISSION'],
                ['name' => 'heading',   'label' => 'Heading',       'type' => 'textarea', 'rows' => 2,
                    'default' => "Powering What\nMatters Most"],
                ['name' => 'body',      'label' => 'Body Text',     'type' => 'textarea', 'rows' => 4,
                    'default' => 'To provide mission-critical power solutions that combine reliability, technical excellence, and lifecycle support for long-term operational value.'],
                ['name' => 'image',     'label' => 'Left Image',    'type' => 'image',
                    'description' => 'Recommended: 600×600px — shown on the left side'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text','type' => 'text', 'default' => 'Technician at work'],
                ['name' => 'quote',     'label' => 'Image Quote Overlay', 'type' => 'textarea', 'rows' => 2,
                    'default' => '"Reliability first. Every system. Every client. Every time."'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 80, 'unit' => 'px',
                    'description' => 'Default: 40px'],
                ['name' => 'body_font_size', 'label' => '🔤 Body Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 24, 'unit' => 'px',
                    'description' => 'Default: 15px'],
                // ── Colors ──
                ['name' => 'bg_color',      'label' => '🎨 Section Background', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color', 'label' => '🎨 Heading Color',      'type' => 'color', 'default' => '#0d1b2e'],
                ['name' => 'body_color',    'label' => '🎨 Body Text Color',    'type' => 'color', 'default' => '#4a5568'],
                ['name' => 'label_color',   'label' => '🎨 Label Color',        'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'accent_color',  'label' => '🎨 Accent Bar Color',   'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'quote_bg_color','label' => '🎨 Quote Bar Background','type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'quote_color',   'label' => '🎨 Quote Text Color',   'type' => 'color', 'default' => '#ffffff'],
                // ── Spacing ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // MISSION FEATURES (3 feature cards)
        // ══════════════════════════════════════════════════
        'mission-features' => [
            'label' => 'Our Mission — Feature Cards',
            'icon'  => '⚙️',
            'fields' => [
                [
                    'name'         => 'features',
                    'label'        => 'Feature Cards',
                    'type'         => 'repeater',
                    'description'  => '3 small feature cards shown below the mission body text',
                    'default_rows' => [
                        ['icon' => '🔧', 'label' => 'Practical',         'desc' => 'Real-world performance'],
                        ['icon' => '📐', 'label' => 'Standards-Aligned', 'desc' => 'Industry best practices'],
                        ['icon' => '📈', 'label' => 'Long-Term',         'desc' => 'Reliability & uptime focus'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',  'label' => 'Icon (emoji)',   'type' => 'text'],
                        ['name' => 'label', 'label' => 'Card Title',     'type' => 'text'],
                        ['name' => 'desc',  'label' => 'Card Subtitle',  'type' => 'text'],
                    ],
                ],
                // ── Colors ──
                ['name' => 'card_bg_color',     'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#f8fafc'],
                ['name' => 'card_border_color', 'label' => '🎨 Card Border Color', 'type' => 'color', 'default' => '#e8edf4'],
                ['name' => 'card_top_color',    'label' => '🎨 Card Top Accent',   'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_title_color',  'label' => '🎨 Card Title Color',  'type' => 'color', 'default' => '#0d1b2e'],
                ['name' => 'card_desc_color',   'label' => '🎨 Card Desc Color',   'type' => 'color', 'default' => '#7a8fa6'],
                // ── Typography ──
                ['name' => 'card_title_size', 'label' => '🔤 Card Title Size', 'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 24, 'unit' => 'px'],
                ['name' => 'card_desc_size', 'label' => '🔤 Card Desc Size', 'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 20, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // APPROACH (How We Work — header)
        // ══════════════════════════════════════════════════
        'approach' => [
            'label' => 'How We Work — Header',
            'icon'  => '⚙️',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text', 'default' => 'OUR APPROACH'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'text', 'default' => 'How We Work'],
                ['name' => 'subtext', 'label' => 'Subtext',       'type' => 'textarea', 'rows' => 2,
                    'default' => 'Practical, technically sound, and reliability-driven — ensuring uninterrupted power.'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 80, 'unit' => 'px',
                    'description' => 'Default: 46px'],
                ['name' => 'subtext_font_size', 'label' => '🔤 Subtext Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 30, 'unit' => 'px',
                    'description' => 'Default: 18px'],
                // ── Colors ──
                ['name' => 'bg_color',      'label' => '🎨 Section Background', 'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color', 'label' => '🎨 Heading Color',      'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'subtext_color', 'label' => '🎨 Subtext Color',      'type' => 'color', 'default' => '#9db8cc'],
                ['name' => 'label_color',   'label' => '🎨 Label Color',        'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'accent_color',  'label' => '🎨 Accent Bar Color',   'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'divider_color', 'label' => '🎨 Divider Line Color', 'type' => 'color', 'default' => '#1e2a3a'],
                // ── Spacing ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Default: 80px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Default: 160px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // APPROACH CARDS (4 value cards)
        // ══════════════════════════════════════════════════
        'approach-cards' => [
            'label' => 'How We Work — Value Cards',
            'icon'  => '🃏',
            'fields' => [
                [
                    'name'         => 'cards',
                    'label'        => 'Value Cards',
                    'type'         => 'repeater',
                    'description'  => 'The 4 numbered value cards (01–04)',
                    'default_rows' => [
                        [
                            'number'       => '01',
                            'title'        => "Reliability\nFirst Mindset",
                            'description'  => 'Mission-critical systems must stay operational. We build every solution with maximum uptime as the primary goal.',
                            'accent_color' => '#1e88e5',
                        ],
                        [
                            'number'       => '02',
                            'title'        => "Technical\nAccuracy",
                            'description'  => 'Clear, transparent guidance throughout the full battery lifecycle — no guesswork, no ambiguity.',
                            'accent_color' => '#1565c0',
                        ],
                        [
                            'number'       => '03',
                            'title'        => "Long-Term\nPartnerships",
                            'description'  => 'We support clients from initial specification through to end-of-life replacement planning and beyond.',
                            'accent_color' => '#0d47a1',
                        ],
                        [
                            'number'       => '04',
                            'title'        => "Safety &\nCompliance",
                            'description'  => 'Adhering to all industry standards and safe operational practices across every project and application.',
                            'accent_color' => '#1976d2',
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Number (e.g. 01)',  'type' => 'text'],
                        ['name' => 'title',        'label' => 'Card Title',        'type' => 'textarea', 'rows' => 2],
                        ['name' => 'description',  'label' => 'Card Description',  'type' => 'textarea', 'rows' => 3],
                        ['name' => 'accent_color', 'label' => 'Top Accent Color',  'type' => 'color', 'default' => '#1e88e5'],
                    ],
                ],
                // ── Card Global Styles ──
                ['name' => 'card_bg_color',    'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#0d1b2a'],
                ['name' => 'card_title_color', 'label' => '🎨 Card Title Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'card_desc_color',  'label' => '🎨 Card Desc Color',   'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'card_divider_color','label' => '🎨 Card Inner Divider','type' => 'color', 'default' => '#1e2a3a'],
                ['name' => 'card_border_radius','label' => '⬜ Card Border Radius','type' => 'number',
                    'default' => '20', 'min' => 0, 'max' => 40, 'unit' => 'px'],
                // ── Typography ──
                ['name' => 'number_font_size', 'label' => '🔤 Number Font Size',  'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 80, 'unit' => 'px', 'description' => 'Default: 42px'],
                ['name' => 'title_font_size',  'label' => '🔤 Title Font Size',   'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 40, 'unit' => 'px', 'description' => 'Default: 20px'],
                ['name' => 'desc_font_size',   'label' => '🔤 Desc Font Size',    'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 24, 'unit' => 'px', 'description' => 'Default: 14px'],
                // ── Spacing ──
                ['name' => 'card_padding',  'label' => '↔ Card Inner Padding', 'type' => 'number',
                    'default' => '24', 'min' => 8, 'max' => 60, 'unit' => 'px'],
                ['name' => 'cards_gap',     'label' => '↔ Gap Between Cards',  'type' => 'number',
                    'default' => '30', 'min' => 0, 'max' => 80, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ADVANTAGE (Why Choose Axion — header)
        // ══════════════════════════════════════════════════
        'advantage' => [
            'label' => 'Why Choose Axion — Header',
            'icon'  => '🏆',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'rows' => 2,
                    'default' => "The Axion\nAdvantage"],
                ['name' => 'subtext', 'label' => 'Subtext',       'type' => 'textarea', 'rows' => 2,
                    'default' => 'Trusted by engineers & contractors across mission-critical industries.'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 80, 'unit' => 'px', 'description' => 'Default: 42px'],
                ['name' => 'subtext_font_size', 'label' => '🔤 Subtext Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px', 'description' => 'Default: 15px'],
                // ── Colors ──
                ['name' => 'section_bg_from',  'label' => '🎨 Background Gradient Start', 'type' => 'color', 'default' => '#0d1b2a',
                    'description' => 'Gradient goes from this color (top-left) …'],
                ['name' => 'section_bg_to',    'label' => '🎨 Background Gradient End',   'type' => 'color', 'default' => '#1565c0',
                    'description' => '… to this color (bottom-right)'],
                ['name' => 'heading_color',    'label' => '🎨 Heading Color',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'subtext_color',    'label' => '🎨 Subtext Color',    'type' => 'color', 'default' => '#ffffff99'],
                ['name' => 'label_color',      'label' => '🎨 Label Color',      'type' => 'color', 'default' => '#64b5f6'],
                ['name' => 'accent_bar_color', 'label' => '🎨 Label Bar Color',  'type' => 'color', 'default' => '#64b5f6'],
                ['name' => 'top_card_bg',      'label' => '🎨 Top Card Background', 'type' => 'color', 'default' => '#0a1428',
                    'description' => 'The dark card containing heading + stats'],
                ['name' => 'top_card_border',  'label' => '🎨 Top Card Border Color', 'type' => 'color', 'default' => '#ffffff14'],
                // ── Spacing ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ADVANTAGE STATS (4 stat pills)
        // ══════════════════════════════════════════════════
        'advantage-stats' => [
            'label' => 'Why Choose Axion — Stats',
            'icon'  => '📊',
            'fields' => [
                [
                    'name'         => 'stats',
                    'label'        => 'Stats',
                    'type'         => 'repeater',
                    'description'  => '4 stat pills shown in the top card (right side)',
                    'default_rows' => [
                        ['value' => '20+',  'label' => 'Years'],
                        ['value' => '500+', 'label' => 'Projects'],
                        ['value' => '100%', 'label' => 'Compliant'],
                        ['value' => '24/7', 'label' => 'Support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value (e.g. 20+)',   'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label (e.g. Years)', 'type' => 'text'],
                    ],
                ],
                // ── Colors ──
                ['name' => 'stat_pill_bg',     'label' => '🎨 Stat Pill Background', 'type' => 'color', 'default' => '#ffffff1a'],
                ['name' => 'stat_value_color', 'label' => '🎨 Stat Value Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'stat_label_color', 'label' => '🎨 Stat Label Color',     'type' => 'color', 'default' => '#ffffff99'],
                // ── Typography ──
                ['name' => 'stat_value_size', 'label' => '🔤 Stat Value Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 50, 'unit' => 'px', 'description' => 'Default: 26px'],
                ['name' => 'stat_label_size', 'label' => '🔤 Stat Label Font Size', 'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 20, 'unit' => 'px', 'description' => 'Default: 11px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ADVANTAGE CARDS (4 feature cards)
        // ══════════════════════════════════════════════════
        'advantage-cards' => [
            'label' => 'Why Choose Axion — Feature Cards',
            'icon'  => '🃏',
            'fields' => [
                [
                    'name'         => 'cards',
                    'label'        => 'Feature Cards',
                    'type'         => 'repeater',
                    'description'  => '4 feature cards shown below the stats (01–04)',
                    'default_rows' => [
                        [
                            'number'       => '01',
                            'number_color' => '#1e88e5',
                            'icon'         => '⚡',
                            'title'        => 'VRLA & Wet Cell Expertise',
                            'description'  => 'Deep specialist knowledge in VRLA and wet cell battery solutions for every critical power application.',
                        ],
                        [
                            'number'       => '02',
                            'number_color' => '#ffffff',
                            'icon'         => '🏆',
                            'title'        => 'Proven Track Record',
                            'description'  => 'Trusted by consulting engineers, contractors, and users across industries for over two decades.',
                        ],
                        [
                            'number'       => '03',
                            'number_color' => '#0d1b2a',
                            'icon'         => '🔄',
                            'title'        => 'Full Lifecycle Support',
                            'description'  => 'From initial specification and procurement through to end-of-life replacement planning and beyond.',
                        ],
                        [
                            'number'       => '04',
                            'number_color' => '#1976d2',
                            'icon'         => '🔒',
                            'title'        => 'Reliable & Compliant',
                            'description'  => 'Every solution is technically sound, standards-compliant, and engineered for maximum long-term uptime.',
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Number (e.g. 01)',    'type' => 'text'],
                        ['name' => 'number_color', 'label' => 'Number Color',        'type' => 'color', 'default' => '#1e88e5'],
                        ['name' => 'icon',         'label' => 'Icon (emoji)',         'type' => 'text'],
                        ['name' => 'title',        'label' => 'Card Title',           'type' => 'text'],
                        ['name' => 'description',  'label' => 'Card Description',     'type' => 'textarea', 'rows' => 3],
                    ],
                ],
                // ── Card Global Styles ──
                ['name' => 'card_bg_color',    'label' => '🎨 Card Background',    'type' => 'color', 'default' => '#0a1428'],
                ['name' => 'card_border_color','label' => '🎨 Card Border Color',   'type' => 'color', 'default' => '#ffffff14'],
                ['name' => 'card_title_color', 'label' => '🎨 Card Title Color',   'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'card_desc_color',  'label' => '🎨 Card Desc Color',    'type' => 'color', 'default' => '#ffffff8c'],
                ['name' => 'card_divider_color','label' => '🎨 Card Divider Color','type' => 'color', 'default' => '#ffffff14'],
                ['name' => 'card_border_radius','label' => '⬜ Card Border Radius', 'type' => 'number',
                    'default' => '20', 'min' => 0, 'max' => 40, 'unit' => 'px'],
                // ── Typography ──
                ['name' => 'number_font_size', 'label' => '🔤 Number Font Size',   'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 80, 'unit' => 'px', 'description' => 'Default: 48px'],
                ['name' => 'title_font_size',  'label' => '🔤 Title Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 32, 'unit' => 'px', 'description' => 'Default: 17px'],
                ['name' => 'desc_font_size',   'label' => '🔤 Desc Font Size',     'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 22, 'unit' => 'px', 'description' => 'Default: 13px'],
                // ── Spacing ──
                ['name' => 'card_padding', 'label' => '↔ Card Inner Padding', 'type' => 'number',
                    'default' => '28', 'min' => 8, 'max' => 60, 'unit' => 'px'],
                ['name' => 'cards_gap',    'label' => '↔ Gap Between Cards',  'type' => 'number',
                    'default' => '24', 'min' => 0, 'max' => 80, 'unit' => 'px'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // CTA (Get In Touch)
        // ══════════════════════════════════════════════════
        'cta' => [
            'label' => 'Get In Touch — CTA',
            'icon'  => '📞',
            'fields' => [
                // ── Content ──
                ['name' => 'label',           'label' => 'Section Label',         'type' => 'text',
                    'default' => 'GET IN TOUCH'],
                ['name' => 'heading',         'label' => 'Heading',               'type' => 'textarea', 'rows' => 2,
                    'default' => "Ready to Power Your\nInfrastructure?"],
                ['name' => 'body',            'label' => 'Body Text',             'type' => 'textarea', 'rows' => 3,
                    'default' => 'Speak with our technical team today and discover how Axion can support your mission-critical power requirements.'],
                ['name' => 'btn_primary_label','label' => 'Primary Button Label', 'type' => 'text', 'default' => 'Speak with an Expert →'],
                ['name' => 'btn_primary_url', 'label' => 'Primary Button URL',   'type' => 'text', 'default' => '/contact'],
                ['name' => 'btn_ghost_label', 'label' => 'Ghost Button Label',   'type' => 'text', 'default' => 'Request a Quote'],
                ['name' => 'btn_ghost_url',   'label' => 'Ghost Button URL',     'type' => 'text', 'default' => '/contact'],
                ['name' => 'image',           'label' => 'Right Side Image',     'type' => 'image',
                    'description' => 'Recommended: 800×600px — shown on the right side'],
                ['name' => 'image_alt',       'label' => 'Image Alt Text',       'type' => 'text',
                    'default' => 'Axion technician at work'],
                ['name' => 'emergency_text',  'label' => 'Emergency Bar Text',   'type' => 'text',
                    'default' => '24/7 Emergency: 245 445 34352'],
                // ── Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 72, 'unit' => 'px', 'description' => 'Default: 42px'],
                ['name' => 'body_font_size',    'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 24, 'unit' => 'px', 'description' => 'Default: 16px'],
                // ── Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Section Background',     'type' => 'color', 'default' => '#f4f7fb'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',           'type' => 'color', 'default' => '#0d1b2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',         'type' => 'color', 'default' => '#4a5568'],
                ['name' => 'label_color',        'label' => '🎨 Label Color',             'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'accent_bar_color',   'label' => '🎨 Label Bar Color',         'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_bg',     'label' => '🎨 Primary Button BG',       'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_color',  'label' => '🎨 Primary Button Text',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_ghost_color',    'label' => '🎨 Ghost Button Text',       'type' => 'color', 'default' => '#0d1b2e'],
                ['name' => 'btn_ghost_border',   'label' => '🎨 Ghost Button Border',     'type' => 'color', 'default' => '#cbd5e0'],
                ['name' => 'emergency_bg',       'label' => '🎨 Emergency Bar Background','type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'emergency_color',    'label' => '🎨 Emergency Bar Text',      'type' => 'color', 'default' => '#ffffff'],
                // ── Spacing ──
                ['name' => 'padding_top',        'label' => '↕ Left Column Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Left Column Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px'],
                ['name' => 'image_width',        'label' => '↔ Right Image Column Width',   'type' => 'number',
                    'default' => '520', 'min' => 300, 'max' => 800, 'unit' => 'px'],
            ],
        ],

    ],
];
