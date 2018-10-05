


<footer id="footer">
    <div class="container">
        <div class="footer-top clearfix">

            <div class="row">
                <div class="col-md-3 col-sm-3">
                    <div class="footer-logo animate fadeInLeft"><a href="<?= home_url() ?>"><img src="<?php the_field('logo_footer', 'options');?>" alt=""></a></div>
                </div>
                <div class="col-md-9 col-sm-9">
                    <p><?php the_field('descripcion_footer', 'options');?></p>
                </div>
            </div>

            <div class="height-50"></div>

            <div class="footer-left">
                <div class="footer-address-widget clearfix">
                    <ul>
                        <li>
                            <i class="icon-telephone114"></i><?php the_field('panama_telefono', 'options');?><a href="mailto:<?php the_field('panama_email', 'options');?>">Oficina Panamá</a>
                        </li>
                        <li>
                            <i class="icon-telephone114"></i><?php the_field('costa_rica_telefono', 'options');?><a href="mailto:<?php the_field('costa_rica_email', 'options');?>">Oficina Costa Rica</a>
                        </li>

                        <li>
                            <i class="icon-telephone114"></i><?php the_field('nicaragua_telefono', 'options');?><a href="mailto:<?php the_field('nicaragua_email', 'options');?>">Oficina Nicaragua</a>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="usefull-links-widget clearfix">
                            <h4>Oficina Panamá</h4>

                            <strong>Oficinas</strong><br>
	                        <?php the_field('panama_oficina', 'options');?>
                            <strong>Atención telefónica</strong><br>
	                        <?php the_field('panama_telefono', 'options');?><br><br>

                            <strong>Email</strong><br>
                            <a style="color: white;" href="mailto:<?php the_field('panama_email', 'options');?>"><?php the_field('panama_email', 'options');?></a><br>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="twitter-widget clearfix">
                            <h4>Oficina Costa Rica</h4>

                            <strong>Oficinas</strong><br>
	                        <?php the_field('costa_rica_oficina', 'options');?>
                            <strong>Atención telefónica</strong><br>
	                        <?php the_field('costa_rica_telefono', 'options');?><br><br>

                            <strong>Email</strong><br>
                            <a style="color: white;" href="mailto:<?php the_field('costa_rica_email', 'options');?>"><?php the_field('costa_rica_email', 'options');?></a> <br>


                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="twitter-widget clearfix">
                            <h4>Oficina Nicaragua</h4>

                            <strong>Oficinas</strong><br>
			                <?php the_field('nicaragua_oficina', 'options');?>
                            <strong>Atención telefónica</strong><br>
			                <?php the_field('nicaragua_telefono', 'options');?><br><br>

                            <strong>Email</strong><br>
                            <a style="color: white;" href="mailto:<?php the_field('nicaragua_email', 'options');?>"><?php the_field('nicaragua_email', 'options');?></a> <br>


                        </div>
                    </div>
                </div>
            </div>
            
            


            <div class="footer-right">
                <div class="newsletter-widget">
                    <h4><?php the_field('titulo_newsletter', 'options');?></h4>
                    <p><?php the_field('subtitulo_newsletter', 'options');?></p>
                    <div class="form">
                        <p class="subscribe_success" id="subscribe_success" style="display:none;"></p>
                        <p class="subscribe_error" id="subscribe_error" style="display:none;"></p>
                        <form class="newsletter">
                            <input type="text" data-delay="300" placeholder="Su Nombre" id="subscribe_nombre"  class="input" style="color: black;">
                            <input type="text" data-delay="300" placeholder="Email" id="subscribe_email"  class="input"  style="color: black;">
							<input type="text" data-delay="300" placeholder="Telefono" id="subscribe_telefono"  class="input"  style="color: black;">
                            <select name="country" id="subscribe_country" class="input">
                                <option value="">Seleccionar País</option>
                                <option value="panama">Panamá</option>
                                <option value="costa_rica">Costa Rica</option>
                                <option value="nicaragua">Nicaragua</option>
                            </select>
                            <textarea name="subscribe_mensaje" placeholder="Mensaje"></textarea>
                            <button class="btn btn-primary" name="Subscribe" type="submit" data-text="<?php the_field('boton_newsletter', 'options');?>"><?php the_field('boton_newsletter', 'options');?></button>
                        </form>
                    </div>
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

	                    <?php if(get_field('linkedin', 'options')):?>
                        <li class="animate bounceIn" data-delay="300"><a href="<?php the_field('linkedin', 'options');?>" class="linkedin"><i class="icon-linkedin3"></i></a></li>
	                    <?php endif; ?>
	                    <?php if(get_field('google', 'options')):?>
                            <li class="animate bounceIn" data-delay="300"><a href="<?php the_field('google', 'options');?>" class="google-plus"><i class="icon-google"></i></a></li>
	                    <?php endif; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
