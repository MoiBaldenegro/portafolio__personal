 const particlesConfig = {
  "particles": {
    "number": {
      "value": 31,
      "max": 35,
      "density": {
        "enable": true,
        "value_area": 946.9771699587272
      }
    },
    "color": {
      "value": ["#477e8b3","#14213D", "#477e8b3", "#858B99"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ff0c0c"
      },
      
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8578254525630548,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 12.02559045649142,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 240.30708547789706,
      "color": ["#14213D", "#4D566B", "#858B99"],
      "opacity": 0.6890406785639845,
      "width": 1.763753266952075
    },
    "move": {
      "enable": true,
      "speed": 4.413648243462092,
      "direction": "bottom-left",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 320.6824121731046,
        "rotateY": 2405.118091298284
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push",
        "quantity": 2
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 275.7242757242757,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 67.93206793206794,
        "duration": 1.6783216783216783,
        "opacity": 0.4155844155844156,
        "speed": 3
      },
      "repulse": {
        "distance": 183.8161838161838,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 5
      }
    }
  },
  "retina_detect": false
}

export default particlesConfig;