<?php
/**
 * Axion CMS – Safety Training & Documentation Page Config
 * Sections: hero, intro, training, documentation, benefits, industries, lifecycle, cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'safety-training',
    'label'    => 'Safety Training & Documentation',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'target',
            'fields' => [
                ['name' => 'breadcrumb',   'label' => 'Breadcrumb Text',  'type' => 'text',
                    'default' => 'HOME  /  SERVICES  /  SAFETY TRAINING'],
                ['name' => 'heading',      'label' => 'Hero Heading',      'type' => 'text',
                    'default' => 'Safety Training & Documentation'],
                ['name' => 'subtitle',     'label' => 'Subtitle',          'type' => 'textarea',
                    'default' => 'Empowering teams with expert knowledge, compliance records, and readiness for mission-critical battery environments.'],
                ['name' => 'trust_badge',  'label' => 'Trust Badge Text',  'type' => 'text',
                    'default' => '✓  Trusted by 500+ engineering teams'],
                ['name' => 'btn1_label',   'label' => 'Button 1 Label',    'type' => 'text',    'default' => 'Schedule Staff Training →'],
                ['name' => 'btn1_url',     'label' => 'Button 1 URL',      'type' => 'text',    'default' => '/contact'],
                ['name' => 'btn2_label',   'label' => 'Button 2 Label',    'type' => 'text',    'default' => 'Request Documentation'],
                ['name' => 'btn2_url',     'label' => 'Button 2 URL',      'type' => 'text',    'default' => '/contact'],
                ['name' => 'bg_image', 'label' => '🖼 Hero Background Image', 'type' => 'image', 'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty to use the default dark background.'],
                ['name' => 'accent_color', 'label' => '🎨 Accent Color', 'type' => 'color', 'default' => '#3b82f6', 'description' => 'Primary accent color for this page (buttons, highlights, stat values). Default shown.'],
                [
                    'name'  => 'stats',
                    'label' => 'Hero Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '20+',  'label' => 'Years Experience'],
                        ['value' => '500+', 'label' => 'Projects Delivered'],
                        ['value' => '100%', 'label' => 'Compliance Focus'],
                        ['value' => '24/7', 'label' => 'Emergency Support'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INTRO
        // ══════════════════════════════════════════════════
        'intro' => [
            'label'  => 'Intro / Overview Section',
            'icon'   => 'clipboard',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label',  'type' => 'text',     'default' => 'OUR SERVICES'],
                ['name' => 'heading',     'label' => 'Heading',        'type' => 'textarea', 'default' => "Comprehensive\nSafety Training\n& Documentation"],
                ['name' => 'description', 'label' => 'Description',    'type' => 'textarea',
                    'default' => 'Axion Critical Power Solutions equips your team with the knowledge and records needed for safe, compliant operation of mission-critical battery systems.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label', 'type' => 'text',     'default' => 'Schedule Training →'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label', 'type' => 'text',     'default' => 'Request Docs'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'stats',
                    'label' => 'Intro Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '500+', 'label' => 'Staff Trained'],
                        ['value' => '20+',  'label' => 'Years'],
                        ['value' => '100%', 'label' => 'Compliance'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // TRAINING
        // ══════════════════════════════════════════════════
        'training' => [
            'label'  => 'On-Site Staff Training Section',
            'icon'   => 'battery',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label',  'type' => 'text',     'default' => 'ON-SITE STAFF TRAINING'],
                ['name' => 'heading',     'label' => 'Heading',        'type' => 'textarea', 'default' => "Expert Training\nfor Critical Teams"],
                ['name' => 'description', 'label' => 'Description',    'type' => 'textarea',
                    'default' => 'Axion delivers hands-on, expert-led training tailored to your specific battery systems and site requirements.'],
                ['name' => 'trust_badge', 'label' => 'Trust Badge',    'type' => 'text',     'default' => '✓ Trusted by 500+ trained staff members'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'steps',
                    'label' => 'Training Steps',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number', 'label' => 'Step Number', 'type' => 'text'],
                        ['name' => 'title',  'label' => 'Step Title',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'Battery Handling & Inspection'],
                        ['number' => '02', 'title' => 'Emergency Response Procedures'],
                        ['number' => '03', 'title' => 'Safety Protocol Training'],
                        ['number' => '04', 'title' => 'Hands-On Practical Exercises'],
                    ],
                ],
                [
                    'name'  => 'cards',
                    'label' => 'Training Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',   'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',     'type' => 'text'],
                        ['name' => 'description', 'label' => 'Card Description','type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['icon' => '🎯', 'title' => 'Handling & Inspection',
                            'description' => 'Safe battery handling, visual inspection, and maintenance best practices for VRLA and flooded systems.'],
                        ['icon' => '🚨', 'title' => 'Emergency Response',
                            'description' => 'Protocols for alarms, system failures, and hazardous conditions — ensuring staff can respond fast.'],
                        ['icon' => '🛡️', 'title' => 'Safety Protocols',
                            'description' => 'Comprehensive safety procedures for VRLA and wet cell battery systems, aligned with industry standards.'],
                        ['icon' => '🔧', 'title' => 'Hands-On Exercises',
                            'description' => 'Real-world exercises to ensure practical understanding and build team confidence in system operation.'],
                    ],
                ],
                [
                    'name'  => 'stats',
                    'label' => 'Training Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '500+', 'label' => 'Staff Trained'],
                        ['value' => '20+',  'label' => 'Years Experience'],
                        ['value' => '100%', 'label' => 'Compliance Rate'],
                        ['value' => '24/7', 'label' => 'Ongoing Support'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // DOCUMENTATION
        // ══════════════════════════════════════════════════
        'documentation' => [
            'label'  => 'Documentation Section',
            'icon'   => 'file-text',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'DOCUMENTATION'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'textarea', 'default' => "Detailed Records for Safe\nOperation & Compliance"],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea',
                    'default' => 'Axion provides detailed records to support system reliability, audits, and lifecycle management — giving your team access to critical information for effective maintenance.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'cards',
                    'label' => 'Documentation Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'number',      'label' => 'Card Number',     'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',     'type' => 'textarea'],
                        ['name' => 'features',    'label' => 'Features (one per line)', 'type' => 'textarea',
                            'description' => 'Optional bullet features. One per line.'],
                        ['name' => 'link_label',  'label' => 'Link Label',      'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📄', 'number' => '01', 'title' => 'Complete System Specifications',
                            'description' => 'Detailed technical specifications for every battery system component and configuration.',
                            'features' => "Battery system component details\nConfiguration & wiring diagrams\nCapacity & performance ratings\nWarranty & service records",
                            'link_label' => 'View All Specifications →'],
                        ['icon' => '📊', 'number' => '02', 'title' => 'Maintenance History & Logs',
                            'description' => 'Inspection records and maintenance history for tracking system condition over time.',
                            'features' => '', 'link_label' => 'View Logs →'],
                        ['icon' => '🔒', 'number' => '03', 'title' => 'Safety & Operational Protocols',
                            'description' => 'Documented procedures to ensure safe, standard-aligned operation at all times.',
                            'features' => '', 'link_label' => 'View Protocols →'],
                        ['icon' => '✅', 'number' => '04', 'title' => 'Regulatory Compliance Guidance',
                            'description' => 'Documentation supporting audits, reporting, and regulatory compliance requirements.',
                            'features' => '', 'link_label' => 'View Guidelines →'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // BENEFITS
        // ══════════════════════════════════════════════════
        'benefits' => [
            'label'  => 'Benefits / Why Choose Axion Section',
            'icon'   => 'check-circle',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'textarea', 'default' => "Benefits of\nSafety Training &\nDocumentation"],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea',
                    'default' => 'Trusted by engineers & operators across mission-critical industries to deliver comprehensive safety solutions.'],
                ['name' => 'cta_title',   'label' => 'CTA Card Title',       'type' => 'text',     'default' => 'Ready to Get Started?'],
                ['name' => 'cta_desc',    'label' => 'CTA Card Description', 'type' => 'textarea', 'default' => "Contact our team to schedule\na training session today."],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'benefits',
                    'label' => 'Benefit Items',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Number',       'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Color (CSS rgba)', 'type' => 'text'],
                        ['name' => 'title',        'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',  'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Enhanced Personnel Safety',
                            'description' => 'Reduced risk of incidents through expert training and documented procedures.'],
                        ['number' => '02', 'accent_color' => 'rgba(143,194,255,1)', 'title' => 'Improved Operational Readiness',
                            'description' => 'Better emergency response and system uptime across all critical scenarios.'],
                        ['number' => '03', 'accent_color' => 'rgba(166,227,161,1)', 'title' => 'Clear Compliance Records',
                            'description' => 'Organized records for maintenance, audits, and regulatory reporting.'],
                        ['number' => '04', 'accent_color' => 'rgba(255,209,102,1)', 'title' => 'Long-Term System Reliability',
                            'description' => 'Support for mission-critical battery systems throughout their lifecycle.'],
                        ['number' => '05', 'accent_color' => 'rgba(204,166,255,1)', 'title' => 'Peace of Mind',
                            'description' => 'Confidence knowing your team and systems are fully prepared.'],
                    ],
                ],
                [
                    'name'  => 'stats',
                    'label' => 'Benefit Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '99.9%', 'label' => 'Safety Compliance'],
                        ['value' => '500+',  'label' => 'Teams Trained'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // INDUSTRIES
        // ══════════════════════════════════════════════════
        'industries' => [
            'label'  => 'Industries Supported Section',
            'icon'   => 'factory',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'INDUSTRIES SUPPORTED'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'textarea', 'default' => "Training & Documentation\nfor Every Critical Sector"],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea',
                    'default' => 'Our services are tailored for organizations where battery system reliability and personnel safety are mission-critical.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'industries',
                    'label' => 'Industry Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',  'type' => 'text'],
                        ['name' => 'title',       'label' => 'Industry Name', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['icon' => '🖥️', 'title' => 'Data Centers & Colocation',
                            'description' => 'Protect IT operations and staff with compliant procedures.'],
                        ['icon' => '⚡',  'title' => 'Utilities & Substations',
                            'description' => 'Safe handling of DC power systems in high-voltage environments.'],
                        ['icon' => '📡', 'title' => 'Telecommunications',
                            'description' => 'Reduce downtime and emergency risks across network infrastructure.'],
                        ['icon' => '🏥', 'title' => 'Healthcare Facilities',
                            'description' => 'Protect life-safety power systems and clinical personnel.'],
                        ['icon' => '🏭', 'title' => 'Industrial & Infrastructure',
                            'description' => 'Operational safety and compliance for heavy industry systems.'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // LIFECYCLE
        // ══════════════════════════════════════════════════
        'lifecycle' => [
            'label'  => 'Integrated Lifecycle Support Section',
            'icon'   => 'refresh-cw',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'INTEGRATED APPROACH'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'textarea', 'default' => "Integrated\nLifecycle Support"],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea',
                    'default' => "Safety training and documentation are core to Axion's lifecycle approach. From specification through replacement, we ensure your team and records are always ready."],
                ['name' => 'bottom_note', 'label' => 'Bottom Note',   'type' => 'text',
                    'default' => '★  Training & Documentation highlighted as core lifecycle stages essential to every mission-critical deployment.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'features',
                    'label' => 'Highlighted Feature Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Step Number',           'type' => 'text'],
                        ['name' => 'icon',         'label' => 'Icon (emoji)',           'type' => 'text'],
                        ['name' => 'title',        'label' => 'Feature Title',          'type' => 'text'],
                        ['name' => 'description',  'label' => 'Feature Description',    'type' => 'textarea'],
                        ['name' => 'link_label',   'label' => 'Link Label',             'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Color (CSS rgba)','type' => 'text'],
                        ['name' => 'pill_color',   'label' => 'Pill Color (CSS rgba)',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '03', 'icon' => '📋', 'title' => 'Documentation',
                            'description' => 'Full system specs, maintenance logs, safety protocols, and compliance records — organised and accessible.',
                            'link_label' => 'Explore →', 'accent_color' => 'rgba(99,222,247,1)', 'pill_color' => 'rgba(99,222,247,1)'],
                        ['number' => '04', 'icon' => '🎓', 'title' => 'Training',
                            'description' => 'Expert-led, hands-on staff training programs tailored for battery handling, safety protocols, and emergency response.',
                            'link_label' => 'Explore →', 'accent_color' => 'rgba(143,194,255,1)', 'pill_color' => 'rgba(143,194,255,1)'],
                    ],
                ],
                [
                    'name'  => 'steps',
                    'label' => 'Lifecycle Steps',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Step Number',  'type' => 'text'],
                        ['name' => 'title',       'label' => 'Step Title',   'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'text'],
                        ['name' => 'active',      'label' => 'Highlighted?', 'type' => 'select',
                            'options' => ['yes' => 'Yes', 'no' => 'No'], 'default' => 'no'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'Specification',  'description' => 'System specs & requirements',       'active' => 'no'],
                        ['number' => '02', 'title' => 'Installation',   'description' => 'Professional setup & integration',   'active' => 'no'],
                        ['number' => '03', 'title' => 'Documentation',  'description' => 'Full records & protocols',           'active' => 'yes'],
                        ['number' => '04', 'title' => 'Training',       'description' => 'Expert-led staff training',          'active' => 'yes'],
                        ['number' => '05', 'title' => 'Monitoring',     'description' => 'Live performance tracking',          'active' => 'no'],
                        ['number' => '06', 'title' => 'Maintenance',    'description' => 'Scheduled service & upkeep',         'active' => 'no'],
                        ['number' => '07', 'title' => 'Replacement',    'description' => 'End-of-life system renewal',         'active' => 'no'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // CTA
        // ══════════════════════════════════════════════════
        'cta' => [
            'label'  => 'Call to Action Section',
            'icon'   => 'trending-up',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label',  'type' => 'text',     'default' => 'GET STARTED'],
                ['name' => 'heading',     'label' => 'Heading',        'type' => 'textarea', 'default' => "Ready to Protect\nYour Team &\nSystems?"],
                ['name' => 'description', 'label' => 'Description',    'type' => 'textarea',
                    'default' => 'Contact our technical team to schedule on-site training or request comprehensive system documentation.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label', 'type' => 'text',    'default' => 'Schedule Training →'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',   'type' => 'text',    'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label', 'type' => 'text',    'default' => 'Request Docs'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',   'type' => 'text',    'default' => '/contact'],
                ['name' => 'phone',       'label' => 'Phone / Emergency Line', 'type' => 'text',
                    'default' => '📞  24/7 Emergency: 245 445 34352'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#1565c0', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
            ],
        ],

    ], // end sections
]; // end return
