<?php
/**
 * Axion CMS – Battery Cabinets Page Config
 * Defines all sections and fields for the Stationary Battery Cabinets page
 * All colors, typography, content, and layout values are fully editable.
 */
if (!defined('ABSPATH'))
    exit;

return [
    'slug' => 'battery-cabinets',
    'label' => 'Battery Cabinets',
    'sections' => [

        // ════════════════════════════════════════════════════
        // HERO SECTION
        // ════════════════════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => 'target',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×1080px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'Home / Battery Cabinets'],
                ['name' => 'heading', 'label' => 'Heading Text', 'type' => 'text',
                    'default' => 'STATIONARY BATTERY'],
                ['name' => 'heading_highlight', 'label' => 'Heading Highlight (styled)', 'type' => 'text',
                    'default' => 'CABINETS'],
                ['name' => 'description', 'label' => 'Description / Subtitle', 'type' => 'textarea', 'rows' => 4,
                    'default' => 'Axion Critical Power Solutions provides robust, purpose-built stationary battery cabinets designed to house and protect critical battery systems.'],
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
                    'description' => 'Override description font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',         'label' => '🎨 Background Color',      'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',    'label' => '🎨 Heading Color',         'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',       'label' => '🎨 Body / Description Color','type' => 'color', 'default' => '#cbd5e1'],
                ['name' => 'breadcrumb_color', 'label' => '🎨 Breadcrumb Color',      'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_bg',   'label' => '🎨 CTA Button Background', 'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'btn_primary_fg',   'label' => '🎨 CTA Button Text Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'highlight_color',  'label' => '🎨 Heading Highlight Color','type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // ABOUT SECTION
        // ════════════════════════════════════════════════════
        'about' => [
            'label' => 'About Section',
            'icon'  => 'clipboard',
            'fields' => [
                // ── Content ──
                ['name' => 'label_text', 'label' => 'Label Text', 'type' => 'text',
                    'default' => 'Stationary Battery Cabinets'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 5,
                    'default' => 'Purpose-built battery cabinets engineered for safety, thermal management, and code compliance.'],
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
        // ENGINEERED SECTION
        // ════════════════════════════════════════════════════
        'engineered' => [
            'label' => 'Engineered Section',
            'icon'  => 'wrench',
            'fields' => [
                // ── Content ──
                ['name' => 'label_text', 'label' => 'Label / Heading', 'type' => 'text',
                    'default' => 'Engineered Cabinet Solutions for Critical Power'],
                ['name' => 'description', 'label' => 'Description (use \\n for paragraph breaks)', 'type' => 'textarea', 'rows' => 6,
                    'default' => "Axion provides factory-assembled battery cabinets that integrate seamlessly with leading UPS platforms.\nOur technical team works closely with engineers, contractors, and end users to ensure cabinet solutions meet operational, safety, and compliance standards."],
                ['name' => 'image', 'label' => 'Section Image', 'type' => 'image',
                    'description' => 'Image of engineer / cabinet (right side)'],
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
                ['name' => 'label_font_size', 'label' => '🔤 Label Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 60, 'unit' => 'px'],
                ['name' => 'body_font_size',  'label' => '🔤 Body Font Size',  'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',    'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'label_color', 'label' => '🎨 Label / Heading Color', 'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',  'label' => '🎨 Description Color', 'type' => 'color', 'default' => '#555555'],
                ['name' => 'accent_color','label' => '🎨 Accent / Highlight Color','type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // KEY BENEFITS SECTION
        // ════════════════════════════════════════════════════
        'key-benefits' => [
            'label' => 'Key Benefits',
            'icon'  => 'star',
            'fields' => [
                // ── Content ──
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text',
                    'default' => 'Key Benefits'],
                [
                    'name'  => 'cards', 'label' => 'Benefit Cards', 'type' => 'repeater',
                    'default_rows' => [
                        [
                            'title'       => 'Seismic-Rated Construction',
                            'description' => 'Engineered to withstand Zone 4 seismic requirements',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Integrated Ventilation',
                            'description' => 'Built-in thermal management for optimal battery life',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Code-Compliant Designs',
                            'description' => 'Meets UL, NFPA, and IEEE standards out of the box',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Configurable Layouts',
                            'description' => 'Adaptable for VRLA, flooded, and lithium-ion systems',
                            'image'       => 0,
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                        ['name' => 'image',       'label' => 'Card Image',  'type' => 'image',
                            'description' => 'Recommended: 600×400px. Background image for the card.'],
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
            ],
        ],

        // ════════════════════════════════════════════════════
        // FEATURES SECTION
        // ════════════════════════════════════════════════════
        'features' => [
            'label' => 'Features List',
            'icon'  => 'file-text',
            'fields' => [
                // ── Content ──
                ['name' => 'label_text', 'label' => 'Label / Heading', 'type' => 'text',
                    'default' => 'Engineered Cabinet Solutions for Critical Power'],
                [
                    'name'  => 'features', 'label' => 'Feature Items', 'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Feature Text', 'type' => 'text'],
                        ['name' => 'bold', 'label' => 'Bold?', 'type' => 'select',
                            'choices' => ['0' => 'No', '1' => 'Yes'], 'default' => '0'],
                    ],
                ],
                ['name' => 'image', 'label' => 'Section Image', 'type' => 'image',
                    'description' => 'Image shown on the right side'],
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
                ['name' => 'label_font_size', 'label' => '🔤 Label Font Size', 'type' => 'number',
                    'default' => '', 'min' => 16, 'max' => 60, 'unit' => 'px'],
                ['name' => 'body_font_size',  'label' => '🔤 Feature Item Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',    'label' => '🎨 Background Color',         'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'label_color', 'label' => '🎨 Label / Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',  'label' => '🎨 Feature Items Text Color',  'type' => 'color', 'default' => '#555555'],
                ['name' => 'icon_color',  'label' => '🎨 Checkmark / Icon Color',    'type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // TYPICAL APPLICATIONS SECTION
        // ════════════════════════════════════════════════════
        'applications' => [
            'label' => 'Typical Applications',
            'icon'  => 'smartphone',
            'fields' => [
                // ── Content ──
                ['name' => 'label', 'label' => 'Section Label', 'type' => 'text',
                    'default' => 'TYPICAL APPLICATIONS'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text',
                    'default' => 'Battery cabinets are deployed across critical infrastructure, including'],
                [
                    'name'  => 'cards', 'label' => 'Application Cards', 'type' => 'repeater',
                    'default_rows' => [
                        [
                            'title'       => 'Data Centers & Colocation',
                            'description' => 'Secure, ventilated enclosures for high-density UPS battery systems',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Healthcare & Hospitals',
                            'description' => 'Code-compliant cabinets for life-safety power installations',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Commercial Buildings',
                            'description' => 'Space-efficient battery housing for building backup systems',
                            'image'       => 0,
                        ],
                        [
                            'title'       => 'Industrial & Utility Sites',
                            'description' => 'Rugged cabinets for demanding environments and seismic zones',
                            'image'       => 0,
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                        ['name' => 'image',       'label' => 'Card Image',  'type' => 'image',
                            'description' => 'Recommended: 600×400px. Background image for the card.'],
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
        // AXION'S APPROACH SECTION
        // ════════════════════════════════════════════════════
        'approach' => [
            'label' => "Axion's Approach",
            'icon'  => 'target',
            'fields' => [
                // ── Content ──
                ['name' => 'label_text', 'label' => 'Section Label', 'type' => 'text',
                    'default' => "Axion's Approach"],
                ['name' => 'description', 'label' => 'Description / Intro Text', 'type' => 'textarea', 'rows' => 4,
                    'default' => "Axion takes a system-level approach to battery cabinets, ensuring proper alignment between batteries, cabinets, UPS systems, and site conditions.\nSupport includes"],
                [
                    'name'  => 'items', 'label' => 'Timeline / Step Items', 'type' => 'repeater',
                    'default_rows' => [
                        [
                            'title' => 'Cabinet selection and configuration guidance',
                            'image' => 0,
                        ],
                        [
                            'title' => 'Coordination with battery and UPS requirements',
                            'image' => 0,
                        ],
                        [
                            'title' => 'Layout and space planning assistance',
                            'image' => 0,
                        ],
                        [
                            'title' => 'Compliance and safety considerations',
                            'image' => 0,
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'title', 'label' => 'Step Title', 'type' => 'text'],
                        ['name' => 'image', 'label' => 'Step Image', 'type' => 'image',
                            'description' => 'Oval image (recommended 320×240px)'],
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
                ['name' => 'label_font_size', 'label' => '🔤 Label Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                ['name' => 'body_font_size',  'label' => '🔤 Body Font Size',  'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',       'label' => '🎨 Background Color',     'type' => 'color', 'default' => ''],
                ['name' => 'label_color',    'label' => '🎨 Label Color',          'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',     'label' => '🎨 Description Color',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'step_bg_color',  'label' => '🎨 Step Card Background', 'type' => 'color', 'default' => ''],
                ['name' => 'step_text_color','label' => '🎨 Step Title Color',     'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // WHY CHOOSE US SECTION
        // ════════════════════════════════════════════════════
        'why-choose' => [
            'label' => 'Why Choose Us',
            'icon'  => 'thumbs-up',
            'fields' => [
                // ── Content ──
                ['name' => 'heading_line1',     'label' => 'Heading Line 1',             'type' => 'text', 'default' => 'Why Choose'],
                ['name' => 'heading_highlight', 'label' => 'Heading Highlight (styled)', 'type' => 'text', 'default' => 'Axion'],
                ['name' => 'heading_line3',     'label' => 'Heading Line 3',             'type' => 'text', 'default' => 'Battery Cabinets'],
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
