<?php
/**
 * Consulting Engineer Hub page CMS configuration
 * Slug: consulting-engineer-hub
 */

return [
    'slug'     => 'consulting-engineer-hub',
    'label'    => 'Consulting Engineer Hub',
    'sections' => [

        // ====================================================================
        // HERO
        // ====================================================================
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => '🎯',
            'fields' => [
                ['name' => 'bg_image',    'label' => '🖼 Hero Background Image', 'type' => 'image',    'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty for default dark background.'],
                ['name' => 'accent_color','label' => '🎨 Accent Color',          'type' => 'color',    'default' => '#38d68a', 'description' => 'Primary accent color used on buttons, highlights, and stat values across this page.'],
                ['name' => 'breadcrumb',  'label' => 'Breadcrumb Text',           'type' => 'text',     'default' => 'HOME / CONSULTING ENGINEER HUB'],
                ['name' => 'label',       'label' => 'Pill Label',                'type' => 'text',     'default' => 'CONSULTING ENGINEER HUB'],
                ['name' => 'heading',     'label' => 'Heading (\\n = line break)', 'type' => 'textarea', 'default' => "Your Technical\nSpecification Partner"],
                ['name' => 'subtitle',    'label' => 'Subtitle',                  'type' => 'textarea', 'default' => "Axion Critical Power Solutions provides consulting engineers, specifiers, and project managers with the technical documentation, basis-of-design resources, and specification language needed to design and specify critical power battery systems with confidence."],
                ['name' => 'panel_title', 'label' => 'Panel Title',               'type' => 'text',     'default' => 'ENGINEERING RESOURCES'],
                [
                    'name'  => 'stats',
                    'label' => 'Hero Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '50+',  'label' => 'Spec Documents'],
                        ['value' => '2',    'label' => 'Battery Families'],
                        ['value' => 'CSI',  'label' => 'MasterFormat Ready'],
                        ['value' => 'Free', 'label' => 'Spec Support'],
                    ],
                ],
                [
                    'name'  => 'panel_resources',
                    'label' => 'Panel Resource Rows',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',     'label' => 'Icon / Emoji',  'type' => 'text'],
                        ['name' => 'category', 'label' => 'Category Name', 'type' => 'text'],
                        ['name' => 'count',    'label' => 'Count / Status','type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📄', 'category' => 'Datasheets & Cut Sheets',  'count' => 'Available'],
                        ['icon' => '📐', 'category' => 'CAD / BIM Files',          'count' => 'On Request'],
                        ['icon' => '📋', 'category' => 'CSI MasterFormat Specs',   'count' => 'Templates'],
                        ['icon' => '📁', 'category' => 'Submittal Packages',       'count' => 'On Request'],
                        ['icon' => '📊', 'category' => 'Basis-of-Design Docs',     'count' => 'Available'],
                        ['icon' => '✅', 'category' => 'Compliance Documentation', 'count' => 'Included'],
                    ],
                ],
                ['name' => 'btn_label', 'label' => 'CTA Button Label', 'type' => 'text', 'default' => 'Request Spec Support →'],
                ['name' => 'btn_url',   'label' => 'CTA Button URL',   'type' => 'text', 'default' => '/contact'],
            ],
        ],

        // ====================================================================
        // RESOURCES & DOWNLOADS
        // ====================================================================
        'resources-downloads' => [
            'label'  => 'Resources & Downloads',
            'icon'   => '📁',
            'fields' => [
                ['name' => 'bg_color',    'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',       'label' => 'Section Label',               'type' => 'text',     'default' => 'TECHNICAL RESOURCES'],
                ['name' => 'heading',     'label' => 'Heading',                     'type' => 'text',     'default' => 'Specification-Ready Technical Resources'],
                ['name' => 'subtitle',    'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Access the documentation you need to specify Axion battery systems — available for VRLA and flooded wet cell product lines.'],
                ['name' => 'request_url', 'label' => 'Card Link URL',               'type' => 'text',     'default' => '/contact'],
                [
                    'name'  => 'cards',
                    'label' => 'Resource Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon / Emoji',    'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Card Description','type' => 'textarea'],
                        ['name' => 'badge',       'label' => 'File Type Badge', 'type' => 'text'],
                        ['name' => 'link_label',  'label' => 'Link Label',      'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📄', 'title' => 'Product Datasheets',      'description' => 'Full technical specifications, dimensions, performance curves, and terminal configurations for every product.',  'badge' => 'PDF',        'link_label' => 'Request Access'],
                        ['icon' => '✂',  'title' => 'Cut Sheets',              'description' => 'Concise one-page summaries for project submittals, RFQ packages, and design team distribution.',              'badge' => 'PDF',        'link_label' => 'Request Access'],
                        ['icon' => '📋', 'title' => 'CSI MasterFormat Specs',  'description' => 'Division 26 and Division 16 specification language — ready to drop into your project manual.',               'badge' => 'DOCX / PDF', 'link_label' => 'Request Access'],
                        ['icon' => '📐', 'title' => 'CAD & BIM Files',         'description' => '2D CAD drawings and BIM-ready blocks for battery cabinets and system layouts in DWG and RVT formats.',       'badge' => 'DWG / RVT',  'link_label' => 'Request Access'],
                        ['icon' => '📁', 'title' => 'Submittal Templates',     'description' => 'Pre-formatted submittal packages including cover sheets, product data, and installation documentation.',      'badge' => 'Package',    'link_label' => 'Request Access'],
                        ['icon' => '📊', 'title' => 'Basis-of-Design Guides',  'description' => 'System selection rationale, lifecycle cost analysis, and comparative documentation for VRLA vs. wet cell.',  'badge' => 'PDF',        'link_label' => 'Request Access'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // BATTERY SELECTION GUIDE
        // ====================================================================
        'battery-selection' => [
            'label'  => 'Battery Selection Guide',
            'icon'   => '🔋',
            'fields' => [
                ['name' => 'bg_color',          'label' => '🎨 Section Background Color',    'type' => 'color',    'default' => '#0a0e1a'],
                ['name' => 'label',             'label' => 'Section Label',                  'type' => 'text',     'default' => 'BATTERY SELECTION GUIDE'],
                ['name' => 'heading',           'label' => 'Heading',                        'type' => 'text',     'default' => 'Select the Right Battery for Your Project'],
                ['name' => 'subtitle',          'label' => 'Subtitle',                       'type' => 'textarea', 'default' => 'Use this reference table to match battery technology to project requirements, site conditions, and client maintenance capabilities.'],
                ['name' => 'th_criteria',       'label' => 'Table Header: Criteria Column',  'type' => 'text',     'default' => 'Specification Criteria'],
                ['name' => 'th_vrla',           'label' => 'Table Header: VRLA Column',      'type' => 'text',     'default' => 'VRLA Batteries'],
                ['name' => 'th_wet_cell',       'label' => 'Table Header: Wet Cell Column',  'type' => 'text',     'default' => 'Wet Cell (Flooded)'],
                ['name' => 'vrla_recommend',    'label' => 'VRLA Recommendation Note',       'type' => 'text',     'default' => 'Recommended for most commercial and healthcare applications'],
                ['name' => 'wet_cell_recommend','label' => 'Wet Cell Recommendation Note',   'type' => 'text',     'default' => 'Recommended for utility and long-lifecycle industrial applications'],
                [
                    'name'  => 'rows',
                    'label' => 'Comparison Table Rows',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'criteria', 'label' => 'Specification Criteria', 'type' => 'text'],
                        ['name' => 'vrla',     'label' => 'VRLA Column Value',      'type' => 'textarea'],
                        ['name' => 'wet_cell', 'label' => 'Wet Cell Column Value',  'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['criteria' => 'Typical Application',    'vrla' => 'UPS, telecom, healthcare, data centers',   'wet_cell' => 'Utilities, substations, large UPS systems'],
                        ['criteria' => 'Maintenance Level',       'vrla' => 'Low — largely maintenance-free',           'wet_cell' => 'Active — regular electrolyte monitoring'],
                        ['criteria' => 'Typical Float Life',      'vrla' => '5 – 12 years',                             'wet_cell' => '10 – 20 years'],
                        ['criteria' => 'Enclosure Required',      'vrla' => 'Not always required',                      'wet_cell' => 'Ventilated room or cabinet required'],
                        ['criteria' => 'Installation Footprint',  'vrla' => 'Compact — rack or cabinet mount',          'wet_cell' => 'Larger — floor-standing with acid containment'],
                        ['criteria' => 'Cost Profile',            'vrla' => 'Lower upfront cost',                       'wet_cell' => 'Higher upfront, lower lifecycle cost'],
                        ['criteria' => 'Certification / Listing', 'vrla' => 'UL 924, UL 1778, IEEE 485',               'wet_cell' => 'IEEE 485, IEEE 1187, NFPA 70E'],
                        ['criteria' => 'Best Suited For',         'vrla' => 'Space-constrained, low-maintenance sites', 'wet_cell' => 'Long-lifecycle, mission-critical utility sites'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // SPECIFICATION SUPPORT
        // ====================================================================
        'specification-support' => [
            'label'  => 'Specification Support',
            'icon'   => '📋',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',    'label' => 'Section Label',               'type' => 'text',     'default' => 'SPECIFICATION SUPPORT'],
                ['name' => 'heading',  'label' => 'Heading',                     'type' => 'text',     'default' => 'End-to-End Specification Support'],
                ['name' => 'subtitle', 'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Axion works directly with consulting engineers from early design through project close — providing the technical documentation needed at every stage.'],
                [
                    'name'  => 'steps',
                    'label' => 'Support Steps / Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',   'label' => 'Step Number (e.g. 01)',       'type' => 'text'],
                        ['name' => 'title',    'label' => 'Step Title',                  'type' => 'text'],
                        ['name' => 'subtitle', 'label' => 'Step Subtitle',               'type' => 'text'],
                        ['name' => 'bullets',  'label' => 'Bullet Points (one per line)','type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'CSI Specification Language',  'subtitle' => 'Ready-to-Use Spec Sections',   'bullets' => "Division 26 battery system language\nManufacturer substitution clauses\nPerformance and testing requirements\nWarranty and lifecycle language"],
                        ['number' => '02', 'title' => 'Basis-of-Design Documents',   'subtitle' => 'Design Justification Support', 'bullets' => "System selection rationale\nVRLA vs. wet cell comparative analysis\nLifecycle cost documentation\nSite-specific design criteria"],
                        ['number' => '03', 'title' => 'Submittal Packages',          'subtitle' => 'Approval-Ready Documentation', 'bullets' => "Product data and cut sheets\nDimensional and installation drawings\nUL and certification documentation\nO&M manual excerpts"],
                        ['number' => '04', 'title' => 'Compliance Review Support',   'subtitle' => 'Code and Standard Alignment',  'bullets' => "NEC Article 480 compliance\nNFPA 70E arc flash considerations\nIEEE 485/1188 design conformance\nAHJ coordination support"],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // STANDARDS & CODES
        // ====================================================================
        'standards-codes' => [
            'label'  => 'Standards & Codes',
            'icon'   => '🛡',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#0a0e1a'],
                ['name' => 'label',    'label' => 'Section Label',               'type' => 'text',     'default' => 'STANDARDS & CODES'],
                ['name' => 'heading',  'label' => 'Heading',                     'type' => 'text',     'default' => 'Designed and Specified to Industry Standards'],
                ['name' => 'subtitle', 'label' => 'Subtitle',                    'type' => 'textarea', 'default' => "Axion battery systems are specified in alignment with the applicable electrical, safety, and environmental standards — so your documentation is code-compliant from day one."],
                [
                    'name'  => 'standards',
                    'label' => 'Standards Grid Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'code',        'label' => 'Standard Code (e.g. IEEE 485)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Short Title',                   'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',                   'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['code' => 'IEEE 485',  'title' => 'Battery Sizing',       'description' => 'Lead-acid battery sizing for stationary applications'],
                        ['code' => 'IEEE 1188', 'title' => 'VRLA Maintenance',     'description' => 'Recommended practice for maintenance of VRLA batteries'],
                        ['code' => 'NEC 480',   'title' => 'Electrical Code',      'description' => 'NEC Article 480 — Storage Batteries installation requirements'],
                        ['code' => 'NFPA 70E',  'title' => 'Arc Flash Safety',     'description' => 'Electrical safety in the workplace — battery room safety'],
                        ['code' => 'UL 924',    'title' => 'Emergency Lighting',   'description' => 'Emergency lighting and power equipment listing'],
                        ['code' => 'UL 1778',   'title' => 'UPS Systems',          'description' => 'UPS system listing — battery backup performance'],
                        ['code' => 'CSA C22.1', 'title' => 'Canadian Electrical',  'description' => 'Canadian Electrical Code compliance for battery installations'],
                        ['code' => 'IEC 60896', 'title' => 'Stationary Batteries', 'description' => 'IEC standard for stationary lead-acid battery systems'],
                    ],
                ],
                [
                    'name'  => 'compliance_points',
                    'label' => 'Compliance Checklist Points',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Compliance Point', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['text' => 'All battery systems supplied with applicable UL/cUL listings'],
                        ['text' => 'Full documentation package included for AHJ submissions'],
                        ['text' => 'IEEE conformance statements available on request'],
                        ['text' => 'Site-specific code review support provided at no charge'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // PROJECT APPLICATIONS
        // ====================================================================
        'project-applications' => [
            'label'  => 'Project Applications',
            'icon'   => '🏭',
            'fields' => [
                ['name' => 'bg_color',       'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',          'label' => 'Section Label',               'type' => 'text',     'default' => 'PROJECT APPLICATIONS'],
                ['name' => 'heading',        'label' => 'Heading',                     'type' => 'text',     'default' => 'Specified Across Critical Industries'],
                ['name' => 'subtitle',       'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Axion battery systems appear in specifications for a wide range of critical facility types — each with unique power continuity requirements.'],
                ['name' => 'spec_ref_label', 'label' => '"Spec Reference" Label',      'type' => 'text',     'default' => 'Spec Reference:'],
                [
                    'name'  => 'apps',
                    'label' => 'Application Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'tag',         'label' => 'Industry Tag',     'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Card Description', 'type' => 'textarea'],
                        ['name' => 'spec',        'label' => 'Spec Reference',   'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['tag' => 'Healthcare',   'title' => 'Hospitals & Medical Facilities', 'description' => 'Life-safety UPS, nurse call, emergency lighting, and medical imaging backup power systems.',       'spec' => 'VRLA — Division 26 40 00'],
                        ['tag' => 'Data Centers', 'title' => 'Data Centers & Colocation',      'description' => 'High-density UPS battery strings supporting Tier I through IV data center uptime requirements.',    'spec' => 'VRLA / Wet Cell — Div 26'],
                        ['tag' => 'Utilities',    'title' => 'Utilities & Substations',        'description' => 'DC control power, SCADA, protective relay systems, and switchgear backup for utility facilities.', 'spec' => 'Wet Cell — IEEE 485'],
                        ['tag' => 'Telecom',      'title' => 'Telecommunications',             'description' => 'Central office, tower, and remote site battery systems supporting 24/7 network availability.',      'spec' => 'VRLA — Telcordia GR-63'],
                        ['tag' => 'Industrial',   'title' => 'Industrial & Infrastructure',    'description' => 'Process control UPS, emergency shutdown systems, and critical load backup for industrial plants.', 'spec' => 'VRLA / Wet Cell'],
                        ['tag' => 'Government',   'title' => 'Government & Institutional',     'description' => 'Correctional, transit, municipal, and federal facilities requiring redundant power continuity.',    'spec' => 'VRLA — Division 26 33 53'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // WHY AXION FOR ENGINEERS
        // ====================================================================
        'why-axion' => [
            'label'  => 'Why Axion for Engineers',
            'icon'   => '⭐',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'label',    'label' => 'Section Label',               'type' => 'text',  'default' => 'WHY AXION'],
                ['name' => 'heading',  'label' => 'Heading',                     'type' => 'text',  'default' => 'Built for How Engineers Actually Work'],
                [
                    'name'  => 'stats',
                    'label' => 'Stats Strip',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Stat Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Stat Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => 'Fast',   'label' => 'Spec Turnaround'],
                        ['value' => 'Free',   'label' => 'Engineer Support'],
                        ['value' => 'CSI',    'label' => 'Format Ready'],
                        ['value' => '2',      'label' => 'Battery Families'],
                        ['value' => 'Canada', 'label' => '& USA Coverage'],
                    ],
                ],
                [
                    'name'  => 'reasons',
                    'label' => 'Reason Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon / Emoji',    'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Card Description','type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['icon' => '📐', 'title' => 'Spec-Ready Documentation',  'description' => 'Every document is formatted for immediate use in project manuals, RFQ packages, and design submissions — no reformatting required.'],
                        ['icon' => '🤝', 'title' => 'Direct Engineer Support',   'description' => 'Our technical team responds directly to engineers, specifiers, and consultants — not a sales layer — for fast, accurate answers.'],
                        ['icon' => '⚡', 'title' => 'Two Product Families',      'description' => "Axion supplies both VRLA and flooded wet cell batteries — so your specification doesn't need to change suppliers based on technology."],
                        ['icon' => '✅', 'title' => 'Compliance-First Approach', 'description' => 'Basis-of-design documents are written to align with NEC, NFPA, and IEEE standards, reducing AHJ review risk.'],
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
                ['name' => 'bg_color',      'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#1565c0'],
                ['name' => 'label',         'label' => 'Label',                       'type' => 'text',     'default' => 'READY TO SPECIFY?'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1',              'type' => 'text',     'default' => 'Partner With Axion on'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2 (accent)',     'type' => 'text',     'default' => 'Your Next Critical Power Project'],
                ['name' => 'description',   'label' => 'Description',                 'type' => 'textarea', 'default' => 'Whether you need a datasheet, a CSI specification section, or a full basis-of-design package — our engineering support team is ready to assist.'],
                ['name' => 'btn1_label',    'label' => 'Primary Button Label',        'type' => 'text',     'default' => 'Request Spec Support'],
                ['name' => 'btn1_url',      'label' => 'Primary Button URL',          'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',    'label' => 'Secondary Button Label',      'type' => 'text',     'default' => 'Download Resources →'],
                ['name' => 'btn2_url',      'label' => 'Secondary Button URL',        'type' => 'text',     'default' => '/contact'],
                ['name' => 'trust_line',    'label' => 'Trust Line',                  'type' => 'text',     'default' => 'No-cost specification support for consulting engineers — VRLA and wet cell battery systems'],
            ],
        ],

    ],
];
