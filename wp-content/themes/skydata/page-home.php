<?php
/**
 * Created by PhpStorm.
 * User: blanginoe
 * Date: 10/31/2017
 * Time: 12:39 PM
 */
/*
Template name: Home
*/
?>


<?php get_header(); ?>
<style>
    .owl-carousel{ background-image:none;}
</style>




	    <?php

	    // check if the flexible content field has rows of data
	    if( have_rows('slider') ):?>

            <!-- MAIN BANNER -->
        <section class="cd-hero">
            <ul class="cd-hero-slider autoplay">
		    <?php while ( have_rows('slider') ) : the_row();

			    if( get_row_layout() == 'Slide' ):
                    ?>
                    <li class="selected">
                        <div class="cd-full-width">
                            <div class="container">
                                <h2 class="color-white"><?php the_sub_field('titulo'); ?> <br>
                                    <span class="color-default"><?php the_sub_field('subtitulo'); ?></span></h2>
                                <p class="color-white"> <?php the_sub_field('lema'); ?></p>
	                            <?php if( get_sub_field('boton_1') ): ?>
                                    <a href="<?php the_sub_field('boton_1_link'); ?>" class="btn btn-primary" data-text="<?php the_sub_field('boton_1'); ?>"><?php the_sub_field('boton_1'); ?></a>
	                            <?php endif; ?>
	                            <?php if( get_sub_field('boton_2') ): ?>
                                    <a href="<?php the_sub_field('boton_2_link'); ?>" class="btn btn-default" data-text="<?php the_sub_field('boton_2'); ?>"><?php the_sub_field('boton_2'); ?></a>
	                            <?php endif; ?>

                            </div>
                        </div>
                    </li>


			    <?php endif;

		    endwhile;

	    else :

		    // no layouts found

	    endif;

	    ?>


    </ul>

    <div class="cd-slider-nav">
        <nav class="container">
            <span class="cd-marker item-1"></span>

            <ul>
	            <?php

	            // check if the flexible content field has rows of data
	            if( have_rows('slider') ):

		            // loop through the rows of data
                    $count = 1;
		            while ( have_rows('slider') ) : the_row();

			            if( get_row_layout() == 'Slide' ):
				            ?>
                            <?php if( get_sub_field('icono') ): ?>
                                <?php $icono = get_sub_field('icono'); ?>
                            <?php else: ?>
				                <?php $icono = ''; ?>
                            <?php endif; ?>
                            <li class="<?php if($count == 1) echo 'selected'; $count++; ?>"><a href="#0">
                                    <img src="<?= $icono ?>" alt=""><span> <?php the_sub_field('titulo'); ?> </span></a>
                            </li>


			            <?php endif;

		            endwhile;?>

                    </ul>
                </nav>
            </div>
        </section> <!-- / MAIN BANNER -->
	            <?php else :

		            // no layouts found

	            endif;

	            ?>





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
                            <h1 style="font-weight: bold"><?php the_sub_field('titulo'); ?></h1>
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
                            <form class="newsletter">
                                <input type="hidden" id="subscribe_nombre" value="general" class="input">
                                <input type="email" placeholder="<?php the_sub_field('placeholder'); ?>" name="subscribe_email" id="subscribe_email" class="input"  style="min-width:490px;">
                                <button class="btn btn-primary" name="Subscribe" type="submit"  style="min-width:100px; margin-top: 0px;">
                                    <?php the_sub_field('boton'); ?>
                                </button>
                            </form>
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
                        <h1 class="color-white" style="font-weight: bold;"><?php the_sub_field('titulo'); ?></h1>
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
                        <h1 style="font-weight: bold"><?php the_sub_field('titulo'); ?></h1>
                        <p><?php the_sub_field('texto'); ?></p>
                        <div class="row text-center" id="counters">
                            <div class="col-md-3 col-xs-6">
                                <div class="counter">
                                    <span class="quantity-counter1 highlight"><?php the_sub_field('objetivo_1_number'); ?></span>
                                    <!--<img src="<?php /*the_sub_field('objetivo_1_icono'); */?>" alt="<?php /*the_sub_field('objetivo_1_titulo'); */?>" class="margin-bottom-20">-->
                                    <h6 class="counter-details"><?php the_sub_field('objetivo_1_titulo'); ?></h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <div class="counter">
                                    <span class="quantity-counter1 highlight"><?php the_sub_field('objetivo_2_number'); ?></span>
                                    <!--<img src="<?php /*the_sub_field('objetivo_2_icono'); */?>" alt="<?php /*the_sub_field('objetivo_2_titulo'); */?>" class="margin-bottom-20">-->
                                    <h6 class="counter-details"><?php the_sub_field('objetivo_2_titulo'); ?></h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <div class="counter">
                                    <span class="quantity-counter3 highlight"><?php the_sub_field('objetivo_3_number'); ?></span>
                                    <!--<img src="<?php /*the_sub_field('objetivo_3_icono'); */?>" alt="<?php /*the_sub_field('objetivo_3_titulo'); */?>" class="margin-bottom-20">-->
                                    <h6 class="counter-details"><?php the_sub_field('objetivo_3_titulo'); ?></h6>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-6">
                                <div class="counter">
                                    <span class="quantity-counter4 highlight"><?php the_sub_field('objetivo_4_number'); ?></span>
                                    <!--<img src="<?php /*the_sub_field('objetivo_4_icono'); */?>" alt="<?php /*the_sub_field('objetivo_4_titulo'); */?>" class="margin-bottom-20">-->
                                    <h6 class="counter-details"><?php the_sub_field('objetivo_4_titulo'); ?></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- / CONTAINER -->
            </div><!-- /  -->
