<?php
/**
 * Axion CMS – Admin Page
 * Renders the tabbed admin UI: pages → sections → fields
 */

if (!defined('ABSPATH'))
    exit;

class Axion_Admin
{

    private static $pages = [];

    // ─── Page groups for sidebar navigation ───
    private static $groups = [
        'Main'       => [
            'icon'  => '🏠',
            'pages' => ['home', 'about', 'contact'],
        ],
        'Resources'  => [
            'icon'  => '📚',
            'pages' => ['engineering-resources', 'consulting-engineer-hub', 'faqs'],
        ],
        'Industries' => [
            'icon'  => '🏭',
            'pages' => ['data-centers', 'healthcare', 'industrial-infrastructure', 'telecommunications', 'utilities-substations'],
        ],
        'Products'   => [
            'icon'  => '📦',
            'pages' => ['vrla-batteries', 'wet-cell-batteries', 'battery-cabinets'],
        ],
        'Services'   => [
            'icon'  => '🔧',
            'pages' => ['maintenance', 'emergency-support', 'replacement-upgrades', 'safety-training', 'quality-safety', 'sustainability'],
        ],
    ];

    // ─── Per-page icons ───
    private static $page_icons = [
        'home'                    => '🏠',
        'about'                   => '👥',
        'contact'                 => '📬',
        'engineering-resources'   => '⚙️',
        'consulting-engineer-hub' => '🔬',
        'faqs'                    => '❓',
        'data-centers'            => '🖥️',
        'healthcare'              => '🏥',
        'industrial-infrastructure' => '🏗️',
        'telecommunications'      => '📡',
        'utilities-substations'   => '⚡',
        'vrla-batteries'          => '🔋',
        'wet-cell-batteries'      => '🪫',
        'battery-cabinets'        => '🗄️',
        'maintenance'             => '🔩',
        'emergency-support'       => '🚨',
        'replacement-upgrades'    => '🔄',
        'safety-training'         => '🛡️',
        'quality-safety'          => '✅',
        'sustainability'          => '🌱',
    ];

    public static function init()
    {
        self::load_pages();
        add_action('admin_menu', [__CLASS__, 'register_menu']);
        add_action('admin_init', [__CLASS__, 'handle_save']);
        add_action('admin_init', [__CLASS__, 'handle_reset']);
        add_action('admin_init', [__CLASS__, 'handle_settings_save']);
    }

    // ─── Load page configs ───
    private static function load_pages()
    {
        if (!empty(self::$pages)) return;

        $dir = AXION_CMS_PATH . 'includes/pages/';
        foreach (glob($dir . '*.php') as $file) {
            $config = include $file;
            if (is_array($config) && isset($config['slug'])) {
                // Auto-inject typography controls into every section
                foreach ($config['sections'] as $sec_slug => &$section) {
                    $typo_fields = self::get_typography_fields($sec_slug);
                    $section['fields'] = array_merge($typo_fields, $section['fields']);
                }
                unset($section);
                // Auto-inject SEO section into every page
                $config['sections']['seo'] = self::get_seo_section();
                self::$pages[$config['slug']] = $config;
            }
        }
    }

    // ─── Return default field values for a section (used by GraphQL when no data saved) ───
    public static function get_section_defaults($page_slug, $section_slug)
    {
        if (empty(self::$pages)) {
            self::load_pages();
        }

        $section = self::$pages[$page_slug]['sections'][$section_slug] ?? null;
        if (!$section) return [];

        $defaults = [];
        foreach ($section['fields'] as $field) {
            $name = $field['name'];
            $type = $field['type'] ?? 'text';

            if ($type === 'repeater') {
                $defaults[$name] = $field['default_rows'] ?? [];
            } elseif ($type === 'image') {
                $defaults[$name] = 0;
            } else {
                $defaults[$name] = $field['default'] ?? '';
            }
        }

        return $defaults;
    }

    // ─── Typography fields auto-injected into every section ───
    private static function get_typography_fields($section_slug)
    {
        return [
            [
                'name' => 'heading_tag',
                'label' => '🏷 Heading Tag',
                'type' => 'select',
                'choices' => [
                    ''   => 'Default',
                    'h1' => 'H1 (Main heading — use only once per page)',
                    'h2' => 'H2 (Section heading)',
                    'h3' => 'H3 (Sub-section heading)',
                    'h4' => 'H4',
                    'h5' => 'H5',
                    'h6' => 'H6',
                ],
                'default' => '',
                'description' => 'Choose the HTML heading tag for this section\'s title. Proper heading hierarchy (H1 → H2 → H3) is critical for SEO.',
            ],
            [
                'name' => 'heading_font_size',
                'label' => '🔤 Heading Font Size (px)',
                'type' => 'text',
                'default' => '',
                'description' => 'Custom font size in pixels (e.g. 36). Leave empty to use the default size.',
            ],
        ];
    }

