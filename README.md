# Save UTM and GCLID Parameters to Gravity Forms Fields

When a user lands on any page with these URL parameters, the parameter values are saved in session cookies, which are then used to populate specific gravity form fields, even after you navigate around the site.

It supports the parameter names "gclid" and any parameters that starts with "utm_".

## Requirements:
This code works with Wordpress and the Gravity Forms plugin.
It uses jQuery but you can easily convert it to vanilla JS, if required.

## Instructions to use this code:
1. Copy the php code in your theme's functions.php and the js code in a global js file.
2. For any gravity form field, enable Advanced > Allow field to be populated dynamically and enter the paremter name in the field below. For example, "gclid",  "utm_source", or "utm_medium".
