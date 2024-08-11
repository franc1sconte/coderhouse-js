function fetchBaseDeDatos() {
    try {
        fetch('database.json')
            .then(response => response.json())
            .then(json => {
                const randomButton = document.querySelector('#randomTrigger')
                randomButton.addEventListener('click', () => {
                    let inputAnimal = document.querySelector('#animal')
                    let inputColor = document.querySelector('#color')
                    let inputPais = document.querySelector('#pais')

                    const randomIndex = () => Math.floor(Math.random() * 10)
                    inputAnimal.value = json[randomIndex()].animal
                    inputColor.value = json[randomIndex()].color
                    inputPais.value = json[randomIndex()].pais
                })
            })
            .catch(error => {
                throw error
            })
    } catch (error) {
        console.error('Error en el fetch:', error)
    }
}

fetchBaseDeDatos()
