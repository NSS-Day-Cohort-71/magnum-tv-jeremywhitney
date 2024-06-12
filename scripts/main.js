import { Actors } from "./Actors.js";
import { Genres } from "./Genres.js";
import { Shows } from "./Shows.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <header>
        <h1>Magnum TV</h1>
    </header>
    <article class="details">
        <section class="detail--column list details__actors">
            <h2>Actors</h2>
            ${Actors()}
        </section>
        <section class="detail--column list details__genres">
            <h2>Genres</h2>
            ${Genres()}
        </section>
    </article>

    <article class="shows">
        <h2>Shows</h2>
        ${Shows()}
    </article>
`

mainContainer.innerHTML = applicationHTML