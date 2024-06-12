import { getGenres, getShows } from "./database.js";

const genres = getGenres()
const shows = getShows()

// Function to display list of genres
export const Genres = () => {
    let html = "<ul>"

    for (const genre of genres) {
        html += `<li
                    data-type="genre"
                    data-id="${genre.id}"
                    >${genre.name}</li>`
    }
    html += "</ul>"
    return html
}

// Function to match genres to shows
const showGenres = (genreObject, showsArray) => {
    let genreShows = []

    for (const show of showsArray) {
        if(show.genreId === genreObject.id) {
            genreShows.push(show.name)
        }
    }
    return genreShows
}

// Click event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const genreClicked = clickEvent.target

        if (genreClicked.dataset.type === "genre") {
            const genreId = parseInt(genreClicked.dataset.id)
            const genre = genres.find(g => g.id === genreId)
            const genreShowList = showGenres(genre, shows)

            if (genreShowList.length > 0) {
                window.alert(`The shows in the ${genre.name} genre are: ${genreShowList.join(", ")}`)
            } else {
                window.alert(`Magnum TV does not currently have any ${genre.name} shows.`)
            }
        }
    }
)