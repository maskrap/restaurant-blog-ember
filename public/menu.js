
var hasClass, addClass, removeClass, eventType, $q, mobileMenu, navigation, navTrigger, toggleNav;

hasClass = function( elem, c ) {

  return elem.classList.contains( c );

};

addClass = function( elem, c ) {

  elem.classList.add( c );

 };

 removeClass = function( elem, c ) {

   elem.classList.remove( c );

 };
function toggleClass( elem, c ) {

  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );

}

$q = function (selector) {

  return document.querySelector(selector);

}

eventType = Modernizr.touch ? 'touchstart' : 'click';
if (window.navigator.msMaxTouchPoints) { eventType = "pointerdown"; }

mobileMenu = $q('.navigation-mobile-link'),
navigation = $q('.navigation'),
navTrigger = 'navigation-open';

toggleNav = function(event){

	event.preventDefault();
	toggleClass(navigation, navTrigger);

}


mobileMenu.addEventListener(eventType, toggleNav);
