<?php
/**
 * Axion CMS – Contact Page Config
 */
if (!defined('ABSPATH')) exit;

return [
    'slug'  => 'contact',
    'label' => 'Contact',
    'sections' => [

        // ─── HERO ───
        'hero' => [
            'label' => 'Hero Section',
            'icon'  => 'phone',
            'fields' => [
                ['name' => 'background_image', 'label' => 'Background Image', 'type' => 'image', 'description' => 'Recommended: 1920×700px. Server room / data center photo works well.'],
                ['name' => 'badge',       'label' => 'Badge Text',   'type' => 'text',     'default' => 'CONTACT US'],
                ['name' => 'heading',     'label' => 'Heading',      'type' => 'text',     'default' => 'Contact Axion Critical Power Solutions'],
                ['name' => 'description', 'label' => 'Description',  'type' => 'textarea', 'rows' => 4,
                    'default' => 'Axion Critical Power Solutions partners with consulting engineers, contractors, and end users to provide reliable, compliant, and long-term battery solutions. Whether you\'re planning a new installation, replacing aging batteries, or have technical questions, our experts are ready to assist.'],
                ['name' => 'description2','label' => 'Description 2','type' => 'textarea', 'rows' => 2,
                    'default' => 'We provide end-to-end support, from system sizing and specification guidance to lifecycle management and compliance advice.'],
            ],
        ],

        // ─── CONTACT INFO ───
        'contact-info' => [
            'label' => 'Contact Information',
            'icon'  => 'clipboard',
            'fields' => [
                ['name' => 'customer_service_phone1', 'label' => 'Customer Service Phone 1', 'type' => 'text',     'default' => '343 434 43435'],
                ['name' => 'customer_service_phone2', 'label' => 'Customer Service Phone 2', 'type' => 'text',     'default' => '334 444 4245'],
                ['name' => 'email',                   'label' => 'General Email',             'type' => 'text',     'default' => 'info@axionpower.com'],
                ['name' => 'address',                 'label' => 'Office Address',            'type' => 'textarea', 'rows' => 2, 'default' => '123 Power Street, Toronto, ON, Canada'],
                ['name' => 'hours',                   'label' => 'Business Hours',            'type' => 'textarea', 'rows' => 2, 'default' => 'Mon–Fri: 8:00 AM – 6:00 PM EST'],
                ['name' => 'emergency_phone',         'label' => '24-Hour Emergency Phone',   'type' => 'text',     'default' => '245 445 34352'],
            ],
        ],

        // ─── WHY CONTACT AXION ───
        'why-contact' => [
            'label' => 'Why Contact Axion Section',
            'icon'  => 'check-circle',
            'fields' => [
                ['name' => 'heading',     'label' => 'Heading',     'type' => 'text',     'default' => 'Why Contact Axion?'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2, 'default' => ''],
                [
                    'name'         => 'points',
                    'label'        => 'Bullet Points',
                    'type'         => 'repeater',
                    'default_rows' => [
                        ['text' => 'Direct access to technical experts with mission-critical power experience'],
                        ['text' => 'Guidance on VRLA and flooded battery technologies'],
                        ['text' => 'Support for UPS, DC, utility, industrial, and healthcare applications'],
                        ['text' => 'Assistance with compliance, safety, and lifecycle management'],
                        ['text' => 'Long-term partnership approach, ensuring ongoing reliability and performance'],
                    ],
                    'sub_fields' => [
                        ['name' => 'text', 'label' => 'Point', 'type' => 'text'],
                    ],
                ],
            ],
        ],

        // ─── CTA ───
        'cta' => [
            'label' => 'CTA Section',
            'icon'  => 'trending-up',
            'fields' => [
                ['name' => 'cta1_label', 'label' => 'CTA 1 Label', 'type' => 'text', 'default' => 'Speak with an Axion technical expert today'],
                ['name' => 'cta1_url',   'label' => 'CTA 1 URL',   'type' => 'text', 'default' => '#contact-form'],
                ['name' => 'cta2_label', 'label' => 'CTA 2 Label', 'type' => 'text', 'default' => 'Submit your inquiry to request a quote or consultation'],
                ['name' => 'cta2_url',   'label' => 'CTA 2 URL',   'type' => 'text', 'default' => '#contact-form'],
            ],
        ],
    ],
];
