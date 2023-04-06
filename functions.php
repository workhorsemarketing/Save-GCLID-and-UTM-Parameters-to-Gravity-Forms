<?php
add_filter('gform_field_content', function ($field_content, $field) {
	if (!empty($field->inputName)) {
		$field_content = str_replace('name=', "data-gf-name='" . $field->inputName . "' name=", $field_content);
	}
	return $field_content;
}, 10, 2);