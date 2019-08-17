<?php
/**
 * @cmsmasters_package 	Medical Clinic
 * @cmsmasters_version 	1.0.8
 */


global $product; ?>

<li>
	<a href="<?php echo esc_url( get_permalink( $product->get_id() ) ); ?>" title="<?php echo esc_attr( $product->get_title() ); ?>">
		<?php echo $product->get_image(); ?>
		<span class="product-title"><?php echo $product->get_title(); ?></span>
	</a>
	<?php 
	medical_clinic_woocommerce_rating('cmsmasters_theme_icon_star_empty', 'cmsmasters_theme_icon_star_full');
	
	echo $product->get_price_html(); 
	?>
</li>