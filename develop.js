
// Crear un botón de "cerrar" y añadirlo a cada elemento de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Hacer clic en un botón de cerrar para ocultar el elemento de la lista actual
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Añadir una marca de "comprobado" al hacer clic en un elemento de la lista
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crear un nuevo elemento Vet de la lista al hacer clic en el botón "Añadir"
function newElementVet() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("vet").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Add Text!");
  } else {
    document.getElementById("myVet").appendChild(li);
  }
  document.getElementById("vet").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Crear un nuevo elemento Walks de la lista al hacer clic en el botón "Añadir"
function newElementWalks() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("walks").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Add Text!");
  } else {
    document.getElementById("myWalks").appendChild(li);
  }
  document.getElementById("walks").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Crear un nuevo elemento Meals de la lista al hacer clic en el botón "Añadir"
function newElementMeals() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("meals").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Add Text!");
  } else {
    document.getElementById("myMeals").appendChild(li);
  }
  document.getElementById("meals").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Crear un nuevo elemento showers de la lista al hacer clic en el botón "Añadir"
function newElementShowers() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("showers").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Add Text!");
  } else {
    document.getElementById("myShowers").appendChild(li);
  }
  document.getElementById("showers").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
