<?php
/**
 * Created by PhpStorm.
 * User: blanginoe
 * Date: 10/31/2017
 * Time: 12:39 PM
 */
/*
Template name: Contactenos
*/
?>


<?php get_header(); ?>

<?php
// INTERNAS ACF PRO
    if( have_rows('internas') ):

        // loop through the rows of data
        while ( have_rows('internas') ) : the_row();

            if( get_row_layout() == 'cabecera' ): ?>

                <section class="subpage-header back_top_5" style="background-image: url('<?php the_sub_field('imagen_de_fondo'); ?>')">
                    <div class="container">
                        <div class="site-title clearfix">
                            <h2><?php the_sub_field('titulo'); ?></h2>
                            <ul class="breadcrumbs">
                                <li><a href="<?= home_url() ?>">Inicio</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

            <?php elseif ( get_row_layout() == 'contacto' ): ?>

	            <?php if( have_rows('oficinas') ): ?>

                    <!-- CONTACT US -->
                    <section>
                        <div class="container">
                            <div class="row">
						            <?php while( have_rows('oficinas') ): the_row();?>
							            <?php if ( get_row_layout() == 'oficina' ): ?>

                                <div class="col-md-6" style="min-height: 830px;">
                                    <div class="map-with-address-widget animate fadeInLeft">
                                        <h3><?php the_sub_field('titulo'); ?></h3>
                                        <p><?php the_sub_field('descripcion'); ?></p>
                                        <div class="map"  style="position: relative; overflow: hidden;">
                                            <?php the_sub_field('mapa'); ?>
                                        </div>


                                        <div class="contact-info-widget">
	                                        <?php the_sub_field('descripcion_oficina'); ?>
                                        </div>
                                    </div>
                                </div>

							            <?php endif; ?>
						            <?php endwhile; ?>
                            </div>
                        </div>
                    </section>

	            <?php endif; ?>

            <?php elseif ( get_row_layout() == 'call_to_action' ): ?>



                <section class="bg-blue">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 animate fadeInLeft">
                                <h3><?php the_sub_field('titulo'); ?></h3>
                                <div class="row">
                                    <div class="col-md-4 col-sm-4">
	                                    <?php if( get_sub_field('imagen') ): ?>
                                            <img src="<?php the_sub_field('imagen'); ?>" class="quries-img" alt="<?php the_sub_field('titulo'); ?>">
		                                <?php else: ?>
                                            <img src="<?= get_template_directory_uri(); ?>/images/sales-quries-img.jpg" class="quries-img" alt="<?php the_sub_field('titulo'); ?>">
	                                    <?php endif; ?>

                                        <div class="height-20"></div>
                                    </div>
                                    <div class="col-md-8 col-sm-8">
	                                    <?php the_sub_field('descripcion'); ?>
                                    </div>
                                </div>
                                <div class="height-20"></div>
                                <h3><?php the_sub_field('titulo_2'); ?></h3>
                                <ul class="social">
	                                <?php if(get_field('facebook', 'options')):?>
                                        <li class="animate bounceIn"><a href="<?php the_field('facebook', 'options');?>" class="facebook"><i class="icon-facebook-1"></i></a></li>
	                                <?php endif; ?>

	                                <?php if(get_field('twitter', 'options')):?>
                                        <li class="animate bounceIn" data-delay="100"><a href="<?php the_field('twitter', 'options');?>" class="twitter"><i class="icon-twitter-1"></i></a></li>
	                                <?php endif; ?>

	                                <?php if(get_field('google', 'options')):?>
                                        <li class="animate bounceIn" data-delay="200"><a href="<?php the_field('google', 'options');?>" class="google-plus"><i class="icon-google"></i></a></li>
	                                <?php endif; ?>

	                                <?php if(get_field('facebook', 'options')):?>
                                        <li class="animate bounceIn" data-delay="300"><a href="<?php the_field('linkedin', 'options');?>" class="linkedin"><i class="icon-linkedin3"></i></a></li>
	                                <?php endif; ?>


                                </ul>
                                <div class="height-50"></div>
                            </div>
                            <div class="col-md-6 col-sm-6 animate fadeInRight">
                                <p class="success" id="success" style="display:none;"></p>
                                <p class="error" id="error" style="display:none;"></p>

                                <form class="contact-form contactoform" >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" data-delay="300" placeholder="Nombre" name="contact_name" id="contact_name" class="input">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" data-delay="300" placeholder="E-mail" name="contact_email" id="contact_email" class="input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" data-delay="300" placeholder="Telefono" name="contact_phone" id="contact_phone" class="input">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" data-delay="300" placeholder="País" name="contact_pais" id="contact_pais" class="input">
                                        </div>
                                    </div>
                                    <textarea data-delay="500" class="required valid" placeholder="Mensaje" name="message" id="message"></textarea>
                                    <button class="btn btn-primary" name="" type="submit" data-text="Enviar Mensaje">Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section><!-- / COMPANY OVERVIEW -->



            <?php endif;


        endwhile;
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
                                    <img src="<?php the_sub_field('imagen'); ?>" alt="<?php the_sub_field('titulo'); ?>">
                                    <h4><?php the_sub_field('titulo'); ?></h4>
                                    <p><?php the_sub_field('subtitulo'); ?></p>
                                    <ul class="social-text">
	                                    <?php if(get_field('facebook', 'options')):?>
                                            <li><a class="facebook" href="<?php the_field('facebook', 'options')?>">Facebook</a></li>
	                                    <?php endif; ?>
	                                    <?php if(get_field('twitter', 'options')):?>
                                            <li><a class="twitter" href="<?php the_field('twitter', 'options');?>">Twitter</a></li>
	                                    <?php endif; ?>
	                                    <?php if(get_field('youtube', 'options')):?>
                                            <li><a class="youtube" href="<?php the_field('youtube', 'options');?>">Youtube</a></li>
	                                    <?php endif; ?>
	                                    <?php if(get_field('google', 'options')):?>
                                            <li><a class="google" href="<?php the_field('google', 'options');?>">Google</a></li>
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

