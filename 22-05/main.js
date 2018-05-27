const form = document.querySelector('form')
const input = document.querySelector('input')
const results = document.getElementById('results')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    results.innerHTML = `<p>Carregando...</p>`
    getData(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${input.value}&key=AIzaSyDL2cAUzHN6DwSC4h9vB6zZ7KSBeYNFDG4`).then(function(response) {
        const jsonResponse = JSON.parse(response)
        results.innerHTML = ''
        if (jsonResponse.items.length === 0) {
            results.innerHTML = `<p>Nenhum resultado encontrado :(</p>`
        } else {
            for (const video of jsonResponse.items) {
                results.innerHTML = results.innerHTML + `
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}"
                    <h1>${video.snippet.title}</h1>
                    <p>${video.snippet.description}</p>
                </a>`
                
            }
        }
    }, function(error) {
        results.innerHTML = `<p>${error}</p>`
    })
    input.value = ''
})