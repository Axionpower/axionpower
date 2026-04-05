<?php
/**
 * Axion CMS – Telecommunications Page Config
 * Every section and field here is independently editable in the WordPress admin.
 * Default values are served via GraphQL so Next.js never needs hardcoded fallbacks.
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'telecommunications',
    'label' => 'Telecommunications',
    'sections' => [

        // ═══════════════════════════════════════
        // HERO SECTION
        // ═══════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => 'target',
            'fields' => [
                ['name' => 'breadcrumb',    'label' => 'Breadcrumb Text',  'type' => 'text',     'default' => 'INDUSTRIES  /  TELECOMMUNICATIONS'],
                ['name' => 'pill',          'label' => 'Pill Badge Text',  'type' => 'text',     'default' => '📡  TELECOMMUNICATIONS'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1',   'type' => 'text',     'default' => 'Reliable Battery Systems for'],
                ['name' => 'heading_accent','label' => 'Heading Accent',   'type' => 'text',     'default' => 'Mission-Critical'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2',   'type' => 'text',     'default' => 'Telecom Networks'],
                ['name' => 'subtitle',      'label' => 'Subtitle',         'type' => 'textarea', 'rows' => 3, 'default' => 'VRLA and flooded battery systems, engineering support, and lifecycle management for uninterrupted telecom uptime.'],
                ['name' => 'btn1_label',    'label' => 'Button 1 Label',   'type' => 'text',     'default' => 'Explore Telecom Solutions →'],
                ['name' => 'btn1_url',      'label' => 'Button 1 URL',     'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',    'label' => 'Button 2 Label',   'type' => 'text',     'default' => 'Talk to an Engineer ↗'],
                ['name' => 'btn2_url',      'label' => 'Button 2 URL',     'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'badges',
                    'label'        => 'Hero Badges',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['text' => 'VRLA + Flooded'],
                        ['text' => 'IEEE Compliant'],
                        ['text' => '24/7 Response'],
                        ['text' => '99.97% Uptime'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Badge Text', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'network_nodes',
                    'label'        => 'Network Status Nodes',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['label' => 'Central Office', 'color' => '#63def7'],
                        ['label' => 'Cell Site A',    'color' => '#1e88e5'],
                        ['label' => 'Cell Site B',    'color' => '#1e88e5'],
                        ['label' => 'Data Hub',       'color' => '#ffbf45'],
                        ['label' => 'Fiber Node',     'color' => '#4ade8a'],
                        ['label' => 'Base Station',   'color' => '#cc66ff'],
                    ],
                    'sub_fields' => [
                        ['name' => 'label', 'label' => 'Node Label', 'type' => 'text'],
                        ['name' => 'color', 'label' => 'Node Colour','type' => 'color'],
                    ],
                ],
                [
                    'name'         => 'hero_stats',
                    'label'        => 'Hero Dashboard Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '142',    'label' => 'VRLA Sites',  'color' => '#63def7'],
                        ['value' => '38',     'label' => 'Flooded DC',  'color' => '#ffbf45'],
                        ['value' => '99.97%', 'label' => 'Uptime',      'color' => '#4ade8a'],
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
        // APPLICATIONS SECTION
        // ═══════════════════════════════════════
        'applications' => [
            'label' => 'Applications Section',
            'icon'  => 'radio',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'APPLICATIONS'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Where Axion Powers'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'Telecom Infrastructure'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 2, 'default' => 'From cell towers to data centers — reliable backup power for every node in your network.'],
                [
                    'name'         => 'apps',
                    'label'        => 'Application Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏢', 'title' => 'Central Offices',         'description' => 'Large VRLA and flooded string arrays for major switching centres and CO facilities.'],
                        ['icon' => '📶', 'title' => 'Cell Towers & Small Cells','description' => 'Compact VRLA systems for outdoor macro sites, small cells, and rooftop installations.'],
                        ['icon' => '🖥️', 'title' => 'Data Centres',            'description' => 'High-capacity battery strings for hyperscale and edge data centre UPS systems.'],
                        ['icon' => '📺', 'title' => 'Broadcast Facilities',    'description' => 'Reliable DC backup for broadcast transmission, studio infrastructure, and master control.'],
                        ['icon' => '🌐', 'title' => 'Fibre & IP Hubs',         'description' => 'Battery backup for optical amplifier sites, IP PoPs, and fibre interconnect nodes.'],
                        ['icon' => '🚨', 'title' => 'E-911 & PSAPs',           'description' => 'Mission-critical backup power for emergency communications and public safety answering points.'],
                    ],
                    'sub_fields' => [
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
            'icon'  => 'battery',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label',  'type' => 'text',     'default' => 'BATTERY TECHNOLOGIES'],
                ['name' => 'heading_line1','label' => 'Heading Line 1', 'type' => 'text',     'default' => 'The Right Battery'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',     'default' => 'for Every Telecom Need'],
                ['name' => 'description',  'label' => 'Description',    'type' => 'textarea', 'rows' => 3, 'default' => 'A complete range of telecom-grade battery technologies — engineered for the demanding reliability standards of mission-critical communications infrastructure.'],
                ['name' => 'image_caption','label' => 'Image Caption',  'type' => 'text',     'default' => 'Axion VRLA Installation — Telecom Central Office'],
                [
                    'name'         => 'techs',
                    'label'        => 'Technology Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔋', 'name' => 'VRLA AGM',   'subtitle' => 'Valve-Regulated Lead-Acid', 'badge' => 'Most Common',   'badge_color' => '#1e88e5', 'description' => 'Maintenance-free, compact systems ideal for CO, cell sites, and indoor equipment rooms.'],
                        ['icon' => '⚡', 'name' => 'Flooded',     'subtitle' => 'Vented Lead-Acid',          'badge' => 'High Capacity', 'badge_color' => '#1480b2', 'description' => 'Long design life for large central offices and mission-critical backbone sites.'],
                        ['icon' => '🚀', 'name' => 'Lithium-Ion', 'subtitle' => 'Next-Generation',           'badge' => 'Next Gen',      'badge_color' => '#994de5', 'description' => 'High energy density and fast recharge for space-constrained modern deployments.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'name',        'label' => 'Technology Name', 'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',        'type' => 'text'],
                        ['name' => 'badge',       'label' => 'Badge Text',      'type' => 'text'],
                        ['name' => 'badge_color', 'label' => 'Badge Colour',    'type' => 'color'],
                        ['name' => 'description', 'label' => 'Description',     'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // ENGINEERING SUPPORT SECTION
        // ═══════════════════════════════════════
        'engineering-support' => [
            'label' => 'Engineering Support Section',
            'icon'  => 'wrench',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'ENGINEERING SUPPORT'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Technical Expertise'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'From Design to Deployment'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Our telecom engineering team provides end-to-end support — from initial site survey and battery sizing to installation guidance and long-term maintenance programs.'],
                [
                    'name'         => 'steps',
                    'label'        => 'Engineering Steps',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'title' => 'Site Classification',     'description' => 'CO, MSC, cell site or data centre classification and load profiling.'],
                        ['num' => '02', 'title' => 'Battery Sizing',          'description' => 'Runtime calculations per Telcordia GR-3150 and IEEE 485 methodologies.'],
                        ['num' => '03', 'title' => 'Technology Selection',    'description' => 'VRLA vs flooded recommendation based on site conditions and maintenance capacity.'],
                        ['num' => '04', 'title' => 'Installation Coordination','description' => 'Detailed installation drawings, commissioning checklist, and testing protocol.'],
                        ['num' => '05', 'title' => 'Documentation Handover',  'description' => 'O&M manuals, warranty registration, and capacity baseline records.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',         'label' => 'Step Number', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',       'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'worksheet_rows',
                    'label'        => 'Sizing Worksheet Rows',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['parameter' => 'Site Classification', 'value' => 'CO',      'tag' => 'CO'],
                        ['parameter' => 'Equipment Load',      'value' => '12.4 kW', 'tag' => ''],
                        ['parameter' => 'Runtime',             'value' => '4 hr',    'tag' => ''],
                        ['parameter' => 'Chemistry',           'value' => 'VRLA AGM','tag' => ''],
                        ['parameter' => 'String Voltage',      'value' => '48V',     'tag' => ''],
                        ['parameter' => 'Capacity',            'value' => '1,240 Ah','tag' => 'RESULT'],
                        ['parameter' => 'Battery Strings',     'value' => '6×200Ah', 'tag' => 'RESULT'],
                        ['parameter' => 'Floor Space',         'value' => '~18.4 m²','tag' => ''],
                    ],
                    'sub_fields' => [
                        ['name' => 'parameter', 'label' => 'Parameter',  'type' => 'text'],
                        ['name' => 'value',     'label' => 'Value',      'type' => 'text'],
                        ['name' => 'tag',       'label' => 'Tag / Badge','type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // QUALITY & COMPLIANCE SECTION
        // ═══════════════════════════════════════
        'quality-compliance' => [
            'label' => 'Quality & Compliance Section',
            'icon'  => 'shield',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'QUALITY & COMPLIANCE'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Built to the Highest'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'Telecom Standards'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Every Axion battery system is designed, tested, and certified to meet the rigorous standards of the telecommunications industry.'],
                [
                    'name'         => 'standards',
                    'label'        => 'Standards Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['code' => 'Telcordia GR-63-CORE', 'title' => 'NEBS Level 3',         'description' => 'Network Equipment Building System criteria for environmental robustness.'],
                        ['code' => 'IEEE 1635 / ASHRAE',   'title' => 'Battery Room Design',  'description' => 'Ventilation and thermal management standards for battery rooms.'],
                        ['code' => 'UL 1973 / UL 9540',   'title' => 'Safety Certification', 'description' => 'UL standards for battery systems and energy storage safety.'],
                        ['code' => 'IEC 62619',            'title' => 'Safety Requirements',  'description' => 'Safety requirements for secondary lithium cells in stationary applications.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'code',        'label' => 'Standard Code', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',         'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'stats',
                    'label'        => 'Quality Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '100%',   'label' => 'Lot Testing'],
                        ['value' => 'NEBS L3','label' => 'Compliant'],
                        ['value' => '<0.01%', 'label' => 'Failure Rate'],
                        ['value' => '25 yr',  'label' => 'Design Life'],
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
            'icon'  => 'refresh-cw',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'LIFECYCLE SUPPORT'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Beyond Installation —'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'A Partner for Life'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides comprehensive lifecycle services to ensure your telecom battery infrastructure performs reliably for its entire service life.'],
                ['name' => 'cta_label',    'label' => 'CTA Link Label','type' => 'text',     'default' => 'Explore Service Plans →'],
                [
                    'name'         => 'services',
                    'label'        => 'Lifecycle Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔍', 'title' => 'Incoming Inspection',      'accent_color' => '#1e88e5', 'description' => '100% incoming QA inspection on every battery order before delivery.'],
                        ['icon' => '⚡', 'title' => 'Capacity Testing',          'accent_color' => '#63def7', 'description' => 'Annual IEEE 1188 capacity discharge testing and performance trending.'],
                        ['icon' => '🔧', 'title' => 'Preventive Maintenance',   'accent_color' => '#4ade8a', 'description' => 'Scheduled torque checks, terminal cleaning, and visual inspection programmes.'],
                        ['icon' => '📊', 'title' => 'Remote Monitoring',         'accent_color' => '#ffbf45', 'description' => 'Battery monitoring system integration and real-time health dashboards.'],
                        ['icon' => '🔄', 'title' => 'Battery Replacement',      'accent_color' => '#cc66ff', 'description' => 'Proactive string replacement before failures affect network availability.'],
                        ['icon' => '♻️', 'title' => 'Responsible Disposal',     'accent_color' => '#4ade8a', 'description' => 'EPA/RCRA-compliant battery disposal with 99.5% lead recovery rate.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'title',        'label' => 'Title',           'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Top Bar Colour',  'type' => 'color'],
                        ['name' => 'description',  'label' => 'Description',     'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'stat_tiles',
                    'label'        => 'Stat Tiles',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '99.97%',  'label' => 'Network Uptime',    'color' => '#ffbf45'],
                        ['value' => '142',     'label' => 'CO Sites Active',   'color' => '#63def7'],
                        ['value' => '4.2M hrs','label' => 'Operating Hours',   'color' => '#4ade8a'],
                        ['value' => '0',       'label' => 'Network Failures',  'color' => '#cc66ff'],
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
        // WHY AXION SECTION
        // ═══════════════════════════════════════
        'why-axion' => [
            'label' => 'Why Choose Axion Section',
            'icon'  => 'star',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Telecom networks can\'t afford'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'downtime. Neither can you.'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Every second of battery failure can cost thousands in SLA penalties, regulatory fines, and brand damage. Axion is the partner that carriers trust when it matters most.'],
                [
                    'name'         => 'reasons',
                    'label'        => 'Reasons',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'title' => '20+ Years of Telecom Battery Expertise',  'description' => 'Deep understanding of carrier-grade requirements and deployment challenges.'],
                        ['num' => '02', 'title' => 'Telcordia & IEEE Compliant Systems',       'description' => 'Every product meets GR-63-CORE, NEBS, and applicable IEEE standards.'],
                        ['num' => '03', 'title' => 'Full-Spectrum Technology Coverage',        'description' => 'VRLA, flooded, and Li-ion — the right chemistry for every site type.'],
                        ['num' => '04', 'title' => 'Engineering-Led Deployment Support',       'description' => 'Site surveys, sizing calculations, installation guides, and commissioning support.'],
                        ['num' => '05', 'title' => 'Lifecycle Management as a Service',        'description' => 'From procurement through annual testing to responsible end-of-life disposal.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',         'label' => 'Number',     'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description','type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'uptime_stats',
                    'label'        => 'Uptime Card Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '99.97%',  'label' => 'Uptime',            'color' => '#ffbf45'],
                        ['value' => '142',     'label' => 'CO Sites',          'color' => '#63def7'],
                        ['value' => '4.2M hrs','label' => 'Hours Operated',    'color' => '#4ade8a'],
                        ['value' => '0',       'label' => 'Failures',          'color' => '#cc66ff'],
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
            'icon'  => 'phone',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'GET STARTED'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Power Your Telecom Network'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'with Axion Today'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Our team of telecom battery specialists is ready to help you design, supply, and support the right solution for your network.'],
                ['name' => 'btn1_label',   'label' => 'Button 1 Label','type' => 'text',     'default' => 'Explore Telecom Solutions →'],
                ['name' => 'btn1_url',     'label' => 'Button 1 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',   'label' => 'Button 2 Label','type' => 'text',     'default' => 'Request Engineering Review'],
                ['name' => 'btn2_url',     'label' => 'Button 2 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn3_label',   'label' => 'Button 3 Label','type' => 'text',     'default' => 'Download Tech Spec →'],
                ['name' => 'btn3_url',     'label' => 'Button 3 URL',  'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'cards',
                    'label'        => 'CTA Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🚨', 'badge' => '24/7', 'badge_color' => '#63def7',  'title' => '24/7 Emergency Support',    'description' => 'Critical battery failure at a CO or cell site? Our emergency team responds around the clock.'],
                        ['icon' => '🏭', 'badge' => 'FREE', 'badge_color' => '#4ade8a',  'title' => 'Free Site Assessment',      'description' => 'Our engineers assess your existing battery infrastructure at no charge.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',  'type' => 'text'],
                        ['name' => 'badge',       'label' => 'Badge Text',    'type' => 'text'],
                        ['name' => 'badge_color', 'label' => 'Badge Colour',  'type' => 'color'],
                        ['name' => 'title',       'label' => 'Title',         'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

    ],
];
