<?php
/**
 * Created by PhpStorm.
 * User: blanginoe
 * Date: 10/31/2017
 * Time: 12:39 PM
 */
/*
Template name: Main Products
*/
?>


<?php get_header(); ?>

<style>
    .texto_main {
        text-align: justify;
        margin-top: 25px;
    }
    .bloqueheader{
        background: #81b33fb0;
        padding: 20px;
        border-radius: 5px;
        font-size: 14px;
    }
    .nolink{
        color: white !important;
    }
ul{
margin-left: 25px;
}
</style>

<!-- SERVICES CONTENT -->
<section class="subpage-header back_top_1">
    <div class="container" style="min-height: 388px;">

        <div class="col-lg-12 txtcenter slogan_main"><?= get_field('titulo'); ?> </div>

        <div class="col-md-4 col-sm-4">
	        <?php if( get_field('imagen_1') ): ?>
                <a onclick="$('#detallever').click();" href="#ancla1"><img src="<?php the_field('imagen_1'); ?>" alt="" class="margin-bottom-30"></a>
            <?php else: ?>
                <a onclick="$('#detallever').click();" href="#ancla1"><img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/main1.png" alt="" class="margin-bottom-30"></a>
	        <?php endif; ?>
            <a onclick="$('#detallever').click();" href="#ancla1" class="nolink">
                <div class=" back_1 txtcenter bloqueheader">
                    <?php if( get_field('texto_1') ): ?>
                        <?php the_field('texto_1'); ?>
                    <?php else: ?>
                        Monitoree las actividades de su flota desde donde esté.
                    <?php endif; ?>
                </div>
            </a>
        </div>
        <div class="col-md-4 col-sm-4">
	        <?php if( get_field('imagen_2') ): ?>
                <a onclick="$('#detallever').click();" href="#ancla2"><img src="<?php the_field('imagen_2'); ?>" alt="" class="margin-bottom-30"></a>
	        <?php else: ?>
                <a onclick="$('#detallever').click();" href="#ancla2"><img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/main2.png" alt="" class="margin-bottom-30"></a>
	        <?php endif; ?>
            <a onclick="$('#detallever').click();" href="#ancla2" class="nolink">
                <div class=" back_2 txtcenter bloqueheader">
                    <?php if( get_field('texto_2') ): ?>
                        <?php the_field('texto_2'); ?>
                    <?php else: ?>
                        Gestione el mantenimiento su flota de manera sencilla.
                    <?php endif; ?>
                </div>
            </a>
        </div>
        <div class="col-md-4 col-sm-4">
	        <?php if( get_field('imagen_3') ): ?>
               <a onclick="$('#detallever').click();" href="#ancla3"> <img src="<?php the_field('imagen_3'); ?>" alt="" class="margin-bottom-30"></a>
	        <?php else: ?>
                <a onclick="$('#detallever').click();" href="#ancla3"><img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/main3.png" alt="" class="margin-bottom-30"></a>
	        <?php endif; ?>
            <a onclick="$('#detallever').click();" href="#ancla3" class="nolink">
                <div class=" back_3 txtcenter bloqueheader">
                    <?php if( get_field('texto_3') ): ?>
                        <?php the_field('texto_3'); ?>
                    <?php else: ?>
                        Mida la productividad de sus colaboradores con aplicaciones “amigables”.
                    <?php endif; ?>
                </div>
            </a>
        </div>

        <div class="clear"></div>




    </div>
</section>
<!-- / SERVICES CONTENT -->





<?php



// Productos ACF PRO
if( have_rows('productos') ):?>
    <!-- SERVICES CONTENT -->
    <section>
    <div class="container">

        <div class="row margin-bottom-100">
            <h3 style="cursor: pointer" id="detallever" class="txtcenter margin-bottom-30">Ver Detalle</h3>
        </div>


