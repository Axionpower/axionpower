<?php
/**
 * Axion CMS – Wet Cell Batteries Page Config
 * Defines all sections and fields for the Wet Cell (Flooded) Batteries page
 * All colors, typography, content, and layout values are fully editable.
 */
if (!defined('ABSPATH'))
    exit;

return [
    'slug' => 'wet-cell-batteries',
    'label' => 'Wet Cell Batteries',
    'sections' => [

        // ════════════════════════════════════════════════════
        // HERO SECTION
        // ════════════════════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => '🎯',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×1080px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'Home / Wet Cell Batteries'],
                ['name' => 'heading', 'label' => 'Heading Text', 'type' => 'text',
                    'default' => 'WET CELL'],
                ['name' => 'heading_highlight', 'label' => 'Heading Highlight (styled)', 'type' => 'text',
                    'default' => 'BATTERIES'],
                ['name' => 'subtitle', 'label' => 'Subtitle / Description', 'type' => 'textarea', 'rows' => 4,
                    'default' => 'High-capacity flooded batteries engineered for the most demanding stationary power applications.'],
                ['name' => 'cta_text', 'label' => 'CTA Button Text', 'type' => 'text',
                    'default' => 'Speak with an Expert'],
                ['name' => 'cta_link', 'label' => 'CTA Button Link', 'type' => 'text',
                    'default' => '#contact'],
                [
                    'name' => 'highlights', 'label' => 'Key Highlight Tags', 'type' => 'repeater',
                    'description' => 'Small text tags shown in the hero',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Text', 'type' => 'text'],
                    ],
                ],
                // ── 📐 Section Dimensions ──
                ['name' => 'section_min_height', 'label' => '📐 Section Min Height', 'type' => 'number',
                    'default' => '', 'min' => 300, 'max' => 1200, 'unit' => 'px',
                    'description' => 'Minimum hero height (default: 600px)'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom (Mobile)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Bottom padding — makes room for the overlapping next section (default: 130px on mobile)'],
                ['name' => 'padding_left', 'label' => '↔ Padding Left', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Content left padding (default: 120px)'],
                ['name' => 'padding_right', 'label' => '↔ Padding Right', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'choices' => ['h1' => 'H1 (default)', 'h2' => 'H2', 'h3' => 'H3', 'p' => 'p'],
                    'default' => 'h1'],
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 56px)'],
                ['name' => 'body_font_size', 'label' => '🔤 Body Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 32, 'unit' => 'px',
                    'description' => 'Override subtitle font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',         'label' => '🎨 Background Color',     'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',    'label' => '🎨 Heading Color',        'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',       'label' => '🎨 Body / Subtitle Color','type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'breadcrumb_color', 'label' => '🎨 Breadcrumb Color',     'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_bg',   'label' => '🎨 CTA Button Background','type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_fg',   'label' => '🎨 CTA Button Text Color','type' => 'color', 'default' => '#ffffff'],
                ['name' => 'highlight_color',  'label' => '🎨 Heading Highlight Color','type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // ABOUT SECTION
        // ════════════════════════════════════════════════════
        'about' => [
            'label' => 'About Section',
            'icon'  => '📋',
            'fields' => [
                // ── Content ──
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text',
                    'default' => 'Wet Cell (Flooded) Lead-Acid Batteries'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 5,
                    'default' => 'Flooded lead-acid batteries offer unmatched longevity and deep-cycle performance for large-scale stationary power systems.'],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the hero (default: 200px)'],
                ['name' => 'border_radius_top', 'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── ↕↔ Padding ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_left',   'label' => '↔ Padding Left',   'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_right',  'label' => '↔ Padding Right',  'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'label_font_size', 'label' => '🔤 Label Font Size', 'type' => 'number',
                    'default' => '', 'min' => 10, 'max' => 28, 'unit' => 'px'],
                ['name' => 'body_font_size',  'label' => '🔤 Body Font Size',  'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override description font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',    'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'label_color', 'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',  'label' => '🎨 Description Color', 'type' => 'color', 'default' => '#e8f4ff'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // TYPICAL APPLICATIONS SECTION
        // ════════════════════════════════════════════════════
        'applications' => [
            'label' => 'Typical Applications',
            'icon'  => '📱',
            'fields' => [
                // ── Content ──
                ['name' => 'label', 'label' => 'Section Label', 'type' => 'text',
                    'default' => 'TYPICAL APPLICATIONS'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text',
                    'default' => 'Wet cell batteries deliver proven performance in high-demand environments'],
                [
                    'name'  => 'cards', 'label' => 'Application Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                        ['name' => 'image',       'label' => 'Image',       'type' => 'image'],
                    ],
                ],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous (default: 200px)'],
                ['name' => 'border_radius_top', 'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── ↕↔ Padding ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_left',   'label' => '↔ Padding Left',   'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_right',  'label' => '↔ Padding Right',  'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'choices' => ['h2' => 'H2 (default)', 'h1' => 'H1', 'h3' => 'H3'], 'default' => 'h2'],
                ['name' => 'card_heading_tag', 'label' => '🔤 Card Heading Tag', 'type' => 'select',
                    'choices' => ['h3' => 'H3 (default)', 'h2' => 'H2', 'h4' => 'H4'], 'default' => 'h3'],
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 80, 'unit' => 'px'],
                ['name' => 'heading_font_weight', 'label' => '🔤 Heading Font Weight', 'type' => 'number',
                    'default' => '', 'min' => 100, 'max' => 900, 'unit' => ''],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',      'label' => '🎨 Background Color', 'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color', 'label' => '🎨 Heading Color',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'label_color',   'label' => '🎨 Label Color',      'type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // KEY BENEFITS SECTION
        // ════════════════════════════════════════════════════
        'key-benefits' => [
            'label' => 'Key Benefits',
            'icon'  => '⭐',
            'fields' => [
                // ── Content ──
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text',
                    'default' => 'Key Benefits'],
                [
                    'name'  => 'cards', 'label' => 'Benefit Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                        ['name' => 'image',       'label' => 'Image',       'type' => 'image'],
                    ],
                ],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous (default: 200px)'],
                ['name' => 'border_radius_top', 'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── ↕↔ Padding ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_left',   'label' => '↔ Padding Left',   'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_right',  'label' => '↔ Padding Right',  'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'choices' => ['h2' => 'H2 (default)', 'h1' => 'H1', 'h3' => 'H3'], 'default' => 'h2'],
                ['name' => 'card_heading_tag', 'label' => '🔤 Card Heading Tag', 'type' => 'select',
                    'choices' => ['h3' => 'H3 (default)', 'h2' => 'H2', 'h4' => 'H4'], 'default' => 'h3'],
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 80, 'unit' => 'px'],
                ['name' => 'heading_font_weight', 'label' => '🔤 Heading Font Weight', 'type' => 'number',
                    'default' => '', 'min' => 100, 'max' => 900, 'unit' => ''],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',      'label' => '🎨 Background Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color', 'label' => '🎨 Heading Color',    'type' => 'color', 'default' => '#1a1a2e'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // WHY CHOOSE US SECTION
        // ════════════════════════════════════════════════════
        'why-choose' => [
            'label' => 'Why Choose Us',
            'icon'  => '👍',
            'fields' => [
                // ── Content ──
                ['name' => 'heading_line1',     'label' => 'Heading Line 1',             'type' => 'text', 'default' => 'Why Choose'],
                ['name' => 'heading_highlight', 'label' => 'Heading Highlight (styled)', 'type' => 'text', 'default' => 'Axion'],
                ['name' => 'heading_line3',     'label' => 'Heading Line 3',             'type' => 'text', 'default' => 'Wet Cell Batteries'],
                [
                    'name'  => 'cards', 'label' => 'Reason Cards', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',  'label' => 'Number',      'type' => 'text'],
                        ['name' => 'text',    'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                        ['name' => 'variant', 'label' => 'Card Style',  'type' => 'select',
                            'choices' => ['white' => 'White', 'blue' => 'Blue'], 'default' => 'white'],
                    ],
                ],
                // ── ⬆ Section Stacking ──
                ['name' => 'margin_top_overlap', 'label' => '⬆ Negative Margin Top (Overlap)', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 300, 'unit' => 'px',
                    'description' => 'How much this section slides up over the previous (default: 200px)'],
                ['name' => 'border_radius_top', 'label' => '⌒ Top Border Radius', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 200, 'unit' => 'px',
                    'description' => 'Rounded top corners (default: 100px)'],
                // ── ↕↔ Padding ──
                ['name' => 'padding_top',    'label' => '↕ Padding Top',    'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_bottom', 'label' => '↕ Padding Bottom', 'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_left',   'label' => '↔ Padding Left',   'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                ['name' => 'padding_right',  'label' => '↔ Padding Right',  'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'choices' => ['h2' => 'H2 (default)', 'h1' => 'H1', 'h3' => 'H3'], 'default' => 'h2'],
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 80, 'unit' => 'px'],
                ['name' => 'heading_font_weight', 'label' => '🔤 Heading Font Weight', 'type' => 'number',
                    'default' => '', 'min' => 100, 'max' => 900, 'unit' => ''],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',        'label' => '🎨 Background Color',       'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',   'label' => '🎨 Heading Color',           'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'highlight_color', 'label' => '🎨 Heading Highlight Color', 'type' => 'color', 'default' => '#1e88e5'],
            ],
        ],
    ],
];
