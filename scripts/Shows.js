import { getActors, getGenres, getShows } from "./database.js";

const actorsList = getActors()
const genres = getGenres()
const shows = getShows()

// Function to find actor(s) for a show
const findActor = (show, allActors) => {
    let showActors = []

    if (Array.isArray(show.actorId)) {
        showActors = allActors.filter(actor => show.actorId.includes(actor.id))
    } else {
        const actor = allActors.find(actor => actor.id === show.actorId)
        if (actor) {
            showActors.push(actor)
        }
    }
    return showActors
}

// Function to find genre for a show
const findGenre = (show, allGenres) => {
    let showGenre = null

    for (const genre of genres) {
        if (genre.id === show.genreId) {
            showGenre = genre
        }
    }
    return showGenre
}

// Function to display list of shows with details
export const Shows = () => {
    let html = "<ul>"

    for (const show of shows) {
        const actors = findActor(show, actorsList)
        const genre = findGenre(show, genres)

        const actorNames = actors.map(actor => actor.name).join(", ")

        html += `<li><b>${show.name}</b> // Starring: ${actorNames} // Genre: ${genre.name}</li>`
    }
    html += "</ul>"
    return html
}