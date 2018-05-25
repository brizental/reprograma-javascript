const form = document.querySelector("form")
const input = document.querySelector("input")
const results = document.getElementById("results")

// let promiseHasResolved = false
// input.addEventListener("click", function() {
//     if (promiseHasResolved) {
//         input.value = ""
//         promiseHasResolved = false
//     }
// })

form.addEventListener("submit", function(event){
    event.preventDefault()
})

input.addEventListener("keyup", function(event) {
    // event.preventDefault()
    results.innerHTML = '<img src="./loading.gif" alt="Gif de carregamento">'
    getData(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=vidasdfasdfasdfaeo&q=${input.value}&key=AIzaSyA2oJySYmGJxeYqkLAMqPBQNOK6ZOH30Q8`).then(
        function(response) {
            // promiseHasResolved = true
            const jsonResponse = JSON.parse(response)
            results.innerHTML = ''
            if (jsonResponse.items.length === 0) {
                results.innerHTML = '<p>Nenhum resultado encontrado</p>'
            } else {
                for (const video of jsonResponse.items) {
                    results.innerHTML = results.innerHTML + `
                        <a target="_blank" href=https://www.youtube.com/watch?v=${video.id.videoId}>
                            <img src="${video.snippet.thumbnails.default.url}" alt="Prévia do vídeo">
                            <h1>${video.snippet.title}</h1>
                            <p>${video.snippet.description}</p>
                        </a>
                    `
                }
            }
        },
        function(error) {
            // promiseHasResolved = true
            results.innerHTML = `<p>${error}</p>`
        })
})