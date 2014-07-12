<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">

<title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }} | {{ site.subtitle }}{% endif %}</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="robots" content="index, nofollow" />

<link rel="stylesheet" href="{{ "/css/style.css" | prepend: site.baseurl }}">

<!-- Theme version -->
<meta name="generator" content="Placeholder 1.1" />
<meta name="generator" content="Jekyll" />

<!-- Google Webfonts -->
<link href="http://fonts.googleapis.com/css?family=Lobster|Droid+Serif:r,b,i,bi|Merriweather" rel="stylesheet" type="text/css">

<!-- Woo Custom Typography -->
<style type="text/css">
#logo .site-title a {font:normal 40px/1.2em Lobster;color:#222222;}
#logo .site-description {font:italic 14px/1em Lobster;color:#999999;}
#main #intro p { font:normal 14px/1.5em Droid Serif;color:#555555; }
#footer p { font:normal 14px/1em Merriweather;color:#999; }
</style>

<!-- Options Panel Custom CSS -->
<style type="text/css">
#logo img { display:none; } .site-title { display:block!important; }
.site-description { display:block!important; }
</style>

</head>

<body class="home blog">

<div id="wrapper">

	<div id="header" class="col-full">

		<div id="logo">
      <h1 class="site-title"><a href="{{ site.url }}">{{ site.title }}</a></h1>
      <span class="site-description">{{ site.subtitle }}</span>
		</div><!-- /#logo -->

	</div><!-- /#header -->
    <div id="content" class="col-full">
    	<div id="main">

    		<div id="intro" class="block">
					<h3><span>{{ site.heading }}</span></h3>
					{{ site.description }}

					<br />

					<h3><span>Volumi</span></h3>

					<ol>
					{% for volume in site.data.volumes %}
					<li>
						Volume {{ volume.number }}. {{ volume.author }} {% if volume.curated %}(cur.){% endif %} : &laquo;{{ volume.title }}&raquo; (<a href="{{site.s3}}Kotoba-Volume-{{ volume.number }}.pdf">pdf</a>)
					</li> <br />
					{% endfor %}
					</ol>

					<br />

					<h3><span>Quaderni</span></h3>

					<ol>
					{% for book in site.data.books %}
  				<li>
						Quaderni {{ book.number }}. {{ book.author }} : &laquo;{{ book.title }}&raquo; (<a href="{{site.s3}}Kotoba-Quaderni-{{ book.number }}.pdf">pdf</a>)
  				</li> <br />
					{% endfor %}
					</ol>

				</div><!-- #intro -->

   		</div>
    </div><!-- /#content -->


	<div id="footer" class="col-full">

		<div id="copyright">
			<p>Editore: I.L.S.I.T. Srl, via Cavour 30, 21100 Varese. Tel: 0332 237304 &amp; email: editore@ssml.va.it</p>
		</div>

	</div><!-- /#footer  -->

</div><!-- /#wrapper -->

<!--stats_footer_test-->
{% include gauges.html %}

</body>
</html>
