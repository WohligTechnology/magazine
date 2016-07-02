(function() {
  Revealer.prototype.options = {
  	// total number of revealing layers (min is 1)
  	nmbLayers : 1,
  	// bg color for the revealing layers
  	bgcolor : '#fff',
  	// effect classname
  	effect : 'anim--effect-1',
  	// callback
  	onStart : function(direction) { return false; },
  	// callback
  	onEnd : function(direction) { return false; }
  };

  // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
  var reveal = function (direction) {
    console.log("qoqow[pq]");
    var callbackTime = 750,
      callbackFn = function() {
        classie.remove(pages[currentPage], 'page--current');
        currentPage = currentPage === 0 ? 1 : 0;
        classie.add(pages[currentPage], 'page--current');
      };

    revealer.reveal(direction, callbackTime, callbackFn);
  };

  // changing the effect..
  var effectCtrl = document.getElementById('select-effect');
  //effectCtrl.addEventListener('change', changeEffect);
  // force it to be the first opt as default
  //effectCtrl.value = 'effect-3';

  function changeEffect() {
    revealer.destroy();
    var revealerOpts = {
      // the layers are the elements that move from the sides
      nmbLayers : Number(this.options[this.selectedIndex].getAttribute('data-layers')),
      // bg color of each layer
      bgcolor : this.options[this.selectedIndex].getAttribute('data-colors').split(','),
      // effect classname
      effect : 'anim--' + this.value,
      onStart : function(direction) {
        // next page gets class page--animate-[direction]
        var nextPage = pages[currentPage === 0 ? 1 : 0];
        classie.add(nextPage, 'page--animate-' + direction);
      },
      onEnd : function(direction) {
        // remove class page--animate-[direction] from next page
        var nextPage = pages[currentPage === 0 ? 1 : 0];
        nextPage.className = 'page';
      }
    };

    revealer = new Revealer(revealerOpts);
  }
})();
