<?php
/**
 * Axion CMS – Quality, Safety & Compliance Page Config
 * Sections: hero (btn_label, btn_url), intro, intro-cards,
 *           standards, standards-cards,
 *           manufacturer, manufacturer-steps,
 *           handling (image, image2), handling-cards,
 *           environment, environment-cards, environment-lifecycle,
 *           cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'quality-safety',
    'label'    => 'Quality, Safety & Compliance',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => '🛡',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×600px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'HOME  /  QUALITY, SAFETY & COMPLIANCE'],
                ['name' => 'heading', 'label' => 'Hero Heading', 'type' => 'text',
                    'default' => 'Quality, Safety & Compliance'],
                ['name' => 'subtext', 'label' => 'Hero Subtext', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Quality, safety, and compliance are integral to every battery solution we provide — from manufacturer selection to lifecycle support.'],
                ['name' => 'top_badge_text', 'label' => 'Top-Right Badge Text', 'type' => 'text',
                    'default' => '🛡  Quality Assured',
                    'description' => 'The small floating badge at the top-right of the hero'],
                // ── 🔘 CTA Button ──
                ['name' => 'btn_label', 'label' => 'Button Label', 'type' => 'text',
                    'default' => 'Explore Our Standards →',
                    'description' => 'Label for the hero CTA button'],
                ['name' => 'btn_url',   'label' => 'Button URL',   'type' => 'text',
                    'default' => '/quality-safety-compliance#standards',
                    'description' => 'URL the button links to'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_height',   'label' => '📐 Section Height',  'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Hero section height (default: 600px)'],
                ['name' => 'section_min_height','label' => '📐 Section Min Height','type' => 'number',
                    'default' => '', 'min' => 300, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Minimum hero height (overrides fixed height on small screens)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',      'label' => '↕ Padding Top',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',   'label' => '↕ Padding Bottom',   'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',     'label' => '↔ Padding Left',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left padding for content (default: 120px)'],
                ['name' => 'padding_right',    'label' => '↔ Padding Right',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 54px)'],
                ['name' => 'subtext_font_size', 'label' => '🔤 Subtext Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 32, 'unit' => 'px',
                    'description' => 'Override subtext font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',          'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',     'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'subtext_color',     'label' => '🎨 Subtext Color',     'type' => 'color', 'default' => '#d0dcf0'],
                ['name' => 'accent_bar_color',  'label' => '🎨 Accent Bar Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'breadcrumb_color',  'label' => '🎨 Breadcrumb Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_bg', 'label' => '🎨 Button Background Color', 'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_fg', 'label' => '🎨 Button Text Color',       'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INTRODUCTION
        // ══════════════════════════════════════════════════
        'intro' => [
            'label'  => 'Introduction Section',
            'icon'   => '📘',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'INTRODUCTION'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Quality, Safety & Compliance\nAre Integral to Every Solution"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'We work with established battery manufacturers and follow recognized industry standards to deliver reliable, safe, and long-lasting mission-critical power systems.'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners of this section (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 1090px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 120px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 120px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 50px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#e8f4ff'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'divider_color',      'label' => '🎨 Divider Color',     'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        'intro-cards' => [
            'label'  => 'Introduction – Pillar Cards',
            'icon'   => '🃏',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Pillar Cards', 'type' => 'repeater',
                    'description' => 'Three pillar cards describing quality pillars',
                    'sub_fields' => [
                        ['name' => 'card_color', 'label' => 'Card Background Color', 'type' => 'color',
                            'default' => '#1565c0'],
                        ['name' => 'number',     'label' => 'Number', 'type' => 'text',
                            'placeholder' => '01'],
                        ['name' => 'icon',       'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🏅'],
                        ['name' => 'title',      'label' => 'Title (use \\n for line break)', 'type' => 'textarea', 'rows' => 2,
                            'placeholder' => "Standards\nCompliance"],
                        ['name' => 'description','label' => 'Description', 'type' => 'textarea', 'rows' => 3],
                        ['name' => 'badge_label','label' => 'Badge Label', 'type' => 'text',
                            'placeholder' => '4 Standards'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INDUSTRY STANDARDS
        // ══════════════════════════════════════════════════
        'standards' => [
            'label'  => 'Industry Standards Section',
            'icon'   => '📋',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'INDUSTRY STANDARDS & BEST PRACTICES'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Standards We\nAlign With"],
                // ── Bottom Notes ──
                [
                    'name'  => 'notes', 'label' => 'Bottom Notes (Bullet Points)', 'type' => 'repeater',
                    'description' => '3 bullet items shown below the standards cards',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Note Text', 'type' => 'text',
                            'placeholder' => 'e.g. All standards verified annually'],
                    ],
                ],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 1020px)'],
                ['name' => 'cards_gap_vertical',  'label' => '📐 Cards Gap (Vertical)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 120, 'unit' => 'px',
                    'description' => 'Vertical gap between rows of cards (default: 60px)'],
                ['name' => 'cards_gap_horizontal','label' => '📐 Cards Gap (Horizontal)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 120, 'unit' => 'px',
                    'description' => 'Horizontal gap between cards (default: 60px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 120px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 120px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 46px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#f5f8ff'],
                ['name' => 'progress_track_color','label' => '🎨 Progress Track Color','type' => 'color','default' => '#e0e8f5'],
            ],
        ],

        'standards-cards' => [
            'label'  => 'Industry Standards – Cards',
            'icon'   => '🏅',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Standards Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'badge_color',  'label' => 'Badge Color',    'type' => 'color',    'default' => '#1e88e5'],
                        ['name' => 'badge_abbr',   'label' => 'Badge Abbreviation', 'type' => 'text', 'placeholder' => 'IEEE'],
                        ['name' => 'title',        'label' => 'Title',          'type' => 'text',     'placeholder' => 'Institute of Electrical...'],
                        ['name' => 'description',  'label' => 'Description',    'type' => 'textarea', 'rows' => 3],
                        ['name' => 'percentage',   'label' => 'Compliance Percentage', 'type' => 'number', 'default' => 95, 'min' => 0, 'max' => 100],
                        ['name' => 'percentage_color','label' => 'Percentage Color', 'type' => 'color', 'default' => '#1e88e5'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // MANUFACTURER QA
        // ══════════════════════════════════════════════════
        'manufacturer' => [
            'label'  => 'Manufacturer QA Section',
            'icon'   => '🔬',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'MANUFACTURER QUALITY ASSURANCE'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "How We Verify\nQuality"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'We collaborate with trusted battery manufacturers with proven quality management systems — ensuring every VRLA and wet cell battery meets strict criteria.'],
                ['name' => 'image',   'label' => 'Right Column Image', 'type' => 'image'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text', 'type' => 'text'],
                // ── Quality Score Card ──
                ['name' => 'quality_score_value', 'label' => 'Quality Score Value', 'type' => 'text',
                    'default' => '99.8%'],
                ['name' => 'quality_score_label', 'label' => 'Quality Score Label', 'type' => 'text',
                    'default' => 'Quality Score'],
                ['name' => 'quality_score_sub',   'label' => 'Quality Score Sub Text', 'type' => 'text',
                    'default' => 'Manufacturer verified'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 1116px)'],
                ['name' => 'right_col_width',    'label' => '📐 Right Image Width',  'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 900, 'unit' => 'px'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 120px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 120px)'],
                ['name' => 'content_gap',        'label' => '↔ Column Gap',         'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Gap between text and image (default: 80px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 46px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#0d1b2a'],
                ['name' => 'timeline_color',     'label' => '🎨 Timeline BG Color', 'type' => 'color', 'default' => '#1e2a3a'],
                ['name' => 'timeline_active_color','label' => '🎨 Timeline Active Color','type' => 'color','default' => '#1e88e5'],
                ['name' => 'image_card_bg',      'label' => '🎨 Image Card BG Color','type' => 'color','default' => '#071828'],
            ],
        ],

        'manufacturer-steps' => [
            'label'  => 'Manufacturer QA – Steps',
            'icon'   => '🔢',
            'fields' => [
                [
                    'name'  => 'steps', 'label' => 'Quality Verification Steps', 'type' => 'repeater',
                    'description' => 'Timeline steps for manufacturer QA process',
                    'sub_fields' => [
                        ['name' => 'number',         'label' => 'Step Number', 'type' => 'text',
                            'placeholder' => '01'],
                        ['name' => 'number_color',   'label' => 'Number Color', 'type' => 'color',
                            'default' => '#1e88e5'],
                        ['name' => 'icon',           'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🔍'],
                        ['name' => 'title',          'label' => 'Step Title', 'type' => 'text'],
                        ['name' => 'description',    'label' => 'Step Description', 'type' => 'textarea', 'rows' => 2],
                        ['name' => 'connector_color','label' => 'Connector Line Color', 'type' => 'color',
                            'default' => '#1e88e5'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // SAFE HANDLING
        // ══════════════════════════════════════════════════
        'handling' => [
            'label'  => 'Safe Handling Section',
            'icon'   => '🛡',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'SAFE HANDLING & INSTALLATION GUIDANCE'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Safety at\nEvery Step"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Safety is a core component of Axion\'s lifecycle support — minimizing risk and ensuring operational reliability.'],
                ['name' => 'image',    'label' => 'Right Column Image (Main)', 'type' => 'image',
                    'description' => 'Primary image on the right side'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text', 'type' => 'text'],
                ['name' => 'image2',   'label' => 'Right Column Image (Secondary)', 'type' => 'image',
                    'description' => 'Smaller second image shown below the main image — optional'],
                ['name' => 'image2_alt', 'label' => 'Second Image Alt Text', 'type' => 'text',
                    'default' => 'Battery installation detail'],
                // ── Safety Stat Card ──
                ['name' => 'stat_value', 'label' => 'Safety Stat Value', 'type' => 'text',
                    'default' => '100%'],
                ['name' => 'stat_label', 'label' => 'Safety Stat Label (use \\n for line break)', 'type' => 'text',
                    'default' => 'Safety\nCompliance'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 1126px)'],
                ['name' => 'right_col_width',    'label' => '📐 Right Image Width',  'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 900, 'unit' => 'px'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 100px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'content_gap',        'label' => '↔ Column Gap',         'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Gap between text and image (default: 80px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 46px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#c5ddf0'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#1976d2'],
                ['name' => 'image_card_bg',      'label' => '🎨 Image Card BG Color','type' => 'color','default' => '#071828'],
            ],
        ],

        'handling-cards' => [
            'label'  => 'Safe Handling – Cards',
            'icon'   => '📋',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Handling Guidance Cards', 'type' => 'repeater',
                    'description' => 'Cards for each safety guidance category',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Card Number', 'type' => 'text',
                            'placeholder' => '01'],
                        ['name' => 'title',       'label' => 'Card Title', 'type' => 'text'],
                        ['name' => 'description','label' => 'Card Description', 'type' => 'textarea', 'rows' => 2],
                        [
                            'name'  => 'checks', 'label' => 'Safety Checklist Items', 'type' => 'repeater',
                            'sub_fields' => [
                                ['name' => 'text', 'label' => 'Check Item Text', 'type' => 'text',
                                    'placeholder' => 'e.g. Verify voltage compatibility'],
                            ],
                        ],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ENVIRONMENTAL RESPONSIBILITY
        // ══════════════════════════════════════════════════
        'environment' => [
            'label'  => 'Environmental Responsibility Section',
            'icon'   => '🌱',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'ENVIRONMENTAL RESPONSIBILITY'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Lifecycle Environmental\nResponsibility"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Axion integrates environmental responsibility across the battery lifecycle — from delivery to end-of-life, ensuring compliance and sustainable operations.'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 1008px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 120px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 120px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 44px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 16px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#555555'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#f5f8ff'],
                ['name' => 'center_circle_color','label' => '🎨 Lifecycle Center Circle Color','type' => 'color','default' => '#1e88e5'],
            ],
        ],

        'environment-cards' => [
            'label'  => 'Environmental – Info Cards',
            'icon'   => '🃏',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Environmental Info Cards', 'type' => 'repeater',
                    'description' => 'Cards describing environmental practices at different lifecycle stages',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '♻️'],
                        ['name' => 'title',       'label' => 'Card Title', 'type' => 'text'],
                        ['name' => 'badge_label', 'label' => 'Badge Label', 'type' => 'text',
                            'placeholder' => 'Zero Waste Goal'],
                        ['name' => 'description','label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        'environment-lifecycle' => [
            'label'  => 'Environmental – Lifecycle Steps',
            'icon'   => '🔄',
            'fields' => [
                [
                    'name'  => 'steps', 'label' => 'Lifecycle Steps', 'type' => 'repeater',
                    'description' => 'Steps shown in the lifecycle diagram orbit',
                    'sub_fields' => [
                        ['name' => 'icon_label',  'label' => 'Icon Label (emoji + text on line break)', 'type' => 'text',
                            'placeholder' => "📦\nDelivery"],
                        ['name' => 'circle_color','label' => 'Circle Color', 'type' => 'color'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // CTA
        // ══════════════════════════════════════════════════
        'cta' => [
            'label'  => 'CTA Section',
            'icon'   => '📣',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'QUALITY COMMITMENT'],
                ['name' => 'heading', 'label' => 'CTA Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Committed to Quality,\nSafety & Compliance."],
                ['name' => 'body',    'label' => 'CTA Body', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Every battery solution we deliver meets the highest standards of quality, safety, and regulatory compliance — guaranteed.'],
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'View Our Standards →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text',
                    'default' => '/quality-safety-compliance'],
                ['name' => 'btn_ghost_label',   'label' => 'Ghost Button Label',   'type' => 'text',
                    'default' => 'Contact Us →'],
                ['name' => 'btn_ghost_url',     'label' => 'Ghost Button URL',     'type' => 'text',
                    'default' => '/contact'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 200px)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 460px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Padding above content (default: 72px)'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 600, 'unit' => 'px',
                    'description' => 'Bottom padding of CTA section (default: 254px)'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left padding (default: 120px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right padding (default: 120px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 38px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',     'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',        'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',      'type' => 'color', 'default' => '#e0f0ff'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_primary_bg',     'label' => '🎨 Primary Button BG',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_primary_fg',     'label' => '🎨 Primary Button Text',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_ghost_color',    'label' => '🎨 Ghost Button Color',   'type' => 'color', 'default' => '#ffffff',
                    'description' => 'Ghost button text and border color'],
            ],
        ],

    ],
];
