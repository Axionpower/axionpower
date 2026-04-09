<?php
/**
 * Axion CMS – Footer Config (Global)
 * Manages the site-wide footer: copyright, colours and column layout.
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'footer',
    'label' => 'Footer',
    'sections' => [

        // ════════════════════════════════════════════════════
        // FOOTER SETTINGS
        // ════════════════════════════════════════════════════
        'settings' => [
            'label' => 'Footer Settings',
            'icon'  => 'layout',
            'fields' => [
                // ── Global ──
                ['name' => 'copyright',        'label' => 'Copyright Text',        'type' => 'text',  'default' => '© 2025 Axion Critical Power Solutions. All rights reserved.'],
                ['name' => 'bg_color',         'label' => '🎨 Background Color',   'type' => 'color', 'default' => '#0a0e1a'],
                ['name' => 'text_color',       'label' => '🎨 Default Text Color', 'type' => 'color', 'default' => '#8BA3C7'],
                ['name' => 'heading_color',    'label' => '🎨 Column Heading Color','type' => 'color', 'default' => '#ffffff'],
                ['name' => 'link_hover_color', 'label' => '🎨 Link Hover Color',   'type' => 'color', 'default' => '#0EA5E9'],
                ['name' => 'divider_color',    'label' => '🎨 Divider Color',      'type' => 'color', 'default' => '#1a2035'],

                // ── Dynamic Columns ──
                [
                    'name'        => 'columns',
                    'label'       => 'Footer Columns',
                    'type'        => 'repeater',
                    'description' => 'Add, remove, or reorder footer columns. Choose Brand, Link List, or Text Block per column.',
                    'default_rows' => [
                        // Column 1: Brand
                        ['type' => 'brand',  'logo_main' => 'AXION', 'logo_sub' => 'Critical Power Solutions', 'phone' => '', 'email' => '', 'title' => '', 'links_text' => '', 'content' => ''],
                        // Column 2: Products
                        ['type' => 'links',  'logo_main' => '', 'logo_sub' => '', 'phone' => '', 'email' => '', 'title' => 'Products',
                            'links_text' => "VRLA Batteries|/vrla-batteries\nWet Cell Batteries|/wet-cell-batteries\nBattery Cabinets|/battery-cabinets\nReplacement & Upgrades|/replacement-upgrades", 'content' => ''],
                        // Column 3: Services
                        ['type' => 'links',  'logo_main' => '', 'logo_sub' => '', 'phone' => '', 'email' => '', 'title' => 'Services',
                            'links_text' => "Emergency Support|/emergency-support\nMaintenance & Monitoring|/maintenance-monitoring\nSafety Training|/safety-training-documentation\nQuality & Compliance|/quality-safety-compliance", 'content' => ''],
                        // Column 4: Industries
                        ['type' => 'links',  'logo_main' => '', 'logo_sub' => '', 'phone' => '', 'email' => '', 'title' => 'Industries',
                            'links_text' => "Data Centers|/data-centers\nHealthcare|/healthcare\nIndustrial Infrastructure|/industrial-infrastructure\nTelecommunications|/telecommunications\nUtilities & Substations|/utilities-substations", 'content' => ''],
                        // Column 5: Resources
                        ['type' => 'links',  'logo_main' => '', 'logo_sub' => '', 'phone' => '', 'email' => '', 'title' => 'Resources',
                            'links_text' => "Engineering Resources|/engineering-resources\nConsulting Engineer Hub|/consulting-engineer-hub\nFAQs|/faqs\nAbout Us|/about\nSustainability|/sustainability-compliance\nContact|/contact", 'content' => ''],
                    ],
                    'sub_fields' => [
                        ['name' => 'type',       'label' => 'Column Type',   'type' => 'select',
                            'choices' => ['brand' => 'Brand / Logo', 'links' => 'Link List', 'text' => 'Text Block']],
                        ['name' => 'logo_image', 'label' => 'Logo Image (optional)', 'type' => 'image',
                            'description' => 'Used when type is "Brand". Leave empty to use text logo.'],
                        ['name' => 'logo_main',  'label' => 'Logo Main Text',  'type' => 'text'],
                        ['name' => 'logo_sub',   'label' => 'Logo Subtitle',   'type' => 'text'],
                        ['name' => 'phone',      'label' => 'Phone',           'type' => 'text'],
                        ['name' => 'email',      'label' => 'Email',           'type' => 'text'],
                        ['name' => 'title',      'label' => 'Column Title',    'type' => 'text'],
                        ['name' => 'links_text', 'label' => 'Links (one per line: Label|/url)', 'type' => 'textarea'],
                        ['name' => 'content',    'label' => 'Text Content (HTML allowed)',      'type' => 'textarea', 'html' => true],
                    ],
                ],
            ],
        ],
    ],
];
