<aside class="col-md-4 animate fadeInRight">


    <!-- Search Widget
	============================================= -->
    <div class="sidebar-widget">
        <div class="search clearfix">
            <form method="get" action="<?= get_site_url() ?>/novedades/buscador">
                <input onkeyup="$('#formsearch').val($('#valuesearch').val())" id="valuesearch" type="text" placeholder="Buscar..." value="">
                <input id="formsearch" name="b" value="" type="hidden"/>
                <button type="submit" class="search-icon"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div>



    <!-- Recent posts
	============================================= -->
    <div class="sidebar-widget">


        <h3>Posts</h3>

	    <?php
	    $args = array(
		    'numberposts' => 3,
		    'offset' => 0,
		    'category' => 5,
		    'orderby' => 'post_date',
		    'order' => 'DESC',
		    'include' => '',
		    'exclude' => '',
		    'meta_key' => '',
		    'meta_value' =>'',
		    'post_type' => 'post',
		    'post_status' => 'publish',
		    'suppress_filters' => true
	    );

	    $recent_posts = wp_get_recent_posts( $args, ARRAY_A );
	    foreach($recent_posts as $rp):
		    $featured_img_url = get_the_post_thumbnail_url($rp['ID'],'full');
	    ?>

            <article class="popular-post">

                <a href="<?= get_site_url().'/'.$rp['post_name'] ?>"><img src="<?= $featured_img_url ?>" alt="<?= $rp['post_title'] ?>"></a>
                <h4><a href="<?= get_site_url().'/'.$rp['post_name'] ?>"><?= $rp['post_title'] ?></a></h4>
                <p class="popular-date"><?= $rp['post_date'] ?></p>
            </article>
        <?php endforeach; ?>


    </div>



    <!-- Categories Widget
	============================================= -->
    <div class="sidebar-widget clearfix">

        <h3>Categorias</h3>
        <ul class="categories">
        <?php
            $term_children = get_term_children( 5, 'category' );
            foreach($term_children as $tc) {
                $term = get_term($tc, 'category');

	            $category_link = get_category_link( $term->term_id );

                echo '<li><a href="'.$category_link .'"><i class="fa fa-angle-right"></i> ' . $term->name.' </a></li>';

            }
        ?>
        <?php


        ?>

        </ul>


    </div>



    <!-- Tags
	============================================= -->
    <div class="sidebar-widget clearfix">

        <h3>Tags</h3>

        <ul class="tags">
	        <?php
	        $tags = get_tags();
	        foreach($tags as $t) :
		        $tag_link = get_tag_link( $t->term_id );
            ?>

                <li><a href="<?= $tag_link ?>"> <?= $t->name ?> </a></li>
	        <?php
            endforeach;
	        ?>

        </ul>


    </div>




</aside>