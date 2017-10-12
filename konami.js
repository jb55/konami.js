function konami(cb, code){
  var i = 0;
  code = code || [38,38,40,40,37,39,37,39,66,65,13];
  window.addEventListener('keyup', function (e) {
    var key = e.keyCode;
    if (code[i] == key) {
      if (++i == code.length-1)
        return cb();
    }
    else
      i = key == code[0]? 1:0;
  })
}
