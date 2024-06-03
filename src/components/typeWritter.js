document.addEventListener("DOMContentLoaded", (event) => {
  const text = "Hey, soy Miguel Aragón";
  let i = 0;
  const speed = 280; // Velocidad de escritura en milisegundos
  const delay = 100; // Retraso antes de borrar el texto en milisegundos

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("element").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Cuando se ha escrito todo el texto, espera un poco antes de borrar el contenido y comenzar de nuevo
      setTimeout(() => {
        document.getElementById("element").innerHTML = "";
        i = 0;
        typeWriter();
      }, delay);
    }
  }

  typeWriter();
});
