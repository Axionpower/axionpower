<?php
/**
 * Axion CMS – Emergency Support & Service Contracts Page Config
 * Sections: hero, response, response-cards,
 *           sla, sla-tiers,
 *           technicians, technicians-steps, technicians-expertise,
 *           benefits, benefits-cards, benefits-industries,
 *           lifecycle, lifecycle-steps,
 *           cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'emergency-support',
    'label'    => 'Emergency Support & Service Contracts',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'alert-triangle',
            'fields' => [
                // ── Content ──
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image',
                    'description' => 'Recommended: 1920×600px'],
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text',
                    'default' => 'HOME  /  SERVICES  /  EMERGENCY SUPPORT'],
                ['name' => 'heading', 'label' => 'Hero Heading', 'type' => 'text',
                    'default' => 'Emergency Support & Service Contracts'],
                ['name' => 'subtext', 'label' => 'Hero Subtext', 'type' => 'textarea', 'rows' => 3,
                    'default' => '24/7 rapid response service contracts designed to minimize downtime and ensure critical battery systems remain operational during emergencies.'],
                ['name' => 'top_badge_text', 'label' => 'Top-Right Badge Text', 'type' => 'text',
                    'default' => '🚨  Emergency Services',
                    'description' => 'The small floating badge at the top-right of the hero'],
                // ── Stats Boxes ──
                [
                    'name'  => 'stats', 'label' => 'Hero Stats (3 boxes)', 'type' => 'repeater',
                    'description' => 'The 3 stat boxes shown below the description',
                    'sub_fields' => [
                        ['name' => 'icon',  'label' => 'Icon (emoji)', 'type' => 'text', 'placeholder' => '⚡'],
                        ['name' => 'value', 'label' => 'Value',        'type' => 'text', 'placeholder' => '<2hr'],
                        ['name' => 'label', 'label' => 'Label',        'type' => 'text', 'placeholder' => 'Response Time'],
                    ],
                ],
                // ── Action Buttons ──
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'Contact Emergency Support →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text'],
                ['name' => 'btn_ghost_label',   'label' => 'Ghost Button Label',   'type' => 'text',
                    'default' => 'View SLA Terms'],
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
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'options' => ['h1' => 'H1', 'h2' => 'H2', 'h3' => 'H3'],
                    'default' => 'h1',
                    'description' => 'HTML heading tag (default: H1)'],
                ['name' => 'heading_font_size', 'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 24, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 54px)'],
                ['name' => 'heading_font_weight', 'label' => '🔤 Heading Font Weight', 'type' => 'select',
                    'options' => ['' => 'Default', '400' => '400 Regular', '600' => '600 Semi-Bold', '700' => '700 Bold', '800' => '800 Extra-Bold'],
                    'default' => ''],
                ['name' => 'subtext_font_size', 'label' => '🔤 Subtext Font Size', 'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 32, 'unit' => 'px',
                    'description' => 'Override subtext font size (default: 19px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',          'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#050810'],
                ['name' => 'heading_color',     'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',        'label' => '🎨 Subtext / Body Color', 'type' => 'color', 'default' => '#d0dcf0'],
                ['name' => 'accent_bar_color',  'label' => '🎨 Accent Bar Color',  'type' => 'color', 'default' => '#ff3d3d'],
                ['name' => 'breadcrumb_color',  'label' => '🎨 Breadcrumb Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'badge_bg_color',    'label' => '🎨 Badge Background',  'type' => 'color', 'default' => '#ff3d3d'],
                ['name' => 'stat_bg_color',     'label' => '🎨 Stat Card BG',      'type' => 'color', 'default' => '#0d1528'],
                ['name' => 'stat_icon_color',   'label' => '🎨 Stat Icon Color',   'type' => 'color', 'default' => '#ff6b6b'],
                ['name' => 'btn_primary_bg',    'label' => '🎨 Primary Button BG', 'type' => 'color', 'default' => '#ff3d3d'],
                ['name' => 'btn_ghost_color',   'label' => '🎨 Ghost Button Border', 'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        // ══════════════════════════════════════════════════
        // RAPID RESPONSE
        // ══════════════════════════════════════════════════
        'response' => [
            'label'  => 'Rapid Response Section',
            'icon'   => 'zap',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'RAPID RESPONSE'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Minutes to Resolution\nNot Hours or Days"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Our emergency support team is on standby 24/7 to respond to critical issues. With guaranteed response times and expert technicians, we ensure your battery systems are back to full operation as quickly as possible.'],
                // ── Dashboard Stats ──
                ['name' => 'dashboard_stat1_value', 'label' => 'Dashboard Stat 1 Value', 'type' => 'text',
                    'default' => '<15 min'],
                ['name' => 'dashboard_stat1_label', 'label' => 'Dashboard Stat 1 Label', 'type' => 'text',
                    'default' => 'Emergency Response Time'],
                ['name' => 'dashboard_stat2_value', 'label' => 'Dashboard Stat 2 Value', 'type' => 'text',
                    'default' => '24/7'],
                ['name' => 'dashboard_stat2_label', 'label' => 'Dashboard Stat 2 Label', 'type' => 'text',
                    'default' => 'Availability'],
                ['name' => 'dashboard_stat3_value', 'label' => 'Dashboard Stat 3 Value', 'type' => 'text',
                    'default' => '99.5%'],
                ['name' => 'dashboard_stat3_label', 'label' => 'Dashboard Stat 3 Label', 'type' => 'text',
                    'default' => 'SLA Compliance'],
                // ── Dashboard Alerts ──
                [
                    'name'  => 'alerts', 'label' => 'Dashboard Alerts (Quick Summary)', 'type' => 'repeater',
                    'description' => 'Alert items shown on the dashboard',
                    'sub_fields' => [
                        ['name' => 'icon',  'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '✓'],
                        ['name' => 'text',  'label' => 'Alert Text', 'type' => 'text',
                            'placeholder' => 'Technician en route'],
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
                    'description' => 'Minimum section height (default: 1150px)'],
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
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#e8f4ff'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'dashboard_bg_color', 'label' => '🎨 Dashboard BG Color','type' => 'color','default' => '#0a0e1a'],
            ],
        ],

        'response-cards' => [
            'label'  => 'Rapid Response – Feature Cards',
            'icon'   => 'layers',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Response Feature Cards', 'type' => 'repeater',
                    'description' => 'Cards for emergency response features',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🚀'],
                        ['name' => 'title',       'label' => 'Title', 'type' => 'text',
                            'placeholder' => 'Feature Title'],
                        ['name' => 'description','label' => 'Description', 'type' => 'textarea', 'rows' => 3],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // SLA TIERS
        // ══════════════════════════════════════════════════
        'sla' => [
            'label'  => 'SLA Tiers Section',
            'icon'   => 'clipboard',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'SERVICE LEVEL AGREEMENTS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Service Level Agreements\nTaiored to Your Needs"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Choose from flexible SLA tiers with guaranteed response times, resolution windows, and comprehensive coverage. Each tier includes round-the-clock monitoring and immediate escalation protocols.'],
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
                    'description' => 'Minimum section height (default: 1100px)'],
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
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#555555'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
            ],
        ],

        'sla-tiers' => [
            'label'  => 'SLA – Tier Definitions',
            'icon'   => 'target',
            'fields' => [
                [
                    'name'  => 'tiers', 'label' => 'SLA Tier Cards', 'type' => 'repeater',
                    'description' => 'Define SLA service tiers (Gold, Platinum, Diamond, etc.)',
                    'sub_fields' => [
                        ['name' => 'tier_label',    'label' => 'Tier Name', 'type' => 'text',
                            'placeholder' => 'Gold'],
                        ['name' => 'tier_color',    'label' => 'Tier Label Color', 'type' => 'color',
                            'default' => '#1a1a2e'],
                        ['name' => 'tier_bg_color', 'label' => 'Tier Background Color', 'type' => 'color',
                            'default' => '#f5f8ff'],
                        ['name' => 'response_time', 'label' => 'Response Time', 'type' => 'text',
                            'placeholder' => '<4 hours'],
                        ['name' => 'features',      'label' => 'Features (one per line)', 'type' => 'textarea', 'rows' => 4,
                            'placeholder' => 'Feature 1\nFeature 2\nFeature 3'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // TECHNICIAN RESPONSE TIMELINE
        // ══════════════════════════════════════════════════
        'technicians' => [
            'label'  => 'Technician Response Section',
            'icon'   => 'wrench',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'EXPERT TECHNICIANS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Expert Technicians\nReady for Rapid Deployment"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Our certified emergency response team includes specialized technicians with deep expertise in battery diagnostics, repair, and system restoration. Trained for rapid deployment and critical decision-making under pressure.'],
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
                    'description' => 'Minimum section height (default: 1150px)'],
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
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ff6b6b'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#0d1b2a'],
                ['name' => 'timeline_color',     'label' => '🎨 Timeline Color',    'type' => 'color', 'default' => '#1e2a3a'],
            ],
        ],

        'technicians-steps' => [
            'label'  => 'Technician Response – Timeline Steps',
            'icon'   => 'file-text',
            'fields' => [
                [
                    'name'  => 'steps', 'label' => 'Response Timeline Steps', 'type' => 'repeater',
                    'description' => 'Sequential steps in the emergency response process',
                    'sub_fields' => [
                        ['name' => 'time_label',       'label' => 'Time Label', 'type' => 'text',
                            'placeholder' => '0-15 minutes'],
                        ['name' => 'time_label_color', 'label' => 'Time Label Color', 'type' => 'color',
                            'default' => '#ff6b6b'],
                        ['name' => 'icon',             'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '📞'],
                        ['name' => 'number',           'label' => 'Step Number', 'type' => 'text',
                            'placeholder' => '1'],
                        ['name' => 'number_color',     'label' => 'Number Color', 'type' => 'color',
                            'default' => '#ff3d3d'],
                        ['name' => 'title',            'label' => 'Step Title', 'type' => 'text'],
                        ['name' => 'description',      'label' => 'Step Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        'technicians-expertise' => [
            'label'  => 'Technician Expertise – Certifications',
            'icon'   => 'file-text',
            'fields' => [
                [
                    'name'  => 'certifications', 'label' => 'Technician Expertise Areas', 'type' => 'repeater',
                    'description' => 'Expertise and certifications of the emergency response team',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🔧'],
                        ['name' => 'title',       'label' => 'Expertise Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // BENEFITS
        // ══════════════════════════════════════════════════
        'benefits' => [
            'label'  => 'Benefits Section',
            'icon'   => 'award',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'WHY CHOOSE US'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Comprehensive Protection\nfor Mission-Critical Systems"],
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
                    'description' => 'Minimum section height (default: 1000px)'],
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
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#1565c0'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'card_bg_color',      'label' => '🎨 Card Background',   'type' => 'color', 'default' => '#1976d2'],
            ],
        ],

        'benefits-cards' => [
            'label'  => 'Benefits – Feature Cards',
            'icon'   => 'check-circle',
            'fields' => [
                [
                    'name'  => 'cards', 'label' => 'Benefits Cards', 'type' => 'repeater',
                    'description' => 'Cards showcasing benefits of emergency support',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '✓'],
                        ['name' => 'title',       'label' => 'Benefit Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        'benefits-industries' => [
            'label'  => 'Benefits – Industries Served',
            'icon'   => 'building',
            'fields' => [
                [
                    'name'  => 'industries', 'label' => 'Industries Supported', 'type' => 'repeater',
                    'description' => 'Industry sectors that benefit from emergency support contracts',
                    'sub_fields' => [
                        ['name' => 'icon',     'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🏢'],
                        ['name' => 'title',    'label' => 'Industry Name', 'type' => 'text'],
                        ['name' => 'subtitle', 'label' => 'Industry Subtitle', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // CONTRACT LIFECYCLE
        // ══════════════════════════════════════════════════
        'lifecycle' => [
            'label'  => 'Service Lifecycle Section',
            'icon'   => 'refresh-cw',
            'fields' => [
                // ── Content ──
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',
                    'default' => 'INTEGRATED LIFECYCLE SUPPORT'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 3,
                    'default' => "Emergency Support Is Part of\nAxion's Full Lifecycle Approach"],
                ['name' => 'body',    'label' => 'Body Text', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'From initial design through end-of-life recycling, Axion supports your battery systems at every stage.'],
                ['name' => 'active_label', 'label' => 'Active Step Label', 'type' => 'text',
                    'default' => '🚨 You are here — Emergency Support Phase',
                    'description' => 'The badge shown on the currently highlighted lifecycle step'],
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
                    'description' => 'Minimum section height (default: 1000px)'],
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
                ['name' => 'heading_tag', 'label' => '🔤 Heading Tag', 'type' => 'select',
                    'options' => ['h2' => 'H2', 'h3' => 'H3', 'h1' => 'H1'],
                    'default' => 'h2'],
                ['name' => 'heading_font_size',  'label' => '🔤 Heading Font Size', 'type' => 'number',
                    'default' => '', 'min' => 20, 'max' => 100, 'unit' => 'px',
                    'description' => 'Override heading font size (default: 44px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',           'label' => '🎨 Background Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'heading_color',      'label' => '🎨 Heading Color',     'type' => 'color', 'default' => '#1a1a2e'],
                ['name' => 'body_color',         'label' => '🎨 Body Text Color',   'type' => 'color', 'default' => '#555555'],
                ['name' => 'label_color',        'label' => '🎨 Label Text Color',  'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'accent_color',       'label' => '🎨 Active Step Color', 'type' => 'color', 'default' => '#ff3d3d',
                    'description' => 'Color of the active/highlighted lifecycle step circle, title, and badge'],
            ],
        ],

        'lifecycle-steps' => [
            'label'  => 'Service Lifecycle – Steps',
            'icon'   => 'refresh-cw',
            'fields' => [
                [
                    'name'  => 'steps', 'label' => 'Service Lifecycle Steps', 'type' => 'repeater',
                    'description' => 'Steps in the service contract lifecycle',
                    'sub_fields' => [
                        ['name' => 'icon',       'label' => 'Icon (emoji)', 'type' => 'text',
                            'placeholder' => '🎯'],
                        ['name' => 'title',      'label' => 'Step Title', 'type' => 'text'],
                        ['name' => 'is_active',  'label' => 'Mark as Active Step', 'type' => 'checkbox'],
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
                    'default' => 'EMERGENCY SUPPORT'],
                ['name' => 'heading', 'label' => 'CTA Heading (use \\n for line breaks)', 'type' => 'textarea', 'rows' => 2,
                    'default' => "Don't Face Battery Emergencies Alone\nGet Expert Help Now"],
                ['name' => 'body',    'label' => 'CTA Body', 'type' => 'textarea', 'rows' => 3,
                    'default' => 'Enroll in our emergency support program today and gain peace of mind knowing expert technicians are available 24/7 to address any critical battery system issues.'],
                ['name' => 'emergency_line', 'label' => 'Emergency Line (Display Text)', 'type' => 'text',
                    'default' => '24/7 Emergency Support Line: 1-800-BATTERY-911'],
                ['name' => 'btn_primary_label', 'label' => 'Primary Button Label', 'type' => 'text',
                    'default' => 'Enroll Now →'],
                ['name' => 'btn_primary_url',   'label' => 'Primary Button URL',   'type' => 'text'],
                ['name' => 'btn_secondary_label','label' => 'Secondary Button Label','type' => 'text',
                    'default' => 'Download SLA Details'],
                ['name' => 'btn_secondary_url', 'label' => 'Secondary Button URL', 'type' => 'text'],
                ['name' => 'btn_tertiary_label','label' => 'Tertiary Button Label', 'type' => 'text',
                    'default' => 'Contact Support'],
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
                    'description' => 'Minimum section height (default: 520px)'],
                // ── ↕ Vertical Padding ──
                ['name' => 'padding_top',        'label' => '↕ Padding Top',        'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 400, 'unit' => 'px',
                    'description' => 'Padding above content (default: 72px)'],
                ['name' => 'padding_bottom',     'label' => '↕ Padding Bottom',     'type' => 'number',
                    'default' => '', 'min' => 0, 'max' => 600, 'unit' => 'px',
                    'description' => 'Bottom padding of CTA section (default: 280px)'],
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
                    'description' => 'Override heading font size (default: 48px)'],
                ['name' => 'body_font_size',      'label' => '🔤 Body Font Size',    'type' => 'number',
                    'default' => '', 'min' => 12, 'max' => 28, 'unit' => 'px',
                    'description' => 'Override body font size (default: 17px)'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color',              'label' => '🎨 Background Color',        'type' => 'color', 'default' => '#050810'],
                ['name' => 'heading_color',         'label' => '🎨 Heading Color',          'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'body_color',            'label' => '🎨 Body Text Color',        'type' => 'color', 'default' => '#8aaabb'],
                ['name' => 'badge_bg_color',        'label' => '🎨 Emergency Badge BG',     'type' => 'color', 'default' => '#00e676'],
                ['name' => 'badge_text_color',      'label' => '🎨 Emergency Badge Text',   'type' => 'color', 'default' => '#00e676'],
                ['name' => 'btn_primary_bg',        'label' => '🎨 Primary Button BG',      'type' => 'color', 'default' => '#ff3d3d'],
                ['name' => 'btn_primary_fg',        'label' => '🎨 Primary Button Text',    'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_secondary_bg',      'label' => '🎨 Secondary Button BG',    'type' => 'color', 'default' => 'transparent'],
                ['name' => 'btn_secondary_fg',      'label' => '🎨 Secondary Button Text',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'btn_tertiary_fg',       'label' => '🎨 Tertiary Button Color',  'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'emergency_line_bg',     'label' => '🎨 Emergency Line BG',      'type' => 'color', 'default' => '#ff3d3d'],
                ['name' => 'emergency_line_color',  'label' => '🎨 Emergency Line Color',   'type' => 'color', 'default' => '#ff6b6b'],
            ],
        ],

    ],
];
