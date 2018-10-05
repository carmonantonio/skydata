<!DOCTYPE html >
<html <?php language_attributes(); ?> class="no-js">
<head>

    <base href="" />

    <!-- Basic Page Needs
================================================== -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>SkyData</title>
    <?php //wp_head(); ?>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">


    <!-- Mobile Specific Metas
================================================== -->
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="format-detection" content="telephone=no">


    <!-- Favicons
    ================================================== -->
    <link rel="icon" type="image/png" href="<?= get_template_directory_uri()?>/images/favicon.png">


    <!-- Fonts
    ================================================== -->
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700%7COpen+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

    <!-- CSS
     ================================================== -->

    <!-- bootstrap -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/bootstrap.css">

    <!-- advisor -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/advisor.css">

    <!-- plugins -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/plugins.css">

    <!-- advisor color -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/color-default.css">

    <!-- hero slider -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/hero-slider.css">

    <!-- responsive -->
    <link rel="stylesheet" href="<?= get_template_directory_uri()?>/css/responsive.css">





    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- HEADER SCRIPTS

    ================================================== -->
    <script src="<?= get_template_directory_uri()?>/js/modernizr.js"></script>

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1088876911237265');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1"
             src="https://www.facebook.com/tr?id=1088876911237265&ev=PageView
&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->

</head>
<body class="fixed-header">




<!-- LOADER -->
<div id="loader" class="loader">
    <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
</div>




<!-- HERDER -->
<header id="header">

    <!-- TOP BAR -->
    <div class="top-bar clearfix">
        <p>Bienvenido a SkyData</p>
        <ul>
            <li> <?php the_field('panama_telefono', 'options');?> / Oficina Panama  / </li>
            <li> <?php the_field('costa_rica_telefono', 'options');?> / Oficina Costa Rica   / </li>
            <li> <a href="mailto:<?php the_field('costa_rica_email', 'options');?>"><?php the_field('costa_rica_email', 'options');?></a></li>

        </ul>
        <span class="slogan_top">Skydata lider en soluciones integrales competitivas. </span>


    </div>
    <!-- / TOP BAR -->

    <div class="container" style="width:100%;">



        <!-- HEADER INNER -->
        <div class="header clearfix">

            <a href="<?= get_site_url(); ?>" class="logo"><img src="<?= get_template_directory_uri()?>/images/logo.png" alt=""></a>


            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-nav" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>


            <div class="search-btn">
                <a href="javascript:void(0);" class="search-trigger"><i class="icon-icons185"></i></a>
            </div>

            <div class="register">
                <span class="info_register">Información de nuestras soluciones</span>
                <div class="clearfix"></div>
                <form class="newsletter">
                    <input type="hidden" id="subscribe_nombre" value="cabecera" class="input">
                    <input type="hidden" id="subscribe_country" value="cabecera" class="input">
                    <input type="hidden" id="subscribe_mensaje" value="cabecera" class="input">
                    <input type="email" placeholder="<?php the_field('titulo_newsletter', 'options');?>"  id="subscribe_email" class="input">
                    <button class="btn btn-primary" name="Subscribe" type="submit"><?php the_field('boton_newsletter', 'options');?></button>
                </form>
            </div>






            <div class="search-container">
                <i class="fa fa-times header-search-close"></i>
                <div class="search-overlay"></div>
                <div class="search">
                    <form method="get" action="<?= get_site_url() ?>/novedades/buscador">
                        <input onkeyup="$('#formsearch1').val($('#valuesearch1').val())" id="valuesearch1" type="text" placeholder="Buscar..." value="">
                        <input id="formsearch1" name="b" value="" type="hidden"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>


            <?php

            $args = [
                'menu_class' =>  'nav nav-pills',
                'container' =>  'nav',
                'container_class' =>  'main-nav navbar-collapse collapse',
                'container_id' =>  'primary-nav',
                'depth' =>  '3',
                'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                'walker'            => new wp_bootstrap_navwalker()
            ];

            wp_nav_menu( $args ); ?>


        </div><!-- / HEADER INNER -->

    </div><!-- / CONTAINER -->

</header><!-- / HERDER -->