    // ─── Shared SEO section config ───
    private static function get_seo_section()
    {
        return [
            'label' => 'SEO Settings',
            'icon'  => '🔍',
            'fields' => [
                ['name' => 'seo_title', 'label' => 'SEO Title', 'type' => 'text', 'max_chars' => 60, 'description' => 'Overrides the page title tag. Keep under 60 characters.'],
                ['name' => 'seo_description', 'label' => 'Meta Description', 'type' => 'textarea', 'rows' => 3, 'max_chars' => 160, 'description' => 'Displayed in search results. Keep between 120–160 characters.'],
                ['name' => 'seo_keywords', 'label' => 'Focus Keywords', 'type' => 'text', 'description' => 'Comma-separated keywords for this page.'],
                ['name' => 'og_title', 'label' => 'OG Title (Social Share)', 'type' => 'text', 'max_chars' => 60, 'description' => 'Title shown when shared on Facebook/LinkedIn. Falls back to SEO Title.'],
                ['name' => 'og_description', 'label' => 'OG Description', 'type' => 'textarea', 'rows' => 2, 'max_chars' => 160, 'description' => 'Description shown when shared on social media.'],
                ['name' => 'og_image', 'label' => 'OG Image (Social Share)', 'type' => 'image', 'description' => 'Recommended: 1200×630px. Shown when shared on social media.'],
                ['name' => 'canonical_url', 'label' => 'Canonical URL', 'type' => 'text', 'description' => 'Leave empty to use the default page URL.'],
                ['name' => 'no_index', 'label' => 'Hide from Search Engines', 'type' => 'select', 'choices' => ['0' => 'No (Index)', '1' => 'Yes (No Index)'], 'default' => '0', 'description' => 'Set to Yes to prevent search engines from indexing this page.'],
            ],
        ];
    }

    // ─── Register admin menu ───
    public static function register_menu()
    {
        add_menu_page(
            'Axion CMS',
            'Axion CMS',
            'manage_options',
            'axion-cms',
            [__CLASS__, 'render_page'],
            'dashicons-layout',
            3
        );
    }

    // ─── Get field value ───
    public static function get_field($page_slug, $section_slug, $field_name, $default = '')
    {
        $option_key = 'axion_' . $page_slug . '_' . $section_slug;
        $data = get_option($option_key, []);
        return $data[$field_name] ?? $default;
    }

    // ─── Get all section data ───
    public static function get_section_data($page_slug, $section_slug)
    {
        $option_key = 'axion_' . $page_slug . '_' . $section_slug;
        return get_option($option_key, []);
    }