<?php
	// loop through the rows of data
    $count = 1;
	while ( have_rows('productos') ) : the_row();?>

		<?php if ( get_row_layout() == 'productos_4_columnas' ): ?>

            <a id="ancla<?= $count; ?>"></a>
                    <div class="row margin-bottom-100 detalle">
                        <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>
                        <?php if( have_rows('producto') ): ?>
                            <?php while( have_rows('producto') ): the_row();?>
                                <?php if ( get_row_layout() == 'prod' ): ?>
                                    <div class="col-md-3 col-sm-3">
                                        <div class="col-md-12"> <img src="<?php the_sub_field('imagen'); ?>" alt="" class="icono_main"> </div>
                                        <div class="col-md-12 texto_main"><?php the_sub_field('descripcion'); ?></div>
                                    </div>
                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>
                    </div>


		<?php elseif ( get_row_layout() == 'productos_3_columnas' ): ?>

            <a id="ancla<?= $count; ?>"></a>
                    <div class="row margin-bottom-100 detalle">
                        <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>
						<?php if( have_rows('producto') ): ?>
							<?php while( have_rows('producto') ): the_row();?>
								<?php if ( get_row_layout() == 'prod' ): ?>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="col-md-12"> <img src="<?php the_sub_field('imagen'); ?>" alt="" class="icono_main"> </div>
                                        <div class="col-md-12 texto_main"><?php the_sub_field('descripcion'); ?></div>
                                    </div>
								<?php endif; ?>
							<?php endwhile; ?>
						<?php endif; ?>
                    </div>

		<?php elseif ( get_row_layout() == 'productos_2_columnas' ): ?>

            <a id="ancla<?= $count; ?>"></a>
                    <div class="row margin-bottom-100 detalle">
                        <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>
						<?php if( have_rows('producto') ): ?>
							<?php while( have_rows('producto') ): the_row();?>
								<?php if ( get_row_layout() == 'prod' ): ?>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="col-md-12"> <img src="<?php the_sub_field('imagen'); ?>" alt=""  class="imgmedium"> </div>
                                        <div class="col-md-12 texto_main"><?php the_sub_field('descripcion'); ?></div>
                                    </div>
								<?php endif; ?>
							<?php endwhile; ?>
						<?php endif; ?>
                    </div>
		<?php elseif ( get_row_layout() == 'productos_imagen_texto' ): ?>

            <a id="ancla<?= $count; ?>"></a>
            <div class="row margin-bottom-100 detalle">
                <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>
                <div class="col-md-6 col-sm-6 text-center">
	                <?php if( get_sub_field('imagen') ): /* class="imgfull" */ ?>
                        <img src="<?php the_sub_field('imagen') ?>" alt="" >
	                <?php else: ?>
                        <img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/ico_v_9.png" alt="" class="imgfull">
	                <?php endif; ?>
                </div>

                <div class="col-md-6 col-sm-6">
	                <?php if( get_sub_field('descripcion') ): ?>
                        <div class="col-md-12 texto_main txtright"><?php the_sub_field('descripcion') ?></div>
	                <?php else: ?>
                        <div class="col-md-12 texto_main txtright">Conozca los Net Radios, dispositivos inteligentes con cobertura 3G y Wi-Fi, que cuentan con las siguientes características innovadoras:</div>
	                <?php endif; ?>

                </div>
            </div>
		<?php elseif ( get_row_layout() == 'productos_texto_imagen' ): ?>

            <a id="ancla<?= $count; ?>"></a>
            <div class="row margin-bottom-100 detalle">
                <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>
                <div class="col-md-6 col-sm-6">
					<?php if( get_sub_field('descripcion') ): ?>
                        <div class="col-md-12 texto_main txtleft"><?php the_sub_field('descripcion') ?></div>
					<?php else: ?>
                        <div class="col-md-12 texto_main txtleft">Conozca los Net Radios, dispositivos inteligentes con cobertura 3G y Wi-Fi, que cuentan con las siguientes características innovadoras:</div>
					<?php endif; ?>

                </div>
                <div class="col-md-6 col-sm-6 text-center">
		            <?php if( get_sub_field('imagen') ): /* class="imgfull" */ ?>
                        <img src="<?php the_sub_field('imagen') ?>" alt="">
		            <?php else: ?>
                        <img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/ico_v_9.png" alt="">
		            <?php endif; ?>
                </div>
            </div>

		<?php elseif ( get_row_layout() == 'productos_1_columna_y_3_columnas' ): ?>

            <a id="ancla<?= $count; ?>"></a>
            <div class="row margin-bottom-100 detalle">
                <h3 class="txtcenter margin-bottom-30"><?php the_sub_field('titulo'); ?></h3>

                <div class="col-md-4 col-sm-4">
	                <?php if( get_sub_field('imagen_col_1') ): ?>
                        <img src="<?php the_sub_field('imagen_col_1') ?>" alt="<?php the_sub_field('titulo'); ?>">
	                <?php else: ?>
                        <img src="<?= get_template_directory_uri() ?>/images/icos/soluciones/ico_v_9.png" alt="<?php the_sub_field('titulo'); ?>">
	                <?php endif; ?>
                </div>

                <div class="col-md-8 col-sm-8">
	                <?php if( get_sub_field('titulo_col_1') ): ?>
                        <div class="col-md-12 texto_main txtleft" style="font-size: 18px;"><?php the_sub_field('titulo_col_1') ?></div>
	                <?php else: ?>
                        <div class="col-md-12 texto_main txtleft">Conozca los Net Radios, dispositivos inteligentes con cobertura 3G y Wi-Fi, que cuentan con las siguientes características innovadoras:</div>
	                <?php endif; ?>

                </div>


                <div class="clear margin-bottom-30"></div>

	            <?php if( have_rows('producto') ): ?>
		            <?php while( have_rows('producto') ): the_row();?>
			            <?php if ( get_row_layout() == 'prod' ): ?>
                            <div class="col-md-4 col-sm-4">
                                <div class="col-md-12"> <img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('descripcion'); ?>"  class="icono_main"> </div>
                                <div class="col-md-12 texto_main"><?php the_sub_field('descripcion'); ?></div>
                            </div>
			            <?php endif; ?>
		            <?php endwhile; ?>
	            <?php endif; ?>



            </div>

		<?php endif; ?>

	<?php $count++;  endwhile;?>

    </div>
    </section><!-- / -->

<?php    else :

        // no layouts found

    endif;

?>








<?php get_footer(); ?>

