<?php
/**
 * Axion CMS – Field Renderers
 * Renders HTML form fields: text, textarea, select, image, repeater, color, number
 */

if (!defined('ABSPATH'))
    exit;

class Axion_Fields
{

    /**
     * Render a single field based on its type
     * @param array $field   Field config
     * @param mixed $value   Current saved value
     * @param array $all_data All saved data for the section (used to find companion video URLs)
     */
    public static function render($field, $value, $all_data = [])
    {
        $name = esc_attr($field['name']);
        $label = esc_html($field['label']);
        $type = $field['type'] ?? 'text';
        $desc = $field['description'] ?? '';

        echo '<div class="axion-field axion-field--' . $type . '">';
        echo '<label class="axion-field__label" for="' . $name . '">' . $label . '</label>';

        if ($desc) {
            echo '<p class="axion-field__desc">' . esc_html($desc) . '</p>';
        }

        switch ($type) {
            case 'text':
                self::render_text($name, $value, $field);
                break;
            case 'textarea':
                self::render_textarea($name, $value, $field);
                break;
            case 'select':
                self::render_select($name, $value, $field);
                break;
            case 'image':
                // Look up the companion video URL from saved data
                $video_key = $field['name'] . '_video_url';
                $video_value = $all_data[$video_key] ?? '';
                self::render_image($name, $value, $video_value);
                break;
            case 'repeater':
                self::render_repeater($name, $value, $field);
                break;
            case 'color':
                self::render_color($name, $value, $field);
                break;
            case 'number':
                self::render_number($name, $value, $field);
                break;
        }

        echo '</div>';
    }

    // ─── Text ───
    private static function render_text($name, $value, $field)
    {
        $placeholder = esc_attr($field['placeholder'] ?? '');
        $max = isset($field['max_chars']) ? intval($field['max_chars']) : 0;
        $data_attr = $max ? ' data-max-chars="' . $max . '"' : '';
        echo '<input type="text" id="' . $name . '" name="' . $name . '" value="' . esc_attr($value) . '" placeholder="' . $placeholder . '" class="axion-input' . ($max ? ' axion-char-count' : '') . '"' . $data_attr . ' />';
        if ($max) {
            $len = mb_strlen($value);
            $color = $len > $max ? '#dc2626' : '#666';
            echo '<span class="axion-char-counter" data-for="' . $name . '" style="display:block;font-size:12px;color:' . $color . ';margin-top:4px;">' . $len . '/' . $max . ' characters</span>';
        }
    }

    // ─── Textarea ───
    private static function render_textarea($name, $value, $field)
    {
        $rows = $field['rows'] ?? 4;
        $placeholder = esc_attr($field['placeholder'] ?? '');
        $max = isset($field['max_chars']) ? intval($field['max_chars']) : 0;
        $data_attr = $max ? ' data-max-chars="' . $max . '"' : '';
        echo '<textarea id="' . $name . '" name="' . $name . '" rows="' . $rows . '" placeholder="' . $placeholder . '" class="axion-input axion-textarea' . ($max ? ' axion-char-count' : '') . '"' . $data_attr . '>' . esc_textarea($value) . '</textarea>';
        if ($max) {
            $len = mb_strlen($value);
            $color = $len > $max ? '#dc2626' : '#666';
            echo '<span class="axion-char-counter" data-for="' . $name . '" style="display:block;font-size:12px;color:' . $color . ';margin-top:4px;">' . $len . '/' . $max . ' characters</span>';
        }
    }

    // ─── Select ───
    private static function render_select($name, $value, $field)
    {
        $choices = $field['choices'] ?? [];
        echo '<select id="' . $name . '" name="' . $name . '" class="axion-input axion-select">';
        foreach ($choices as $key => $label) {
            $selected = ($value === $key) ? ' selected' : '';
            echo '<option value="' . esc_attr($key) . '"' . $selected . '>' . esc_html($label) . '</option>';
        }
        echo '</select>';
    }

    // ─── Image (Media Library + URL paste + Video URL) ───
    private static function render_image($name, $value, $video_value = '')
    {
        // Determine if value is an attachment ID or a URL string
        $is_url = ($value && !is_numeric($value));
        $img_url = '';
        if ($is_url) {
            $img_url = $value;
        } elseif ($value && is_numeric($value) && (int)$value > 0) {
            $img_url = wp_get_attachment_url((int)$value);
        }

        echo '<div class="axion-image-field">';
        echo '<input type="hidden" id="' . $name . '" name="' . $name . '" value="' . esc_attr($value) . '" />';

        // Preview
        echo '<div class="axion-image-preview" id="' . $name . '_preview" style="margin-bottom:8px;">';
        if ($img_url) {
            echo '<img src="' . esc_url($img_url) . '" style="max-width:200px;max-height:150px;border-radius:6px;border:1px solid #ddd;" />';
        }
        echo '</div>';

        // Buttons row
        echo '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">';
        echo '<button type="button" class="button axion-image-upload" data-target="' . $name . '">📁 Media Library</button>';
        echo '<button type="button" class="button axion-image-remove" data-target="' . $name . '" style="' . ($value ? '' : 'display:none;') . '">✕ Remove</button>';
        echo '</div>';

        // URL paste input
        echo '<input type="text" id="' . $name . '_url_input" class="axion-input axion-image-url-input" data-target="' . $name . '" value="' . ($is_url ? esc_attr($value) : '') . '" placeholder="Or paste image URL here (https://...)" style="width:100%;max-width:500px;" />';
        echo '<p class="axion-field__desc" style="margin-top:4px;font-size:11px;color:#999;">Supports: JPG, PNG, WEBP, SVG, GIF — from Media Library or any external URL</p>';

        // Build the video URL field name.
        // For top-level fields:  "bg_image"            → "bg_image_video_url"
        // For repeater fields:   "products[0][image]"  → "products[0][image_video_url]"
        // (PHP cannot parse "products[0][image]_video_url" — it overwrites the image key!)
        if (preg_match('/^(.+)\[([^\]]+)\]$/', $name, $m)) {
            $video_name = $m[1] . '[' . $m[2] . '_video_url]';
        } else {
            $video_name = $name . '_video_url';
        }
        echo '<div class="axion-video-url-field" style="margin-top:12px;padding:10px 12px;background:#f0f7ff;border:1px solid #bdd8f2;border-radius:8px;">';
        echo '<label class="axion-field__label" for="' . $video_name . '" style="font-size:12px;font-weight:600;margin-bottom:4px;display:block;color:#1e4a7a;">🎬 Video URL (optional — overrides image)</label>';
        echo '<input type="text" id="' . $video_name . '" name="' . $video_name . '" value="' . esc_attr($video_value) . '" placeholder="https://example.com/video.mp4" class="axion-input" style="width:100%;max-width:500px;" />';
        echo '<p class="axion-field__desc" style="margin-top:4px;font-size:11px;color:#666;">Paste a direct .mp4 or .webm URL. If set, this video plays instead of the image.</p>';
        echo '</div>';

        echo '</div>';
    }

