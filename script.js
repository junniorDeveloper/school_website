// carga de gif depagina web //
let carga = document.querySelector('.loader');
function loader(){
    carga.classList.add('fade-out');
}
function fadeout() {
    setInterval(loader, 1500);
}
window.onload = fadeout();


// Calificacion con etrellas//
const stars  = document.querySelectorAll('.star');

stars.forEach(function(star, index) {
    star.addEventListener('click', function(){
        for (let i =0; i<=index; i++){
            stars[i].classList.add('checked')
        }
        for (let i=index+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})

//MAPA//
function iniciarMap(){
    var coord = {lat:-13.008836773376954, lng: -76.37900168879118};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


// boton leer mas de la reseña //

const buttons = document.querySelectorAll('.leer_mas_texto');
const textElements = document.querySelectorAll('.esconder_texto');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});


// inicial //
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

// primaria //

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel1__lista1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel1__indicadores1',
		arrows: {
			prev: '.carousel1__anterior1',
			next: '.carousel1__siguiente1'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});


// secundaria //

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel2__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel2__indicadores2',
		arrows: {
			prev: '.carousel2__anterior2',
			next: '.carousel2__siguiente2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});