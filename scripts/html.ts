# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize()
  # remove_scripts()
  # remove_all_styles()
  // This adds in the stylesheets and javascript, but only for this
	// docs section
	# add_assets()
	$("/html/head") {
		insert("link", rel: "stylesheet", type: "text/css", href: sass("teamsass"))
	}

	$$("#search, #header") {
	  remove()
	}
	$("/html/body/div[1]") {
	  inject_before(read("pages/header.html"))
	}
}
