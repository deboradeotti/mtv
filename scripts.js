var patience = {
  nome: "patience",
  imagem: "http://3.bp.blogspot.com/-J2KDx7a-YVM/VJEZYILZVoI/AAAAAAAAExg/2uf_OzsOgVA/s1600/Guns%2BN'%2BRoses%2B-%2BPatience%2B(Single).jpg",
}

var when = {
  nome: "when",
  imagem: "https://www.rhino.com/sites/rhino.com/files/styles/article_image/public/whendookie.jpg?itok=rXsxi9lI"
}

var swallowed = {
  nome: "swallowed",
  imagem: "https://img.discogs.com/rXt7M_A7mvMT4APfLOA_SlaXZgA=/fit-in/600x528/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1825259-1369354155-2284.jpeg.jpg",
}

var heart = {
  nome: "heart",
  imagem: "https://img.discogs.com/LVdgjxYwMJeSvxfAgm52gN3QmwM=/fit-in/600x517/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-373288-1227718870.jpeg.jpg"
}

var everlong = {
  nome: "everlong",
  imagem: "https://img.discogs.com/Hd8ii4pwsEhGyvYKOMBJZdTCfCA=/fit-in/588x508/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1739572-1325258852.jpeg.jpg"
}

var killing = {
  nome: "killing",
  imagem: "http://www.songmeaningsandfacts.com/wp-content/uploads/2019/10/Killing-in-the-Name.png"
}

var sun = {
  nome: "sun",
  imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Black_Hole_Sun.jpg/220px-Black_Hole_Sun.jpg"
}

var whati = {
  nome: "whati",
  imagem: "https://img.discogs.com/pV4myC3bPO3TO_6JL-HYbMH44a4=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1885010-1250079147.jpeg.jpg"
}

var disarm = {
  nome: "disarm",
  imagem: "https://img.discogs.com/pfdTvUCE8ziaEynWkm4eOCApYE8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-538789-1561293600-9490.jpeg.jpg"
}

var santa = {
  nome: "santa",
  imagem: "https://m.media-amazon.com/images/M/MV5BYjMyMzhjODItOGYwNy00YzVkLWJhMzItNGVmM2Y1NDI4YmVjXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg" 
}

var listaSingles = [patience, when, swallowed, heart, everlong, killing, sun, whati, disarm, santa]
addImagem()

function addImagem() {
  var divSingles = document.getElementById('singles')
  for (var i = 0; i < listaSingles.length; i++) {
    if (i % 5 == 0) {
      divSingles.innerHTML = divSingles.innerHTML + "<br />"
      var capa = listaSingles[i].imagem
      var html = "<img src=" + capa + ">"
      var musica = listaSingles[i].nome
      divSingles.innerHTML = divSingles.innerHTML + "<button onClick='videoNaTela(" + musica + ")'>" + html + "</button>"
    } else {
      var capa = listaSingles[i].imagem
      var musica = listaSingles[i].nome
      var html = "<img src=" + capa + ">"
      divSingles.innerHTML = divSingles.innerHTML + "<button onClick='videoNaTela(" + musica + ")'>" + html + "</button>"
    }
  }
}



//function adicionarFilme() {
  //var entrada = document.querySelector('#filme')
  //var filmeFavorito = entrada.value
  //listarFilmesNaTela(filmeFavorito)
  //entrada.value = ""
  //}

//function listarFilmesNaTela(filme){
  //var listaFilmes = document.querySelector('#listaFilmes')
  //var imagemFilme = filme
  //listaFilmes.innerHTML = listaFilmes.innerHTML + imagemFilme
//}

function videoNaTela(param) {
   if (param == patience) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ErvgV4P6Fzc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>'"
   } else if (param == when) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/i8dh9gDzmz8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   } else if (param == swallowed) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/8FIBPKRV3kk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   } else if (param == heart) {
      document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/n6P0SitRwy8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   } else if (param == everlong) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/eBG7P-K-r1Y' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   } else if (param == whati) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/0Uc3ZrmhDN4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"    
   } else if (param == sun) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/3mbBbFH9fAg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"   
   } else if (param == disarm) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/d1acEVmnVhI' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"   
   } else if (param == santa) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/MW6E_TNgCsY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   } else if (param == killing) {
     document.querySelector(".resultado").innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/bWXazVhlyxQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
   }  
}
