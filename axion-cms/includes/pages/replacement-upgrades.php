<?php
/**
 * Axion CMS – Replacement & Upgrades Page Config
 * Every section and field here is independently editable in the WordPress admin.
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'replacement-upgrades',
    'label' => 'Replacement & Upgrades',
    'sections' => [

        // ═══════════════════════════════════════
        // HERO SECTION
        // ═══════════════════════════════════════
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => 'target',
            'fields' => [
                ['name' => 'breadcrumb',     'label' => 'Breadcrumb Text',    'type' => 'text',     'default' => 'HOME  /  SERVICES  /  REPLACEMENT & UPGRADES'],
                ['name' => 'heading',        'label' => 'Heading',            'type' => 'text',     'default' => 'Battery Replacement & Technology Upgrades'],
                ['name' => 'subtitle',       'label' => 'Subtitle',           'type' => 'textarea', 'rows' => 3, 'default' => 'End-to-end battery replacement planning, technology upgrades, and certified disposal — keeping your critical systems current and compliant.'],
                ['name' => 'trust_badge',    'label' => 'Trust Badge Text',   'type' => 'text',     'default' => '♻️  Certified disposal & compliant upgrades'],
                ['name' => 'btn1_label',     'label' => 'Button 1 Label',     'type' => 'text',     'default' => 'Plan Your Replacement →'],
                ['name' => 'btn1_url',       'label' => 'Button 1 URL',       'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',     'label' => 'Button 2 Label',     'type' => 'text',     'default' => 'Explore Upgrades'],
                ['name' => 'btn2_url',       'label' => 'Button 2 URL',       'type' => 'text',     'default' => '/contact'],
                ['name' => 'card_title',     'label' => 'Dashboard Card Title',    'type' => 'text', 'default' => 'Battery Replacement Planner'],
                ['name' => 'card_subtitle',  'label' => 'Dashboard Card Subtitle', 'type' => 'text', 'default' => 'Fleet Health Overview'],
                ['name' => 'upcoming_label', 'label' => 'Upcoming Replacements Label', 'type' => 'text', 'default' => 'Upcoming Replacements'],
                [
                    'name'         => 'stats',
                    'label'        => 'Hero Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '500+', 'label' => 'Systems Replaced'],
                        ['value' => '20+',  'label' => 'Years Experience'],
                        ['value' => '100%', 'label' => 'Certified Disposal'],
                        ['value' => '24/7', 'label' => 'Emergency Support'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'dashboard_bars',
                    'label'        => 'Dashboard Progress Bars',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['label' => 'UPS System A — Data Hall 1', 'status' => 'Replace Now', 'pct' => '25', 'color' => 'rgba(255,80,80,1)'],
                        ['label' => 'UPS System B — Data Hall 2', 'status' => 'Plan Soon',   'pct' => '55', 'color' => 'rgba(255,191,69,1)'],
                        ['label' => 'UPS System C — Network Hub', 'status' => 'Healthy',     'pct' => '80', 'color' => 'rgba(99,222,247,1)'],
                        ['label' => 'UPS System D — Server Room', 'status' => 'Optimal',     'pct' => '95', 'color' => 'rgba(166,227,161,1)'],
                    ],
                    'sub_fields' => [
                        ['name' => 'label',  'label' => 'System Label',  'type' => 'text'],
                        ['name' => 'status', 'label' => 'Status Tag',    'type' => 'text'],
                        ['name' => 'pct',    'label' => 'Progress %',    'type' => 'number', 'min' => 0, 'max' => 100],
                        ['name' => 'color',  'label' => 'Bar Colour',    'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'upcoming',
                    'label'        => 'Upcoming Replacements',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['sys' => 'UPS System A', 'date' => 'Q1 2026', 'priority' => 'Critical'],
                        ['sys' => 'UPS System B', 'date' => 'Q3 2026', 'priority' => 'Planned'],
                    ],
                    'sub_fields' => [
                        ['name' => 'sys',      'label' => 'System Name', 'type' => 'text'],
                        ['name' => 'date',     'label' => 'Date / Quarter', 'type' => 'text'],
                        ['name' => 'priority', 'label' => 'Priority (e.g. Critical / Planned)', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // INTRO / SERVICES SECTION
        // ═══════════════════════════════════════
        'intro' => [
            'label' => 'Intro / Services Section',
            'icon'  => 'clipboard',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'OUR SERVICES'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Complete Battery Replacement & Upgrade Services'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 4, 'default' => 'Axion Critical Power Solutions delivers expert battery replacement planning, technology upgrade pathways, and certified disposal — ensuring your mission-critical systems always operate at peak performance.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label','type' => 'text',     'default' => 'Plan Replacement →'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label','type' => 'text',     'default' => 'Explore Upgrades'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',  'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'stats',
                    'label'        => 'Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '500+', 'label' => 'Systems Replaced'],
                        ['value' => '20+',  'label' => 'Years'],
                        ['value' => '100%', 'label' => 'Certified'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'services',
                    'label'        => 'Service Panels',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔋', 'accent_color' => 'rgba(255,191,69,1)',  'title' => 'Battery Replacement',  'description' => 'Planned and emergency battery replacement with zero downtime, handled by certified engineers.'],
                        ['icon' => '⚡', 'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Technology Upgrades',  'description' => 'Upgrade from VRLA or wet cell to modern lithium-ion or AGM systems for enhanced performance.'],
                        ['icon' => '♻️', 'accent_color' => 'rgba(166,227,161,1)', 'title' => 'Disposal & Recycling', 'description' => 'Fully certified, environmentally compliant battery disposal and recycling for all system types.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',    'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',   'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'title',        'label' => 'Title',           'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',     'type' => 'textarea', 'rows' => 3],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // PLANNING SECTION
        // ═══════════════════════════════════════
        'planning' => [
            'label' => 'Replacement Planning Section',
            'icon'  => 'layers',
            'fields' => [
                ['name' => 'label',           'label' => 'Section Label',     'type' => 'text',     'default' => 'REPLACEMENT PLANNING'],
                ['name' => 'heading',         'label' => 'Heading',           'type' => 'text',     'default' => 'Expert Battery Replacement Planning'],
                ['name' => 'description',     'label' => 'Description',       'type' => 'textarea', 'rows' => 4, 'default' => "Axion's systematic approach ensures every battery replacement is planned, executed, and commissioned with minimal disruption to your operations."],
                ['name' => 'trust_badge',     'label' => 'Trust Badge',       'type' => 'text',     'default' => '✓ Zero-downtime replacement guaranteed'],
                ['name' => 'checklist_title', 'label' => 'Checklist Title',   'type' => 'text',     'default' => 'Replacement Checklist'],
                [
                    'name'         => 'cards',
                    'label'        => 'Process Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔍', 'title' => 'Health Assessment',         'description' => 'Comprehensive battery health evaluation to determine optimal replacement timing and system requirements.'],
                        ['icon' => '📋', 'title' => 'Replacement Planning',      'description' => 'Detailed project planning including procurement, scheduling, and resource coordination for seamless execution.'],
                        ['icon' => '🔧', 'title' => 'Professional Installation', 'description' => 'Expert installation by certified engineers, ensuring safety and compliance with all industry standards.'],
                        ['icon' => '✅', 'title' => 'Testing & Commissioning',   'description' => 'Full system testing and commissioning to verify performance and reliability post-replacement.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)', 'type' => 'text'],
                        ['name' => 'title',       'label' => 'Title',        'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 3],
                    ],
                ],
                [
                    'name'         => 'checklist',
                    'label'        => 'Checklist Items',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['text' => 'Battery health assessment & lifecycle analysis'],
                        ['text' => 'Replacement scheduling & procurement'],
                        ['text' => 'Safe removal & certified disposal'],
                        ['text' => 'Professional installation & integration'],
                        ['text' => 'Load testing & commissioning'],
                        ['text' => 'Documentation & compliance sign-off'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Checklist Item', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // UPGRADES SECTION
        // ═══════════════════════════════════════
        'upgrades' => [
            'label' => 'Technology Upgrades Section',
            'icon'  => 'refresh-cw',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'TECHNOLOGY UPGRADES'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Upgrade to the Latest Battery Technology'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides clear upgrade pathways from legacy battery systems to modern, high-performance technologies — improving reliability, runtime, and total cost of ownership.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label','type' => 'text',     'default' => 'Discuss Upgrade Options →'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',  'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label','type' => 'text',     'default' => 'Compare Technologies'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',  'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'techs',
                    'label'        => 'Technology Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔋', 'name' => 'VRLA / AGM',  'subtitle' => 'Valve-Regulated Lead Acid',    'color' => 'rgba(150,150,150,1)', 'recommended' => 'no',  'progress' => '55', 'features' => "Sealed, maintenance-free\nEstablished technology\nCost-effective entry point\n5–10 year lifecycle"],
                        ['icon' => '💧', 'name' => 'Wet Cell',    'subtitle' => 'Flooded Lead Acid',            'color' => 'rgba(30,136,229,1)',  'recommended' => 'no',  'progress' => '70', 'features' => "High capacity options\nProven reliability\nRequires maintenance\n10–20 year lifecycle"],
                        ['icon' => '⚡', 'name' => 'Lithium-Ion', 'subtitle' => 'Advanced Li-Ion Technology',  'color' => 'rgba(99,222,247,1)',  'recommended' => 'yes', 'progress' => '98', 'features' => "Superior energy density\nMinimal maintenance\nLongest lifecycle 15–20yr\nSmart BMS monitoring"],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',          'type' => 'text'],
                        ['name' => 'name',        'label' => 'Technology Name',       'type' => 'text'],
                        ['name' => 'subtitle',    'label' => 'Subtitle',              'type' => 'text'],
                        ['name' => 'color',       'label' => 'Bar Colour',            'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'recommended', 'label' => 'Recommended? (yes/no)', 'type' => 'text', 'default' => 'no'],
                        ['name' => 'progress',    'label' => 'Progress % (0–100)',    'type' => 'number', 'min' => 0, 'max' => 100],
                        ['name' => 'features',    'label' => 'Features (one per line)','type' => 'textarea', 'rows' => 4],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // DISPOSAL SECTION
        // ═══════════════════════════════════════
        'disposal' => [
            'label' => 'Disposal & Recycling Section',
            'icon'  => 'refresh-cw',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'DISPOSAL & RECYCLING'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Certified Battery Disposal & Recycling'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion provides fully certified, environmentally responsible battery disposal and recycling services — ensuring compliance with all regulatory requirements.'],
                [
                    'name'         => 'cards',
                    'label'        => 'Feature Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🏗️', 'number' => '01', 'accent_color' => 'rgba(255,191,69,1)',  'title' => 'Safe Removal & Transport',  'description' => 'Professional battery removal and safe transport to certified recycling facilities, handled by trained engineers.', 'features' => "Certified removal procedures\nCompliant packaging & transport\nFull chain of custody documentation\nEmergency removal available", 'link_label' => 'Learn More →'],
                        ['icon' => '♻️', 'number' => '02', 'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Certified Recycling',       'description' => 'Environmentally responsible recycling through certified facilities, recovering valuable materials and minimising waste.', 'features' => '', 'link_label' => 'View Certifications →'],
                        ['icon' => '📄', 'number' => '03', 'accent_color' => 'rgba(166,227,161,1)', 'title' => 'Compliance Documentation', 'description' => 'Full disposal records and certificates for audits, regulatory reporting, and environmental compliance.', 'features' => '', 'link_label' => 'Request Docs →'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',              'type' => 'text'],
                        ['name' => 'number',       'label' => 'Card Number (e.g. 01)',     'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',             'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'title',        'label' => 'Title',                     'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',               'type' => 'textarea', 'rows' => 3],
                        ['name' => 'features',     'label' => 'Features (one per line)',   'type' => 'textarea', 'rows' => 4],
                        ['name' => 'link_label',   'label' => 'Link Label',                'type' => 'text', 'default' => 'Learn More →'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // BENEFITS SECTION
        // ═══════════════════════════════════════
        'benefits' => [
            'label' => 'Benefits / Why Axion Section',
            'icon'  => 'star',
            'fields' => [
                ['name' => 'label',        'label' => 'Section Label',    'type' => 'text',     'default' => 'WHY CHOOSE AXION'],
                ['name' => 'heading',      'label' => 'Heading',          'type' => 'text',     'default' => 'Benefits of Planned Replacement & Upgrades'],
                ['name' => 'description',  'label' => 'Description',      'type' => 'textarea', 'rows' => 3, 'default' => 'Trusted by engineers & operators across mission-critical industries to deliver seamless replacement and upgrade solutions.'],
                ['name' => 'cta_title',    'label' => 'CTA Card Title',   'type' => 'text',     'default' => 'Ready to Plan Your Replacement?'],
                ['name' => 'cta_desc',     'label' => 'CTA Card Description', 'type' => 'textarea', 'rows' => 2, 'default' => "Contact our team to start\nyour replacement assessment."],
                ['name' => 'cta_btn_label','label' => 'CTA Button Label', 'type' => 'text',     'default' => 'Get Started →'],
                ['name' => 'cta_btn_url',  'label' => 'CTA Button URL',   'type' => 'text',     'default' => '/contact'],
                [
                    'name'         => 'stats',
                    'label'        => 'Stats',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['value' => '500+', 'label' => 'Systems Replaced'],
                        ['value' => '100%', 'label' => 'Certified Disposal'],
                    ],
                    'sub_fields' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                    ],
                ],
                [
                    'name'         => 'benefits',
                    'label'        => 'Benefit Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['number' => '01', 'accent_color' => 'rgba(255,191,69,1)',  'title' => 'Maximised System Uptime',    'description' => 'Zero-downtime replacement strategies to keep your critical systems always available.'],
                        ['number' => '02', 'accent_color' => 'rgba(99,222,247,1)',  'title' => 'Improved Performance',       'description' => 'Upgrade to modern battery technologies for superior runtime and reliability.'],
                        ['number' => '03', 'accent_color' => 'rgba(166,227,161,1)', 'title' => 'Regulatory Compliance',     'description' => 'Certified disposal and documented processes for full audit-readiness.'],
                        ['number' => '04', 'accent_color' => 'rgba(204,166,255,1)', 'title' => 'Reduced Total Cost',        'description' => 'Strategic planning reduces emergency replacement costs and extends asset life.'],
                        ['number' => '05', 'accent_color' => 'rgba(30,136,229,1)',  'title' => 'Expert Project Management', 'description' => 'End-to-end project management from assessment through commissioning and sign-off.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'number',       'label' => 'Number (e.g. 01)',  'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',     'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'title',        'label' => 'Title',             'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',       'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // INDUSTRIES SECTION
        // ═══════════════════════════════════════
        'industries' => [
            'label' => 'Industries Supported Section',
            'icon'  => 'factory',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'INDUSTRIES SUPPORTED'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Replacement & Upgrade Services for Every Sector'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => 'Axion delivers battery replacement and upgrade services across all mission-critical industries, ensuring compliance and continuity.'],
                [
                    'name'         => 'industries',
                    'label'        => 'Industry Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🖥️', 'icon_color' => 'rgba(99,222,247,1)',  'title' => 'Data Centers & Colocation',   'description' => 'Zero-downtime UPS battery replacement for continuous IT operations.'],
                        ['icon' => '⚡',  'icon_color' => 'rgba(255,191,69,1)',  'title' => 'Utilities & Substations',     'description' => 'High-capacity replacement for DC power systems in utility environments.'],
                        ['icon' => '📡', 'icon_color' => 'rgba(30,136,229,1)',   'title' => 'Telecommunications',          'description' => 'Network infrastructure battery upgrades for maximum uptime.'],
                        ['icon' => '🏥', 'icon_color' => 'rgba(166,227,161,1)',  'title' => 'Healthcare Facilities',       'description' => 'Life-safety UPS replacements with full compliance documentation.'],
                        ['icon' => '🏭', 'icon_color' => 'rgba(204,166,255,1)',  'title' => 'Industrial & Infrastructure', 'description' => 'Heavy-duty battery systems for industrial power reliability.'],
                        ['icon' => '🚀', 'icon_color' => 'rgba(255,120,120,1)',  'title' => 'Defence & Government',        'description' => 'Secure, mission-critical replacements for government and defence sites.'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',   'type' => 'text'],
                        ['name' => 'icon_color',  'label' => 'Icon Colour',    'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'title',       'label' => 'Title',          'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',    'type' => 'textarea', 'rows' => 2],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // LIFECYCLE SECTION
        // ═══════════════════════════════════════
        'lifecycle' => [
            'label' => 'Lifecycle Integration Section',
            'icon'  => 'refresh-cw',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label', 'type' => 'text',     'default' => 'INTEGRATED APPROACH'],
                ['name' => 'heading',     'label' => 'Heading',       'type' => 'text',     'default' => 'Integrated Lifecycle Support'],
                ['name' => 'description', 'label' => 'Description',   'type' => 'textarea', 'rows' => 3, 'default' => "Replacement, upgrades, and disposal are the final stages of Axion's lifecycle approach — ensuring every system is responsibly retired and replaced with optimal technology."],
                ['name' => 'bottom_note', 'label' => 'Bottom Note',   'type' => 'text',     'default' => '★  Replacement, Upgrade & Disposal highlighted as core lifecycle stages for mission-critical systems.'],
                [
                    'name'         => 'features',
                    'label'        => 'Feature Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔋', 'number' => '05', 'accent_color' => 'rgba(255,191,69,1)', 'pill_color' => 'rgba(255,191,69,1)', 'title' => 'Replacement', 'description' => 'Planned and emergency battery replacement, executed by certified engineers with zero downtime.', 'link_label' => 'Explore →'],
                        ['icon' => '⚡', 'number' => '06', 'accent_color' => 'rgba(255,191,69,1)', 'pill_color' => 'rgba(255,191,69,1)', 'title' => 'Upgrade',     'description' => 'Clear technology upgrade pathways from legacy to modern high-performance battery systems.',   'link_label' => 'Explore →'],
                        ['icon' => '♻️', 'number' => '07', 'accent_color' => 'rgba(255,191,69,1)', 'pill_color' => 'rgba(255,191,69,1)', 'title' => 'Disposal',    'description' => 'Certified, environmentally compliant disposal and recycling for all battery types.',             'link_label' => 'Explore →'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',         'label' => 'Icon (emoji)',     'type' => 'text'],
                        ['name' => 'number',       'label' => 'Number (e.g. 05)', 'type' => 'text'],
                        ['name' => 'accent_color', 'label' => 'Accent Colour',    'type' => 'text', 'default' => 'rgba(255,191,69,1)'],
                        ['name' => 'pill_color',   'label' => 'Pill Colour',      'type' => 'text', 'default' => 'rgba(255,191,69,1)'],
                        ['name' => 'title',        'label' => 'Title',            'type' => 'text'],
                        ['name' => 'description',  'label' => 'Description',      'type' => 'textarea', 'rows' => 2],
                        ['name' => 'link_label',   'label' => 'Link Label',       'type' => 'text', 'default' => 'Explore →'],
                    ],
                ],
                [
                    'name'         => 'steps',
                    'label'        => 'Timeline Steps',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['num' => '01', 'label' => 'Specification',  'description' => 'System specs & requirements',      'active' => '0'],
                        ['num' => '02', 'label' => 'Installation',   'description' => 'Professional setup & integration', 'active' => '0'],
                        ['num' => '03', 'label' => 'Documentation',  'description' => 'Full records & protocols',         'active' => '0'],
                        ['num' => '04', 'label' => 'Training',        'description' => 'Expert-led staff training',       'active' => '0'],
                        ['num' => '05', 'label' => 'Replacement',     'description' => 'End-of-life system renewal',      'active' => '1'],
                        ['num' => '06', 'label' => 'Upgrade',         'description' => 'Technology advancement',          'active' => '1'],
                        ['num' => '07', 'label' => 'Disposal',        'description' => 'Certified recycling & disposal',  'active' => '1'],
                    ],
                    'sub_fields' => [
                        ['name' => 'num',         'label' => 'Step Number',              'type' => 'text'],
                        ['name' => 'label',       'label' => 'Title',                    'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',              'type' => 'text'],
                        ['name' => 'active',      'label' => 'Highlighted? (1=yes, 0=no)', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ═══════════════════════════════════════
        // CTA SECTION
        // ═══════════════════════════════════════
        'cta' => [
            'label' => 'CTA / Get Started Section',
            'icon'  => 'phone',
            'fields' => [
                ['name' => 'label',       'label' => 'Section Label',    'type' => 'text',     'default' => 'GET STARTED'],
                ['name' => 'heading',     'label' => 'Heading',          'type' => 'text',     'default' => 'Ready to Replace or Upgrade Your Battery Systems?'],
                ['name' => 'description', 'label' => 'Description',      'type' => 'textarea', 'rows' => 3, 'default' => 'Contact our technical team to schedule a battery health assessment or discuss your upgrade options.'],
                ['name' => 'btn1_label',  'label' => 'Button 1 Label',   'type' => 'text',     'default' => 'Plan Your Replacement →'],
                ['name' => 'btn1_url',    'label' => 'Button 1 URL',     'type' => 'text',     'default' => '/contact'],
                ['name' => 'btn2_label',  'label' => 'Button 2 Label',   'type' => 'text',     'default' => 'Explore Upgrades'],
                ['name' => 'btn2_url',    'label' => 'Button 2 URL',     'type' => 'text',     'default' => '/contact'],
                ['name' => 'phone',       'label' => 'Phone / Emergency Line', 'type' => 'text', 'default' => '📞  24/7 Emergency: 245 445 34352'],
                [
                    'name'         => 'cards',
                    'label'        => 'Service Cards',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['icon' => '🔋', 'badge' => 'Most Popular',  'badge_color' => 'rgba(255,191,69,1)',  'title' => 'Replacement Consultation', 'description' => 'Schedule a battery health assessment and replacement planning session with our expert engineers.', 'link_label' => 'Book Assessment →',  'link_url' => '/contact'],
                        ['icon' => '♻️', 'badge' => 'Eco Certified', 'badge_color' => 'rgba(166,227,161,1)', 'title' => 'Disposal & Recycling',     'description' => 'Arrange certified battery disposal and receive full compliance documentation for your records.',  'link_label' => 'Arrange Disposal →', 'link_url' => '/contact'],
                    ],
                    'sub_fields' => [
                        ['name' => 'icon',        'label' => 'Icon (emoji)',   'type' => 'text'],
                        ['name' => 'badge',       'label' => 'Badge Text',     'type' => 'text'],
                        ['name' => 'badge_color', 'label' => 'Badge Colour',   'type' => 'text', 'default' => 'rgba(99,222,247,1)'],
                        ['name' => 'title',       'label' => 'Title',          'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description',    'type' => 'textarea', 'rows' => 2],
                        ['name' => 'link_label',  'label' => 'Link Label',     'type' => 'text', 'default' => 'Learn More →'],
                        ['name' => 'link_url',    'label' => 'Link URL',       'type' => 'text', 'default' => '/contact'],
                    ],
                ],
            ],
        ],

    ],
];
