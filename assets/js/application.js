$(function() {

  // Animate on scroll
  function animateScroll(){
        var $root = $('html:not(:animated), body:not(:animated)');
    $('.navbar a').click(function() {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
  }

  // Show active menu links
  function activeLinks(){
    $menuLinks = $('.navbar li'),
    $menuLinkActive = $menuLinks.hasClass('active');

    $menuLinks.on('click', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.addClass('active');
      $('*').not($this).removeClass('active');
    })
  }



  activeLinks();
  animateScroll();

}).call($(this))
