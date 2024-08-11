
const randomBtn = document.querySelector('#randomTrigger')
randomBtn.addEventListener('click', () => {
    Toastify({
        text: "Palabras generadas",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0296fd, #01355a)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

const borrarBtn = document.querySelector('#borrarForm')
borrarBtn.addEventListener('click', () => {
    Toastify({
        text: "Formulario limpiado",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0296fd, #01355a)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

const generarBtn = document.querySelector('#generarBtn')
generarBtn.addEventListener('click', () => {
    Toastify({
        text: "Contraseña generada con exito!",
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #6ac812, #7bff00)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})


const quitarContraseña = document.querySelector('.quitarElemento')
    document.addEventListener('click', (event) => {
      if(event.target && event.target.classList.contains('quitarElemento')){
        Toastify({
            text: "Contraseña eliminada.",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #a04436, #fd2302)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }
    })