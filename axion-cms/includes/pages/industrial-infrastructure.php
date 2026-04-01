<?php
/**
 * Axion CMS – Industrial & Infrastructure Page Config
 * Every section and field here is independently editable in the WordPress admin.
 * Default values are served via GraphQL so Next.js never needs hardcoded fallbacks.
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'industrial-infrastructure',
    'label' => 'Industrial & Infrastructure',
    'sections' => [

        // ═══════════════════════════════════════
        // HERO SECTION
        // ═══════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => '🎯',
            'fields' => [
                ['name' => 'breadcrumb',    'label' => 'Breadcrumb Text',  'type' => 'text',     'default' => 'INDUSTRIES  /  INDUSTRIAL & INFRASTRUCTURE'],
                ['name' => 'pill',          'label' => 'Pill Badge Text',  'type' => 'text',     'default' => '🏭  INDUSTRIAL & INFRASTRUCTURE'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1',   'type' => 'text',     'default' => 'Reliable Battery Systems'],
                ['name' => 'heading_line2', 'label' => 'Heading Line 2',   'type' => 'text',     'default' => 'for Industrial &'],
                ['name' => 'heading_accent','label' => 'Heading Accent',   'type' => 'text',     'default' => 'Critical Infrastructure'],
                ['name' => 'subtitle',      'label' => 'Subtitle',         'type' => 'textarea', 'rows' => 3, 'default' => 'VRLA and wet cell battery solutions engineered for demanding industrial environments — durable, compliant, and reliable.'],
                ['name' => 'btn1_label',    'label' => 'Button 1 Label',   'type' => 'text',     'default' => 'Explore Solutions →'],
                ['name' => 'btn1_url',      'label' => 'Button 1 URL',     'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',    'label' => 'Button 2 Label',   'type' => 'text',     'default' => 'Talk to an Engineer ↗'],
                ['name' => 'btn2_url',      'label' => 'Button 2 URL',     'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'badges',
                    'label'        => 'Hero Badges',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['text' => 'VRLA + Wet Cell'],
                        ['text' => 'IEEE Compliant'],
                        ['text' => '24/7 Support'],
                        ['text' => '99.94% Uptime'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Badge Text', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'dashboard_systems',
                    'label'        => 'Dashboard Facility Systems',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['label' => 'Process Control',  'status' => 'ONLINE',   'pct' => '98', 'color' => '#4ade8a'],
                        ['label' => 'Emergency Lighting','status' => 'STANDBY', 'pct' => '100','color' => '#ffbf45'],
                        ['label' => 'Safety Systems',   'status' => 'ONLINE',   'pct' => '100','color' => '#4ade8a'],
                        ['label' => 'UPS Room A',       'status' => 'CHARGING', 'pct' => '87', 'color' => '#63def7'],
                        ['label' => 'DC Distribution',  'status' => 'ONLINE',   'pct' => '95', 'color' => '#4ade8a'],
                        ['label' => 'Backup Generator', 'status' => 'READY',    'pct' => '100','color' => '#4ade8a'],
                    ],
                    'sub_fields' => [
                        ['name' => 'label',  'label' => 'System Label',  'type' => 'text'],
                        ['name' => 'status', 'label' => 'Status Tag',    'type' => 'text'],
                        ['name' => 'pct',    'label' => 'Progress %',    'type' => 'number', 'min' => 0, 'max' => 100],
                        ['name' => 'color',  'label' => 'Status Colour', 'type' => 'color'],
                    ],
                ],
                [
                    'name'         => 'dashboard_stats',
                    'label'        => 'Dashboard Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '6',      'label' => 'Active Systems'],
                        ['value' => '99.94%', 'label' => 'Avg Uptime'],
                        ['value' => '48V DC', 'label' => 'Bus Voltage'],
                        ['value' => 'Tier 3', 'label' => 'Redundancy'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // APPLICATIONS SECTION
        // ═══════════════════════════════════════
        'applications' => [
            'label' => 'Applications Section',
            'icon'  => '🏭',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'APPLICATIONS'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1', 'type' => 'text',     'default' => 'Industrial Environments'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'We Power Every Day'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 2, 'default' => 'From manufacturing floors to government infrastructure — Axion delivers proven power for the environments that cannot stop.'],
                [
                    'name'         => 'apps',
                    'label'        => 'Application Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏭', 'title' => 'Manufacturing & Processing',        'description' => 'Continuous power for PLCs, SCADA, conveyor systems, and plant-wide safety interlock systems.'],
                        ['icon' => '🚌', 'title' => 'Transportation & Transit',          'description' => 'Battery backup for rail signaling, station systems, fare collection, and transit control centers.'],
                        ['icon' => '⛽', 'title' => 'Oil, Gas & Energy',                 'description' => 'Hazardous-location rated systems for refineries, pipelines, compressor stations, and offshore platforms.'],
                        ['icon' => '💧', 'title' => 'Water & Wastewater',               'description' => 'Reliable backup for pump controls, SCADA, and chemical dosing systems at treatment plants.'],
                        ['icon' => '✈️', 'title' => 'Airports, Ports & Logistics',     'description' => 'Critical power for ATC systems, gate electronics, cargo tracking, and terminal operations.'],
                        ['icon' => '🏛️', 'title' => 'Government & Public Infrastructure','description' => 'Secure battery systems for courthouses, utilities, emergency management centers, and military facilities.'],
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
            'icon'  => '🔋',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'BATTERY TECHNOLOGIES'],
                ['name' => 'heading_line1', 'label' => 'Heading Line 1', 'type' => 'text',     'default' => 'Two Battle-Tested Technologies,'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'One Trusted Partner'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides guidance to select the right battery technology based on operational demands, maintenance capacity, and lifecycle requirements.'],
                [
                    'name'         => 'techs',
                    'label'        => 'Technology Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        [
                            'icon'        => '🔋',
                            'name'        => 'VRLA',
                            'subtitle'    => 'Valve-Regulated Lead-Acid',
                            'badge'       => 'Maintenance-Free',
                            'accent_color'=> '#1e88e5',
                            'best_for'    => 'Manufacturing control rooms, water treatment SCADA, transit signaling',
                            'features'    => "Maintenance-free — no electrolyte checks required\nCompact footprint for equipment rooms & tight spaces\nReliable standby power for controlled environments\nLower upfront cost for standard industrial deployments\nSpill-proof design — safe in enclosed installations",
                        ],
                        [
                            'icon'        => '⚡',
                            'name'        => 'Wet Cell',
                            'subtitle'    => 'Flooded Lead-Acid',
                            'badge'       => 'Heavy Duty',
                            'accent_color'=> '#ffbf45',
                            'best_for'    => 'Oil & gas facilities, large substations, government infrastructure',
                            'features'    => "Long design life — 20+ years in optimal conditions\nExcellent deep-cycle performance for extended runtime\nProven in harsh industrial and outdoor environments\nIdeal for large DC systems and critical backup loads\nCost-effective for large capacity requirements",
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',             'type' => 'text'],
                        ['name' => 'name',         'label' => 'Technology Name',          'type' => 'text'],
                        ['name' => 'subtitle',     'label' => 'Subtitle',                 'type' => 'text'],
                        ['name' => 'badge',        'label' => 'Badge Label',              'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',            'type' => 'color'],
                        ['name' => 'best_for',     'label' => 'Best For (description)',   'type' => 'textarea', 'rows' => 2],
                        ['name' => 'features',     'label' => 'Features (one per line)',  'type' => 'textarea', 'rows' => 6],
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
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'ENGINEERING & SPECIFICATION SUPPORT'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Engineering-Driven,'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'Specification-Focused'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Industrial power systems require careful coordination between electrical design, operational requirements, and safety standards. Our team supports projects from planning through commissioning.'],
                [
                    'name'         => 'services',
                    'label'        => 'Engineering Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '📐', 'title' => 'Battery Sizing & Runtime Analysis',   'description' => 'Precise Ah calculations for all load profiles and backup durations.'],
                        ['icon' => '🔄', 'title' => 'Redundancy & Reliability Planning',   'description' => 'N+1 and 2N configurations for mission-critical applications.'],
                        ['icon' => '🔌', 'title' => 'UPS & DC Integration',               'description' => 'Seamless integration with existing power distribution and control systems.'],
                        ['icon' => '🌡️', 'title' => 'Environmental Considerations',       'description' => 'Ventilation, thermal management, and site condition assessments.'],
                        ['icon' => '📋', 'title' => 'Standards Alignment',                'description' => 'IEEE, NEC, NFPA, and industry-specific safety and electrical standards.'],
                        ['icon' => '🏗️', 'title' => 'EPC & Contractor Coordination',      'description' => 'Technical support for EPCs, consulting engineers, and facility operators.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'steps',
                    'label'        => 'Project Coordination Steps',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'title' => 'Site Assessment',         'actor' => 'Axion Engineers',        'output' => 'Load profile & environment report',            'color' => '#1e88e5'],
                        ['num' => '02', 'title' => 'System Specification',    'actor' => 'With EPC / Consultant',  'output' => 'Battery type, sizing, redundancy plan',       'color' => '#ffbf45'],
                        ['num' => '03', 'title' => 'Product Selection',       'actor' => 'Axion Technical Team',   'output' => 'Manufacturer-approved BOM & data sheets',     'color' => '#63def7'],
                        ['num' => '04', 'title' => 'Installation Support',    'actor' => 'On-Site / Remote',       'output' => 'Commissioning checklist & testing protocol',  'color' => '#4ade8a'],
                        ['num' => '05', 'title' => 'Handover & Documentation','actor' => 'Facility Operator',      'output' => 'O&M manuals, warranty docs, test reports',    'color' => '#cc66ff'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',    'label' => 'Step Number', 'type' => 'text'],
                        ['name' => 'title',  'label' => 'Title',       'type' => 'text'],
                        ['name' => 'actor',  'label' => 'Actor',       'type' => 'text'],
                        ['name' => 'output', 'label' => 'Output',      'type' => 'text'],
                        ['name' => 'color',  'label' => 'Step Colour', 'type' => 'color'],
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
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'QUALITY, SAFETY & COMPLIANCE'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Industrial Environments'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'Demand Higher Standards'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion partners with trusted manufacturers and follows industry best practices to ensure safe, compliant battery installations in challenging industrial environments.'],
                [
                    'name'         => 'cards',
                    'label'        => 'Compliance Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏆', 'title' => 'Manufacturer QA',     'description' => 'Partnered with manufacturers certified to ISO 9001 and IEC standards for battery production.'],
                        ['icon' => '🛡️', 'title' => 'Safe Handling',       'description' => 'Comprehensive installation, handling, and maintenance guidance aligned with safety codes.'],
                        ['icon' => '⚡', 'title' => 'Electrical Standards', 'description' => 'NEC, IEEE, NFPA compliance for DC systems, UPS rooms, and battery room design.'],
                        ['icon' => '🌿', 'title' => 'Environmental',        'description' => 'Responsible disposal and recycling coordination meeting EPA and RCRA requirements.'],
                        ['icon' => '🔄', 'title' => 'Long-Term Integrity',  'description' => 'Lifecycle monitoring and periodic inspection to maintain system reliability over time.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'stats',
                    'label'        => 'Quality Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '100%',   'label' => 'QA Inspected'],
                        ['value' => 'ISO 9001','label' => 'Certified Supply'],
                        ['value' => 'Zero',   'label' => 'Recalls on Record'],
                        ['value' => '20+ yr', 'label' => 'Industry Experience'],
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
                ['name' => 'label',          'label' => 'Section Label',    'type' => 'text',     'default' => 'LIFECYCLE SUPPORT'],
                ['name' => 'heading_line1',  'label' => 'Heading Line 1',   'type' => 'text',     'default' => 'End-to-End Support'],
                ['name' => 'heading_accent', 'label' => 'Heading Accent',   'type' => 'text',     'default' => 'From Day One to End of Life'],
                ['name' => 'description',    'label' => 'Description',      'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides end-to-end lifecycle support to help industrial operators manage battery assets effectively — ensuring operational continuity, regulatory compliance, and long-term asset planning.'],
                ['name' => 'lifecycle_link',       'label' => 'Lifecycle Link URL',   'type' => 'text', 'default' => '/maintenance-monitoring'],
                ['name' => 'lifecycle_link_label', 'label' => 'Lifecycle Link Label', 'type' => 'text', 'default' => 'Learn About Lifecycle Services →'],
                ['name' => 'quote',          'label' => 'Testimonial Quote','type' => 'textarea', 'rows' => 2, 'default' => '"We\'ve relied on Axion for over a decade across six processing facilities."'],
                ['name' => 'quote_author',   'label' => 'Quote Author',     'type' => 'text',     'default' => '— Director of Facilities, Global Manufacturing Co.'],
                [
                    'name'         => 'stats',
                    'label'        => 'Stat Tiles',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔍', 'value' => '100%',  'description' => 'Incoming QA inspection before delivery',          'accent_color' => '#1e88e5'],
                        ['icon' => '📅', 'value' => 'Annual','description' => 'Capacity testing per IEEE 450 standard',          'accent_color' => '#ffbf45'],
                        ['icon' => '♻️', 'value' => '99.5%', 'description' => 'Lead recovery rate on all returned batteries',    'accent_color' => '#4ade8a'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'value',        'label' => 'Value',           'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',     'type' => 'textarea', 'rows' => 2],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',   'type' => 'color'],
                    ],
                ],
                [
                    'name'         => 'services',
                    'label'        => 'Lifecycle Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '⚙️', 'title' => 'Commissioning Support',  'accent_color' => '#1e88e5', 'description' => 'Acceptance testing and system verification at handover.'],
                        ['icon' => '🔬', 'title' => 'Routine Testing',        'accent_color' => '#ffbf45', 'description' => 'IEEE capacity testing, impedance checks, and visual inspections.'],
                        ['icon' => '📊', 'title' => 'Performance Monitoring', 'accent_color' => '#63def7', 'description' => 'Battery health tracking and trend analysis over time.'],
                        ['icon' => '🔄', 'title' => 'Replacement Planning',   'accent_color' => '#4ade8a', 'description' => 'Proactive string replacement before failures occur.'],
                        ['icon' => '📋', 'title' => 'Upgrade Support',        'accent_color' => '#cc66ff', 'description' => 'Technology upgrades aligned with operational changes.'],
                        ['icon' => '♻️', 'title' => 'Disposal & Recycling',   'accent_color' => '#4ade8a', 'description' => 'Full EPA/RCRA compliance with 99.5% lead recovery.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',   'type' => 'text'],
                        ['name' => 'title',        'label' => 'Title',          'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Top Bar Colour', 'type' => 'color'],
                        ['name' => 'description',  'label' => 'Description',    'type' => 'textarea', 'rows' => 2],
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
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => "Industrial operations can't afford"],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'power failures. Neither can you.'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Process shutdowns, safety system failures, and regulatory violations all stem from unreliable battery power. Axion ensures your industrial infrastructure stays online.'],
                [
                    'name'         => 'reasons',
                    'label'        => 'Reasons',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'title' => '20+ Years in Demanding Industrial Environments',    'description' => 'Deep expertise across manufacturing, oil & gas, water treatment, and critical infrastructure.'],
                        ['num' => '02', 'title' => 'Proven VRLA and Wet Cell Battery Solutions',       'description' => 'Battle-tested technologies matched precisely to your application and maintenance capacity.'],
                        ['num' => '03', 'title' => 'Engineering-Driven Specification Support',         'description' => 'We work alongside your EPCs and consulting engineers from day one through commissioning.'],
                        ['num' => '04', 'title' => 'Strong Focus on Safety and Compliance',            'description' => 'Every recommendation aligns with NEC, NFPA, IEEE, and environmental regulations.'],
                        ['num' => '05', 'title' => 'Long-Term Partnership Approach',                   'description' => 'We stay engaged through the full battery lifecycle — not just the initial sale.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',         'label' => 'Number',     'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',      'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description','type' => 'textarea', 'rows' => 2],
                    ],
                ],
                [
                    'name'         => 'track_stats',
                    'label'        => 'Track Record Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '500+',  'label' => 'Industrial Sites Served',      'color' => '#ffbf45'],
                        ['value' => '20 yr', 'label' => 'Average Partnership Length',   'color' => '#63def7'],
                        ['value' => '0',     'label' => 'Process Safety Incidents',     'color' => '#4ade8a'],
                        ['value' => '98.7%', 'label' => 'Client Retention Rate',        'color' => '#1e88e5'],
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
                ['name' => 'label',        'label' => 'Section Label', 'type' => 'text',     'default' => 'CONTACT AXION'],
                ['name' => 'heading_line1','label' => 'Heading Line 1','type' => 'text',     'default' => 'Ensure Reliable Power for Your'],
                ['name' => 'heading_accent','label' => 'Heading Accent','type' => 'text',    'default' => 'Industrial Infrastructure'],
                ['name' => 'description',  'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Our team of industrial battery specialists is ready to help you specify, supply, and support the right solution for your critical facility.'],
                ['name' => 'btn1_label',   'label' => 'Button 1 Label','type' => 'text',     'default' => 'Contact Axion Today'],
                ['name' => 'btn1_url',     'label' => 'Button 1 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',   'label' => 'Button 2 Label','type' => 'text',     'default' => 'Request Engineering Review'],
                ['name' => 'btn2_url',     'label' => 'Button 2 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn3_label',   'label' => 'Button 3 Label','type' => 'text',     'default' => 'Download Product Catalog →'],
                ['name' => 'btn3_url',     'label' => 'Button 3 URL',  'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'cards',
                    'label'        => 'CTA Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏭', 'badge' => 'FREE', 'badge_color' => '#ffbf45', 'title' => 'Site Visit',           'description' => 'Our engineers visit your facility to assess power needs at no charge.'],
                        ['icon' => '📞', 'badge' => '24/7', 'badge_color' => '#4ade8a', 'title' => 'Emergency Response',   'description' => 'Critical failure support available 24/7 — average dispatch: 6 hours.'],
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