    // ─── Render admin page ───
    public static function render_page()
    {
        $current_page    = isset($_GET['axion_page'])    ? sanitize_text_field($_GET['axion_page'])    : '';
        $current_section = isset($_GET['axion_section']) ? sanitize_text_field($_GET['axion_section']) : '';
        $show_settings   = isset($_GET['axion_settings']);

        if (!$current_page && !$show_settings && !empty(self::$pages)) {
            $current_page = array_key_first(self::$pages);
        }

        // Determine which group is active (for open/highlight state)
        $active_group = '';
        foreach (self::$groups as $group_name => $group) {
            if (in_array($current_page, $group['pages'], true)) {
                $active_group = $group_name;
                break;
            }
        }

        echo '<div class="wrap axion-wrap">';

        // ── Header ──
        echo '<div class="axion-header">';
        echo '<div class="axion-header__logo">⚡</div>';
        echo '<div class="axion-header__text">';
        echo '<h1 class="axion-title">Axion CMS</h1>';
        echo '<p class="axion-subtitle">Content Management System</p>';
        echo '</div>';
        echo '</div>';

        // ── Main layout: sidebar + content ──
        echo '<div class="axion-layout">';

        // ── Sidebar ──
        echo '<nav class="axion-sidebar">';
        echo '<div class="axion-sidebar__inner">';

        foreach (self::$groups as $group_name => $group) {
            $is_group_active = ($group_name === $active_group && !$show_settings);
            $group_class = 'axion-nav-group' . ($is_group_active ? ' axion-nav-group--open' : '');

            echo '<div class="' . $group_class . '">';

            // Group header (clickable toggle)
            $first_page_in_group = $group['pages'][0] ?? '';
            $group_url = $first_page_in_group ? admin_url('admin.php?page=axion-cms&axion_page=' . $first_page_in_group) : '#';
            echo '<div class="axion-nav-group__header">';
            echo '<span class="axion-nav-group__icon">' . esc_html($group['icon']) . '</span>';
            echo '<span class="axion-nav-group__label">' . esc_html($group_name) . '</span>';
            echo '<span class="axion-nav-group__count">' . count($group['pages']) . '</span>';
            echo '<span class="axion-nav-group__chevron">›</span>';
            echo '</div>';

            // Pages within group
            echo '<ul class="axion-nav-group__pages">';
            foreach ($group['pages'] as $slug) {
                if (!isset(self::$pages[$slug])) continue;
                $page = self::$pages[$slug];
                $is_active = ($slug === $current_page && !$show_settings);
                $page_url  = admin_url('admin.php?page=axion-cms&axion_page=' . $slug);
                $icon      = self::$page_icons[$slug] ?? '📄';
                $item_class = 'axion-nav-item' . ($is_active ? ' axion-nav-item--active' : '');

                echo '<li>';
                echo '<a href="' . esc_url($page_url) . '" class="' . $item_class . '">';
                echo '<span class="axion-nav-item__icon">' . esc_html($icon) . '</span>';
                echo '<span class="axion-nav-item__label">' . esc_html($page['label']) . '</span>';
                echo '</a>';
                echo '</li>';
            }
            echo '</ul>';
            echo '</div>'; // .axion-nav-group
        }

        // Settings item at the bottom
        $settings_active_class = $show_settings ? ' axion-nav-item--active' : '';
        $settings_url = admin_url('admin.php?page=axion-cms&axion_settings=1');
        echo '<div class="axion-nav-settings">';
        echo '<a href="' . esc_url($settings_url) . '" class="axion-nav-item axion-nav-item--settings' . $settings_active_class . '">';
        echo '<span class="axion-nav-item__icon">⚙️</span>';
        echo '<span class="axion-nav-item__label">Settings</span>';
        echo '</a>';
        echo '</div>';

        echo '</div>'; // .axion-sidebar__inner
        echo '</nav>'; // .axion-sidebar

        // ── Content area ──
        echo '<div class="axion-content">';

        if ($show_settings) {
            self::render_settings();
        } elseif ($current_page && isset(self::$pages[$current_page])) {
            $page_config = self::$pages[$current_page];
            $page_icon   = self::$page_icons[$current_page] ?? '📄';

            if ($current_section && isset($page_config['sections'][$current_section])) {
                self::render_section_fields($current_page, $current_section, $page_config['sections'][$current_section]);
            } else {
                // ── Page header ──
                echo '<div class="axion-page-header">';
                echo '<span class="axion-page-header__icon">' . esc_html($page_icon) . '</span>';
                echo '<div class="axion-page-header__text">';
                echo '<h2 class="axion-page-header__title">' . esc_html($page_config['label']) . '</h2>';
                echo '<p class="axion-page-header__meta">' . count($page_config['sections']) . ' sections · Click a section to edit</p>';
                echo '</div>';
                echo '</div>';

                // ── Section cards ──
                echo '<div class="axion-sections">';
                foreach ($page_config['sections'] as $sec_slug => $section) {
                    $sec_url  = admin_url('admin.php?page=axion-cms&axion_page=' . $current_page . '&axion_section=' . $sec_slug);
                    $data     = self::get_section_data($current_page, $sec_slug);
                    $has_data = !empty($data);
                    $status_class = $has_data ? 'axion-section-card--filled' : '';

                    echo '<a href="' . esc_url($sec_url) . '" class="axion-section-card ' . $status_class . '">';
                    echo '<div class="axion-section-card__icon">' . esc_html($section['icon'] ?? '📄') . '</div>';
                    echo '<div class="axion-section-card__info">';
                    echo '<h3 class="axion-section-card__title">' . esc_html($section['label']) . '</h3>';
                    echo '<p class="axion-section-card__status">' . ($has_data ? '✅ Configured' : '⚪ Using defaults') . '</p>';
                    echo '</div>';
                    echo '<span class="axion-section-card__arrow">→</span>';
                    echo '</a>';
                }
                echo '</div>';
            }
        }

        echo '</div>'; // .axion-content
        echo '</div>'; // .axion-layout
        echo '</div>'; // .axion-wrap
    }

