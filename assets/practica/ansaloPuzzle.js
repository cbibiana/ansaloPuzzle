//Botones
let btnIngresarA1 = document.getElementById("btnIngresarA1");
let btnIngresarB2 = document.getElementById("btnIngresarB2");
let btnIngresarC3 = document.getElementById("btnIngresarC3");
let btnIngresarD4 = document.getElementById("btnIngresarD4");
let btnIngresarE5 = document.getElementById("btnIngresarE5");
let btnIngresarF6 = document.getElementById("btnIngresarF6");
let btnIngresarG7 = document.getElementById("btnIngresarG7");
let btnIngresarH8 = document.getElementById("btnIngresarH8");
let btnIngresarI9 = document.getElementById("btnIngresarI9");
let btnIngresarJ0 = document.getElementById("btnIngresarJ0");

//Etiquetas
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

//Funciones
const ingresarA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (numeros.innerHTML == "" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML = "1";
    }
  }
};

const ingresarB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "2";
    } else {
      alert("Faltan datos");
    }
  }
};

const ingresarC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "3";
    } else {
      alert("falta");
    }
  }
};

const ingresarD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "4";
    } else {
      alert("falta");
    }
  }
};

const ingresarE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "5";
    } else {
      alert("falta");
    }
  }
};
const ingresarF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "6";
    } else {
      alert("falta");
    }
  }
};
const ingresarG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "7";
    } else {
      alert("falta");
    }
  }
};
const ingresarH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "8";
    } else {
      alert("falta");
    }
  }
};
const ingresarI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "9";
    } else {
      alert("falta");
    }
  }
};
const ingresarJ0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "0";
    } else {
      alert("falta");
    }
  }
};

//Click
btnIngresarA1.onclick = () => {
  ingresarA1();
};
btnIngresarB2.onclick = () => {
  ingresarB2();
};

btnIngresarC3.onclick = () => {
  ingresarC3();
};

btnIngresarD4.onclick = () => {
  ingresarD4();
};

btnIngresarE5.onclick = () => {
  ingresarE5();
};

btnIngresarF6.onclick = () => {
  ingresarF6();
};

btnIngresarG7.onclick = () => {
  ingresarG7();
};

btnIngresarH8.onclick = () => {
  ingresarH8();
};

btnIngresarI9.onclick = () => {
  ingresarI9();
};

btnIngresarJ0.onclick = () => {
  ingresarJ0();
};