<style>
    #footer .usefull-links-widget h4 {
        padding-bottom: 15px;
        color: #fff;
        font-size: 18px;
    }

    #footer .twitter-widget h4 {
        padding-bottom: 15px;
        color: #fff;
        font-size: 18px;
    }

    #footer .footer-top p {
        margin: 2px 0;
        font-size: 12px;
        line-height: 21px;
    }

</style>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6"><p>Coyright © <?= date('Y') ?> Skydata. Todos los derechos reservados.</p></div>
                <div class="col-md-6 col-sm-6 text-right"><p>Desarrollado por <a href="https://www.tuespacioweb.com.ar" target="_blank">Tuespacioweb</a> </p></div>
            </div>
        </div>
    </div>

</footer>
<!-- FOOTER SCRIPTS
================================================== -->
<script src="<?= get_template_directory_uri()?>/js/jquery-2.2.0.js"></script>
<script src="<?= get_template_directory_uri()?>/js/smooth-scroll.js"></script>
<script src="<?= get_template_directory_uri()?>/js/bootstrap.min.js"></script>
<script src="<?= get_template_directory_uri()?>/js/counter.js"></script>
<script src="<?= get_template_directory_uri()?>/js/canvasjs.min.js"></script>
<script src="<?= get_template_directory_uri()?>/js/common.js"></script>
<script src="<?= get_template_directory_uri()?>/js/scripts.js"></script>
<script src="<?= get_template_directory_uri()?>/js/hero-slider.js"></script>
<script>
    jQuery(document).ready(function($) {

        $(".newsletter").submit(function(e){
            e.preventDefault();

            $.ajax({
                url: "<?= home_url() ?>/wp-admin/admin-ajax.php", // or example_ajax_obj.ajaxurl if using on frontend
                data: {
                    'action': 'newsletter',
                    'nombre' : this.subscribe_nombre.value,
					'telefono' : this.subscribe_telefono.value,
                    'email' : this.subscribe_email.value,
                    'country' : this.subscribe_country.value,
                    'mensaje' : this.subscribe_mensaje.value

                },
                success:function(data) {
                    if(data > 0)
                    {
                        alert('Se agrego correctamente a nuestra base de Newsletter');
                    }
                },
                error: function(errorThrown){
                    console.log(errorThrown);
                }
            });

        });
        $(".contactoform").submit(function(e){
            e.preventDefault();

            $.ajax({
                url: "<?= home_url() ?>/wp-admin/admin-ajax.php", // or example_ajax_obj.ajaxurl if using on frontend
                data: {
                    'action': 'contactoform',
                    'nombre' : this.contact_name.value,
                    'email' : this.contact_email.value,
                    'telefono' : this.contact_phone.value,
                    'pais' : this.contact_pais.value,
                    'mensaje' : this.message.value

                },
                success:function(data) {
                    if(data > 0)
                    {
                        alert('Su consulta llego correctamente');
                    }
                },
                error: function(errorThrown){
                    console.log(errorThrown);
                }
            });

        });


    });
</script>
<?php wp_footer(); ?>
</body>
</html>
