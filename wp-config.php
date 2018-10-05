<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'skydata');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '$}NHl`L4- eUFA8oO@ /4Cb(qEOQ6<K%UD+I~u3_<mo~tSc#`l1:TPqu&)11(T[v');
define('SECURE_AUTH_KEY', 'o;}s`tsBQc.Be4+q8v@+0C88BOoUY m<GXywLidq:jSWyYq3KN^hw-.Cb)yx6V5k');
define('LOGGED_IN_KEY', 'o),#A@<&.--Uniw0:apv]bQl}3pP6Z.#68A|#^RJ~)N)W|RTVZI^z]@z$iuw%R?=');
define('NONCE_KEY', 'D$f#vi+~pg.nyK*m,hDU6ZdMEXSp{srzR%~@vsSg]uwEbPQ>C6,C%sGZ@m=;lU{T');
define('AUTH_SALT', '$PezUQwfthyp*bLrUt~D_|6%w>=o%]}A%+rE5/L(/&f[=?=>8>!H~.X`w2alnd],');
define('SECURE_AUTH_SALT', '3s%q[-,y^t+&MwSjW{<.?KWq:KxoN-*7$>hLw8M8>1;Mp}c@J;lj2paw^*!Je~uT');
define('LOGGED_IN_SALT', 'OE&R}`65$o[ql87Z+Bb4h@_/KiH[n>nQ+z;5F>5UfA7FNL_@hip271aKR2y.g_:J');
define('NONCE_SALT', '}TsF7ol*[2v6w2rswY BI-Y$%Wy1Q3J*a^F:PdJOF^?Ag @tj);pFp|udVWs=4}?');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'sky_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', true);
define( 'WP_DEBUG_LOG', true );
define('WP_DEBUG_DISPLAY', true);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