<script type="text/javascript">

    jQuery(function(t){t("#counters").waypoint(function(){t(".quantity-counter1").countTo({from:0,to:<?php the_sub_field('objetivo_1_number'); ?>,speed:2e3,refreshInterval:50,onComplete:function(){console.debug(this)}}),t(".quantity-counter2").countTo({from:0,to:<?php the_sub_field('objetivo_2_number'); ?>,speed:2e3,refreshInterval:50,onComplete:function(){console.debug(this)}}),t(".quantity-counter3").countTo({from:0,to:1000,speed:2e3,refreshInterval:50,onComplete:function(){console.debug(this)}}),t(".quantity-counter4").countTo({from:0,to:10000,speed:2e3,refreshInterval:50,onComplete:function(){console.debug(this)}})},{offset:"100%",triggerOnce:!0})})
</script>

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
                            <h1 style="font-weight: bold">Nuestros Casos de Exito</h1>
                            <p>Estas son algunas de las empresas que confiaron en nuestras soluciones.</p>
                        </div>
                        <div class="two-items-carousel owl-carousel casos">

								<?php while( have_rows('bloque') ): the_row();?>
									<?php if ( get_row_layout() == 'info' ): ?>

                                        <div class="image-and-text-box animate fadeInLeft">
                                            <div class="col-md-6"><a href="<?php the_sub_field('url'); ?>"><img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>"></a></div>
                                            <div class="col-md-6">
                                                <h3><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('titulo'); ?></a></h3>
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
                <section class="text-center <?php /*bg-dark parallax bg_clientes*/ ?>">
                    <div class="container">
                        <div class="heading text-center animate" style="margin-bottom:30px;">
                            <h1 style="font-weight: bold" >Algunos de Nuestros Clientes</h1>
                        </div>
							<?php
                            $cont = 0;
                            while( have_rows('bloque') ): the_row();?>
								<?php if ( get_row_layout() == 'info' ): ?>
                                    <?php if($cont == 0) echo '<div class="row">'; ?>
                                        <div class="col-md-2"><img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>"></div>
		                            <?php $cont++; if(($cont % 6) == 0) echo '</div><div class="row" style="margin-top: 10px;">'; ?>
								<?php endif; ?>
							<?php endwhile;
							if($cont > 0) echo '</div>';
							?>
                        </div>
                </section><!-- /  -->



			<?php endif; ?>

		<?php elseif ( get_row_layout() == 'carrousel_novedades' ): ?>

			<?php if( have_rows('bloque') ): ?>

                <!-- NOVEDADES -->
                <section class="meet-our-advisors">
                    <div class="container">
                        <div class="heading text-center animate bounceIn">
                            <h1 style="font-weight: bold">Novedades</h1>
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

		<?php elseif ( get_row_layout() == 'novedades_automaticas' ): ?>
			<?php

			$myposts = get_posts( array(
				'posts_per_page' => 6,
				'category'       => 5
			) );


			?>


            <!-- NOVEDADES 123 -->
            <section class="meet-our-advisors">
                <div class="container">
                    <div class="heading text-center animate bounceIn">
                        <h1 style="font-weight: bold">Novedades</h1>
                    </div>
                    <div class="three-items-carousel owl-carousel classic-arrows3">
						<?php
						if ( $myposts ) :
							foreach ( $myposts as $post ) :
								setup_postdata( $post );
								?>
								<?php

								$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full');

								?>
                                <div class="team-member animate fadeInUp">
                                    <a href="<?php the_permalink(); ?>">
                                        <img src="<?= $featured_img_url ?>" alt="<?php the_title(); ?>">
                                    </a>
                                    <a href="<?php the_permalink(); ?>"><h4><?php the_title(); ?></h4></a>
                                    <p><?php the_excerpt(); ?></p>
                                    <ul class="social-text">

                                    <li>
                                        <a target="_blank" class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">Facebook</a>
                                    </li>
                                
                                    <li>
                                        <a target="_blank" class="twitter" href="https://twitter.com/home?status=<?php the_permalink(); ?>">Twitter</a>
                                    </li>


                                    <li>
                                        <a target="_blank" class="google" href="https://plus.google.com/share?url=<?php the_permalink(); ?>">Google</a>
                                    </li>

                                    </ul>
                                </div>

							<?php endforeach; ?>
						<?php endif; ?>
                    </div>
                </div>
            </section><!-- /  -->

		<?php endif;

	endwhile;

else :

	// no layouts found

endif;

?>








<?php get_footer(); ?>

