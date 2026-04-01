<?php
/**
 * FAQs page CMS configuration
 * Slug: faqs
 */

return [
    'slug'     => 'faqs',
    'label'    => 'FAQs',
    'sections' => [

        // ====================================================================
        // HERO
        // ====================================================================
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => '🎯',
            'fields' => [
                ['name' => 'breadcrumb', 'label' => 'Breadcrumb Text', 'type' => 'text', 'default' => 'HOME / FAQs', 'description' => 'Breadcrumb navigation text shown above the pill label.'],
                ['name' => 'label', 'label' => 'Pill Label', 'type' => 'text', 'default' => 'CRITICAL POWER BATTERY SYSTEMS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'default' => "Answers for\nCritical Power\nBattery Systems"],
                ['name' => 'subtitle', 'label' => 'Subtitle', 'type' => 'textarea', 'default' => 'Clear, reliable answers to common questions about battery performance, maintenance, warranties, and end-of-life management — for engineers, consultants, and facility managers.'],
                ['name' => 'topics_title', 'label' => 'Topics Panel Title', 'type' => 'text', 'default' => 'FAQ TOPICS', 'description' => 'Title shown above the topic navigator list in the hero panel.'],
                ['name' => 'btn_label', 'label' => 'CTA Button Label', 'type' => 'text', 'default' => 'View Full FAQs for Engineers & Buyers →'],
                ['name' => 'btn_url', 'label' => 'CTA Button URL', 'type' => 'text', 'default' => '/contact'],
                ['name' => 'bg_image', 'label' => '🖼 Hero Background Image', 'type' => 'image', 'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty to use the default dark background.'],
                ['name' => 'accent_color', 'label' => '🎨 Accent Color', 'type' => 'color', 'default' => '#f5c714', 'description' => 'Primary accent color for this page (buttons, highlights, stat values).'],
                ['name' => 'bg_color', 'label' => '🎨 Hero Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the hero section background color.'],
                [
                    'name' => 'stats',
                    'label' => 'Hero Stats',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '5',    'label' => 'FAQ Topics'],
                        ['value' => '15+',  'label' => 'Q&A Answers'],
                        ['value' => 'VRLA', 'label' => '& Wet Cell'],
                        ['value' => 'Free', 'label' => 'Technical Support'],
                    ],
                ],
                [
                    'name' => 'topics',
                    'label' => 'Topic Navigator Items',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',   'label' => 'Number (e.g. 01)', 'type' => 'text'],
                        ['name' => 'label',    'label' => 'Topic Label',      'type' => 'text'],
                        ['name' => 'sublabel', 'label' => 'Sub-label',        'type' => 'text'],
                        ['name' => 'color',    'label' => 'Accent Color',     'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'label' => 'Battery Lifespan', 'sublabel' => 'VRLA vs Wet Cell',     'color' => 'rgba(245,199,20,1)'],
                        ['number' => '02', 'label' => 'Maintenance',      'sublabel' => 'Inspection & upkeep',  'color' => 'rgba(77,204,255,1)'],
                        ['number' => '03', 'label' => 'Lead Times',       'sublabel' => 'Delivery schedules',   'color' => 'rgba(56,214,138,1)'],
                        ['number' => '04', 'label' => 'Warranties',       'sublabel' => 'Coverage & claims',    'color' => 'rgba(199,158,255,1)'],
                        ['number' => '05', 'label' => 'End-of-Life',      'sublabel' => 'Recycling & disposal', 'color' => 'rgba(245,199,20,1)'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // LIFESPAN & MAINTENANCE
        // ====================================================================
        'lifespan-maintenance' => [
            'label'  => 'Battery Lifespan & Maintenance',
            'icon'   => '🔋',
            'fields' => [
                ['name' => 'label',  'label' => 'Section Label', 'type' => 'text', 'default' => 'BATTERY LIFESPAN & MAINTENANCE'],
                ['name' => 'q1_num','label' => 'Q1 Number Label', 'type' => 'text', 'default' => 'Q1', 'description' => 'Label shown before question 1 (e.g. Q1).'],
                ['name' => 'q1',    'label' => 'Question 1', 'type' => 'text', 'default' => 'How long do VRLA and flooded (wet cell) batteries last?'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color.'],
                [
                    'name' => 'q1_bullets',
                    'label' => 'Question 1 — Answer Bullets',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Bullet Point', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['text' => 'VRLA batteries generally last 5–12 years, depending on load, temperature, and operating conditions.'],
                        ['text' => 'Flooded (wet cell) batteries typically last 10–20 years with proper maintenance and monitoring.'],
                        ['text' => 'Lifecycle planning, periodic testing, and environmental controls help maximize performance.'],
                    ],
                ],
                [
                    'name' => 'lifespan_bars',
                    'label' => 'Lifespan Comparison Bars',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'type',   'label' => 'Battery Type (e.g. VRLA)',       'type' => 'text'],
                        ['name' => 'range',  'label' => 'Range Label (e.g. 5 – 12 years)','type' => 'text'],
                        ['name' => 'min_yr', 'label' => 'Min Year Label (e.g. 5yr)',       'type' => 'text'],
                        ['name' => 'max_yr', 'label' => 'Max Year Label (e.g. 12yr)',      'type' => 'text'],
                        ['name' => 'width',  'label' => 'Bar Width % (e.g. 55%)',          'type' => 'text', 'description' => 'Visual width of the bar as a percentage (e.g. 55%). 100% = full width.'],
                        ['name' => 'color',  'label' => 'Bar Color',                       'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['type' => 'VRLA',     'range' => '5 – 12 years',  'min_yr' => '5yr',  'max_yr' => '12yr', 'width' => '55%',  'color' => 'rgba(30,136,229,1)'],
                        ['type' => 'WET CELL', 'range' => '10 – 20 years', 'min_yr' => '10yr', 'max_yr' => '20yr', 'width' => '100%', 'color' => 'rgba(245,199,20,1)'],
                    ],
                ],
                ['name' => 'q2_num', 'label' => 'Q2 Number Label', 'type' => 'text', 'default' => 'Q2', 'description' => 'Label shown before question 2 (e.g. Q2).'],
                ['name' => 'q2', 'label' => 'Question 2', 'type' => 'text', 'default' => 'What maintenance is required for VRLA and wet cell batteries?'],
                [
                    'name' => 'maintenance_cards',
                    'label' => 'Maintenance Cards',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'badge',       'label' => 'Badge Text',                          'type' => 'text'],
                        ['name' => 'badge_color', 'label' => 'Badge Color',                         'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',                          'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Card Subtitle',                       'type' => 'text'],
                        ['name' => 'items',       'label' => 'Bullet Points (one per line)', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        [
                            'badge'       => 'LOW MAINTENANCE',
                            'badge_color' => 'rgba(30,136,229,1)',
                            'title'       => 'VRLA Batteries',
                            'subtitle'    => 'Largely Maintenance-Free',
                            'items'       => "Periodic inspections for voltage, temperature, and visual wear\nCheck float voltage and charging parameters annually\nMonitor for swelling, leakage, or terminal corrosion\nReplace when capacity drops below 80% of rated capacity",
                        ],
                        [
                            'badge'       => 'ACTIVE MAINTENANCE',
                            'badge_color' => 'rgba(245,199,20,1)',
                            'title'       => 'Wet Cell Batteries',
                            'subtitle'    => 'Regular Active Maintenance Required',
                            'items'       => "Regular electrolyte level checks and distilled water top-ups\nTerminal cleaning to prevent corrosion buildup\nPeriodic equalization charging to balance cells\nMonitor specific gravity with a hydrometer quarterly",
                        ],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // LEAD TIMES & WARRANTY
        // ====================================================================
        'lead-times-warranty' => [
            'label'  => 'Lead Times & Warranty',
            'icon'   => '⏱',
            'fields' => [
                ['name' => 'label',  'label' => 'Section Label', 'type' => 'text', 'default' => 'LEAD TIMES & WARRANTY'],
                ['name' => 'q3_num','label' => 'Q3 Number Label', 'type' => 'text', 'default' => 'Q3', 'description' => 'Label shown before question 3 (e.g. Q3).'],
                ['name' => 'q3',    'label' => 'Question 3', 'type' => 'text', 'default' => 'What are typical lead times for battery orders?'],
                ['name' => 'lead_time_headline', 'label' => 'Lead Time Headline', 'type' => 'text', 'default' => '2 – 8 WEEKS TYPICAL'],
                ['name' => 'lead_time_desc', 'label' => 'Lead Time Description', 'type' => 'textarea', 'default' => 'Lead times depend on battery type, size, quantity, and project requirements. Axion coordinates directly with manufacturers to provide accurate delivery schedules.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color.'],
                [
                    'name' => 'lead_steps',
                    'label' => 'Lead Time Process Steps',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'step', 'label' => 'Step Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['step' => 'Order Placed'],
                        ['step' => 'Manufacturer Coordination'],
                        ['step' => 'Production & Shipping'],
                        ['step' => 'Delivery & Install'],
                    ],
                ],
                ['name' => 'factors_title', 'label' => 'Factors Panel Title', 'type' => 'text', 'default' => 'Factors Affecting Lead Times', 'description' => 'Title above the factors list on the right side.'],
                [
                    'name' => 'factors',
                    'label' => 'Factors Affecting Lead Times',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'label',  'label' => 'Factor Label',  'type' => 'text'],
                        ['name' => 'detail', 'label' => 'Factor Detail', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['label' => 'Battery Type:',      'detail' => 'VRLA vs Wet Cell, capacity'],
                        ['label' => 'Quantity:',           'detail' => 'Standard vs. large volume orders'],
                        ['label' => 'Availability:',       'detail' => 'Stocked items ship faster'],
                        ['label' => 'Project Complexity:', 'detail' => 'Custom systems may require longer lead times'],
                    ],
                ],
                ['name' => 'q4_num', 'label' => 'Q4 Number Label', 'type' => 'text', 'default' => 'Q4', 'description' => 'Label shown before question 4 (e.g. Q4).'],
                ['name' => 'q4', 'label' => 'Question 4', 'type' => 'text', 'default' => 'What warranties are offered on batteries?'],
                ['name' => 'warranty_intro', 'label' => 'Warranty Introduction', 'type' => 'textarea', 'default' => 'VRLA and wet cell batteries come with manufacturer warranties covering defects in materials and workmanship.'],
                [
                    'name' => 'warranty_badges',
                    'label' => 'Warranty Badges',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'badge', 'label' => 'Badge Text', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['badge' => 'MANUFACTURER'],
                        ['badge' => 'DEFECT COVERED'],
                        ['badge' => 'LIFECYCLE SUPPORT'],
                    ],
                ],
                [
                    'name' => 'warranty_points',
                    'label' => 'Warranty Bullet Points',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Point Text', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['text' => 'Manufacturer warranties cover defects in materials and workmanship'],
                        ['text' => 'Warranty periods vary by battery type, manufacturer, and application'],
                        ['text' => 'Axion ensures documentation and compliance are supported throughout lifecycle'],
                        ['text' => 'Warranty claims coordination managed by Axion on your behalf'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // END-OF-LIFE
        // ====================================================================
        'end-of-life' => [
            'label'  => 'End-of-Life Handling',
            'icon'   => '♻️',
            'fields' => [
                ['name' => 'label',  'label' => 'Section Label', 'type' => 'text', 'default' => 'END-OF-LIFE HANDLING'],
                ['name' => 'q5_num','label' => 'Q5 Number Label', 'type' => 'text', 'default' => 'Q5', 'description' => 'Label shown before question 5 (e.g. Q5).'],
                ['name' => 'q5',    'label' => 'Question 5', 'type' => 'text', 'default' => 'How should batteries be disposed of or recycled?'],
                ['name' => 'q5_intro', 'label' => 'Answer Introduction', 'type' => 'textarea', 'default' => 'Axion provides environmentally responsible battery recycling in coordination with certified partners, ensuring compliance with federal, provincial, and local regulations.'],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color.'],
                [
                    'name' => 'recycling_steps',
                    'label' => 'Recycling Process Steps',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Step Number',      'type' => 'text'],
                        ['name' => 'title',       'label' => 'Step Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Step Description', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['number' => '1', 'title' => 'Battery Collection',          'description' => 'Schedule pickup through Axion — no customer effort required.'],
                        ['number' => '2', 'title' => 'Certified Partner Transport', 'description' => 'Coordinated with certified recycling and disposal partners.'],
                        ['number' => '3', 'title' => 'Safe Disassembly',            'description' => 'Lead, acid, and plastics separated following strict protocols.'],
                        ['number' => '4', 'title' => 'Compliant Disposal',          'description' => 'Federal, provincial, and local environmental regulations met.'],
                    ],
                ],
                ['name' => 'compliance_title', 'label' => 'Compliance Table Title', 'type' => 'text', 'default' => 'Regulatory Compliance Coverage', 'description' => 'Title shown above the compliance table.'],
                [
                    'name' => 'compliance_rows',
                    'label' => 'Compliance Table Rows',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'standard', 'label' => 'Standard / Regulation', 'type' => 'text'],
                        ['name' => 'detail',   'label' => 'Detail',                'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['standard' => 'Federal Regulations',    'detail' => 'Canadian Environmental Protection Act'],
                        ['standard' => 'Provincial Requirements', 'detail' => 'Province-specific disposal guidelines'],
                        ['standard' => 'Local Bylaws',            'detail' => 'Municipal solid waste regulations'],
                        ['standard' => 'EPA / RCRA',              'detail' => 'Battery recycling standards'],
                        ['standard' => 'Zero Landfill Policy',    'detail' => 'Lead-acid batteries are fully recyclable'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // WHY FAQS MATTER
        // ====================================================================
        'why-faqs-matter' => [
            'label'  => 'Why FAQs Matter',
            'icon'   => '⭐',
            'fields' => [
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text', 'default' => 'WHY THIS MATTERS'],
                ['name' => 'heading', 'label' => 'Heading (use \\n for line breaks)', 'type' => 'textarea', 'default' => "FAQs That Build\nConfidence & Clarity"],
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color.'],
                [
                    'name' => 'cards',
                    'label' => 'Benefit Cards',
                    'type' => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon / Emoji',   'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',     'type' => 'text'],
                        ['name' => 'description', 'label' => 'Card Body Text', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['icon' => '?', 'title' => 'Reduces Confusion',  'description' => 'Eliminates ambiguity during battery selection and specification for new projects.'],
                        ['icon' => '⚙', 'title' => 'Technical Clarity',  'description' => 'Provides precise answers for engineers, consultants, and facility managers.'],
                        ['icon' => '✓', 'title' => 'Informed Decisions', 'description' => 'Supports better system decisions, enhancing overall reliability and safety.'],
                        ['icon' => '★', 'title' => 'Builds Trust',        'description' => 'Establishes confidence with clients, contractors, and technical stakeholders.'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // CTA
        // ====================================================================
        'cta' => [
            'label'  => 'Call to Action',
            'icon'   => '📣',
            'fields' => [
                ['name' => 'label',        'label' => 'Label',                      'type' => 'text',     'default' => 'HAVE MORE QUESTIONS?'],
                ['name' => 'heading_line1','label' => 'Heading Line 1',              'type' => 'text',     'default' => 'Get Expert Answers from'],
                ['name' => 'heading_line2','label' => 'Heading Line 2 (accent)',     'type' => 'text',     'default' => 'Axion Critical Power Solutions'],
                ['name' => 'description',  'label' => 'Description',                'type' => 'textarea', 'default' => 'Whether you\'re selecting batteries, planning maintenance, or managing end-of-life — our technical team is ready.'],
                ['name' => 'btn1_label',   'label' => 'Primary Button Label',       'type' => 'text',     'default' => 'Contact Axion Today'],
                ['name' => 'btn1_url',     'label' => 'Primary Button URL',         'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',   'label' => 'Secondary Button Label',     'type' => 'text',     'default' => 'View All FAQs →'],
                ['name' => 'btn2_url',     'label' => 'Secondary Button URL',       'type' => 'text',     'default' => '/contact'],
                ['name' => 'trust_line',   'label' => 'Trust / Support Line',       'type' => 'text',     'default' => 'Technical support available for engineers, consultants & facility managers'],
                ['name' => 'bg_color',     'label' => '🎨 Section Background Color','type' => 'color',    'default' => '#0a0e1a', 'description' => 'Override the CTA section background color.'],
            ],
        ],

    ],
];
