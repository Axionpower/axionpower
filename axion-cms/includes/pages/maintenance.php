<?php
/**
 * Axion CMS – Maintenance & Monitoring Page Config
 * Sections: hero, intro, intro-cards,
 *           preventive, preventive-cards,
 *           remote, remote-metrics,
 *           predictive, predictive-cards, predictive-stats,
 *           benefits, benefits-cards, benefits-industries,
 *           cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'maintenance',
    'label'    => 'Maintenance & Monitoring',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'wrench',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×600px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'HOME  /  SERVICES  /  MAINTENANCE & MONITORING'],
                ['name' => 'heading', 'label' => 'Hero Heading', 'type' => 'text',
                    'default' => 'Maintenance & Monitoring'],
                ['name' => 'subtext', 'label' => 'Hero Subtext', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Comprehensive maintenance and real-time monitoring solutions designed to keep your mission-critical battery systems operating at peak performance.'],
                ['name' => 'top_badge_text', 'label' => 'Top-Right Badge Text', 'type' => 'text',
                    'default' => '🔧  Services',
                    'description' => 'The small floating badge at the top-right of the hero'],
                // ── Action Buttons ──
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'Request a Consultation →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text'],
                ['name' => 'btn_ghost_label',   'label' => 'Ghost Button Label',   'type' => 'text',
                    'default' => 'Speak with an Expert'],
                ['name' => 'btn_ghost_url',     'label' => 'Ghost Button URL',     'type' => 'text'],
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
                    'default' => 'OVERVIEW'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Comprehensive Maintenance & Monitoring\nfor Your Mission-Critical Power Systems"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Proactive maintenance and real-time monitoring ensure your VRLA and flooded battery systems maintain peak performance, maximize uptime, and extend asset lifespan.'],
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
            'icon'   => 'layers',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Overview Pillar Cards', 'type' => 'repeater',
                    'description' => 'Three pillar cards for overview section',
                    'sub_fields' => [
                        ['name' => 'card_color', 'label' => 'Card Background Color', 'type' => 'color',
                            'default' => '#1565c0'],
                        ['name' => 'icon',       'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🔍'],
                        ['name' => 'title',      'label' => 'Title', 'type' => 'text',
                            'placeholder' => 'Pillar Title'],
                        ['name' => 'description','label' => 'Description', 'type' => 'textarea', 'rows' => 3],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // PREVENTIVE MAINTENANCE
        // ══════════════════════════════════════════════════
        'preventive' => [
            'label'  => 'Preventive Maintenance Section',
            'icon'   => 'wrench',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'PREVENTIVE MAINTENANCE'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Preventive Maintenance\nfor VRLA & Flooded Batteries"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Regular preventive maintenance catches potential issues early, preventing costly downtime and extending battery lifespan. Our comprehensive approach covers all critical parameters.'],
                ['name' => 'image',   'label' => 'Right Column Image', 'type' => 'image'],
                ['name' => 'image_alt', 'label' => 'Image Alt Text', 'type' => 'text'],
                // ── Stat Card ──
                ['name' => 'stat_value', 'label' => 'Stat Value', 'type' => 'text',
                    'default' => '98.5%'],
                ['name' => 'stat_label', 'label' => 'Stat Label', 'type' => 'text',
                    'default' => 'Early Detection Rate'],
                ['name' => 'stat_sub',   'label' => 'Stat Sub Text', 'type' => 'text',
                    'default' => 'Issues caught before failure'],
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
                    'description' => 'Left side padding (default: 120px)'],
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
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#555555'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#0d1b2a'],
                ['name' => 'image_card_bg',      'label' => '🎨 Image Card BG Color','type' => 'color','default' => '#071828'],
            ],
        ],

        'preventive-cards' => [
            'label'  => 'Preventive Maintenance – Cards',
            'icon'   => 'clipboard',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Preventive Maintenance Cards', 'type' => 'repeater',
                    'description' => '7 cards for preventive maintenance methods',
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Card Number', 'type' => 'text',
                            'placeholder' => '01'],
                        ['name' => 'number_color', 'label' => 'Number Color', 'type' => 'color',
                            'default' => '#1e88e5'],
                        ['name' => 'icon',         'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '👁'],
                        ['name' => 'title',        'label' => 'Card Title', 'type' => 'text'],
                        ['name' => 'description',  'label' => 'Card Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // REMOTE MONITORING
        // ══════════════════════════════════════════════════
        'remote' => [
            'label'  => 'Remote Monitoring Section',
            'icon'   => 'radio',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'REMOTE MONITORING'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Real-Time Battery\nPerformance Visibility"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Monitor battery health, voltage, temperature, and performance metrics in real-time across your entire fleet with cloud-based visibility and instant alerts.'],
                // ── Dashboard Stats ──
                ['name' => 'dashboard_stat1_value', 'label' => 'Dashboard Stat 1 Value', 'type' => 'text',
                    'default' => '12.8V'],
                ['name' => 'dashboard_stat1_label', 'label' => 'Dashboard Stat 1 Label', 'type' => 'text',
                    'default' => 'Avg Voltage'],
                ['name' => 'dashboard_stat2_value', 'label' => 'Dashboard Stat 2 Value', 'type' => 'text',
                    'default' => '99.2%'],
                ['name' => 'dashboard_stat2_label', 'label' => 'Dashboard Stat 2 Label', 'type' => 'text',
                    'default' => 'Health'],
                ['name' => 'dashboard_stat3_value', 'label' => 'Dashboard Stat 3 Value', 'type' => 'text',
                    'default' => '24°C'],
                ['name' => 'dashboard_stat3_label', 'label' => 'Dashboard Stat 3 Label', 'type' => 'text',
                    'default' => 'Temp'],
                // ── Dashboard Alerts ──
                [
                    'name'  => 'alerts', 'label' => 'Dashboard Alerts (Quick Summary)', 'type' => 'repeater',
                    'description' => 'Alert items shown on the dashboard',
                    'sub_fields' => [
                        ['name' => 'icon',  'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '✓'],
                        ['name' => 'text',  'label' => 'Alert Text', 'type' => 'text',
                            'placeholder' => 'All systems nominal'],
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
                    'description' => 'Minimum section height (default: 1208px)'],
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
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 50px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'dashboard_bg_color', 'label' => '🎨 Dashboard BG Color','type' => 'color','default' => '#0d1b2a'],
                ['name' => 'dashboard_accent',   'label' => '🎨 Dashboard Accent',  'type' => 'color','default' => '#1e88e5'],
            ],
        ],

        'remote-metrics' => [
            'label'  => 'Remote Monitoring – Metric Cards',
            'icon'   => 'bar-chart',
            'fields' => [
                [
                    'name'  => 'metrics', 'label' => 'Monitoring Metric Cards', 'type' => 'repeater',
                    'description' => '6 metric cards for remote monitoring',
                    'sub_fields' => [
                        ['name' => 'icon',      'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '⚡'],
                        ['name' => 'title',     'label' => 'Metric Title', 'type' => 'text',
                            'placeholder' => 'Cell Voltage'],
                        ['name' => 'subtitle',  'label' => 'Metric Subtitle', 'type' => 'text',
                            'placeholder' => 'Per cell'],
                        ['name' => 'card_color','label' => 'Card Background Color', 'type' => 'color',
                            'default' => '#0d1b2a'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // PREDICTIVE ANALYTICS
        // ══════════════════════════════════════════════════
        'predictive' => [
            'label'  => 'Predictive Analytics Section',
            'icon'   => 'bar-chart',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'PREDICTIVE ANALYTICS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Identify Issues Before\nThey Cause Failures"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Advanced analytics use historical data and machine learning to predict battery degradation, component failures, and environmental stress before they impact operations.'],
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
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 50px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#c5ddf0'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        'predictive-cards' => [
            'label'  => 'Predictive Analytics – Cards',
            'icon'   => 'layers',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Predictive Analytics Cards', 'type' => 'repeater',
                    'description' => '4 cards for predictive issues',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🔋'],
                        ['name' => 'title',       'label' => 'Card Title', 'type' => 'text',
                            'placeholder' => 'Weak Cells'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                        ['name' => 'card_color',  'label' => 'Card Background Color', 'type' => 'color',
                            'default' => '#1976d2'],
                    ],
                ],
            ],
        ],

        'predictive-stats' => [
            'label'  => 'Predictive Analytics – Stats Bar',
            'icon'   => 'trending-up',
            'fields' => [
                [
                    'name'  => 'stats', 'label' => 'Predictive Analytics Stats', 'type' => 'repeater',
                    'description' => '4 stats for predictive outcomes',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '⬇'],
                        ['name' => 'title',       'label' => 'Stat Title', 'type' => 'text',
                            'placeholder' => 'Reduced Downtime'],
                        ['name' => 'description', 'label' => 'Stat Description', 'type' => 'text',
                            'placeholder' => 'Up to 75% fewer outages'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // BENEFITS & INDUSTRIES
        // ══════════════════════════════════════════════════
        'benefits' => [
            'label'  => 'Benefits & Industries Section',
            'icon'   => 'award',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'BENEFITS & INDUSTRIES'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Why Choose Axion\nMaintenance Services"],
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
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px'],
                // ── 🔤 Typography ──
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 44px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#f5f8ff'],
            ],
        ],

        'benefits-cards' => [
            'label'  => 'Benefits – Cards',
            'icon'   => 'check-circle',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Benefits Cards', 'type' => 'repeater',
                    'description' => '5 cards for maintenance benefits',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '✓'],
                        ['name' => 'title',       'label' => 'Card Title', 'type' => 'text',
                            'placeholder' => 'Reduced Outage Risk'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        'benefits-industries' => [
            'label'  => 'Benefits – Industries Supported',
            'icon'   => 'building',
            'fields' => [
                [
                    'name'  => 'industries', 'label' => 'Industries Supported', 'type' => 'repeater',
                    'description' => '5 industry sectors served by maintenance services',
                    'sub_fields' => [
                        ['name' => 'icon',     'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🏢'],
                        ['name' => 'title',    'label' => 'Industry Name', 'type' => 'text',
                            'placeholder' => 'Data Centers & Colocation'],
                        ['name' => 'subtitle', 'label' => 'Industry Subtitle', 'type' => 'text',
                            'placeholder' => '99.99% uptime requirement'],
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
                    'default' => "Keep Your Battery Systems\nRunning at Peak Performance"],
                ['name' => 'body',    'label' => 'CTA Body', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Implement a comprehensive maintenance and monitoring strategy today. Our experts will work with you to design the perfect plan for your infrastructure needs.'],
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'Schedule Your Maintenance Plan →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text'],
                ['name' => 'btn_secondary_label','label' => 'Secondary Button Label','type' => 'text',
                    'default' => 'View Monitoring Dashboard'],
                ['name' => 'btn_secondary_url', 'label' => 'Secondary Button URL', 'type' => 'text'],
                ['name' => 'btn_tertiary_label','label' => 'Tertiary Button Label', 'type' => 'text',
                    'default' => 'Get Support →'],
                ['name' => 'btn_tertiary_url',  'label' => 'Tertiary Button URL',  'type' => 'text'],
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
                ['name' => 'btn_secondary_bg',   'label' => '🎨 Secondary Button BG',  'type' => 'color', 'default' => 'transparent'],
                ['name' => 'btn_secondary_fg',   'label' => '🎨 Secondary Button Text','type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_tertiary_fg',    'label' => '🎨 Tertiary Button Color', 'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

    ],
];
