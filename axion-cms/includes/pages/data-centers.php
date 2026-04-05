<?php
/**
 * Axion CMS – Data Centers & Colocation Page Config
 * Sections: hero, applications, battery-technologies, engineering-support,
 *           quality-compliance, lifecycle-support, why-axion, cta
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'     => 'data-centers',
    'label'    => 'Data Centers & Colocation',
    'sections' => [

        // ══════════════════════════════════════════════════
        // HERO
        // ══════════════════════════════════════════════════
        'hero' => [
            'label'  => 'Hero Section',
            'icon'   => 'target',
            'fields' => [
                ['name' => 'bg_image', 'label' => '🖼 Hero Background Image', 'type' => 'image', 'description' => 'Optional full-width hero background photo. Recommended: 1920×1080px. Leave empty for default dark background.'],
                ['name' => 'accent_color', 'label' => '🎨 Accent Color', 'type' => 'color', 'default' => '#00d9ff', 'description' => 'Primary accent color used on buttons, highlights, and stat values across this page.'],
                ['name' => 'breadcrumb',   'label' => 'Breadcrumb Text',   'type' => 'text',     'default' => 'INDUSTRIES  /  DATA CENTERS & COLOCATION'],
                ['name' => 'pill',         'label' => 'Pill Badge Text',   'type' => 'text',     'default' => '🖥️  DATA CENTERS & COLOCATION'],
                ['name' => 'heading',      'label' => 'Hero Heading',      'type' => 'textarea', 'default' => "Always-On Power\nfor Always-On\nInfrastructure"],
                ['name' => 'subtitle',     'label' => 'Subtitle',          'type' => 'textarea', 'default' => 'Data centers and colocation facilities operate in a zero-tolerance environment. Even seconds of power disruption can lead to data loss, SLA violations, and reputational damage.'],
                ['name' => 'btn1_label',   'label' => 'Button Label',      'type' => 'text',     'default' => 'Explore Data Center Solutions'],
                ['name' => 'btn1_url',     'label' => 'Button URL',        'type' => 'text',     'default' => '/contact'],
                ['name' => 'stat_value',   'label' => 'Big Stat Value',    'type' => 'text',     'default' => '99.999%'],
                ['name' => 'stat_label',   'label' => 'Stat Label',        'type' => 'text',     'default' => 'UPTIME SLA TARGET'],
                ['name' => 'stat_caption', 'label' => 'Stat Caption',      'type' => 'text',     'default' => 'Five nines reliability'],
                [
                    'name'  => 'features',
                    'label' => 'Feature Bullet Points',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'feature', 'label' => 'Feature Text', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['feature' => 'VRLA and wet cell batteries for critical infrastructure'],
                        ['feature' => 'Preventive maintenance, monitoring & lifecycle management'],
                        ['feature' => 'Compliance with electrical, safety & environmental standards'],
                        ['feature' => 'Integration with UPS, DC power plants & backup systems'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // APPLICATIONS
        // ══════════════════════════════════════════════════
        'applications' => [
            'label'  => 'Applications Section',
            'icon'   => 'factory',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'APPLICATIONS'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'default' => "Data Center\nEnvironments We Serve"],
                [
                    'name'  => 'apps',
                    'label' => 'Application Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'tag',         'label' => 'Category Tag', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Card Title',   'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea'],
                        ['name' => 'stat',        'label' => 'Stat Line',    'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['tag' => '01 — HYPERSCALE DATA CENTERS',  'title' => 'Warehouse-Scale Power Resilience',             'description' => 'Massive battery backup systems for hyperscale facilities with thousands of servers and MW-scale power demands.',         'stat' => 'MW-Scale  |  N+1 & 2N  |  24/7 Monitoring'],
                        ['tag' => '02 — ENTERPRISE ON-PREM',        'title' => 'Enterprise DC Power Protection',               'description' => 'Custom-engineered battery backup for on-premise enterprise data centres.',                                              'stat' => 'Custom runtime  |  Redundancy'],
                        ['tag' => '03 — COLOCATION FACILITIES',     'title' => 'Multi-Tenant Battery Infrastructure',          'description' => 'Battery infrastructure for colocation providers serving multiple tenants with shared UPS systems.',                      'stat' => 'SLA-grade  |  Shared UPS'],
                        ['tag' => '04 — CLOUD SERVICE PROVIDERS',   'title' => 'Cloud Infrastructure Power Continuity',        'description' => 'Battery backup for cloud infrastructure requiring geo-redundant, scalable power protection.',                           'stat' => 'Geo-redundant  |  Scalable'],
                        ['tag' => '05 — DISASTER RECOVERY SITES',   'title' => 'Failover & Recovery Power Assurance',          'description' => 'Reliable backup power for disaster recovery sites requiring RPO/RTO-ready hot standby.',                               'stat' => 'RPO/RTO-ready  |  Hot standby'],
                        ['tag' => '06 — EDGE & MICRO DATA CENTERS', 'title' => 'Distributed Power Backup for Edge Infrastructure', 'description' => 'Compact, ruggedized battery solutions for edge nodes, remote sites, and micro-DCs requiring reliable local backup.', 'stat' => '<1ms Switchover  |  72h Runtime  |  IP65'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // BATTERY TECHNOLOGIES
        // ══════════════════════════════════════════════════
        'battery-technologies' => [
            'label'  => 'Battery Technologies Comparison Section',
            'icon'   => 'battery',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',          'label' => 'Section Label', 'type' => 'text',     'default' => 'BATTERY TECHNOLOGIES'],
                ['name' => 'heading',         'label' => 'Heading',       'type' => 'textarea', 'default' => "Purpose-Built Batteries\nfor Data Center Demands"],
                ['name' => 'description',     'label' => 'Description',   'type' => 'textarea', 'default' => 'Two proven technologies, each optimized for specific data center applications.'],
                ['name' => 'recommendation',  'label' => 'Recommendation Footer Text', 'type' => 'textarea',
                    'default' => 'VRLA for dense colo & short-runtime UPS  ·  Wet Cell for hyperscale generator bridging & extended runtime applications'],
                [
                    'name'  => 'rows',
                    'label' => 'Comparison Table Rows',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'spec',     'label' => 'Specification',     'type' => 'text'],
                        ['name' => 'vrla',     'label' => 'VRLA Value',        'type' => 'text'],
                        ['name' => 'wet_cell', 'label' => 'Wet Cell Value',    'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['spec' => 'Technology Type',    'vrla' => 'Sealed, maintenance-free AGM/Gel',   'wet_cell' => 'Flooded, vented electrolyte'],
                        ['spec' => 'Runtime',            'vrla' => '8–20 hours (optimized)',             'wet_cell' => '20+ hours (extended)'],
                        ['spec' => 'Maintenance',        'vrla' => 'Low — annual inspections only',      'wet_cell' => 'Regular electrolyte checks required'],
                        ['spec' => 'DC Application',     'vrla' => 'UPS systems & short-term bridging',  'wet_cell' => 'Long-duration critical backup'],
                        ['spec' => 'Space Requirements', 'vrla' => 'Compact rack-mount or cabinet',      'wet_cell' => 'Dedicated battery room required'],
                        ['spec' => 'Best For',           'vrla' => 'Controlled environments, colo racks','wet_cell' => 'Hyperscale, generator bridging'],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // ENGINEERING / SOLUTIONS
        // ══════════════════════════════════════════════════
        'engineering-support' => [
            'label'  => 'Axion Solutions Section',
            'icon'   => 'wrench',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'SOLUTIONS'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'default' => "Axion Solutions for\nData Centers & Colocation"],
                [
                    'name'  => 'solutions',
                    'label' => 'Solution Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',   'label' => 'Number',          'type' => 'text'],
                        ['name' => 'title',    'label' => 'Solution Title',  'type' => 'text'],
                        ['name' => 'subtitle', 'label' => 'Subtitle',        'type' => 'text'],
                        ['name' => 'bullets',  'label' => 'Bullet Points (one per line)', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'Battery Backup Systems',                'subtitle' => 'High-performance VRLA & Wet Cell for every DC tier',
                            'bullets' => "High-performance VRLA and wet cell batteries for UPS and DC power plants\nOptimized runtime for controlled shutdowns or generator bridging\nRemote monitoring, preventive maintenance, and lifecycle management"],
                        ['number' => '02', 'title' => 'Integration with UPS & Load Management','subtitle' => 'N+1 & 2N redundancy with seamless failover',
                            'bullets' => "Support for N+1 and 2N redundancy architectures across all DC tiers\nLoad balancing and seamless integration with generators and PDUs\nCoordination with UPS and DC power systems for continuous operation"],
                        ['number' => '03', 'title' => 'Maintenance & Emergency Support',        'subtitle' => '24/7 response with proactive lifecycle management',
                            'bullets' => "Preventive maintenance programs, regular inspections, and battery testing\nReplacement planning and environmentally responsible battery disposal\n24/7 emergency response and uptime assurance services"],
                    ],
                ],
            ],
        ],

        // ══════════════════════════════════════════════════
        // QUALITY & COMPLIANCE
        // ══════════════════════════════════════════════════
        'quality-compliance' => [
            'label'  => 'Compliance, Safety & Sustainability Section',
            'icon'   => 'check-circle',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'COMPLIANCE, SAFETY & SUSTAINABILITY'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'default' => "Zero Compromise on\nSafety & Standards"],
                [
                    'name'  => 'stats',
                    'label' => 'Header Stats',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Stat Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Stat Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '100%',     'label' => 'Electrical Compliance'],
                        ['value' => 'ESG',      'label' => 'Sustainability Ready'],
                        ['value' => 'ISO 9001', 'label' => 'Quality Certified'],
                        ['value' => 'Zero',     'label' => 'Tolerance for Failure'],
                    ],
                ],
                [
                    'name'  => 'cards',
                    'label' => 'Compliance Cards',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'standard',    'label' => 'Standard Name', 'type' => 'text'],
                        ['name' => 'badge',       'label' => 'Badge Label',   'type' => 'select',
                            'options' => ['VERIFIED'=>'VERIFIED','COMPLIANT'=>'COMPLIANT','CERTIFIED'=>'CERTIFIED','ALIGNED'=>'ALIGNED','ACTIVE'=>'ACTIVE'], 'default' => 'CERTIFIED'],
                        ['name' => 'title',       'label' => 'Card Title',    'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',   'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['standard' => 'NEC Article 480',  'badge' => 'VERIFIED',  'title' => 'Electrical Safety',  'subtitle' => 'Battery Systems',     'description' => 'Full compliance with National Electrical Code requirements for stationary battery installations.'],
                        ['standard' => 'NFPA 110/111',     'badge' => 'COMPLIANT', 'title' => 'Fire & Life Safety', 'subtitle' => 'Emergency Power',      'description' => 'Stored energy equipment standards for emergency power systems in critical data center facilities.'],
                        ['standard' => 'EPA / RCRA',       'badge' => 'CERTIFIED', 'title' => 'Environmental',      'subtitle' => 'Battery Disposal',     'description' => 'Environmentally responsible recycling and disposal programs for VRLA and wet cell batteries.'],
                        ['standard' => 'ISO 9001:2015',    'badge' => 'CERTIFIED', 'title' => 'Quality Management', 'subtitle' => 'Operations',           'description' => 'International quality management system certification ensuring consistent service excellence.'],
                        ['standard' => 'Uptime Institute', 'badge' => 'ALIGNED',   'title' => 'Uptime Standards',   'subtitle' => 'Tier Classification',  'description' => 'Solutions aligned with Tier I–IV data center infrastructure standards for power redundancy.'],
                        ['standard' => 'ESG Framework',    'badge' => 'ACTIVE',    'title' => 'Sustainability',      'subtitle' => 'Green Operations',     'description' => 'Energy-efficient battery solutions and sustainable practices supporting enterprise ESG goals.'],
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
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#0a0e1a', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'LIFECYCLE SUPPORT'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'default' => "End-to-End Lifecycle\nManagement"],
                [
                    'name'  => 'steps',
                    'label' => 'Lifecycle Steps',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'number',      'label' => 'Step Number', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Step Title',  'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['number' => '01', 'title' => 'Site Assessment & Design',  'description' => 'Evaluate power requirements, load analysis, and battery system architecture for your facility.'],
                        ['number' => '02', 'title' => 'Battery Sourcing',           'description' => 'VRLA and wet cell battery procurement optimized for your runtime and redundancy requirements.'],
                        ['number' => '03', 'title' => 'Installation & Integration', 'description' => 'Expert installation with UPS, DC power plants, generators, and PDU coordination.'],
                        ['number' => '04', 'title' => 'Monitoring & Maintenance',   'description' => 'Remote monitoring, preventive maintenance programs, and performance health checks.'],
                        ['number' => '05', 'title' => 'Replacement & Disposal',     'description' => 'Battery replacement planning and environmentally responsible recycling programs.'],
                    ],
                ],
                [
                    'name'  => 'stats',
                    'label' => 'Stats Tiles',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '5-Step', 'label' => 'Lifecycle Process'],
                        ['value' => '24/7',   'label' => 'Monitoring Available'],
                        ['value' => '100%',   'label' => 'Responsible Disposal'],
                        ['value' => 'Zero',   'label' => 'Unplanned Downtime Goal'],
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
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#ffffff', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',   'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading', 'label' => 'Heading',       'type' => 'textarea', 'default' => "The Critical Power Partner\nData Centers Trust"],
                [
                    'name'  => 'stats',
                    'label' => 'Stats Bar',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['value' => '99.999%',  'label' => 'Uptime SLA Capability'],
                        ['value' => '24/7',     'label' => 'Emergency Support'],
                        ['value' => 'N+1 & 2N', 'label' => 'Redundancy Architectures'],
                        ['value' => '100%',     'label' => 'Compliance Ready'],
                        ['value' => 'Zero',     'label' => 'Compromise Policy'],
                    ],
                ],
                [
                    'name'  => 'reasons',
                    'label' => 'Reasons / Checkmarks',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'title',       'label' => 'Reason Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea'],
                    ],
                    'default_rows' => [
                        ['title' => 'Industry-focused expertise', 'description' => 'Mission-critical power systems specialists serving data centers, telecoms, healthcare, and industrial sectors.'],
                        ['title' => 'Proven reliability',          'description' => 'Trusted by consulting engineers, contractors, and end users across enterprise and public-sector environments.'],
                        ['title' => 'Scalable solutions',          'description' => 'Battery systems designed to grow with your facility, from single-site colos to multi-campus hyperscale deployments.'],
                        ['title' => 'Compliance-ready',            'description' => 'All solutions meet NEC, NFPA, ISO, EPA, and Uptime Institute standards for seamless regulatory compliance.'],
                        ['title' => 'End-to-end support',          'description' => 'From design and installation to monitoring, maintenance, and responsible lifecycle management — we never stop.'],
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
                ['name' => 'bg_color', 'label' => '🎨 Section Background Color', 'type' => 'color', 'default' => '#1e88e5', 'description' => 'Override the section background color. Leave as default unless rebranding.'],
                ['name' => 'label',          'label' => 'Section Label',     'type' => 'text',     'default' => 'POWER YOUR UPTIME'],
                ['name' => 'heading_line1',  'label' => 'Heading Line 1',    'type' => 'text',     'default' => 'Power Your Uptime'],
                ['name' => 'heading_line2',  'label' => 'Heading Line 2',    'type' => 'text',     'default' => 'with Confidence'],
                ['name' => 'description',    'label' => 'Description',       'type' => 'textarea', 'default' => 'Whether you operate a single colocation site or a multi-facility data center, Axion delivers the reliability, redundancy, and compliance your infrastructure demands.'],
                ['name' => 'btn1_label',     'label' => 'Button 1 Label',    'type' => 'text',     'default' => 'Contact Axion Today'],
                ['name' => 'btn1_url',       'label' => 'Button 1 URL',      'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',     'label' => 'Button 2 Label',    'type' => 'text',     'default' => 'Explore Solutions'],
                ['name' => 'btn2_url',       'label' => 'Button 2 URL',      'type' => 'text',     'default' => '/contact'],
                ['name' => 'form_heading',   'label' => 'Form Card Heading', 'type' => 'text',     'default' => 'Design Your Power Solution'],
                ['name' => 'form_subheading','label' => 'Form Subheading',   'type' => 'text',     'default' => 'Tell us about your facility — we\'ll build the right solution.'],
                ['name' => 'form_btn_label', 'label' => 'Form Button Label', 'type' => 'text',     'default' => 'Get a Custom Power Solution →'],
                [
                    'name'  => 'value_props',
                    'label' => 'Value Proposition Pills',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'title',   'label' => 'Title',   'type' => 'text'],
                        ['name' => 'caption', 'label' => 'Caption', 'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['title' => 'Zero Downtime', 'caption' => 'Designed from day one'],
                        ['title' => '24/7 Support',  'caption' => 'Emergency response ready'],
                        ['title' => 'End-to-End',    'caption' => 'Design through disposal'],
                    ],
                ],
                [
                    'name'  => 'fields',
                    'label' => 'Form Fields',
                    'type'  => 'repeater',
                    'sub_fields' => [
                        ['name' => 'label',       'label' => 'Field Label',       'type' => 'text'],
                        ['name' => 'placeholder', 'label' => 'Placeholder Text',  'type' => 'text'],
                    ],
                    'default_rows' => [
                        ['label' => 'Facility Type',      'placeholder' => 'Hyperscale / Enterprise / Colo / Cloud'],
                        ['label' => 'Data Center Tier',   'placeholder' => 'Tier I — Tier IV (Uptime Institute)'],
                        ['label' => 'Power Requirement',  'placeholder' => 'UPS capacity in kVA'],
                        ['label' => 'Contact Email',      'placeholder' => 'your@company.com'],
                    ],
                ],
            ],
        ],

    ], // end sections
]; // end return