    // ─── Render Settings tab ───
    private static function render_settings()
    {
        $nextjs_url = get_option('axion_nextjs_url', '');
        $revalidate_secret = get_option('axion_revalidate_secret', '');

        echo '<div class="axion-section-edit">';
        echo '<h2 class="axion-section-title">⚙ Integration Settings</h2>';

        if (isset($_GET['settings_saved'])) {
            echo '<div class="axion-notice">✅ Settings saved successfully!</div>';
        }

        echo '<form method="post" class="axion-form">';
        wp_nonce_field('axion_settings_save', 'axion_settings_nonce');
        echo '<input type="hidden" name="axion_save_settings" value="1" />';

        echo '<table class="form-table">';

        echo '<tr><th scope="row"><label for="axion_nextjs_url">Next.js Site URL</label></th>';
        echo '<td><input type="url" id="axion_nextjs_url" name="axion_nextjs_url" value="' . esc_attr($nextjs_url) . '" class="regular-text" placeholder="https://your-nextjs-site.com" />';
        echo '<p class="description">The public URL of your Next.js site (e.g. <code>https://axion.ahsan-aleem.dev</code>). Used to trigger content revalidation after saving.</p></td></tr>';

        echo '<tr><th scope="row"><label for="axion_revalidate_secret">Revalidation Secret</label></th>';
        echo '<td><input type="text" id="axion_revalidate_secret" name="axion_revalidate_secret" value="' . esc_attr($revalidate_secret) . '" class="regular-text" placeholder="a-long-random-secret" />';
        echo '<p class="description">Must match the <code>REVALIDATE_SECRET</code> environment variable in your Next.js app. Use a long, random string.</p></td></tr>';

        echo '</table>';

        echo '<div class="axion-form__actions">';
        echo '<button type="submit" class="button button-primary button-large">Save Settings</button>';
        echo '</div>';
        echo '</form>';
        echo '</div>';
    }

    // ─── Render section fields (edit view) ───
    private static function render_section_fields($page_slug, $section_slug, $section)
    {
        $data = self::get_section_data($page_slug, $section_slug);
        $back_url = admin_url('admin.php?page=axion-cms&axion_page=' . $page_slug);

        echo '<div class="axion-section-edit">';
        echo '<a href="' . esc_url($back_url) . '" class="axion-back">← Back to sections</a>';
        echo '<h2 class="axion-section-title">' . esc_html($section['icon'] ?? '') . ' ' . esc_html($section['label']) . '</h2>';

        // Success notices
        if (isset($_GET['saved'])) {
            echo '<div class="axion-notice">✅ Changes saved successfully!</div>';
        }
        if (isset($_GET['reset'])) {
            echo '<div class="axion-notice axion-notice--reset">🔄 Section reset to default values.</div>';
        }

        echo '<form method="post" class="axion-form">';
        wp_nonce_field('axion_save', 'axion_nonce');
        echo '<input type="hidden" name="axion_page" value="' . esc_attr($page_slug) . '" />';
        echo '<input type="hidden" name="axion_section" value="' . esc_attr($section_slug) . '" />';

        foreach ($section['fields'] as $field) {
            // Show saved value; if none saved yet, show the plugin default
            $type = $field['type'] ?? 'text';
            if (isset($data[$field['name']])) {
                $value = $data[$field['name']];
            } elseif ($type === 'repeater') {
                $value = $field['default_rows'] ?? [];
            } elseif ($type === 'image') {
                $value = 0;
            } else {
                $value = $field['default'] ?? '';
            }
            Axion_Fields::render($field, $value);
        }

        echo '<div class="axion-form__actions">';
        echo '<button type="submit" class="button button-primary button-large">Save Changes</button>';
        $reset_url = wp_nonce_url(
            admin_url('admin.php?page=axion-cms&axion_page=' . $page_slug . '&axion_section=' . $section_slug . '&axion_reset=1'),
            'axion_reset',
            'axion_reset_nonce'
        );
        echo ' <a href="' . esc_url($reset_url) . '" class="button axion-reset-btn" onclick="return confirm(\'Are you sure? This will delete all saved data for this section and revert to defaults.\');">Reset to Default</a>';
        // ── View Page link ──
        $nextjs_url = rtrim(get_option('axion_nextjs_url', ''), '/');
        if ($nextjs_url) {
            $path = ($page_slug === 'home') ? '' : '/' . $page_slug;
            echo ' <a href="' . esc_url($nextjs_url . $path) . '" class="button axion-view-btn" target="_blank" rel="noopener noreferrer">👁 View Page →</a>';
        }
        echo '</div>';
        echo '</form>';
        echo '</div>';
    }

