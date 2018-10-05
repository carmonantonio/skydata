<?php
/**
 * Twenty Sixteen functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;*/
/**
 * Twenty Sixteen only works in WordPress 4.4 or later.
 */
if ( version_compare( $GLOBALS['wp_version'], '4.4-alpha', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
}

if ( ! function_exists( 'skydata_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * Create your own twentysixteen_setup() function to override in a child theme.
 *
 * @since Twenty Sixteen 1.0
 */
function skydata_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed at WordPress.org. See: https://translate.wordpress.org/projects/wp-themes/twentysixteen
	 * If you're building a theme based on Twenty Sixteen, use a find and replace
	 * to change 'twentysixteen' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'twentysixteen' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for custom logo.
	 *
	 *  @since Twenty Sixteen 1.2
	 */
	add_theme_support( 'custom-logo', array(
		'height'      => 240,
		'width'       => 240,
		'flex-height' => true,
	) );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1200, 9999 );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'twentysixteen' ),
		'social'  => __( 'Social Links Menu', 'twentysixteen' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'status',
		'audio',
		'chat',
	) );



	// Indicate widget sidebars can use selective refresh in the Customizer.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif; // skydata_setup



add_action( 'after_setup_theme', 'skydata_setup' );

/**
 * Registers a widget area.
 *
 * @link https://developer.wordpress.org/reference/functions/register_sidebar/
 *
 * @since Twenty Sixteen 1.0
 */
function skydata_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'twentysixteen' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Add widgets here to appear in your sidebar.', 'twentysixteen' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );


}
add_action( 'widgets_init', 'skydata_widgets_init' );


// Register Custom Navigation Walker
if ( ! file_exists( get_template_directory() . '/wp-bootstrap-navwalker.php' ) ) {
    // file does not exist... return an error.
    return new WP_Error( 'wp-bootstrap-navwalker-missing', __( 'It appears the wp-bootstrap-navwalker.php file may be missing.', 'wp-bootstrap-navwalker' ) );
} else {
    // file exists... require it.
    require_once get_template_directory() . '/wp-bootstrap-navwalker.php';
}


// REMUEVE LOS <p> del WYSIWYG del ACF PRO
/*function acf_wysiwyg_remove_wpautop() {
	remove_filter('acf_the_content', 'wpautop' );
}
add_action('acf/init', 'acf_wysiwyg_remove_wpautop', 15);*/
function my_acf_init() {

	acf_update_setting('google_api_key', 'AIzaSyB6yZxFI5k0F0eZZQvt_LWJMO3bRYi1vJk');
}

add_action('acf/init', 'my_acf_init');


// Registrar página de opciones
if( function_exists('acf_add_options_page') ) {


	acf_add_options_page(array(
		'page_title'    => 'Tuespacioweb',
		'menu_title'    => 'Tuespacioweb',
		'menu_slug'     => 'tuespacioweb',
		'icon_url'      => 'dashicons-share', // Add this line and replace the second inverted commas with class of the icon you like
		'position'      => false,
		'redirect'      => false
	));
	acf_add_options_sub_page(array(
		'page_title'    => 'Redes Sociales',
		'menu_title'    => 'Redes Sociales',
		'menu_slug'     => 'tuespacioweb-redes-sociales',
		'icon_url'      => 'dashicons-share', // Add this line and replace the second inverted commas with class of the icon you like
		'position'      => 20,
		'parent_slug'   => 'tuespacioweb',
		'redirect'      => false
	));
	acf_add_options_sub_page(array(
		'page_title'    => 'Banners',
		'menu_title'    => 'Banners',
		'menu_slug'     => 'tuespacioweb-banners',
		'icon_url'      => 'dashicons-welcome-widgets-menus', // Add this line and replace the second inverted commas with class of the icon you like
		'position'      => 21,
		'parent_slug'   => 'tuespacioweb',
		'redirect'      => false
	));
	acf_add_options_sub_page(array(
		'page_title'    => 'Footer',
		'menu_title'    => 'Footer',
		'menu_slug'     => 'tuespacioweb-footer',
		'icon_url'      => 'dashicons-store', // Add this line and replace the second inverted commas with class of the icon you like
		'position'      => 22,
		'parent_slug'   => 'tuespacioweb',
		'redirect'      => false
	));
	acf_add_options_sub_page(array(
		'page_title'    => 'Menus',
		'menu_title'    => 'Menus',
		'menu_slug'     => 'tuespacioweb-menus',
		'icon_url'      => 'dashicons-share', // Add this line and replace the second inverted commas with class of the icon you like
		'position'      => 23,
		'parent_slug'   => 'tuespacioweb',
		'redirect'      => false
	));
}

function cl_set_global_options_pages($current_screen) {

  // IDs of admin options pages that should be "global"
  $page_ids = array(
    "toplevel_page_acf-options-test"
  );

  if (in_array($current_screen->id, $page_ids)) {
    add_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
  }
}
add_action( 'current_screen', 'cl_set_global_options_pages' );

function newsletter() {

	// The $_REQUEST contains all the data sent via ajax
	if ( isset($_REQUEST) ) {
		global $wpdb;
		$email = $_REQUEST['email'];
		$nombre = $_REQUEST['nombre'];
        $telefono = $_REQUEST['telefono'];
		$country = $_REQUEST['country'];
		$mensaje = $_REQUEST['mensaje'];

		$wpdb->insert('sky_contactoform', array(
			'nombre' => $nombre,
			'mail' => $email,
			'telefono' => $telefono,
			'mensaje' => $mensaje,
			'country' => $country
		));

		echo $wpdb->insert_id;

	}

	// Always die in functions echoing ajax content
	die();
}

add_action( 'wp_ajax_newsletter', 'newsletter' );
add_action( 'wp_ajax_nopriv_newsletter', 'newsletter' );

function contactoform() {

	// The $_REQUEST contains all the data sent via ajax
	if ( isset($_REQUEST) ) {
		global $wpdb;
		$email = $_REQUEST['email'];
		$nombre = $_REQUEST['nombre'];
		$telefono = $_REQUEST['telefono'];
		$pais = $_REQUEST['pais'];
		$mensaje = $_REQUEST['mensaje'];

		$wpdb->insert('sky_contactoform', array(
			'nombre' => $nombre,
			'mail' => $email,
			'telefono' => $telefono,
			'mensaje' => $mensaje,
			'country' => $pais
		));



		echo $wpdb->insert_id;

	}

	// Always die in functions echoing ajax content
	die();
}

add_action( 'wp_ajax_contactoform', 'contactoform' );
add_action( 'wp_ajax_nopriv_contactoform', 'contactoform' );