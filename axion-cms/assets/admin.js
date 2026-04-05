/**
 * Axion CMS – Admin JS
 * Handles: image uploader (media lib + URL), repeater add/remove, notices
 */
(function ($) {
    "use strict";

    $(document).ready(function () {

        // ── Success notice ──
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("saved") === "1") {
            $(".axion-section-edit").prepend(
                '<div class="axion-notice">✅ Settings saved successfully!</div>'
            );
            var cleanUrl = window.location.href.replace("&saved=1", "");
            window.history.replaceState({}, "", cleanUrl);
        }

        // ══════════════════════════════════════
        // IMAGE UPLOAD – uses container traversal (no ID selectors)
        // ══════════════════════════════════════

        // ── Media Library button ──
        $(document).on("click", ".axion-image-upload", function (e) {
            e.preventDefault();

            var $container = $(this).closest(".axion-image-field");
            var $hidden    = $container.find('input[type="hidden"]').first();
            var $preview   = $container.find(".axion-image-preview").first();
            var $urlInput  = $container.find(".axion-image-url-input").first();
            var $removeBtn = $container.find(".axion-image-remove").first();

            var frame = wp.media({
                title: "Select Image",
                multiple: false
            });

            frame.on("select", function () {
                var attachment = frame.state().get("selection").first().toJSON();
                var previewUrl = attachment.url;
                if (attachment.sizes) {
                    if (attachment.sizes.medium) {
                        previewUrl = attachment.sizes.medium.url;
                    } else if (attachment.sizes.thumbnail) {
                        previewUrl = attachment.sizes.thumbnail.url;
                    }
                }

                // Set hidden value to attachment ID
                $hidden.val(attachment.id);

                // Show preview
                $preview.html(
                    '<img src="' + previewUrl + '" style="max-width:220px;max-height:160px;border-radius:6px;border:1px solid #d0d5dd;" />'
                );

                // Clear URL input (chose from library)
                $urlInput.val("");

                // Show remove button
                $removeBtn.show();
            });

            frame.open();
        });

        // ── URL paste input ──
        $(document).on("input", ".axion-image-url-input", function () {
            var $container = $(this).closest(".axion-image-field");
            var $hidden    = $container.find('input[type="hidden"]').first();
            var $preview   = $container.find(".axion-image-preview").first();
            var $removeBtn = $container.find(".axion-image-remove").first();

            var url = $.trim($(this).val());
            if (url) {
                $hidden.val(url);
                $preview.html(
                    '<img src="' + url + '" style="max-width:220px;max-height:160px;border-radius:6px;border:1px solid #d0d5dd;" />'
                );
                $removeBtn.show();
            } else {
                $hidden.val("");
                $preview.html("");
                $removeBtn.hide();
            }
        });

        // ── Remove button ──
        $(document).on("click", ".axion-image-remove", function (e) {
            e.preventDefault();
            var $container = $(this).closest(".axion-image-field");
            $container.find('input[type="hidden"]').first().val("");
            $container.find(".axion-image-preview").first().html("");
            $container.find(".axion-image-url-input").first().val("");
            $(this).hide();
        });

        // ══════════════════════════════════════
        // REPEATER
        // ══════════════════════════════════════

        // ── Add Row ──
        $(document).on("click", ".axion-repeater__add", function () {
            var name = $(this).data("name");
            var $repeater = $(this).closest(".axion-repeater");
            var $template = $repeater.find(
                '.axion-repeater__template[data-name="' + name + '"]'
            );
            var $rows = $repeater.find(".axion-repeater__rows");
            var newIndex = $rows.children().length;

            var html = $template.html();
            html = html.replace(/__INDEX__/g, newIndex);
            $rows.append(html);
        });

        // ── Remove Row ──
        $(document).on("click", ".axion-repeater__remove", function () {
            $(this)
                .closest(".axion-repeater__row")
                .fadeOut(200, function () {
                    $(this).remove();
                });
        });

        // ══════════════════════════════════════
        // SEO CHARACTER COUNTER
        // ══════════════════════════════════════
        $(document).on("input keyup", ".axion-char-count", function () {
            var $input = $(this);
            var max = parseInt($input.data("max-chars"), 10);
            var len = $input.val().length;
            var $counter = $input.siblings(".axion-char-counter");
            if ($counter.length) {
                $counter.text(len + "/" + max + " characters");
                $counter.css("color", len > max ? "#dc2626" : "#666");
            }
        });
    });
})(jQuery);
