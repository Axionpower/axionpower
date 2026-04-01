<?php
/**
 * Axion CMS – Utilities & Substations Page Config
 * Every section and field here is independently editable in the WordPress admin.
 * Default values are served via GraphQL so Next.js never needs hardcoded fallbacks.
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'utilities-substations',
    'label' => 'Utilities & Substations',
    'sections' => [

        // ═══════════════════════════════════════
        // HERO SECTION
        // ═══════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => '🎯',
            'fields' => [
                ['name' => 'breadcrumb',      'label' => 'Breadcrumb Text',    'type' => 'text',     'default' => 'INDUSTRIES  /  UTILITIES & SUBSTATIONS'],
                ['name' => 'pill',            'label' => 'Pill Badge Text',    'type' => 'text',     'default' => '⚡  UTILITIES & SUBSTATIONS'],
                ['name' => 'heading_line1',   'label' => 'Heading Line 1',     'type' => 'text',     'default' => 'Reliable Battery Systems for'],
                ['name' => 'heading_accent',  'label' => 'Heading Accent',     'type' => 'text',     'default' => 'Utility &'],
                ['name' => 'heading_line2',   'label' => 'Heading Line 2',     'type' => 'text',     'default' => 'Substation Use'],
                ['name' => 'accent_bar_width','label' => 'Accent Bar Width',   'type' => 'text',     'default' => '320px'],
                ['name' => 'subtitle',        'label' => 'Subtitle',           'type' => 'textarea', 'rows' => 3, 'default' => 'VRLA and flooded battery systems, engineering support, and full lifecycle services for mission-critical DC power.'],
                ['name' => 'btn1_label',      'label' => 'Button 1 Label',     'type' => 'text',     'default' => 'Explore Battery Solutions →'],
                ['name' => 'btn1_url',        'label' => 'Button 1 URL',       'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',      'label' => 'Button 2 Label',     'type' => 'text',     'default' => 'Talk to an Engineer ↗'],
                ['name' => 'btn2_url',        'label' => 'Button 2 URL',       'type' => 'text',     'default' => '/contact'],
                ['name' => 'image_caption',   'label' => 'Image Caption',      'type' => 'text',     'default' => '📷  Transmission Substation, ON'],
                ['name' => 'image_badge_text','label' => 'Image Badge Text',   'type' => 'text',     'default' => 'LIVE DC SYSTEM'],
                [
                    'name'         => 'badges',
                    'label'        => 'Hero Badges',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['text' => 'IEEE Compliant'],
                        ['text' => 'VRLA + Flooded'],
                        ['text' => '20+ Years'],
                        ['text' => '24/7 Support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Badge Text', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'circuit_nodes',
                    'label'        => 'Dashboard Circuit Nodes',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['label' => 'Transmission Bus', 'color' => '#63def7'],
                        ['label' => 'Distribution',     'color' => '#1e88e5'],
                        ['label' => 'Protection Relay', 'color' => '#ffbf45'],
                        ['label' => 'SCADA',            'color' => '#4ade8a'],
                        ['label' => 'Metering',         'color' => '#cc66ff'],
                        ['label' => 'Control House',    'color' => '#1e88e5'],
                    ],
                    'sub_fields' => [
                        ['name' => 'label', 'label' => 'Node Label',  'type' => 'text'],
                        ['name' => 'color', 'label' => 'Node Colour', 'type' => 'color'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // APPLICATIONS SECTION
        // ═══════════════════════════════════════
        'applications' => [
            'label' => 'Applications Section',
            'icon'  => '⚡',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'APPLICATIONS'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Powering Every Layer of the Grid'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'From transmission to distribution — Axion delivers proven battery backup for every critical control and protection function.'],
                [
                    'name'         => 'applications',
                    'label'        => 'Application Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['number' => '01', 'icon' => '🏗️', 'title' => 'Transmission Substations',  'description' => 'High-capacity VRLA and flooded systems for bulk power transfer and protection relay backup.'],
                        ['number' => '02', 'icon' => '⚡', 'title' => 'Distribution Substations',   'description' => 'Reliable DC backup for feeder protection, sectionalizing, and distribution automation.'],
                        ['number' => '03', 'icon' => '🖥️', 'title' => 'SCADA & Control Systems',   'description' => 'Uninterrupted power for supervisory control, data acquisition, and remote terminal units.'],
                        ['number' => '04', 'icon' => '🛡️', 'title' => 'Protection & Relaying',     'description' => 'Mission-critical backup for distance, differential, and overcurrent protection relay panels.'],
                        ['number' => '05', 'icon' => '📡', 'title' => 'Teleprotection',             'description' => 'Battery backup for communication and teleprotection equipment across transmission corridors.'],
                        ['number' => '06', 'icon' => '🔌', 'title' => 'Switching & Disconnects',   'description' => 'DC motor drive backup for motorized disconnect switches and circuit breaker trip coils.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Card Number',  'type' => 'text'],
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // BATTERY TECHNOLOGIES SECTION
        // ═══════════════════════════════════════
        'battery-technologies' => [
            'label' => 'Battery Technologies Section',
            'icon'  => '🔋',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label',  'type' => 'text',     'default' => 'BATTERY TECHNOLOGIES'],
                ['name' => 'heading',      'label' => 'Heading',        'type' => 'text',     'default' => 'The Right Technology for Every Substation'],
                ['name' => 'description',  'label' => 'Description',    'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides guidance to select the right battery technology based on substation class, maintenance capacity, and IEEE requirements.'],
                ['name' => 'quote',        'label' => 'Pull Quote',     'type' => 'textarea', 'rows' => 2, 'default' => '"The right battery technology makes all the difference."'],
                ['name' => 'image_caption','label' => 'Image Caption',  'type' => 'text',     'default' => '📷  Battery Room — Transmission Substation'],
                [
                    'name'         => 'techs',
                    'label'        => 'Technology Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        [
                            'icon'        => '🔋',
                            'name'        => 'Flooded Lead-Acid',
                            'subtitle'    => 'Vented Wet Cell',
                            'badge'       => 'Long-Life',
                            'badge_color' => '#ffbf45',
                            'description' => 'Long design life (15–20+ years) with proper maintenance for Class PS and Class P substations.',
                            'features'    => "Long service life for stationary DC systems\nExcellent deep-cycle capability\nHigh tolerance to charge/discharge variations\nProven reliability in mission-critical infrastructure",
                        ],
                        [
                            'icon'        => '⚡',
                            'name'        => 'VRLA AGM / GEL',
                            'subtitle'    => 'Valve-Regulated',
                            'badge'       => 'Low Maintenance',
                            'badge_color' => '#63def7',
                            'description' => 'Maintenance-free sealed systems for Class SE substations with limited ventilation.',
                            'features'    => "Low-maintenance for indoor/space-constrained environments\nCompact footprint vs flooded systems\nPredictable performance for control loads\nIEEE 485/1188 compliant sizing and selection",
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'name',        'label' => 'Technology Name', 'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',        'type' => 'text'],
                        ['name' => 'badge',       'label' => 'Badge Text',      'type' => 'text'],
                        ['name' => 'badge_color', 'label' => 'Badge Colour',    'type' => 'color'],
                        ['name' => 'description', 'label' => 'Description',     'type' => 'textarea', 'rows' => 2],
                        ['name' => 'features',    'label' => 'Features (one per line)', 'type' => 'textarea', 'rows' => 4],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // ENGINEERING SUPPORT SECTION
        // ═══════════════════════════════════════
        'engineering-support' => [
            'label' => 'Engineering & Specification Support',
            'icon'  => '🔧',
            'fields' => [
                ['name' => 'label',          'label' => 'Section Label',       'type' => 'text',     'default' => 'ENGINEERING & SPECIFICATION SUPPORT'],
                ['name' => 'heading',        'label' => 'Heading',             'type' => 'text',     'default' => "Your Technical\nPartner from\nDay One."],
                ['name' => 'description',    'label' => 'Description',         'type' => 'textarea', 'rows' => 3, 'default' => 'Axion acts as a technical partner throughout the specification and design process — from sizing to installation coordination.'],
                ['name' => 'worksheet_title','label' => 'Worksheet Title',     'type' => 'text',     'default' => 'DC BATTERY SYSTEM — SIZING WORKSHEET'],
                ['name' => 'worksheet_note', 'label' => 'Worksheet Footer Note','type' => 'text',    'default' => '📐  Sizing worksheet — IEEE 485 compliant calculation'],
                [
                    'name'         => 'services',
                    'label'        => 'Engineering Services',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '📐', 'title' => 'Battery Sizing & Runtime',  'description' => 'Load analysis and runtime calculations for reliability.'],
                        ['icon' => '⚖️', 'title' => 'Technology Selection',      'description' => 'VRLA vs flooded guidance based on environment & lifecycle.'],
                        ['icon' => '🔧', 'title' => 'DC System Design',          'description' => 'System integration, switchgear & distribution coordination.'],
                        ['icon' => '📋', 'title' => 'Standards Alignment',       'description' => 'IEEE, utility, and project-specific standards review.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'worksheet_rows',
                    'label'        => 'Sizing Worksheet Rows',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['label' => 'Load Type',        'value' => 'Control & Protection', 'value_color' => ''],
                        ['label' => 'Battery Type',     'value' => 'VRLA — 125V DC',       'value_color' => 'rgba(99,222,247,1)'],
                        ['label' => 'Capacity (Ah)',    'value' => '100 Ah @ 8hr rate',    'value_color' => ''],
                        ['label' => 'Runtime Required', 'value' => '8 hours',              'value_color' => 'rgba(255,191,69,1)'],
                        ['label' => 'Charger Type',     'value' => 'Float / Equalize',     'value_color' => ''],
                        ['label' => 'IEEE Standard',    'value' => 'IEEE 485 / 1188',      'value_color' => 'rgba(74,222,138,1)'],
                    ],
                    'sub_fields' => [
                        ['name' => 'label',       'label' => 'Row Label',      'type' => 'text'],
                        ['name' => 'value',       'label' => 'Row Value',      'type' => 'text'],
                        ['name' => 'value_color', 'label' => 'Value Colour',   'type' => 'color'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // QUALITY & COMPLIANCE SECTION
        // ═══════════════════════════════════════
        'quality-compliance' => [
            'label' => 'Quality & Compliance Section',
            'icon'  => '🛡️',
            'fields' => [
                ['name' => 'label',             'label' => 'Section Label',       'type' => 'text',     'default' => 'COMPLIANT'],
                ['name' => 'heading',           'label' => 'Heading',             'type' => 'text',     'default' => "Quality, Safety & Compliance\nBuilt Into Every Solution."],
                ['name' => 'description',       'label' => 'Description',         'type' => 'textarea', 'rows' => 3, 'default' => 'Utilities require strict adherence to quality, safety, and reliability. Axion partners with trusted manufacturers and follows industry best practices.'],
                ['name' => 'standards_heading', 'label' => 'Standards Card Title','type' => 'text',     'default' => 'Standards We Work To'],
                [
                    'name'         => 'standards',
                    'label'        => 'Compliance Standards (right-side card)',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['code' => 'IEEE 485',  'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Battery Sizing',          'description' => 'Sizing lead-acid batteries for stationary DC applications.'],
                        ['code' => 'IEEE 1188', 'accent_color' => 'rgba(255,191,69,1)',  'title' => 'VRLA Maintenance',        'description' => 'Maintenance & replacement of valve-regulated lead-acid batteries.'],
                        ['code' => 'IEEE 450',  'accent_color' => 'rgba(74,222,138,1)',  'title' => 'Flooded Maintenance',     'description' => 'Maintenance & replacement of vented lead-acid stationary batteries.'],
                        ['code' => 'IEC 62133', 'accent_color' => 'rgba(204,166,255,1)', 'title' => 'Safety Requirements',    'description' => 'Safety requirements for sealed secondary lithium cells and batteries.'],
                        ['code' => 'NERC CIP',  'accent_color' => 'rgba(143,194,255,1)', 'title' => 'Critical Infrastructure','description' => 'Reliability standards for bulk electric systems.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'code',         'label' => 'Standard Code',   'type' => 'text'],
                        ['name' => 'accent_color',  'label' => 'Accent Colour',   'type' => 'color'],
                        ['name' => 'title',        'label' => 'Title',           'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',     'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'badges',
                    'label'        => 'Compliance Badges',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏆', 'title' => 'IEEE Standards',    'subtitle' => '485, 1188, 450'],
                        ['icon' => '🔒', 'title' => 'Safety First',      'subtitle' => 'Handling & installation'],
                        ['icon' => '🌍', 'title' => 'Eco Compliant',     'subtitle' => 'Disposal regulations'],
                        ['icon' => '📜', 'title' => 'Manufacturer QA',   'subtitle' => 'Certified partners'],
                        ['icon' => '⚡', 'title' => 'Utility Standards', 'subtitle' => 'Project-specific'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',     'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',    'label' => 'Title',        'type' => 'text'],
                        ['name' => 'subtitle', 'label' => 'Subtitle',     'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'stats',
                    'label'        => 'Compliance Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '100%',   'label' => 'Lot Tested'],
                        ['value' => 'IEEE',   'label' => 'Standards Compliant'],
                        ['value' => '<0.01%', 'label' => 'Failure Rate'],
                        ['value' => '20+ yr', 'label' => 'Design Life'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // LIFECYCLE SUPPORT SECTION
        // ═══════════════════════════════════════
        'lifecycle-support' => [
            'label' => 'Lifecycle Support Section',
            'icon'  => '🔁',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'LIFECYCLE SUPPORT'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => "Support from\nCommissioning to\nEnd-of-Life."],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Reduces risk, extends service life, and ensures predictable operation over time.'],
                [
                    'name'         => 'phases',
                    'label'        => 'Lifecycle Phases',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '✅', 'title' => 'Commissioning', 'color' => 'rgba(74,222,138,1)',  'description' => 'Acceptance testing & system verification'],
                        ['icon' => '📊', 'title' => 'Monitoring',    'color' => 'rgba(99,222,247,1)',  'description' => 'Routine testing, inspections & performance tracking'],
                        ['icon' => '🔋', 'title' => 'Replacement',   'color' => 'rgba(255,191,69,1)',  'description' => 'Planned battery swaps at optimal lifecycle stage'],
                        ['icon' => '♻️', 'title' => 'Disposal',      'color' => 'rgba(204,166,255,1)', 'description' => 'Certified recycling & end-of-life coordination'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',  'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',         'type' => 'text'],
                        ['name' => 'color',       'label' => 'Accent Colour', 'type' => 'color'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // WHY AXION SECTION
        // ═══════════════════════════════════════
        'why-axion' => [
            'label' => 'Why Choose Axion Section',
            'icon'  => '⭐',
            'fields' => [
                ['name' => 'heading',    'label' => 'Heading',    'type' => 'text',     'default' => "Why utilities\nchoose us,\nevery time."],
                ['name' => 'subheading', 'label' => 'Subheading', 'type' => 'text',     'default' => 'A long-term technical partnership backed by 20+ years of experience.'],
                ['name' => 'cta_label',  'label' => 'CTA Label',  'type' => 'text',     'default' => 'Get In Touch →'],
                ['name' => 'cta_url',    'label' => 'CTA URL',    'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'reasons',
                    'label'        => 'Reasons',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Deep understanding of utility and substation applications'],
                        ['num' => '02', 'accent_color' => 'rgba(255,191,69,1)',  'title' => 'Proven VRLA and flooded battery solutions'],
                        ['num' => '03', 'accent_color' => 'rgba(74,222,138,1)',  'title' => 'Engineering-focused, specification-driven support'],
                        ['num' => '04', 'accent_color' => 'rgba(143,194,255,1)', 'title' => 'Commitment to safety, compliance, and reliability'],
                        ['num' => '05', 'accent_color' => 'rgba(204,166,255,1)', 'title' => 'Long-term partnership mindset — not just a sale'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',          'label' => 'Number',        'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour', 'type' => 'color'],
                        ['name' => 'title',        'label' => 'Reason Text',   'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'uptime_stats',
                    'label'        => 'Track Record Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '99.97%',  'label' => 'System Uptime',      'color' => 'rgba(255,191,69,1)'],
                        ['value' => '200+',    'label' => 'Substations Served', 'color' => 'rgba(99,222,247,1)'],
                        ['value' => '3.1M hrs','label' => 'Operating Hours',    'color' => 'rgba(74,222,138,1)'],
                        ['value' => '0',       'label' => 'Critical Failures',  'color' => 'rgba(204,166,255,1)'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value',        'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label',        'type' => 'text'],
                        ['name' => 'color', 'label' => 'Accent Colour','type' => 'color'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // CTA SECTION
        // ═══════════════════════════════════════
        'cta' => [
            'label' => 'CTA Section',
            'icon'  => '📞',
            'fields' => [
                ['name' => 'heading',     'label' => 'Heading',        'type' => 'text',     'default' => "Design reliable, compliant\nutility battery systems"],
                ['name' => 'accent_text', 'label' => 'Heading Accent', 'type' => 'text',     'default' => 'with Axion.'],
                ['name' => 'description', 'label' => 'Description',    'type' => 'textarea', 'rows' => 3, 'default' => 'Contact our team to discuss your project requirements — sizing, selection, compliance, and full lifecycle support.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label', 'type' => 'text',     'default' => 'Contact Axion'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label', 'type' => 'text',     'default' => 'Request a Specification'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn3_label',  'label' => 'Button 3 Label', 'type' => 'text',     'default' => 'Download Tech Guide'],
                ['name' => 'btn3_url',    'label' => 'Button 3 URL',   'type' => 'text',     'default' => '/contact'],
            ],
        ],

    ],
];