    // ─── Color ───
    private static function render_color($name, $value, $field)
    {
        $default = esc_attr($field['default'] ?? '#1e88e5');
        $val     = $value ?: $default;
        echo '<div class="axion-color-field" style="display:flex;align-items:center;gap:10px;">';
        // Native color swatch
        echo '<input type="color" id="' . $name . '_swatch" value="' . esc_attr($val) . '"'
            . ' style="width:44px;height:36px;padding:2px;border:1px solid #ddd;border-radius:6px;cursor:pointer;background:none;"'
            . ' oninput="document.getElementById(\'' . $name . '_hex\').value=this.value;document.getElementById(\'' . $name . '\').value=this.value;" />';
        // Hex text input
        echo '<input type="text" id="' . $name . '_hex" value="' . esc_attr($val) . '" placeholder="#000000"'
            . ' class="axion-input" style="width:120px;"'
            . ' oninput="if(/^#[0-9A-Fa-f]{6}$/.test(this.value)){document.getElementById(\'' . $name . '_swatch\').value=this.value;document.getElementById(\'' . $name . '\').value=this.value;}" />';
        // Hidden real field that gets submitted
        echo '<input type="hidden" id="' . $name . '" name="' . $name . '" value="' . esc_attr($val) . '" />';
        echo '</div>';
    }

    // ─── Number ───
    private static function render_number($name, $value, $field)
    {
        $min  = isset($field['min'])  ? ' min="'  . intval($field['min'])  . '"' : '';
        $max  = isset($field['max'])  ? ' max="'  . intval($field['max'])  . '"' : '';
        $step = isset($field['step']) ? ' step="' . esc_attr($field['step']) . '"' : ' step="1"';
        $unit = $field['unit'] ?? '';
        $placeholder = esc_attr($field['placeholder'] ?? '');
        echo '<div style="display:flex;align-items:center;gap:6px;">';
        echo '<input type="number" id="' . $name . '" name="' . $name . '" value="' . esc_attr($value) . '" placeholder="' . $placeholder . '" class="axion-input" style="width:100px;"' . $min . $max . $step . ' />';
        if ($unit) {
            echo '<span style="font-size:13px;color:#666;">' . esc_html($unit) . '</span>';
        }
        echo '</div>';
    }

    // ─── Repeater ───
    private static function render_repeater($name, $value, $field)
    {
        $sub_fields = $field['sub_fields'] ?? [];
        $rows = is_array($value) ? $value : [];

        echo '<div class="axion-repeater" data-name="' . $name . '">';
        echo '<div class="axion-repeater__rows">';

        foreach ($rows as $i => $row) {
            self::render_repeater_row($name, $i, $sub_fields, $row);
        }

        echo '</div>';
        echo '<button type="button" class="button axion-repeater__add" data-name="' . $name . '">+ Add Row</button>';

        // Template (hidden, for JS cloning)
        echo '<script type="text/html" class="axion-repeater__template" data-name="' . $name . '">';
        self::render_repeater_row($name, '__INDEX__', $sub_fields, []);
        echo '</script>';

        echo '</div>';
    }

    private static function render_repeater_row($parent, $index, $sub_fields, $row)
    {
        echo '<div class="axion-repeater__row" data-index="' . $index . '">';
        echo '<div class="axion-repeater__row-header">';
        echo '<span class="axion-repeater__row-title">Row ' . ((is_numeric($index) ? $index + 1 : '#')) . '</span>';
        echo '<button type="button" class="axion-repeater__remove" title="Remove row">&times;</button>';
        echo '</div>';
        echo '<div class="axion-repeater__row-fields">';

        foreach ($sub_fields as $sf) {
            $sf_name = $parent . '[' . $index . '][' . $sf['name'] . ']';
            $sf_value = $row[$sf['name']] ?? ($sf['default'] ?? '');
            $sf_copy = $sf;
            $sf_copy['name'] = $sf_name;

            // For image sub-fields, build the all_data with prefixed video key
            if (($sf['type'] ?? 'text') === 'image') {
                $video_key = $sf_name . '_video_url';
                $video_val = $row[$sf['name'] . '_video_url'] ?? '';
                $row_data = [$video_key => $video_val];
                self::render($sf_copy, $sf_value, $row_data);
            } else {
                self::render($sf_copy, $sf_value);
            }
        }

        echo '</div></div>';
    }
}
