# script-load [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

[![browser support](https://ci.testling.com/hughsk/script-load.png)](https://ci.testling.com/hughsk/script-load)

Given a URL, asynchronously load a script in the browser.

## Usage ##

[![script-load](https://nodei.co/npm/script-load.png?mini=true)](https://nodei.co/npm/script-load)

### `require('script-load')(url[, callback])` ###

Loads and runs `url`, calling `callback(err, script)` when complete: `err` is
an error if something went wrong, and `script` is the script element created
that has been loaded onto the page.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/script-load/blob/master/LICENSE.md) for details.
