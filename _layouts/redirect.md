<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="refresh" content="5;url={{site.s3}}{{ page.filename }}" />
<title>{% if page.title %}{{ page.title }} &middot; {{ site.title }}{% else %}{{ site.title }} &middot; {{ site.subtitle }}{% endif %}</title>
<script defer data-domain="kotoba.ssml.va.it" src="https://plausible.io/js/plausible.js"></script>
</head>
<body>
  <p>If you are not redirected automatically, follow the <a href='{{site.s3}}{{ page.filename }}'>link to the requested resource.</a></p>

  <!--stats_footer_test-->
  {% include gauges.html %}

  </body>
</html>
