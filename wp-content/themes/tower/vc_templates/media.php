<?php
/**
 * Shortcode attributes
 * @var $atts
 * @var $type
 * @var $image
 * @var $video
 * @var $alignment
 * @var $width
 * @var $animation
 * @var $link
 * Shortcode class
 * @var  WPBakeryShortCode_Media
 */
$output = '';
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );
		$output = '<div class="wpb_content_element media media_el animate_onoffset margin_'.$marginbottom.'">';
        $width_style="";
        if($alignment == 'center')
            $width_style = 'style="width:'.$width.'px;position:relative; left:50%; margin-left:-'.($width/2).'px;" ';
        if($type == 'image'){
            if(isset($image)){
            	if(!empty($image)) {
            
	                if(strpos($image, "http://") !== false){
	                    $image = $image;
	                } else {
	                    $bg_image_src = wp_get_attachment_image_src($image, 'full');
	                    $image = $bg_image_src[0];
	                }
	            }
                if($lightbox_link_bool == 'yes')
                    $output .= '<a class="lightbox-media" href="'.esc_url($lightbox_link).'">';
                $output .= '<img src="'.esc_url($image).'" alt="" class="type_image media_animation animation_'.esc_attr($animation).' alignment_'.esc_attr($alignment).'" '.$width_style.' />';
                if($lightbox_link_bool == 'yes')
                    $output .= '</a>';
            }
        }

        if($type == 'video'){
            $output .= '<div class="video_embeded" '.$width_style.'>';
            
            if($video_type == 'embed'){
                global $wp_embed;
                
                $output .= $wp_embed->run_shortcode('[embed class="animation_'.$animation.' video alignment_'.$alignment.' '.$width_style.'"]'.trim($embed_video).'[/embed]');
            }else{
                $output = '<div class="video-wrap"><video id="video_background" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0"> 

                                                                        <source src="'.esc_url($video_webm).'" type="video/webm"> 

                                                                        <source src="'.esc_url($video_mp4).'" type="video/mp4"> 

                                                      

                                                                        Video not supported </video></div>';
            }
            $output .= '</div>';
        }
        
        $output .= '</div>';
        echo $output; 
?>