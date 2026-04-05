<?php
/**
 * Axion CMS – Header / Navigation Config
 * Manages the site header: logo, navigation links (with dropdowns), and CTA button.
 */
if (!defined('ABSPATH'))
    exit;

return [
    'slug' => 'header',
    'label' => 'Header & Navigation',
    'sections' => [

        // ════════════════════════════════════════════════════
        // LOGO
        // ════════════════════════════════════════════════════
        'logo' => [
            'label' => 'Logo',
            'icon'  => 'zap',
            'fields' => [
                ['name' => 'title', 'label' => 'Logo Title', 'type' => 'text',
                    'default' => 'AXION'],
                ['name' => 'subtitle', 'label' => 'Logo Subtitle', 'type' => 'text',
                    'default' => 'CRITICAL POWER SOLUTIONS'],
                ['name' => 'logo_image', 'label' => 'Logo Image (optional)', 'type' => 'image',
                    'description' => 'If set, replaces the text logo. Recommended: 180×40px PNG with transparency.'],
                ['name' => 'link', 'label' => 'Logo Link', 'type' => 'text',
                    'default' => '/'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // NAVIGATION LINKS
        // ════════════════════════════════════════════════════
        'navigation' => [
            'label' => 'Navigation Links',
            'icon'  => 'menu',
            'fields' => [
                [
                    'name'  => 'items', 'label' => 'Nav Items', 'type' => 'repeater',
                    'description' => 'Main navigation links. Each can have optional child/dropdown links.',
                    'default_rows' => [
                        [
                            'label' => 'HOME',
                            'href'  => '/',
                            'children' => '',
                        ],
                        [
                            'label' => 'ABOUT US',
                            'href'  => '/about',
                            'children' => "About Axion|/about\nSustainability & Compliance|/sustainability-compliance\nQuality, Safety & Compliance|/quality-safety-compliance",
                        ],
                        [
                            'label' => 'PRODUCT',
                            'href'  => '/product',
                            'children' => "VRLA Batteries|/vrla-batteries\nWet Cell Batteries|/wet-cell-batteries\nStationary Battery Cabinets|/battery-cabinets",
                        ],
                        [
                            'label' => 'SERVICES',
                            'href'  => '/services',
                            'children' => "Maintenance & Monitoring|/maintenance-monitoring\nEmergency Support & Service Contracts|/emergency-support\nSafety Training & Documentation|/safety-training-documentation\nReplacement & Upgrades|/replacement-upgrades",
                        ],
                        [
                            'label' => 'INDUSTRIES',
                            'href'  => '/industries',
                            'children' => "Utilities & Substations|/utilities-substations\nTelecommunications|/telecommunications\nIndustrial & Infrastructure|/industrial-infrastructure\nHealthcare Power|/healthcare\nData Centers & Colocation|/data-centers",
                        ],
                        [
                            'label' => 'RESOURCES',
                            'href'  => '/engineering-resources',
                            'children' => "Engineering Resources|/engineering-resources\nConsulting Engineer Hub|/consulting-engineer-hub\nFAQs|/faqs",
                        ],
                        [
                            'label' => 'CONTACT',
                            'href'  => '/contact',
                            'children' => '',
                        ],
                    ],
                    'sub_fields' => [
                        ['name' => 'label', 'label' => 'Link Label', 'type' => 'text'],
                        ['name' => 'href',  'label' => 'Link URL',   'type' => 'text'],
                        ['name' => 'children', 'label' => 'Child Links (one per line: Label|URL)', 'type' => 'textarea', 'rows' => 4,
                            'description' => 'Format: Label|/url — one child link per line. Leave empty for no dropdown.'],
                    ],
                ],
            ],
        ],

        // ════════════════════════════════════════════════════
        // CTA BUTTON
        // ════════════════════════════════════════════════════
        'cta' => [
            'label' => 'CTA Button',
            'icon'  => 'external-link',
            'fields' => [
                ['name' => 'text', 'label' => 'Button Text', 'type' => 'text',
                    'default' => 'Get In Touch'],
                ['name' => 'link', 'label' => 'Button Link', 'type' => 'text',
                    'default' => '/contact'],
                // ── 🎨 Colors ──
                ['name' => 'bg_color', 'label' => '🎨 Button Background', 'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'text_color', 'label' => '🎨 Button Text Color', 'type' => 'color', 'default' => '#ffffff'],
            ],
        ],

        // ════════════════════════════════════════════════════
        // HEADER STYLE
        // ════════════════════════════════════════════════════
        'style' => [
            'label' => 'Header Style',
            'icon'  => 'sliders',
            'fields' => [
                ['name' => 'bg_color', 'label' => '🎨 Header Background', 'type' => 'color', 'default' => '#0a0a14'],
                ['name' => 'text_color', 'label' => '🎨 Nav Link Color', 'type' => 'color', 'default' => '#ffffff'],
                ['name' => 'accent_color', 'label' => '🎨 Accent / Top Line Color', 'type' => 'color', 'default' => '#1e88e5'],
                ['name' => 'dropdown_bg', 'label' => '🎨 Dropdown Background', 'type' => 'color', 'default' => '#111827'],
                ['name' => 'dropdown_text', 'label' => '🎨 Dropdown Text Color', 'type' => 'color', 'default' => '#cbd5e1'],
            ],
        ],
    ],
];