    // ─── Handle save ───
    public static function handle_save()
    {
        if (!isset($_POST['axion_nonce']) || !wp_verify_nonce($_POST['axion_nonce'], 'axion_save'))
            return;
        if (!current_user_can('manage_options'))
            return;

        $page_slug = sanitize_text_field($_POST['axion_page']);
        $section_slug = sanitize_text_field($_POST['axion_section']);

        if (!isset(self::$pages[$page_slug]))
            return;

        $section = self::$pages[$page_slug]['sections'][$section_slug] ?? null;
        if (!$section)
            return;

        $data = [];
        foreach ($section['fields'] as $field) {
            $name = $field['name'];
            $type = $field['type'] ?? 'text';

            if ($type === 'repeater') {
                $raw = $_POST[$name] ?? [];
                $clean = [];
                if (is_array($raw)) {
                    foreach ($raw as $row) {
                        if (!is_array($row))
                            continue;
                        $clean_row = [];
                        foreach ($field['sub_fields'] as $sf) {
                            $sf_val = $row[$sf['name']] ?? '';
                            $clean_row[$sf['name']] = ($sf['type'] === 'textarea')
                                ? sanitize_textarea_field($sf_val)
                                : sanitize_text_field($sf_val);
                        }
                        $clean[] = $clean_row;
                    }
                }
                $data[$name] = $clean;
            } elseif ($type === 'textarea') {
                $data[$name] = sanitize_textarea_field($_POST[$name] ?? '');
            } elseif ($type === 'image') {
                $data[$name] = absint($_POST[$name] ?? 0);
            } else {
                $data[$name] = sanitize_text_field($_POST[$name] ?? '');
            }
        }

        $option_key = 'axion_' . $page_slug . '_' . $section_slug;
        update_option($option_key, $data);

        // Trigger Next.js content revalidation (non-blocking)
        self::trigger_revalidation();

        // Redirect back with success
        $redirect = admin_url('admin.php?page=axion-cms&axion_page=' . $page_slug . '&axion_section=' . $section_slug . '&saved=1');
        wp_safe_redirect($redirect);
        exit;
    }

    // ─── Handle reset ───
    public static function handle_reset()
    {
        if (!isset($_GET['axion_reset']) || $_GET['axion_reset'] !== '1')
            return;
        if (!isset($_GET['axion_reset_nonce']) || !wp_verify_nonce($_GET['axion_reset_nonce'], 'axion_reset'))
            return;
        if (!current_user_can('manage_options'))
            return;

        $page_slug = sanitize_text_field($_GET['axion_page'] ?? '');
        $section_slug = sanitize_text_field($_GET['axion_section'] ?? '');

        if (!$page_slug || !$section_slug)
            return;

        $option_key = 'axion_' . $page_slug . '_' . $section_slug;
        delete_option($option_key);

        // Trigger Next.js content revalidation (non-blocking)
        self::trigger_revalidation();

        $redirect = admin_url('admin.php?page=axion-cms&axion_page=' . $page_slug . '&axion_section=' . $section_slug . '&reset=1');
        wp_safe_redirect($redirect);
        exit;
    }

    // ─── Handle settings save ───
    public static function handle_settings_save()
    {
        if (!isset($_POST['axion_save_settings']))
            return;
        if (!isset($_POST['axion_settings_nonce']) || !wp_verify_nonce($_POST['axion_settings_nonce'], 'axion_settings_save'))
            return;
        if (!current_user_can('manage_options'))
            return;

        update_option('axion_nextjs_url', sanitize_url($_POST['axion_nextjs_url'] ?? ''));
        update_option('axion_revalidate_secret', sanitize_text_field($_POST['axion_revalidate_secret'] ?? ''));

        wp_safe_redirect(admin_url('admin.php?page=axion-cms&axion_settings=1&settings_saved=1'));
        exit;
    }

    // ─── Trigger Next.js ISR revalidation (fire-and-forget) ───
    private static function trigger_revalidation()
    {
        $nextjs_url = get_option('axion_nextjs_url', '');
        $secret     = get_option('axion_revalidate_secret', '');

        if (!$nextjs_url || !$secret) return;

        wp_remote_post(
            trailingslashit($nextjs_url) . 'api/revalidate',
            [
                'headers'  => [
                    'Content-Type'        => 'application/json',
                    'x-revalidate-secret' => $secret,
                ],
                'body'     => json_encode(['source' => 'axion-cms']),
                'timeout'  => 5,
                'blocking' => false, // Fire and forget — don't delay the save redirect
            ]
        );
    }
}
