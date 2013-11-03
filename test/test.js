var test = require('tape')
var load = require('../')

test('load an actual script', function(t) {
  load('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function(err) {
    t.ifError(err)
    t.ok(window.$)
    t.end()
  })
})

test('provide an error with the incorrect script', function(t) {
  load('non-existent.js', function(err) {
    t.ok(err)
    t.end()
  })
})
