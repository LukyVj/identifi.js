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

  // // Hide content
  // function hideContent(){
  //   $section = $('.col-md-12');
  //   $section.slideUp(0);
  //   $section.on('mouseover', function(){
  //     var $this = $(this);
  //     $this.slideDown('slow');
  //   });

  // }

  function mobileMenu(){

    var triggerMenu = $('.navbar-toggle'),
    mobileNav = $('.nav-pills');

    triggerMenu.on('click', function(){

      if(mobileNav.hasClass('open')){
        mobileNav.removeClass('open');
      } else {
        mobileNav.addClass('open');
      }
    });
  }

  function liveDemo(){
    var triggerDemo = $('#liveDemo');
    var allNotJumb = $('.wrapper');
    var hiddenDemo = $('#hiddenDemo');
    triggerDemo.on('click', function(){
       allNotJumb.fadeOut();
       hiddenDemo.find('img,h4').toggleClass('display').fadeIn();
       $('body').addClass('presentation');
    });
    hiddenDemo.on('click', function(){
      var $this = $(this);
      allNotJumb.fadeIn();
      $this.find('img,h4').toggleClass('display').fadeOut();
       $('body').removeClass('presentation');
    })

  }


  activeLinks();
  animateScroll();
  mobileMenu();
  liveDemo();
  //hideContent();

}).call($(this))
