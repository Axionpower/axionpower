<?php
/**
 * Plugin Name: Axion CMS
 * Plugin URI: https://tecshor.com
 * Description: Enterprise-grade content management system for Axion Critical Power Solutions. Features a modern admin UI with granular section controls, repeater fields, image management, GraphQL API, SEO controls, and real-time frontend revalidation.
 * Version: 1.2.0
 * Author: Tecshor
 * Author URI: https://tecshor.com
 * Text Domain: axion-cms
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * License: Proprietary
 */

if (!defined('ABSPATH'))
    exit;

define('AXION_CMS_VERSION', '1.2.0');
define('AXION_CMS_PATH', plugin_dir_path(__FILE__));
define('AXION_CMS_URL', plugin_dir_url(__FILE__));

// ─── Includes ───
require_once AXION_CMS_PATH . 'includes/class-icons.php';
require_once AXION_CMS_PATH . 'includes/class-fields.php';
require_once AXION_CMS_PATH . 'includes/class-admin.php';
require_once AXION_CMS_PATH . 'includes/class-graphql.php';
require_once AXION_CMS_PATH . 'includes/class-submissions.php';
require_once AXION_CMS_PATH . 'includes/class-redirects.php';

// ─── Init ───
add_action('plugins_loaded', function () {
    Axion_Admin::init();
    Axion_GraphQL::init();
    Axion_Submissions::init();
    Axion_Redirects::init();
});

// ─── Admin CSS ───
add_action('admin_enqueue_scripts', function ($hook) {
    if (strpos($hook, 'axion-cms') === false)
        return;

    wp_enqueue_media();

    wp_enqueue_style(
        'axion-cms-admin',
        AXION_CMS_URL . 'assets/admin.css',
    [],
        AXION_CMS_VERSION
    );

    wp_enqueue_script(
        'axion-cms-admin',
        AXION_CMS_URL . 'assets/admin.js',
    ['jquery'],
        AXION_CMS_VERSION,
        true
    );
});
