$(function() {

//slider bio
if(jQuery('.bio__slider').length) {
    $('.bio__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: false,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>'
    });
}

});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
        var header = document.querySelector('.header');
        header.classList.toggle('active');
    });

    var menuServices = document.querySelector('.menu-services-toggle');
    menuServices.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu-services');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-services-toggle');
        navGamb.classList.toggle('active');
        var header = document.querySelector('.header');
        header.classList.toggle('active');
    });
    
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}





});
