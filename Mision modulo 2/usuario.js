let enviar = document.getElementById('enviar')
enviar.addEventListener('click', () => {
    location.href = 'index.html'

})

lista = document.getElementById('lista')
function info() {
    const formulario = JSON.parse(localStorage.getItem("formulario"));
    if (!formulario) {
      localStorage.setItem(
        "formulario",
        JSON.stringify({

        })
      );
    }
    console.log(formulario);
    lista.innerHTML += `${formulario}`
  
  }