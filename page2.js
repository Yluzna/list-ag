// btn cerrar en cada tarea
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// btn cerrar para eliminar tarea
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// check de realizado
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// nuevo elemento lista vet
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

// nuevo elemento lista walks
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

// nuevo elemento lista meals and snacks
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
// nuevo elemento lista showers
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

//fecha del dìa

const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-ES',{weekday: 'long', month: 'long', day:'numeric'})

// btn inicio//

function redirectToPageList() {
    window.location.href = 'home.html';
  }