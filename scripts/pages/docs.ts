// This adds in the stylesheets and javascript, but only for this
// docs section
add_assets()

$$("#search") {
  remove()
}

$("/html/body") {
  inner() {
    prepend(read("header.html"))
  }
}