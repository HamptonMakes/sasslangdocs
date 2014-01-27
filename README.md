## Sass Docs

I've set this up to help style just the /documentation
subpath of the sass-lang.com site.


## Basics

Welcome to your Moovweb project! Moovweb is a great way to build a compelling front-end for a website. The files in this project describe the changes we want to make to the front end of a site. There's places in this project to add new images (assets/images/), styles (assets/stylesheets/) and even manipulate HTML (scripts/).

## Before Running This

To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://console.moovweb.com/download) to download and install.

We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [developer.moovweb.com](http://developer.moovweb.com).

You might find [the page about the scripts folder](http://developer.moovweb.com/docs/local/project_files) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://developer.moovweb.com/docs/local/project_files/stylesheet) for information on how we structure our stylesheets.

## Launching

Typically, on Mac or Linux, just browse to this project folder in a terminal and then run the following command:

    sudo moov server 

Then, just browse to [mlocal.sass-lang.com](http://mlocal.sass-lang.com) and you are ready to start developing!

## Deployment

Moovweb uses a git-based deployment system. To deploy, just type

    git commit -a -m 'New code'
    git push origin master

## More Info

See detailed documentation for Moovweb at [developer.moovweb.com](http://developer.moovweb.com).

## Domains
Remember to put all domains you're going to hit in your etc/hosts if you run your server with the `-auto-hosts=false` option.

    127.0.0.1   mlocal.sass-lang.com
