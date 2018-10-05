<?php
/**
 * Created by PhpStorm.
 * User: blanginoe
 * Date: 10/31/2017
 * Time: 12:39 PM
 */
/*
Template name: Main Products Detaill V2
*/
?>


<?php get_header(); ?>
<style>
    .gallery-item {
        width: 32%;
        height: 220px;
        float: left;
        margin: 0px 0.5%;
    }
    .classic-arrows2 .owl-nav {
        top: 20%;
    }
    .productoowl ul {
        margin-left: 30px;
    }
    @media (max-width: 767px) {
        .classic-arrows2 .owl-nav {
            top: 7%;
        }
    }
</style>

<?php
// INTERNAS ACF PRO
if( have_rows('cabecera') ):

	// loop through the rows of data
	while ( have_rows('cabecera') ) : the_row();

		if( get_row_layout() == 'cab' ): ?>

            <section class="subpage-header asd"sdf style="background-image: url('<?php the_sub_field('imagen_de_fondo'); ?>')">
                <div class="container">
                    <div class="site-title clearfix">
                        <h2><?php the_sub_field('titulo_cab'); ?></h2>
                        <ul class="breadcrumbs">
                            <li><a href="<?= home_url() ?>">Home</a></li>
                        </ul>
                    </div>

                </div>
            </section>
		<?php endif;


	endwhile;
endif;
?>


<!-- SERVICES CONTENT -->
<section>
    <div class="container">

        <div class="row">
	        <?php get_template_part( 'templates/content', 'product' );?>
            <div class="col-md-9 animate fadeInRight">

                    <div class="single-item-carousel classic-arrows2 owl-carousel" style="background-repeat: no-repeat;">
                       <?php
                       if( have_rows('productos') ):
                        // loop through the rows of data
                            while ( have_rows('productos') ) : the_row();
                                    if ( get_row_layout() == 'producto' ): ?>
                                    <div class="productoowl">
                                        <img src="<?php the_sub_field('imagen');?>" alt="<?php the_field('titulo') ?>">
                                        <h3><?php the_sub_field('titulo') ?></h3>
                                        <?php the_sub_field('descripcion') ?>
                                        <div style="clear:both;"></div>
                                        <div class="height-20"></div>
                                    </div>
                                    <?php endif; ?>
                            <?php endwhile; ?>
                       <?php endif; ?>
                    </div>


                <br>
                <br>







            </div>
        </div>
    </div>
</section>
<!-- / SERVICES CONTENT -->
<?php

    // GENERAL ACF PRO
    if( have_rows('general') ):

    // loop through the rows of data
    while ( have_rows('general') ) : the_row();

    if( get_row_layout() == 'quienes_somos' ):
    ?>
    <!-- QUIENES SOMOS -->
    <section class="bg-blue">
        <div class="container">
            <div class="row">
                <div class="col-md-6 animate fadeInLeft">
                    <h2><?php the_sub_field('titulo'); ?></h2>
                    <div class="height-10"></div>
                    <p><?php the_sub_field('texto'); ?> </p>
                    <div class="height-20"></div>
					<?php if( get_sub_field('boton') ): ?>
                        <a href="<?php the_sub_field('boton_link'); ?>" class="btn btn-bordered-dark" data-text="<?php the_sub_field('boton'); ?>"><?php the_sub_field('boton'); ?></a>
					<?php endif; ?>
                    <div class="height-40"></div>
                </div>
                <div class="col-md-6 animate fadeInRight">
					<?php if( get_sub_field('imagen') ): ?>
                        <img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>">
					<?php endif; ?>

                </div>
            </div>
        </div>
    </section>
    <!-- /  -->
<?php elseif ( get_row_layout() == 'newsletter' ): ?>

<div class="contact-us-bar">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class=" animate fadeInLeft text-center"><?php the_sub_field('titulo'); ?></h4>
            </div>
            <div class="register" style="width:600px; margin:auto; float:none; margin-top:40px; display:block !Important;">
                <input type="text" placeholder="Registro al Newsletter" name="subscribe_email" id="subscribe_email" onkeypress="removeChecks();" class="input"  style="min-width:490px;">
                <button class="btn btn-primary" name="Subscribe" type="submit"  onclick="validateSubscription();" style="min-width:100px; margin-top: 0px;"><?php the_sub_field('boton'); ?></button>
            </div>
        </div>
    </div>
</div>

<?php elseif ( get_row_layout() == 'parallax' ): ?>

            <?php
if( get_sub_field('imagen_de_fondo') ):

$background = 'style="background-image: url('.get_sub_field('imagen_de_fondo').');"';

else:

$background = '';

endif;

?>

<!-- PORQUE-->
<section class="different-services text-center parallax" <?= $background ?>>
    <div class="container">
        <div class="heading animate bounceIn">
            <h1 class="color-white"><?php the_sub_field('titulo'); ?></h1>
            <p class="color-white"><?php the_sub_field('texto'); ?></p>
        </div>
    </div>
</section><!-- / -->

<?php elseif ( get_row_layout() == 'objetivos' ): ?>

