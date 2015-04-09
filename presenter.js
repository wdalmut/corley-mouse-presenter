(function () {
  $(document).mousedown(function(e){
    switch(e.button) {
      case 0:
        Reveal.next()
        break;
      case 2:
        Reveal.prev()
        break;
    }
    return false;
  });
})();
