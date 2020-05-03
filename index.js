window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    let topo = document.getElementById("cima");

    if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100 ) {

        topo.style.background = rgba(0,0,0,.8);
        
     } else {
        topo.style.backgroundColor = "red";
  }
}
