# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize()

  @import "mappings.ts"
}
