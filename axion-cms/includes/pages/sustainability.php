<?php
/**
 * Axion CMS – Sustainability & Compliance Page Config
 * Sections: hero, intro, intro-steps, intro-badges,
 *           recycling, recycling-items,
 *           compliance, compliance-cards,
 *           sourcing, sourcing-cards,
 *           safety, safety-items, cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'sustainability',
    'label'    => 'Sustainability & Compliance',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'target',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×580px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'HOME  /  SUSTAINABILITY & COMPLIANCE'],
                ['name' => 'heading', 'label' => 'Hero Heading', 'type' => 'text',
                    'default' => 'Sustainability & Compliance'],
                ['name' => 'subtext', 'label' => 'Hero Subtext', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Environmental responsibility and regulatory compliance are central to Axion\'s approach — integrated throughout the entire battery lifecycle.'],
                ['name' => 'top_badge_text', 'label' => 'Top-Right Badge Text', 'type' => 'text',
                    'default' => '🌿  Sustainability Focus',
                    'description' => 'The small floating badge at the top-right of the hero'],
                // ── 🏷 Pill Badges (bottom row) ──
                [
                    'name'  => 'pills', 'label' => 'Hero Pill Badges', 'type' => 'repeater',
                    'description' => 'The three pill badges shown at the bottom of the hero section',
                    'sub_fields' => [
                        ['name' => 'label', 'label' => 'Badge Text', 'type' => 'text',
                            'placeholder' => '♻️  Responsible Recycling'],
                    ],
                ],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_height',   'label' => '📐 Section Height',  'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Hero section height (default: 580px)'],
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
                    'description' => 'Override heading font size (default: 52px)'],
                ['name' => 'subtext_font_size', 'label' => '🔤 Subtext Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 32, 'unit' => 'px',
                    'description' => 'Override subtext font size (default: 18px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',          'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',     'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'subtext_color',     'label' => '🎨 Subtext Color',     'type' => 'color', 'default' => '#d0dcef'],
                ['name' => 'accent_bar_color',  'label' => '🎨 Accent Bar Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'breadcrumb_color',  'label' => '🎨 Breadcrumb Color',  'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'pill_bg_color',     'label' => '🎨 Pill Badge BG Color','type' => 'color', 'default' => '#1e3a5f'],
                ['name' => 'pill_text_color',   'label' => '🎨 Pill Badge Text Color','type' => 'color','default' => '#7ec8f8'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INTRODUCTION
        // ══════════════════════════════════════════════════
        'intro' => [
            'label'  => 'Introduction Section',
            'icon'   => 'file-text',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'INTRODUCTION'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Environmental\nResponsibility\nBy Design"],
                ['name' => 'body1',   'label' => 'Body Paragraph 1', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Environmental responsibility and regulatory compliance are central to Axion's approach to mission-critical battery solutions."],
                ['name' => 'body2',   'label' => 'Body Paragraph 2', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'We ensure sustainability and safety are integrated throughout the battery lifecycle — from system selection and installation to maintenance, replacement, and recycling.'],
                ['name' => 'image',   'label' => 'Right Column Image', 'type' => 'image'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text', 'type' => 'text',
                    'default' => 'Sustainable power facility'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners of this section (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 790px)'],
                ['name' => 'right_col_width',    'label' => '📐 Right Image Width',  'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 900, 'unit' => 'px',
                    'description' => 'Width of the right image column (default: 560px)'],
                ['name' => 'right_col_margin_top','label' => '📐 Right Image Margin Top','type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Top offset of right image from section top (default: 80px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Bottom buffer before next section overlaps (default: 96px = 6rem)'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 100px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 120px)'],
                ['name' => 'content_gap',        'label' => '↔ Column Gap',         'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Gap between left text column and right image (default: 80px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 44px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#ffffffe0'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#c8e8ff'],
                ['name' => 'step_label_color',   'label' => '🎨 Step Label Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'badge_bg_color',     'label' => '🎨 Badge Background',  'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'badge_text_color',   'label' => '🎨 Badge Text Color',  'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        'intro-steps' => [
            'label'  => 'Introduction – Lifecycle Steps',
            'icon'   => 'refresh-cw',
            'fields' => [
                [
                    'name'  => 'steps', 'label' => 'Lifecycle Steps', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'label', 'label' => 'Step Label', 'type' => 'text',
                            'placeholder' => 'e.g. Selection'],
                    ],
                ],
            ],
        ],

        'intro-badges' => [
            'label'  => 'Introduction – Stat Badges',
            'icon'   => 'file-text',
            'fields' => [
                [
                    'name'  => 'badges', 'label' => 'Stat Badges', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value / Emoji', 'type' => 'text',
                            'placeholder' => '100%'],
                        ['name' => 'label', 'label' => 'Badge Label', 'type' => 'text',
                            'placeholder' => 'Certified Partners'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // RECYCLING PROGRAMS
        // ══════════════════════════════════════════════════
        'recycling' => [
            'label'  => 'Recycling Programs Section',
            'icon'   => 'refresh-cw',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'RECYCLING PROGRAMS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Responsible\nEnd-of-Life Management"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'We partner with certified recycling providers to ensure safe, compliant disposal of VRLA and wet cell batteries.'],
                ['name' => 'quote',   'label' => 'Left Card Quote', 'type' => 'textarea', 'rows' => 2,
                    'default' => "\"Zero landfill. Certified partners.\nCompliant every step of the way.\""],
                ['name' => 'image',   'label' => 'Left Card Image', 'type' => 'image'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text', 'type' => 'text',
                    'default' => 'Battery recycling facility'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 910px)'],
                ['name' => 'left_col_width',     'label' => '📐 Left Image Card Width', 'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 900, 'unit' => 'px',
                    'description' => 'Width of the left image card (default: 520px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Bottom buffer before next section overlaps (default: 90px)'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left side padding (default: 80px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right side padding (default: 60px)'],
                ['name' => 'content_gap',        'label' => '↔ Column Gap',         'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Gap between left image card and right content (default: 80px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 40px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#444444'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'quote_bar_color',    'label' => '🎨 Quote Bar BG Color','type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'quote_text_color',   'label' => '🎨 Quote Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'item_bg_color',      'label' => '🎨 List Item BG Color','type' => 'color', 'default' => '#f5f8ff'],
                ['name' => 'item_icon_color',    'label' => '🎨 List Item Icon Color','type' => 'color','default' => '#1e88e5'],
            ],
        ],

        'recycling-items' => [
            'label'  => 'Recycling Programs – List Items',
            'icon'   => 'clipboard',
            'fields' => [
                [
                    'name'  => 'items', 'label' => 'Recycling Items', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',   'type' => 'text',     'placeholder' => '🚛'],
                        ['name' => 'title',       'label' => 'Title',          'type' => 'text',     'placeholder' => 'Collection & Transport'],
                        ['name' => 'description', 'label' => 'Description',    'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ENVIRONMENTAL COMPLIANCE
        // ══════════════════════════════════════════════════
        'compliance' => [
            'label'  => 'Environmental Compliance Section',
            'icon'   => 'file-text',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'ENVIRONMENTAL COMPLIANCE'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Compliance\nAt Every Stage"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Working with manufacturers and partners that comply with environmental regulations and recognized industry standards.'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 960px)'],
                ['name' => 'cards_gap',          'label' => '📐 Cards Gap',          'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 120, 'unit' => 'px',
                    'description' => 'Gap between the 3 cards (default: 30px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Padding above header content (default: 80px)'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 600, 'unit' => 'px',
                    'description' => 'Bottom padding — increase to give next section more room to overlap (default: 260px)'],
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
                    'description' => 'Override heading font size (default: 46px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#7ec8f8'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#0d1b2a'],
            ],
        ],

        'compliance-cards' => [
            'label'  => 'Environmental Compliance – Cards',
            'icon'   => 'layers',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Compliance Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'accent_color', 'label' => 'Accent Color (top bar + icon bg)',  'type' => 'color',    'default' => '#1e88e5'],
                        ['name' => 'icon',         'label' => 'Icon (emoji)',                       'type' => 'text',     'placeholder' => '📜'],
                        ['name' => 'title',        'label' => 'Title (use \\n for line break)',      'type' => 'textarea', 'rows' => 2],
                        ['name' => 'description',  'label' => 'Description',                        'type' => 'textarea', 'rows' => 3],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // RESPONSIBLE SOURCING
        // ══════════════════════════════════════════════════
        'sourcing' => [
            'label'  => 'Responsible Sourcing Section',
            'icon'   => 'leaf',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'RESPONSIBLE SOURCING'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Supply Chain\nIntegrity"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Carefully selected battery suppliers that share our commitment to sustainability, ethical practices, and high-quality, long-life solutions.'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 850px)'],
                ['name' => 'cards_gap',          'label' => '📐 Cards Gap',          'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 120, 'unit' => 'px',
                    'description' => 'Gap between the 3 cards (default: 30px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Padding above header content (default: 80px)'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 600, 'unit' => 'px',
                    'description' => 'Bottom padding — increase to give next section more room to overlap (default: 260px)'],
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
                    'description' => 'Override heading font size (default: 46px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#c5ddf0'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#7ec8f8'],
            ],
        ],

        'sourcing-cards' => [
            'label'  => 'Responsible Sourcing – Cards',
            'icon'   => 'layers',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Sourcing Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'card_color',   'label' => 'Card Background Color',      'type' => 'color',    'default' => '#1e88e5'],
                        ['name' => 'number_color', 'label' => 'Number Watermark Color',     'type' => 'color',    'default' => '#ffffff'],
                        ['name' => 'number',       'label' => 'Number',                     'type' => 'text',     'placeholder' => '01'],
                        ['name' => 'icon',         'label' => 'Icon (emoji)',                'type' => 'text',     'placeholder' => '🌱'],
                        ['name' => 'title',        'label' => 'Title (use \\n for line break)','type' => 'textarea','rows' => 2],
                        ['name' => 'description',  'label' => 'Description',                'type' => 'textarea', 'rows' => 3],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // SAFETY & HANDLING
        // ══════════════════════════════════════════════════
        'safety' => [
            'label'  => 'Safety & Handling Section',
            'icon'   => 'file-text',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'SAFETY & HANDLING'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Safety Standards\nFor Every Installation"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 4,
                    'default' => 'Proper battery handling is essential for safety, system performance, and compliance. Axion provides guidance and support to ensure batteries are installed, operated, and maintained safely.'],
                ['name' => 'image',        'label' => 'Right Column Image',     'type' => 'image'],
                ['name' => 'image_alt',    'label' => 'Image Alt Text',          'type' => 'text',
                    'default' => 'Safe battery installation'],
                ['name' => 'image_badge',     'label' => 'Image Badge Main Text', 'type' => 'text',
                    'default' => '⚠️  Safety First'],
                ['name' => 'image_badge_sub', 'label' => 'Image Badge Sub Text',  'type' => 'text',
                    'default' => 'IEEE · UL · CSA Aligned'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 400, 'max' => 2000, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 850px)'],
                ['name' => 'right_col_width',    'label' => '📐 Right Image Card Width', 'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 900, 'unit' => 'px',
                    'description' => 'Width of the right image card (default: 560px)'],
                ['name' => 'right_col_height',   'label' => '📐 Right Image Card Height','type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 1000, 'unit' => 'px',
                    'description' => 'Height of the right image card (default: 500px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Padding above content (default: 90px)'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 600, 'unit' => 'px',
                    'description' => 'Bottom padding — increase to give CTA section more room to overlap (default: 260px)'],
                // ── ↔ Horizontal Padding ──
                ['name' => 'padding_left',       'label' => '↔ Padding Left',       'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Left padding (default: 100px)'],
                ['name' => 'padding_right',      'label' => '↔ Padding Right',      'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Right padding (default: 80px)'],
                ['name' => 'content_gap',        'label' => '↔ Column Gap',         'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'Gap between left text column and right image card (default: 60px)'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 40px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#555555'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'item_tint_color',    'label' => '🎨 Item Row Tint BG',  'type' => 'color', 'default' => '#f0f5ff'],
                ['name' => 'cert_bg_color',      'label' => '🎨 Cert Badge BG Color','type' => 'color','default' => '#f0f5ff'],
                ['name' => 'cert_text_color',    'label' => '🎨 Cert Badge Text Color','type' => 'color','default' => '#1a1a2e'],
            ],
        ],

        'safety-items' => [
            'label'  => 'Safety & Handling – List Items',
            'icon'   => 'clipboard',
            'fields' => [
                [
                    'name'  => 'items', 'label' => 'Safety Items', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',     'placeholder' => '🔧'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text',     'placeholder' => 'Safe Installation'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'  => 'certs', 'label' => 'Certification Badges', 'type' => 'repeater',
                    'description' => 'IEEE, UL, CSA, IEC badges shown below the items list',
                    'sub_fields' => [
                        ['name' => 'abbr',  'label' => 'Abbreviation', 'type' => 'text', 'placeholder' => 'IEEE'],
                        ['name' => 'label', 'label' => 'Sub-label',    'type' => 'text', 'placeholder' => 'Std'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // CTA
        // ══════════════════════════════════════════════════
        'cta' => [
            'label'  => 'CTA Section',
            'icon'   => 'trending-up',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'TAKE ACTION'],
                ['name' => 'heading', 'label' => 'CTA Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Committed to Compliance.\nCommitted to the Environment."],
                ['name' => 'body',    'label' => 'CTA Body', 'type' => 'textarea', 'rows' => 2,
                    'default' => 'Speak with our team about sustainability and compliance support for your project.'],
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'Learn About Our Approach →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text',
                    'default' => '/about'],
                ['name' => 'btn_ghost_label',   'label' => 'Ghost Button Label',   'type' => 'text',
                    'default' => 'Contact Us →'],
                ['name' => 'btn_ghost_url',     'label' => 'Ghost Button URL',     'type' => 'text',
                    'default' => '/contact'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the Safety section (default: 96px = 6rem)'],
                ['name' => 'border_radius_top',  'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 200, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Minimum section height (default: 580px)'],
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
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',     'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',        'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',      'type' => 'color', 'default' => '#e0f0ff'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',     'type' => 'color', 'default' => '#c8e8ff'],
                ['name' => 'btn_primary_bg',     'label' => '🎨 Primary Button BG',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_primary_fg',     'label' => '🎨 Primary Button Text',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_ghost_color',    'label' => '🎨 Ghost Button Color',   'type' => 'color', 'default' => '#ffffff',
                    'description' => 'Ghost button text and border color'],
            ],
        ],

    ],
];
