import { getActors, getShows } from "./database.js";

const actors = getActors()
const shows = getShows()

// Function to display list of actors
export const Actors = () => {
    let html = "<ul>"

    for (const actor of actors) {
        html += `<li
                    data-type="actor"
                    data-id="${actor.id}"
                    >${actor.name}</li>`
    }
    html += "</ul>"
    return html
}

// Function to match actor(s) with shows they star in
const findActorShowMatch = (actorId, showsArray) => {
    let actorsShows = []

    for (const show of showsArray) {
        if (Array.isArray(show.actorId) && show.actorId.includes(actorId)) {
            actorsShows.push(show.name)
        } else if (show.actorId === actorId) {
            actorsShows.push(show.name)
        }
    }
    return actorsShows
}

// Click event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const actorClicked = clickEvent.target

        if (actorClicked.dataset.type === "actor") {
            const actorId = parseInt(actorClicked.dataset.id)
            const actorShows = findActorShowMatch(actorId, shows)

            if (actorShows.length > 0) {
                window.alert(`${actorClicked.innerText} stars in: ${actorShows.join(", ")}`)
            } else {
                window.alert(`${actorClicked.innerText} does not star in any shows.`)
            }
        }
    }
)