<!-- OBJETICOS -->
<div class="container">
    <div class="funfacts text-center">
        <div class="advisor-overlay"></div>
        <div class="funfacts-inner">
            <h2><?php the_sub_field('titulo'); ?></h2>
            <p><?php the_sub_field('texto'); ?></p>
            <div class="row text-center" id="counters">
                <div class="col-md-3 col-xs-6">
                    <div class="counter">
                        <img src="<?php the_sub_field('objetivo_1_icono'); ?>" alt="<?php the_sub_field('objetivo_1_titulo'); ?>" class="margin-bottom-20">
                        <h6 class="counter-details"><?php the_sub_field('objetivo_1_titulo'); ?></h6>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="counter">
                        <img src="<?php the_sub_field('objetivo_2_icono'); ?>" alt="<?php the_sub_field('objetivo_2_titulo'); ?>" class="margin-bottom-20">
                        <h6 class="counter-details"><?php the_sub_field('objetivo_2_titulo'); ?></h6>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="counter">
                        <img src="<?php the_sub_field('objetivo_3_icono'); ?>" alt="<?php the_sub_field('objetivo_3_titulo'); ?>" class="margin-bottom-20">
                        <h6 class="counter-details"><?php the_sub_field('objetivo_3_titulo'); ?></h6>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="counter">
                        <img src="<?php the_sub_field('objetivo_4_icono'); ?>" alt="<?php the_sub_field('objetivo_4_titulo'); ?>" class="margin-bottom-20">
                        <h6 class="counter-details"><?php the_sub_field('objetivo_4_titulo'); ?></h6>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- / CONTAINER -->
</div><!-- /  -->


<?php elseif ( get_row_layout() == 'carrousel_info' ): ?>

            <?php if( have_rows('bloque') ): ?>

<!-- BLOKES INFO -->
<section class="nopadding">
    <div class="container">
        <div class="services text-center">
            <div class="three-items-carousel owl-carousel">
				<?php while( have_rows('bloque') ): the_row();?>
                                    <?php if ( get_row_layout() == 'info' ): ?>

                <div class="service-box">
                    <img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>">
                    <h4><?php the_sub_field('titulo'); ?></h4>
                    <p><?php the_sub_field('subtitulo'); ?></p>
                </div>

				<?php endif; ?>
                                <?php endwhile; ?>
            </div>
        </div>
    </div>
</section><!-- / -->

<?php endif; ?>

		<?php elseif ( get_row_layout() == 'carrousel_casos_de_exito' ): ?>

			<?php if( have_rows('bloque') ): ?>

<!-- BLOKES INFO -->
<!-- CASOS DE EXITO -->
<section class="text-center bg-blue">
    <div class="container">
        <div class="heading text-center animate" style="margin-bottom:30px;">
            <h2>Nuestros Casos de Exito</h2>
            <p>Estas son algunas de las empresas que confiaron en nuestras soluciones.</p>
        </div>
        <div class="two-items-carousel owl-carousel casos">

			<?php while( have_rows('bloque') ): the_row();?>
									<?php if ( get_row_layout() == 'info' ): ?>

            <div class="image-and-text-box animate fadeInLeft">
                <div class="col-md-6"><a href="#"><img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>"></a></div>
                <div class="col-md-6">
                    <h3><a href="services.html"><?php the_sub_field('titulo'); ?></a></h3>
                    <p><?php the_sub_field('subtitulo'); ?></p>
                </div>
            </div>

			<?php endif; ?>
								<?php endwhile; ?>
        </div>
    </div>
</section><!-- /  -->



<?php endif; ?>


		<?php elseif ( get_row_layout() == 'carrousel_marcas' ): ?>

			<?php if( have_rows('bloque') ): ?>

<!-- BLOKES INFO -->
<!-- CLIENTES -->
<section class="text-center bg-dark parallax bg_clientes">
    <div class="container">
        <div class="heading text-center animate" style="margin-bottom:30px;">
            <h2 class="color-white">Nuestros clientes</h2>
        </div>
		<?php while( have_rows('bloque') ): the_row();?>
								<?php if ( get_row_layout() == 'info' ): ?>

        <div class="col-md-2"><img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>"></div>

		<?php endif; ?>
							<?php endwhile; ?>
    </div>
</section><!-- /  -->



<?php endif; ?>

		<?php elseif ( get_row_layout() == 'carrousel_novedades' ): ?>

			<?php if( have_rows('bloque') ): ?>

<!-- NOVEDADES -->
<section class="meet-our-advisors">
    <div class="container">
        <div class="heading text-center animate bounceIn">
            <h2>Novedades</h2>
        </div>
        <div class="three-items-carousel owl-carousel classic-arrows3">
			<?php while( have_rows('bloque') ): the_row();?>
							<?php if ( get_row_layout() == 'info' ): ?>

            <div class="team-member animate fadeInUp">
                <a href="<?php the_sub_field('link_novedad'); ?>"><img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>"></a>
                <a href="<?php the_sub_field('link_novedad'); ?>"><h4><?php the_sub_field('titulo'); ?></h4></a>
                <p><?php the_sub_field('subtitulo'); ?></p>
                <ul class="social-text">
	                <?php if( get_sub_field('link_novedad') ): ?>
                        <li><a target="_blank" class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_sub_field('link_novedad'); ?>">Facebook</a></li>
	                <?php endif; ?>
	                <?php if( get_sub_field('link_novedad') ): ?>
                        <li><a target="_blank" class="twitter" href="https://twitter.com/home?status=<?php the_sub_field('link_novedad'); ?>">Twitter</a></li>
	                <?php endif; ?>
	                <?php if( get_sub_field('link_novedad') ): ?>
                        <li><a target="_blank" class="google" href="https://plus.google.com/share?url=<?php the_sub_field('link_novedad'); ?>">Google</a></li>
	                <?php endif; ?>
                </ul>
            </div>

			<?php endif; ?>
						<?php endwhile; ?>
        </div>
    </div>
</section><!-- /  -->



<?php endif; ?>

		<?php endif;

endwhile;

else :

// no layouts found

endif;

?>



<?php get_footer(); ?>

<script type="text/javascript">
    $(document).ready(function(){
        //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
        //Vertical Sliding

        //Horizontal Sliding
        $('.boxgrid.slideright').hover(function(){
            $(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});
        }, function() {
            $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
        });
    });
</script>