//DESIGNER ANIMATION
function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards';
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}
//putting the text animation in function called textAnimate and it work after s
function textAnimate(){
    setTextAnimation(0.1,6.5,2,'ease','#ffffff',false);
    }


//add class .loded  
$(window).load(function() {
	$('body').addClass('loaded');
	setTimeout(textAnimate, 3000);
});

//add class active to navbar li 
$('header nav ul li a').click(function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    });

//smooth scroll to every (a) link 
				$('a[href*="#"]').on('click', function (e) {
						e.preventDefault();				
						$('html, body').animate(
								{
										scrollTop: $($(this).attr('href')).offset().top
								},1000,'linear');
				});
				
//adjust header size
$('.main-section').height($(window).height()-$('nav').height()-17);

$(window).resize(function() {
        $('.main-section').height($(window).height()-$('nav').height()-17);
        });

//add effects to the elements when scroll
//left to right
const elem1 = document.querySelectorAll('.anim1');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} ease-out forwards`;
		}else{
			entry.target.style.animation = 'none';
		}
		});
	});
elem1.forEach(el => {
	observer.observe(el);
	});
 //right to left
 const elem2 = document.querySelectorAll('.anim2');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.style.animation = `anim2 2s ${entry.target.dataset.delay} ease-out forwards`;
		}else{
			entry.target.style.animation = 'none';
		}
		});
	});
elem2.forEach(el => {
	observer.observe(el);
	});
  //bottom to top
 const elem3 = document.querySelectorAll('.anim3');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.style.animation = `anim3 2s ${entry.target.dataset.delay} ease-out forwards`;
		}
		});
	});
elem3.forEach(el => {
	observer.observe(el);
	});

//skill bar animation
const elem4 = document.querySelectorAll('.sk');
observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.style.animation = `anim-sk${entry.target.dataset.number} 4s`;
		}
		});
	});
elem4.forEach(el => {
	observer.observe(el);
	});
	
//trigger bx slider
$(document).ready(function(){
	$('.slider').bxSlider({
			pager: false,
			auto: true,
			speed: 1000,
			touchEnabled: false,
			preventDefaultSwipeX: false,
			});
});
	
//active button in gallery shffle
$('.section4 .container .shuffle li').click(function(){
				$(this).addClass('active');
				$(this).siblings().removeClass();
});

//mixitup shuffle
mixitup('#mix-wrapper', {
				animation: {
				effects: 'fade rotateZ(-180deg)',
				duration: 700
		},
		classNames: {
				block: 'shuffle',
				elementFilter: 'filter-btn',
		},
		selectors: {
				target: '.mix-target'
		}
});

//go-up
var goUp = $('.go-up');
$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            goUp.fadeIn(400);
        } else {
            goUp.fadeOut(400);
        }
    });