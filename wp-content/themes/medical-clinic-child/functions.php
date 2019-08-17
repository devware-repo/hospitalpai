<?php
/**
 * @package 	WordPress
 * @subpackage 	Medical Clinic Child
 * @version		1.0.0
 * 
 * Child Theme Functions File
 * Created by CMSMasters
 * 
 */


function medical_clinic_child_enqueue_styles() {
	wp_enqueue_style('medical-clinic-child-style', get_stylesheet_uri(), array(), '1.0.0', 'screen, print');
}

add_action('wp_enqueue_scripts', 'medical_clinic_child_enqueue_styles', 9);
?>