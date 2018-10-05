<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>



<section class="subpage-header back_top_5" >
    <div class="container">
        <div class="site-title clearfix">
            <h2><?php the_title(); ?></h2>
            <ul class="breadcrumbs">
                <li><a href="<?= home_url() ?>">Home</a></li>
            </ul>
        </div>

    </div>
</section>


<!-- NEWS CONTENT -->
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-8 animate fadeInLeft">
                <div class="p-right-30">
                    <article class="blog-item">
                        <div class="blog-thumbnail">
							<?php
							$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full');
							if($featured_img_url){
								echo '<img class="response" alt="" src="'.$featured_img_url.'">';
							}
							?>

                        </div>
                        <div class="blog-content">
                            <h3 class="blog-title"><?php the_title(); ?></a></h3>
							<?php
							if ( have_posts() ) :
								while ( have_posts() ) : the_post();
									the_content();
								endwhile;
							else:
								echo '<p>'._e('Sorry, no posts matched your criteria.').'</p>';
							endif;
							?>
                            <hr>
                            <br>
                            <h4>Compartir post</h4>
                            <ul class="social">
                                <li class="animate bounceIn">
                                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?= get_permalink() ?>" class="facebook"><i class="icon-facebook-1"></i></a>
                                </li>

                                <li class="animate bounceIn" data-delay="100">
                                    <a target="_blank" href="https://twitter.com/home?status=<?= get_permalink() ?>" class="twitter"><i class="icon-twitter-1"></i></a>
                                </li>

                                <li class="animate bounceIn" data-delay="200">
                                    <a target="_blank" href="https://plus.google.com/share?url=<?= get_permalink() ?>" class="google-plus"><i class="icon-google"></i></a>
                                </li>

                                <li class="animate bounceIn" data-delay="300">
                                    <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=<?= get_permalink() ?>&title=<?= the_title() ?>&summary=SUMMARY&source=<?= get_permalink() ?>" class="linkedin"><i class="icon-linkedin3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </article>









                </div>

            </div>
            <?php get_template_part( 'templates/content', 'single' );?>


        </div>

    </div>
</section>
<!-- / NEWS CONTENT -->


<?php get_footer(); ?>
