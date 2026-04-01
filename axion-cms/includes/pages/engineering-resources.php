<?php
/**
 * Engineering Resources page CMS configuration
 * Slug: engineering-resources
 */

return [
    'slug'     => 'engineering-resources',
    'label'    => 'Engineering Resources',
    'sections' => [

        // ====================================================================
        // HERO
        // ====================================================================
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => '🎯',
            'fields' => [
                ['name' => 'bg_image',    'label' => '🖼 Hero Background Image', 'type' => 'image',    'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty for default dark background.'],
                ['name' => 'accent_color','label' => '🎨 Accent Color',          'type' => 'color',    'default' => '#fb923c', 'description' => 'Primary accent color used on buttons, highlights, and stat values across this page.'],
                ['name' => 'breadcrumb',  'label' => 'Breadcrumb Text',           'type' => 'text',     'default' => 'Home > Resources > Engineering Resources'],
                ['name' => 'label',       'label' => 'Pill Label',                'type' => 'text',     'default' => 'ENGINEERING RESOURCES'],
                ['name' => 'heading',     'label' => 'Heading (\\n = line break)', 'type' => 'textarea', 'default' => "Technical Documentation\nfor Critical Power Systems"],
                ['name' => 'subtitle',    'label' => 'Subtitle',                  'type' => 'textarea', 'default' => "Access Axion's complete library of engineering resources — datasheets, technical guides, application notes, CAD files, and standards references — all tailored for specifiers, engineers, and facility managers working with VRLA and wet cell battery systems."],
                ['name' => 'panel_title', 'label' => 'Panel Title',               'type' => 'text',     'default' => 'RESOURCE LIBRARY'],
                [
                    'name'  => 'stats',
                    'label' => 'Hero Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '50+',  'label' => 'Documents Available'],
                        ['value' => '2',    'label' => 'Battery Technologies'],
                        ['value' => '6+',   'label' => 'Industry Applications'],
                        ['value' => 'Free', 'label' => 'Engineering Support'],
                    ],
                ],
                [
                    'name'  => 'panel_rows',
                    'label' => 'Panel Resource Rows',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',   'label' => 'Icon / Emoji',  'type' => 'text'],
                        ['name' => 'type',   'label' => 'Resource Type', 'type' => 'text'],
                        ['name' => 'format', 'label' => 'File Format',   'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📄', 'type' => 'Datasheets & Cut Sheets',  'format' => 'PDF'],
                        ['icon' => '📐', 'type' => 'CAD & BIM Files',          'format' => 'DWG / RVT'],
                        ['icon' => '📋', 'type' => 'Technical Guides',          'format' => 'PDF'],
                        ['icon' => '📊', 'type' => 'Application Notes',         'format' => 'PDF'],
                        ['icon' => '📁', 'type' => 'Submittal Packages',        'format' => 'Package'],
                        ['icon' => '📏', 'type' => 'Sizing Worksheets',         'format' => 'XLSX / PDF'],
                    ],
                ],
                ['name' => 'btn1_label', 'label' => 'Primary Button Label',   'type' => 'text', 'default' => 'Browse All Resources →'],
                ['name' => 'btn1_url',   'label' => 'Primary Button URL',     'type' => 'text', 'default' => '/contact'],
                ['name' => 'btn2_label', 'label' => 'Secondary Button Label', 'type' => 'text', 'default' => 'Request a Document'],
                ['name' => 'btn2_url',   'label' => 'Secondary Button URL',   'type' => 'text', 'default' => '/contact'],
            ],
        ],

        // ====================================================================
        // RESOURCE LIBRARY
        // ====================================================================
        'resource-library' => [
            'label'  => 'Resource Library',
            'icon'   => '📁',
            'fields' => [
                ['name' => 'bg_color',      'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',         'label' => 'Section Label',               'type' => 'text',     'default' => 'RESOURCE LIBRARY'],
                ['name' => 'heading',       'label' => 'Heading',                     'type' => 'text',     'default' => 'Download What You Need'],
                ['name' => 'subtitle',      'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Every document is available upon request — formatted for immediate use in project specifications, submittals, and design packages.'],
                ['name' => 'request_url',   'label' => 'Card Link URL',               'type' => 'text',     'default' => '/contact'],
                ['name' => 'request_label', 'label' => 'Card Link Label',             'type' => 'text',     'default' => 'Request →'],
                [
                    'name'  => 'resources',
                    'label' => 'Resource Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon / Emoji',       'type' => 'text'],
                        ['name' => 'category',    'label' => 'Category Label',     'type' => 'text'],
                        ['name' => 'title',       'label' => 'Document Title',     'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',        'type' => 'textarea'],
                        ['name' => 'format',      'label' => 'File Format',        'type' => 'text'],
                        ['name' => 'tags',        'label' => 'Tags (comma-sep.)',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📄', 'category' => 'Datasheet',     'title' => 'VRLA Battery Series — Full Technical Datasheet',       'description' => 'Complete electrical specifications, dimensions, terminal configurations, performance curves, and operating parameters for Axion VRLA batteries.',  'format' => 'PDF',     'tags' => 'VRLA, Specs'],
                        ['icon' => '📄', 'category' => 'Datasheet',     'title' => 'Wet Cell Battery Series — Full Technical Datasheet',   'description' => 'Detailed electrochemical data, capacity tables, charging profiles, and mechanical specifications for flooded lead-acid battery systems.',        'format' => 'PDF',     'tags' => 'Wet Cell, Specs'],
                        ['icon' => '✂',  'category' => 'Cut Sheet',     'title' => 'VRLA Battery — One-Page Cut Sheet',                   'description' => 'Concise product summary for project submittals, RFQ packages, and owner review packages. Includes key specs and ordering information.',           'format' => 'PDF',     'tags' => 'VRLA, Submittal'],
                        ['icon' => '✂',  'category' => 'Cut Sheet',     'title' => 'Wet Cell Battery — One-Page Cut Sheet',               'description' => 'One-page summary for flooded battery product lines — suitable for submittals, design team distribution, and pre-qualification packages.',        'format' => 'PDF',     'tags' => 'Wet Cell, Submittal'],
                        ['icon' => '📐', 'category' => 'CAD File',      'title' => 'Battery Cabinet — 2D CAD Drawing Set',                'description' => 'Dimensioned DWG drawings for stationary battery cabinets including plan, elevation, and section views with clearance zones.',                    'format' => 'DWG',     'tags' => 'CAD, Cabinet'],
                        ['icon' => '📐', 'category' => 'BIM File',      'title' => 'Battery Cabinet — BIM / Revit Family',                'description' => 'Revit family file for battery cabinet system integration in BIM models. Includes parametric properties for cabinet sizing.',                      'format' => 'RVT',     'tags' => 'BIM, Revit'],
                        ['icon' => '📋', 'category' => 'Spec Template', 'title' => 'CSI Division 26 — VRLA Battery System Specification', 'description' => 'MasterFormat-compliant specification section for VRLA battery systems — ready to insert directly into your project manual.',                      'format' => 'DOCX',    'tags' => 'CSI, Spec'],
                        ['icon' => '📋', 'category' => 'Spec Template', 'title' => 'CSI Division 26 — Wet Cell Battery System Spec',      'description' => 'Complete MasterFormat specification language for flooded battery systems with basis-of-design, quality assurance, and execution provisions.',      'format' => 'DOCX',    'tags' => 'CSI, Spec'],
                        ['icon' => '📏', 'category' => 'Worksheet',     'title' => 'Battery Sizing Worksheet — VRLA',                     'description' => 'Structured IEEE 485-based worksheet for calculating VRLA battery string capacity based on load, voltage, and design margin requirements.',        'format' => 'XLSX',    'tags' => 'Sizing, IEEE 485'],
                        ['icon' => '📏', 'category' => 'Worksheet',     'title' => 'Battery Sizing Worksheet — Wet Cell',                 'description' => 'IEEE 485 sizing worksheet for flooded battery systems with electrolyte temperature correction factors and aging derating guidance.',              'format' => 'XLSX',    'tags' => 'Sizing, IEEE 485'],
                        ['icon' => '📁', 'category' => 'Package',       'title' => 'Standard Submittal Package — VRLA',                   'description' => 'Complete submittal package including cut sheet, datasheet, UL listing documentation, and installation notes for project approval.',              'format' => 'Package', 'tags' => 'Submittal, VRLA'],
                        ['icon' => '📊', 'category' => 'App Note',      'title' => 'UPS Battery Selection — Application Note',            'description' => 'Technical guidance for specifying VRLA and wet cell batteries in commercial and industrial UPS applications.',                                    'format' => 'PDF',     'tags' => 'UPS, App Note'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // TECHNICAL GUIDES
        // ====================================================================
        'technical-guides' => [
            'label'  => 'Technical Guides',
            'icon'   => '📖',
            'fields' => [
                ['name' => 'bg_color',      'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#0a0e1a'],
                ['name' => 'label',         'label' => 'Section Label',               'type' => 'text',     'default' => 'TECHNICAL GUIDES'],
                ['name' => 'heading',       'label' => 'Heading',                     'type' => 'text',     'default' => 'In-Depth Engineering Guides'],
                ['name' => 'subtitle',      'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Comprehensive technical references written for engineers — covering battery selection, lifecycle planning, maintenance, and system design.'],
                ['name' => 'request_url',   'label' => 'Card Link URL',               'type' => 'text',     'default' => '/contact'],
                ['name' => 'request_label', 'label' => 'Card Link Label',             'type' => 'text',     'default' => 'Request Guide →'],
                [
                    'name'  => 'guides',
                    'label' => 'Guide Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Guide Number (01, 02…)', 'type' => 'text'],
                        ['name' => 'tag',         'label' => 'Tag / Type',             'type' => 'text'],
                        ['name' => 'title',       'label' => 'Guide Title',            'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',            'type' => 'textarea'],
                        ['name' => 'topics',      'label' => 'Topics (one per line)',  'type' => 'textarea'],
                        ['name' => 'format',      'label' => 'Format (PDF, DOCX…)',    'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'tag' => 'Selection Guide',  'title' => 'VRLA vs. Wet Cell — Engineering Selection Guide',   'description' => 'A comprehensive guide to selecting between VRLA and flooded battery technologies — covering application requirements, lifecycle cost, maintenance, and regulatory considerations.', 'topics' => "Application mapping\nLifecycle cost analysis\nMaintenance comparison\nRegulatory alignment\nDecision framework", 'format' => 'PDF'],
                        ['number' => '02', 'tag' => 'Design Guide',     'title' => 'Battery Room Design Guide',                        'description' => 'Engineering guidance for designing battery rooms and enclosures compliant with NEC Article 480, NFPA 70E, and ASHRAE ventilation requirements.',                              'topics' => "Ventilation calculations\nNEC 480 compliance\nArc flash zoning\nContainment design\nAccess and clearances",   'format' => 'PDF'],
                        ['number' => '03', 'tag' => 'Maintenance Guide','title' => 'Battery Maintenance & Inspection Protocol',         'description' => 'A structured guide to VRLA and wet cell battery maintenance programs — including inspection intervals, testing procedures, and capacity assessment criteria.',                    'topics' => "Inspection intervals\nFloat voltage testing\nCapacity trending\nWet cell equalization\nRecord keeping",        'format' => 'PDF'],
                        ['number' => '04', 'tag' => 'Lifecycle Guide',  'title' => 'Battery Lifecycle Planning Guide',                  'description' => 'Strategic guidance for planning battery replacement cycles, managing end-of-life transitions, and minimizing downtime in critical power installations.',                         'topics' => "Replacement triggers\nEoL indicators\nUpgrade planning\nDisposal compliance\nBudget forecasting",             'format' => 'PDF'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // SIZING & SELECTION TOOLS
        // ====================================================================
        'sizing-tools' => [
            'label'  => 'Sizing & Selection Tools',
            'icon'   => '📏',
            'fields' => [
                ['name' => 'bg_color',            'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',               'label' => 'Section Label',               'type' => 'text',     'default' => 'SIZING & SELECTION TOOLS'],
                ['name' => 'heading',             'label' => 'Heading',                     'type' => 'text',     'default' => 'Engineering Tools & Worksheets'],
                ['name' => 'subtitle',            'label' => 'Subtitle',                    'type' => 'textarea', 'default' => "Axion provides structured sizing worksheets and selection tools based on IEEE and IEC standards — available for download or completion with Axion engineering support."],
                ['name' => 'inputs_label',        'label' => 'Inputs Block Label',          'type' => 'text',     'default' => 'Required Inputs'],
                ['name' => 'output_prefix_label', 'label' => 'Output Prefix Label',         'type' => 'text',     'default' => 'Output:'],
                ['name' => 'request_url',         'label' => 'Card Link URL',               'type' => 'text',     'default' => '/contact'],
                ['name' => 'request_label',       'label' => 'Card Link Label',             'type' => 'text',     'default' => 'Download Worksheet →'],
                ['name' => 'disclaimer',          'label' => 'Disclaimer',                  'type' => 'textarea', 'default' => 'All worksheets are based on published IEEE / IEC standards. Axion engineering support is available at no charge to validate results for your project.'],
                [
                    'name'  => 'tools',
                    'label' => 'Tool Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon / Emoji',          'type' => 'text'],
                        ['name' => 'title',        'label' => 'Tool Title',            'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',           'type' => 'textarea'],
                        ['name' => 'standard',     'label' => 'Standard Reference',    'type' => 'text'],
                        ['name' => 'inputs',       'label' => 'Inputs (one per line)', 'type' => 'textarea'],
                        ['name' => 'output_label', 'label' => 'Output Label',          'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📏', 'title' => 'VRLA Battery String Sizing',   'description' => 'Calculate VRLA battery string capacity using the IEEE 485 method. Accounts for load profile, design margin, aging factor, and temperature correction.',                                              'standard' => 'IEEE 485',        'inputs' => "Load current (amperes)\nDischarge time (minutes/hours)\nMinimum terminal voltage\nDesign margin (%)\nAmbient temperature",             'output_label' => 'Recommended Ah capacity'],
                        ['icon' => '📐', 'title' => 'Wet Cell Battery Sizing',       'description' => 'IEEE 485-based sizing worksheet for flooded lead-acid systems with electrolyte temperature correction, specific gravity derating, and cell equalization requirements.',                            'standard' => 'IEEE 485 / 1187', 'inputs' => "Load profile\nDischarge duration\nElectrolyte temperature\nSpecific gravity target\nAging derating factor",                               'output_label' => 'Recommended string capacity'],
                        ['icon' => '🔌', 'title' => 'Charger Sizing Calculator',     'description' => 'Determine appropriate charger current output to fully recharge a battery system within the required recharge time following a full discharge event.',                                              'standard' => 'IEEE 485',        'inputs' => "Battery Ah capacity\nRequired recharge time (hours)\nCharger efficiency (%)\nFloat voltage\nNumber of cells",                              'output_label' => 'Charger output current (A)'],
                        ['icon' => '💨', 'title' => 'Battery Room Ventilation',      'description' => 'Calculate minimum ventilation airflow requirements for battery rooms based on hydrogen off-gassing rates during charging, per NEC 480 and ASHRAE.',                                                'standard' => 'NEC 480 / ASHRAE','inputs' => "Number of cells\nBattery type\nCharge rate\nRoom volume (m³/ft³)\nLocal code requirements",                                              'output_label' => 'Minimum CFM / L/s airflow'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // APPLICATION NOTES
        // ====================================================================
        'application-notes' => [
            'label'  => 'Application Notes',
            'icon'   => '📊',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#1565c0'],
                ['name' => 'label',    'label' => 'Section Label',               'type' => 'text',     'default' => 'APPLICATION NOTES'],
                ['name' => 'heading',  'label' => 'Heading',                     'type' => 'text',     'default' => 'Technical Notes by Application'],
                ['name' => 'subtitle', 'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'Application-specific technical guidance — written for engineers designing battery systems for distinct facility types and power continuity requirements.'],
                [
                    'name'  => 'notes',
                    'label' => 'Application Note Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'tag',        'label' => 'Industry Tag',          'type' => 'text'],
                        ['name' => 'tag_color',  'label' => 'Tag Accent Color',      'type' => 'text'],
                        ['name' => 'title',      'label' => 'Note Title',            'type' => 'text'],
                        ['name' => 'summary',    'label' => 'Summary',               'type' => 'textarea'],
                        ['name' => 'key_points', 'label' => 'Key Points (one/line)', 'type' => 'textarea'],
                        ['name' => 'technology', 'label' => 'Battery Technology',    'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['tag' => 'Healthcare',   'tag_color' => 'rgba(20,184,166,1)',  'title' => 'Battery Backup for Healthcare Facilities',       'summary' => 'Design criteria for life-safety UPS battery systems in hospitals, surgical centres, and medical imaging facilities — covering code requirements, discharge durations, and maintenance planning.',                                                           'key_points' => "NFPA 99 life-safety system requirements\nUPS runtime design for ORs and ICUs\nVRLA preference for clean-environment installations\nPeriodic inspection and capacity testing", 'technology' => 'VRLA'],
                        ['tag' => 'Data Centers', 'tag_color' => 'rgba(0,217,255,1)',   'title' => 'UPS Battery Design for Data Centers',            'summary' => 'Technical guidance for specifying VRLA and wet cell battery strings in Tier I–IV data centers, including redundancy design, string sizing, and thermal management.',                                                                              'key_points' => "N+1 and 2N battery redundancy\nIEEE 485 string sizing methodology\nThermal runaway prevention\nSNMP-based monitoring integration",                                       'technology' => 'VRLA / Wet Cell'],
                        ['tag' => 'Utilities',    'tag_color' => 'rgba(245,199,20,1)',  'title' => 'DC Control Power for Utilities & Substations',   'summary' => 'Application guidance for flooded and VRLA batteries in utility DC control systems — covering protective relay backup, SCADA power, and breaker trip/close circuits.',                                                                  'key_points' => "IEEE 485 / 1115 compliance\n125 Vdc and 48 Vdc systems\nWet cell preference for long-lifecycle sites\nEqualization charging protocols",                                  'technology' => 'Wet Cell'],
                        ['tag' => 'Telecom',      'tag_color' => 'rgba(199,158,255,1)', 'title' => 'Battery Systems for Telecom Infrastructure',     'summary' => 'Design and specification guidance for VRLA batteries in telecom central offices, remote sites, and tower installations — including Telcordia GR-63 compliance and float life considerations.',                                            'key_points' => "Telcordia GR-63-CORE compliance\n48 Vdc string design\nHigh-density cabinet systems\nFloat voltage and temperature management",                                          'technology' => 'VRLA'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // STANDARDS REFERENCE
        // ====================================================================
        'standards-reference' => [
            'label'  => 'Standards Quick Reference',
            'icon'   => '🛡',
            'fields' => [
                ['name' => 'bg_color',        'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#ffffff'],
                ['name' => 'label',           'label' => 'Section Label',               'type' => 'text',     'default' => 'STANDARDS REFERENCE'],
                ['name' => 'heading',         'label' => 'Heading',                     'type' => 'text',     'default' => 'Key Standards for Battery System Design'],
                ['name' => 'subtitle',        'label' => 'Subtitle',                    'type' => 'textarea', 'default' => 'A quick-reference guide to the primary electrical, safety, and environmental standards that govern battery system specification in North America.'],
                ['name' => 'applies_to_label','label' => '"Applies to" Label',          'type' => 'text',     'default' => 'Applies to:'],
                [
                    'name'  => 'standards',
                    'label' => 'Standard Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'code',       'label' => 'Standard Code (e.g. IEEE 485)', 'type' => 'text'],
                        ['name' => 'body',       'label' => 'Issuing Body (IEEE, NFPA…)',    'type' => 'text'],
                        ['name' => 'title',      'label' => 'Short Title',                   'type' => 'text'],
                        ['name' => 'scope',      'label' => 'Scope / Description',           'type' => 'textarea'],
                        ['name' => 'applies_to', 'label' => 'Applies To',                    'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['code' => 'IEEE 485',  'body' => 'IEEE',   'title' => 'Battery Sizing',           'scope' => 'Recommended practice for sizing lead-acid batteries for stationary applications',             'applies_to' => 'VRLA & Wet Cell'],
                        ['code' => 'IEEE 1188', 'body' => 'IEEE',   'title' => 'VRLA Maintenance',         'scope' => 'Recommended practice for maintenance, testing, and replacement of VRLA batteries',            'applies_to' => 'VRLA'],
                        ['code' => 'IEEE 1187', 'body' => 'IEEE',   'title' => 'Wet Cell Installation',    'scope' => 'Recommended practice for installation of vented nickel-cadmium and lead-acid batteries',     'applies_to' => 'Wet Cell'],
                        ['code' => 'NEC 480',   'body' => 'NFPA',   'title' => 'Battery Installations',    'scope' => 'NEC Article 480 — requirements for stationary battery installations in all occupancies',      'applies_to' => 'All Types'],
                        ['code' => 'NFPA 70E',  'body' => 'NFPA',   'title' => 'Electrical Safety',        'scope' => 'Standard for electrical safety in the workplace — arc flash and PPE requirements',            'applies_to' => 'All Types'],
                        ['code' => 'UL 924',    'body' => 'UL',     'title' => 'Emergency Lighting',       'scope' => 'Emergency lighting and power equipment — battery backup listing requirements',                'applies_to' => 'VRLA'],
                        ['code' => 'UL 1778',   'body' => 'UL',     'title' => 'UPS Systems',              'scope' => 'Uninterruptible power supply systems — battery performance and safety listing',               'applies_to' => 'VRLA'],
                        ['code' => 'IEC 60896', 'body' => 'IEC',    'title' => 'Stationary Batteries',     'scope' => 'Stationary lead-acid batteries — general requirements and methods of test',                   'applies_to' => 'VRLA & Wet Cell'],
                        ['code' => 'CSA C22.1', 'body' => 'CSA',    'title' => 'Canadian Electrical Code', 'scope' => 'Canadian Electrical Code Part I — battery installation rules for Canadian projects',          'applies_to' => 'All Types'],
                        ['code' => 'ASHRAE',    'body' => 'ASHRAE', 'title' => 'Battery Room Ventilation', 'scope' => 'HVAC and ventilation design for battery rooms — hydrogen off-gassing management',            'applies_to' => 'Wet Cell'],
                    ],
                ],
            ],
        ],

        // ====================================================================
        // ENGINEERING SUPPORT
        // ====================================================================
        'engineering-support' => [
            'label'  => 'Engineering Support Programs',
            'icon'   => '🔧',
            'fields' => [
                ['name' => 'bg_color',          'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#0a0e1a'],
                ['name' => 'label',             'label' => 'Section Label',               'type' => 'text',     'default' => 'ENGINEERING SUPPORT'],
                ['name' => 'heading',           'label' => 'Heading',                     'type' => 'text',     'default' => 'Direct Support for Engineers & Specifiers'],
                ['name' => 'subtitle',          'label' => 'Subtitle',                    'type' => 'textarea', 'default' => "Axion's engineering team provides no-cost technical support to consulting engineers, specifiers, and facility managers throughout the project lifecycle."],
                ['name' => 'deliverables_label','label' => 'Deliverables Block Label',    'type' => 'text',     'default' => 'Deliverables'],
                ['name' => 'turnaround_label',  'label' => 'Turnaround Label',            'type' => 'text',     'default' => 'Typical turnaround:'],
                ['name' => 'note_heading',      'label' => 'Note Bar Heading',            'type' => 'text',     'default' => 'All Support is Provided at No Charge'],
                ['name' => 'note_text',         'label' => 'Note Bar Body',               'type' => 'textarea', 'default' => "Axion's engineering support programs are available at no cost to consulting engineers, specifiers, and project managers. Contact us to initiate a support request."],
                ['name' => 'note_url',          'label' => 'Note Bar Button URL',         'type' => 'text',     'default' => '/contact'],
                ['name' => 'note_btn_label',    'label' => 'Note Bar Button Label',       'type' => 'text',     'default' => 'Start a Request →'],
                [
                    'name'  => 'programs',
                    'label' => 'Support Program Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon / Emoji',             'type' => 'text'],
                        ['name' => 'title',        'label' => 'Program Title',            'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',              'type' => 'textarea'],
                        ['name' => 'deliverables', 'label' => 'Deliverables (one/line)',  'type' => 'textarea'],
                        ['name' => 'turnaround',   'label' => 'Typical Turnaround',       'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['icon' => '📋', 'title' => 'Specification Writing Support',    'description' => "We prepare or review CSI MasterFormat specification language for VRLA and wet cell battery systems — tailored to your project's code jurisdiction and owner requirements.",            'deliverables' => "Division 26 spec section (DOCX)\nSubstitution clauses\nPerformance requirements language\nWarranty provisions",            'turnaround' => '2–3 business days'],
                        ['icon' => '📊', 'title' => 'Basis-of-Design Preparation',      'description' => 'Axion prepares basis-of-design narratives and comparative analysis documents — suitable for inclusion in design development or design-build RFP packages.',                          'deliverables' => "BoD narrative (PDF)\nVRLA vs wet cell comparison\nSite-specific design criteria\nLifecycle cost summary",                  'turnaround' => '3–5 business days'],
                        ['icon' => '📐', 'title' => 'Battery Sizing & Design Review',   'description' => "Submit your load profile and design parameters — Axion's engineering team will validate sizing calculations and provide a stamped review memo.",                                      'deliverables' => "IEEE 485 sizing worksheet\nSizing validation memo\nString configuration recommendation\nCharger sizing guidance",           'turnaround' => '2–4 business days'],
                        ['icon' => '📁', 'title' => 'Submittal Package Preparation',    'description' => 'Axion prepares complete submittal packages for project approval — including product data, shop drawings, and certification documentation.',                                            'deliverables' => "Product data sheets\nDimensional drawings\nUL/cUL listings\nO&M excerpts",                                                 'turnaround' => '3–5 business days'],
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
                ['name' => 'bg_color',      'label' => '🎨 Section Background Color', 'type' => 'color',    'default' => '#111827'],
                ['name' => 'label',         'label' => 'Label',                       'type' => 'text',     'default' => 'GET STARTED'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1',              'type' => 'text',     'default' => 'Access the Resources'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2 (accent)',     'type' => 'text',     'default' => 'Your Project Needs'],
                ['name' => 'description',   'label' => 'Description',                 'type' => 'textarea', 'default' => 'Request any document from the library, initiate an engineering support request, or contact Axion directly — our technical team responds fast.'],
                ['name' => 'btn1_label',    'label' => 'Primary Button Label',        'type' => 'text',     'default' => 'Request Documents'],
                ['name' => 'btn1_url',      'label' => 'Primary Button URL',          'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',    'label' => 'Secondary Button Label',      'type' => 'text',     'default' => 'Contact Engineering Support →'],
                ['name' => 'btn2_url',      'label' => 'Secondary Button URL',        'type' => 'text',     'default' => '/contact'],
                ['name' => 'trust_line',    'label' => 'Trust Line',                  'type' => 'text',     'default' => 'No-cost resources for engineers, specifiers & facility managers — VRLA and wet cell battery systems'],
            ],
        ],

    ],
];
