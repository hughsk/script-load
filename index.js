var once = require('once')

module.exports = scriptLoad

function scriptLoad(url, callback) {
  callback = once(callback || throwup)

  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.async = true

  if (script.attachEvent) {
    script.attachEvent('onreadystatechange', loaded)
  } else {
    script.addEventListener('load', loaded, false)
    script.addEventListener('error', error, false)
  }

  script.src = url
  document.body.appendChild(script)

  function loaded(event) {
    if (event.type !== 'load' && !/^(ready|complete)$/g.test(
      (event.currentTarget || event.srcElement).readyState
    )) return

    if (script.removeEventListener) {
      script.removeEventListener('load', loaded, false)
    } else {
      script.detatchEvent('onreadystatechange', loaded)
    }

    callback(null, script)
  }

  function error(event) {
    script.removeEventListener('error', error, false)

    return callback(
        new Error('Script "' + shorten(url) + '" did not load successfully')
      , script
    )
  }
}

function shorten(str) {
  return str.length > 120 ? str.slice(0, 120) + '...' : str
}

function throwup(err) {
  if (err) throw err
}
