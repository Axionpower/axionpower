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
     */
    public static function render($field, $value)
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
                self::render_image($name, $value);
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

    // ─── Image ───
    private static function render_image($name, $value)
    {
        $img_url = $value ? wp_get_attachment_url($value) : '';
        echo '<div class="axion-image-field">';
        echo '<input type="hidden" id="' . $name . '" name="' . $name . '" value="' . esc_attr($value) . '" />';
        echo '<div class="axion-image-preview" id="' . $name . '_preview">';
        if ($img_url) {
            echo '<img src="' . esc_url($img_url) . '" />';
        }
        echo '</div>';
        echo '<button type="button" class="button axion-image-upload" data-target="' . $name . '">Select Image</button>';
        if ($value) {
            echo ' <button type="button" class="button axion-image-remove" data-target="' . $name . '">Remove</button>';
        }
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
            self::render($sf_copy, $sf_value);
        }

        echo '</div></div>';
    }
}
