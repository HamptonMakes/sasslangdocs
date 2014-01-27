# The main file executed by Tritium. The start of all other files.


match($path) {
  with(/documentation/) {
    match(inferred_content_type()) {
      with(/html/) {

        protect_xmlns()

        # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
        # simply remove the "UTF-8" argument.  e.g. html(){ ... }
        html("UTF-8") {
          @import "html.ts"
        }

        restore_xmlns()
      }
      
      else() {
        log("Passing through " + $content_type + " unmodified.")
      }
    }
  }
  else() {
    log("--> No page match in mappings.ts")
  }
}

