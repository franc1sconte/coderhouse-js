// --> Generamos los eventos para interactuar con las diferentes secciones del DOM
document.querySelector('#irGeneradorBtn').addEventListener('click', function() {
    document.querySelector('.bodyPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'none'
    document.querySelector('.formPage').style.display = 'block'
})

document.querySelector('#volverFormBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'block'
    document.querySelector('.bodyPage').style.display = 'block'
})

document.querySelector('#irListaContraseñasBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.bodyPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'none'
    document.querySelector('.mostrarContraseñasPage').style.display = 'block'
})

document.querySelector('#volverListaContraseñasBtn').addEventListener('click', function() {
    document.querySelector('.formPage').style.display = 'none'
    document.querySelector('.mostrarContraseñasPage').style.display = 'none'
    document.querySelector('.listaPage').style.display = 'block'
    document.querySelector('.bodyPage').style.display = 'block'
})