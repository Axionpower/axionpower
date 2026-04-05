<?php
/**
 * Axion CMS – Healthcare Power Page Config
 * Sections: hero, applications, battery-technologies, engineering-support,
 *           quality-compliance, lifecycle-support, why-axion, cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'healthcare',
    'label'    => 'Healthcare Power',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'target',
            'fields' => [
                ['name' => 'breadcrumb',    'label' => 'Breadcrumb Text',   'type' => 'text',     'default' => 'INDUSTRIES  /  HEALTHCARE POWER'],
                ['name' => 'pill',          'label' => 'Pill Badge Text',   'type' => 'text',     'default' => '🏥  HEALTHCARE POWER'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1',    'type' => 'text',     'default' => 'Reliable Battery Systems'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2',    'type' => 'text',     'default' => 'for Healthcare'],
                ['name' => 'heading_line3', 'label' => 'Heading Line 3 (Accent)', 'type' => 'text', 'default' => 'Facilities'],
                ['name' => 'subtitle',      'label' => 'Subtitle',          'type' => 'textarea', 'default' => 'Power interruptions are not acceptable in healthcare. Life-safety systems depend on Axion.'],
                ['name' => 'btn1_label',    'label' => 'Button 1 Label',    'type' => 'text',     'default' => 'Explore Solutions →'],
                ['name' => 'btn1_url',      'label' => 'Button 1 URL',      'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',    'label' => 'Button 2 Label',    'type' => 'text',     'default' => 'Talk to a Specialist ↗'],
                ['name' => 'btn2_url',      'label' => 'Button 2 URL',      'type' => 'text',     'default' => '/contact'],
                ['name' => 'bg_image', 'label' => '🖼 Hero Background Image', 'type' => 'image', 'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty to use the default dark background.'],
                ['name' => 'accent_color', 'label' => '🎨 Accent Color', 'type' => 'color', 'default' => '#14b8a6', 'description' => 'Primary accent color for this page (buttons, highlights, stat values). Default shown.'],
                [
                    'name'  => 'badges',
                    'label' => 'Badge Pills',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'badge', 'label' => 'Badge Text', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['badge' => 'VRLA + Wet Cell'],
                        ['badge' => 'NFPA 110 Ready'],
                        ['badge' => '24/7 Support'],
                        ['badge' => 'Life-Safety Grade'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // APPLICATIONS
        // ══════════════════════════════════════════════════
        'applications' => [
            'label'  => 'Healthcare Applications Section',
            'icon'   => 'star',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'APPLICATIONS'],
                ['name' => 'count_label', 'label' => 'Count Number',  'type' => 'text',     'default' => '06'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'textarea', 'default' => "Healthcare\nEnvironments\nWe Power"],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'apps',
                    'label' => 'Application Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'tag',        'label' => 'Category Tag',   'type' => 'text'],
                        ['name' => 'title',      'label' => 'Card Title',     'type' => 'text'],
                        ['name' => 'description','label' => 'Description',    'type' => 'textarea'],
                        ['name' => 'stat_value', 'label' => 'Stat Value',     'type' => 'text'],
                        ['name' => 'stat_label', 'label' => 'Stat Label',     'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['tag' => 'HOSPITALS & MEDICAL CENTERS',  'title' => 'Campus-Wide Power Continuity',          'description' => 'Large-scale UPS & DC battery systems ensuring campus-wide continuity across all departments.',                          'stat_value' => '99.9%', 'stat_label' => 'Uptime Guaranteed'],
                        ['tag' => 'EMERGENCY & TRAUMA',           'title' => 'Instant-Response Backup Systems',       'description' => 'Zero-delay battery backup for life-critical emergency suites and trauma bays.',                                       'stat_value' => '<4ms',  'stat_label' => 'Transfer Response Time'],
                        ['tag' => 'OPERATING ROOMS',              'title' => 'Surgical Suite Power Shield',           'description' => 'Zero-interruption power for OR lighting, equipment, and patient monitoring.',                                         'stat_value' => '0ms',   'stat_label' => 'Interruption Time'],
                        ['tag' => 'DIAGNOSTIC & IMAGING',         'title' => 'Imaging System Stability',              'description' => 'Clean, stable power for MRI, CT, X-ray, and sensitive diagnostic equipment.',                                         'stat_value' => '3T MRI','stat_label' => 'Compatible'],
                        ['tag' => 'RESEARCH LABORATORIES',        'title' => 'Lab-Grade Backup Power',                'description' => 'Reliable standby for freezers, analyzers, and controlled-environment research.',                                       'stat_value' => '-80°C', 'stat_label' => 'Sample Protected'],
                        ['tag' => 'LONG-TERM CARE FACILITIES',    'title' => '24/7 Resident Safety Power Assurance',  'description' => 'Extended backup for resident life-safety, HVAC, nursing stations, and all critical resident monitoring systems.',        'stat_value' => '24h+',  'stat_label' => 'Backup Duration'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // BATTERY TECHNOLOGIES
        // ══════════════════════════════════════════════════
        'battery-technologies' => [
            'label'  => 'Battery Technologies Section',
            'icon'   => 'battery',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text', 'default' => 'BATTERY TECHNOLOGIES'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text', 'default' => 'Two Technologies.'],
                ['name' => 'heading_line2','label' => 'Heading Line 2','type' => 'text', 'default' => 'One Mission: Uninterrupted Care.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'techs',
                    'label' => 'Battery Technology Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'badge',       'label' => 'Badge Label',         'type' => 'text'],
                        ['name' => 'name',        'label' => 'Technology Name',     'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',            'type' => 'text'],
                        ['name' => 'features',    'label' => 'Features (one per line)', 'type' => 'textarea'],
                        ['name' => 'best_for',    'label' => 'Best For',            'type' => 'text'],
                        ['name' => 'accent_color','label' => 'Accent Color (CSS rgba)', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['badge' => 'VRLA',     'name' => 'Valve-Regulated Lead-Acid', 'subtitle' => 'Maintenance-free sealed design',
                            'features' => "Maintenance-free sealed design\nCompact for equipment rooms\nPredictable UPS standby performance\nMinimal maintenance footprint",
                            'best_for' => 'Best for: Hospitals, clinics, imaging facilities, labs', 'accent_color' => 'rgba(20,184,166,1)'],
                        ['badge' => 'WET CELL', 'name' => 'Flooded Lead-Acid',         'subtitle' => 'Long service life for large facilities',
                            'features' => "Long service life for large facilities\nRobust extended backup performance\nField-proven in critical infrastructure\nHigh-capacity DC and emergency power",
                            'best_for' => 'Best for: Large hospitals, central power systems, long-care facilities', 'accent_color' => 'rgba(30,136,229,1)'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ENGINEERING SUPPORT
        // ══════════════════════════════════════════════════
        'engineering-support' => [
            'label'  => 'Engineering & Specification Support Section',
            'icon'   => 'wrench',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'ENGINEERING & SPECIFICATION SUPPORT'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Healthcare Power Systems'],
                ['name' => 'heading_line2','label' => 'Heading Line 2','type' => 'text',     'default' => 'Require Zero Compromise'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'default' => 'We assist from early design through implementation, ensuring compliance with NFPA 110, NEC, and healthcare codes.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'steps',
                    'label' => 'Process Steps',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Step Number',  'type' => 'text'],
                        ['name' => 'title',       'label' => 'Step Title',   'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'Site Assessment', 'description' => 'Load profiles & environment'],
                        ['number' => '02', 'title' => 'Battery Sizing',  'description' => 'Runtime & redundancy calc'],
                        ['number' => '03', 'title' => 'System Design',   'description' => 'UPS & DC integration'],
                        ['number' => '04', 'title' => 'Installation',    'description' => 'Commissioning & testing'],
                        ['number' => '05', 'title' => 'Lifecycle Mgmt',  'description' => 'Monitoring & replacement'],
                    ],
                ],
                [
                    'name'  => 'features',
                    'label' => 'Support Features',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'feature', 'label' => 'Feature Text', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['feature' => '↗ Compliance with NFPA 110, NEC, JCAHO'],
                        ['feature' => '↗ Integration with generator transfer systems'],
                        ['feature' => '↗ Ventilation & environmental assessments'],
                        ['feature' => '↗ EPC, contractor & consulting engineer support'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // QUALITY & COMPLIANCE
        // ══════════════════════════════════════════════════
        'quality-compliance' => [
            'label'  => 'Quality, Safety & Compliance Section',
            'icon'   => 'shield',
            'fields' => [
                ['name' => 'label',         'label' => 'Section Label',  'type' => 'text',     'default' => 'QUALITY, SAFETY & COMPLIANCE'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1', 'type' => 'text',     'default' => 'Zero Compromise'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2', 'type' => 'text',     'default' => 'on Patient Safety'],
                ['name' => 'description',   'label' => 'Description',    'type' => 'textarea', 'default' => 'In healthcare, safety and compliance are the baseline. Every Axion system is specified, tested, and documented to meet the exacting standards of medical facilities.'],
                ['name' => 'download_label','label' => 'Download Link Label', 'type' => 'text', 'default' => 'Download Full Compliance Documentation →'],
                ['name' => 'download_url',  'label' => 'Download Link URL',   'type' => 'text', 'default' => '/contact'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'cards',
                    'label' => 'Compliance Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Card Number',  'type' => 'text'],
                        ['name' => 'title',       'label' => 'Standard Name','type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',     'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea'],
                        ['name' => 'badge',       'label' => 'Badge Label',  'type' => 'select',
                            'options' => ['VERIFIED' => 'VERIFIED', 'CERTIFIED' => 'CERTIFIED', 'COMPLIANT' => 'COMPLIANT'], 'default' => 'CERTIFIED'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'NFPA 110 / 111', 'subtitle' => 'Emergency & Standby Power',   'description' => 'Type 10, Class 1.5 and Class X systems. Emergency power supply design and installation.',                         'badge' => 'VERIFIED'],
                        ['number' => '02', 'title' => 'NEC Article 480', 'subtitle' => 'Storage Battery Standards',  'description' => 'Electrical code compliance for battery rooms, ventilation, and wiring in healthcare settings.',               'badge' => 'CERTIFIED'],
                        ['number' => '03', 'title' => 'ISO 9001 : 2015', 'subtitle' => 'Manufacturer Quality System','description' => 'All battery manufacturers are ISO 9001 certified with full traceability documentation.',                        'badge' => 'CERTIFIED'],
                        ['number' => '04', 'title' => 'EPA / RCRA',      'subtitle' => 'Environmental Compliance',   'description' => 'Responsible battery disposal and recycling. 99.5% lead recovery. Zero landfill policy.',                       'badge' => 'COMPLIANT'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // LIFECYCLE SUPPORT
        // ══════════════════════════════════════════════════
        'lifecycle-support' => [
            'label'  => 'Lifecycle Support Section',
            'icon'   => 'refresh-cw',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'LIFECYCLE SUPPORT'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Full Lifecycle Coverage'],
                ['name' => 'heading_line2','label' => 'Heading Line 2','type' => 'text',     'default' => 'From Installation to End-of-Life'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'default' => 'Axion supports the entire battery lifecycle to ensure predictable, compliant, and always-available healthcare power.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'phases',
                    'label' => 'Lifecycle Phases',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Phase Number', 'type' => 'text'],
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Phase Title',  'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '1', 'icon' => '⚙️', 'title' => 'Commissioning',  'description' => 'Acceptance testing & system verification'],
                        ['number' => '2', 'icon' => '🔬', 'title' => 'Routine Testing', 'description' => 'IEEE capacity tests & inspections'],
                        ['number' => '3', 'icon' => '📊', 'title' => 'Monitoring',      'description' => 'Health tracking & trend analysis'],
                        ['number' => '4', 'icon' => '🔄', 'title' => 'Replacement',     'description' => 'Proactive planning before failures'],
                        ['number' => '5', 'icon' => '♻️', 'title' => 'Disposal',        'description' => 'EPA/RCRA compliant lead recovery'],
                    ],
                ],
                [
                    'name'  => 'stats',
                    'label' => 'Lifecycle Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Stat Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Stat Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '< 24hr', 'label' => 'Emergency replacement dispatch'],
                        ['value' => 'Annual',  'label' => 'IEEE 450 capacity testing'],
                        ['value' => '10+ yr',  'label' => 'Avg battery service life achieved'],
                        ['value' => '99.5%',   'label' => 'Lead recovery on disposed units'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // WHY CHOOSE AXION
        // ══════════════════════════════════════════════════
        'why-axion' => [
            'label'  => 'Why Choose Axion Section',
            'icon'   => 'star',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'When lives depend on power,'],
                ['name' => 'heading_line2','label' => 'Heading Line 2','type' => 'text',     'default' => 'you need a partner'],
                ['name' => 'heading_line3','label' => 'Heading Line 3','type' => 'text',     'default' => 'who never fails.'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'default' => 'Every recommendation is made with patient safety and operational continuity as the priority.'],
                ['name' => 'stat_value',   'label' => 'Track Record Stat Value', 'type' => 'text', 'default' => '847+'],
                ['name' => 'stat_label',   'label' => 'Track Record Stat Label', 'type' => 'text', 'default' => 'Healthcare facilities powered nationwide'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'reasons',
                    'label' => 'Reasons (checkmark list)',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Reason Title',  'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['title' => 'Mission-Critical Healthcare Expertise',   'description' => 'Proven in hospitals, OR suites, trauma centers, and imaging facilities.'],
                        ['title' => 'Proven VRLA and Wet Cell Solutions',      'description' => 'Technologies matched to your facility size, runtime needs, and maintenance capacity.'],
                        ['title' => 'Engineering-Focused, Compliance-Driven', 'description' => 'Full alignment with NFPA 110, NEC 480, and Joint Commission standards.'],
                        ['title' => 'Commitment to Safety and Uptime',        'description' => 'Every system designed with patient safety and 24/7 availability as the baseline.'],
                        ['title' => 'Long-Term Partnership Mindset',          'description' => 'From initial spec to eventual replacement — a relationship built on reliability.'],
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
                ['name' => 'label',        'label' => 'Section Label',  'type' => 'text',     'default' => 'CONTACT AXION'],
                ['name' => 'heading_line1','label' => 'Heading Line 1', 'type' => 'text',     'default' => 'Ensure Uninterrupted Power for'],
                ['name' => 'heading_line2','label' => 'Heading Line 2', 'type' => 'text',     'default' => 'Your Healthcare Facility'],
                ['name' => 'description',  'label' => 'Description',    'type' => 'textarea', 'default' => 'Contact Axion Critical Power Solutions — your team of healthcare battery specialists is ready to design, supply, and support your mission-critical power infrastructure.'],
                ['name' => 'btn1_label',   'label' => 'Button 1 Label', 'type' => 'text',     'default' => 'Contact Axion Today'],
                ['name' => 'btn1_url',     'label' => 'Button 1 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',   'label' => 'Button 2 Label', 'type' => 'text',     'default' => 'Request Assessment'],
                ['name' => 'btn2_url',     'label' => 'Button 2 URL',   'type' => 'text',     'default' => '/contact'],
                ['name' => 'link_label',   'label' => 'Text Link Label','type' => 'text',     'default' => 'Download Spec Sheet →'],
                ['name' => 'link_url',     'label' => 'Text Link URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#1565c0', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                [
                    'name'  => 'stats',
                    'label' => 'CTA Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Stat Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Stat Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '847+',     'label' => 'Healthcare Facilities'],
                        ['value' => 'NFPA 110', 'label' => 'Compliant Systems'],
                        ['value' => '24/7',     'label' => 'Emergency Support'],
                    ],
                ],
            ],
        ],

    ], // end sections
]; // end return
