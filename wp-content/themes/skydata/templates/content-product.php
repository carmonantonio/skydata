<?php
/**
 * Created by PhpStorm.
 * User: blanginoe
 * Date: 12/13/2017
 * Time: 10:55 AM
 */

?>

<div class="col-md-3 animate fadeInLeft">
	<aside>

		<ul class="left-nav">
			<?php
			global $wp;
			$current_url = home_url(add_query_arg(array(),$wp->request));

			if(strpos($current_url, '/soluciones/')):
                // MENUS ACF PRO
                if( have_rows('soluciones_padres', 'option') ):

                    // loop through the rows of data
                    while ( have_rows('soluciones_padres','option') ) : the_row();

                        if( get_row_layout() == 'soluciones_padre' ):

                            ?>

                            <?php
                            $activo = '';
                            if(strpos($current_url, get_sub_field('soluciones_link')) === 0)
                            {
                                $activo = 'active';
                            } ?>
                            <li class=""><a href="<?php the_sub_field('soluciones_link') ?>"  class="<?= $activo ?>"><?php the_sub_field('soluciones_titulo') ?> <i class="fa fa-angle-right"></i></a>
                                <?php if($activo == 'active'): ?>
                                        <ul class="">

                                    <?php if( have_rows('soluciones_hijos','option') ): ?>


                                                        <?php while( have_rows('soluciones_hijos','option') ): the_row();?>
                                                            <?php if ( get_row_layout() == 'hijo' ): ?>
                                                                <li><a href="<?php the_sub_field('soluciones_link') ?>" class=""><?php the_sub_field('soluciones_titulo') ?></a></li>
                                                            <?php endif; ?>
                                                        <?php endwhile; ?>


                                    <?php endif; ?>
                                        </ul>
                                <?php endif; ?>
                            </li>
                        <?php endif;


                    endwhile;
                endif;
			endif;
			?>
            <?php
            // MENUS ACF PRO
            if(strpos($current_url, '/productos/')):
                if( have_rows('productos_padres', 'option') ):

                    // loop through the rows of data
                    while ( have_rows('productos_padres','option') ) : the_row();

                        if( get_row_layout() == 'productos_padre' ):

                            ?>

                            <?php
                            $activo = '';
                            if(strpos($current_url, get_sub_field('productos_link')) === 0)
                            {
                                $activo = 'active';
                            } ?>
                            <li class=""><a href="<?php the_sub_field('productos_link') ?>"  class="<?= $activo ?>"><?php the_sub_field('productos_titulo') ?> <i class="fa fa-angle-right"></i></a>
                                <?php if($activo == 'active'): ?>
                                    <ul class="">

                                        <?php if( have_rows('productos_hijos','option') ): ?>


                                            <?php while( have_rows('productos_hijos','option') ): the_row();?>
                                                <?php if ( get_row_layout() == 'hijo' ): ?>
                                                    <li><a href="<?php the_sub_field('productos_link') ?>" class=""><?php the_sub_field('productos_titulo') ?></a></li>
                                                <?php endif; ?>
                                            <?php endwhile; ?>


                                        <?php endif; ?>
                                    </ul>
                                <?php endif; ?>
                            </li>
                        <?php endif;


                    endwhile;
                endif;
            endif;
            ?>
		</ul>

		<div class="help-widget">
			<h5><?php the_field('banner_sidebar_producto_titulo', 'options');?></h5>
			<p><?php the_field('banner_sidebar_producto_descripcion', 'options');?></p>
			<img src="<?php the_field('banner_sidebar_producto_imagen', 'options');?>" alt="<?php the_field('banner_sidebar_producto_titulo', 'options');?>" class="margin-bottom-30">
			<a href="<?php the_field('banner_sidebar_producto_link', 'options');?>" class="btn btn-primary btn-white center" data-text="Contactenos"><?php the_field('banner_sidebar_producto_boton', 'options');?></a>
		</div>




	</aside>
</div>
