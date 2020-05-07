# recipe-ripper
clips recipes out of webpages and generates full-length screenshots of recipecard

Must-dos

Do NOT use chromium 78 for this. Puppeteer in capture-website-cli requires Chromium 80
https://www.raspberrypi.org/forums/viewtopic.php?p=1634156#p1634156
( get from here: https://packages.debian.org/buster/armhf/chromium/download )

Specify an executablePath in the puppeteer call inside of capture-website's dependencies
https://github.com/puppeteer/puppeteer/issues/550#issuecomment-551991273

    ~/.npm-global/lib/node_modules/capture-website-cli/node_modules/capture-website/index.js

Strategies on the site: 

body {
visibility: false;
}

first rf element:
visibility: visible

Still makes a very long page    
