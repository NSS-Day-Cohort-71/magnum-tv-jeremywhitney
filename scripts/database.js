const database = {
    actors: [{
      id: 1,
      name: "Bryan Cranston"
    }, {
      id: 2,
      name: "Jennifer Aniston"
    }, {
      id: 3,
      name: "James Gandolfini"
    }, {
      id: 4,
      name: "Elisabeth Moss"
    }, {
      id: 5,
      name: "Kiefer Sutherland"
    }, {
      id: 6,
      name: "Julia Louis-Dreyfus"
    }, {
      id: 7,
      name: "Steve Carell"
    }, {
      id: 8,
      name: "Tatiana Maslany"
    }, {
      id: 9,
      name: "Ed O'Neill"
    }, {
      id: 10,
      name: "Emilia Clarke"
    }, {
      id: 11,
      name: "Hugh Laurie"
    }, {
      id: 12,
      name: "Amy Poehler"
    }, {
      id: 13,
      name: "Kit Harington"
    }, {
      id: 14,
      name: "Brit Marling"
    }, {
      id: 15,
      name: "Ted Danson"
    }],

    genres: [{
      id: 1,
      name: "Drama"
    }, {
      id: 2,
      name: "Comedy"
    }, {
      id: 3,
      name: "Thriller"
    }, {
      id: 4,
      name: "Sci-Fi"
    }, {
      id: 5,
      name: "Action"
    }, {
      id: 6,
      name: "Fantasy"
    }, {
      id: 7,
      name: "Horror"
    }, {
      id: 8,
      name: "Mystery"
    }, {
      id: 9,
      name: "Romance"
    }, {
      id: 10,
      name: "Crime"
    }],

    shows: [{
      id: 1,
      name: "Breaking Bad",
      actorId: [1],
      genreId: 1
    }, {
      id: 2,
      name: "Friends",
      actorId: [2],
      genreId: 2
    }, {
      id: 3,
      name: "The Sopranos",
      actorId: [3],
      genreId: 10
    }, {
      id: 4,
      name: "The Handmaid's Tale",
      actorId: [4],
      genreId: 1
    }, {
      id: 5,
      name: "24",
      actorId: [5],
      genreId: 5
    }, {
      id: 6,
      name: "Seinfeld",
      actorId: [6],
      genreId: 2
    }, {
      id: 7,
      name: "The Office",
      actorId: [7],
      genreId: 2
    }, {
      id: 8,
      name: "Orphan Black",
      actorId: [8],
      genreId: 4
    }, {
      id: 9,
      name: "Modern Family",
      actorId: [9],
      genreId: 2
    }, {
      id: 10,
      name: "Game of Thrones",
      actorId: [10, 13],
      genreId: 6
    }, {
      id: 11,
      name: "House",
      actorId: [11],
      genreId: 1
    }, {
      id: 12,
      name: "Parks and Recreation",
      actorId: [12],
      genreId: 2
    }, {
      id: 13,
      name: "Veep",
      actorId: [6],
      genreId: 2
    }, {
      id: 14,
      name: "A Murder at the End of the World",
      actorId: [14],
      genreId: 8
    }, {
      id: 15,
      name: "Cheers",
      actorId: [15],
      genreId: 2
    }]
}

// Sort names alphabetically
const sortABC = (a, b) => a.name.localeCompare(b.name)

// Function to generate list of actors alphabetically
export const getActors = () => {
  return database.actors.map(actor => ({...actor})).sort(sortABC)
}

// Function to generate list of genres alphabetically
export const getGenres = () => {
  return database.genres.map(genre => ({...genre})).sort(sortABC)
}

// Function to generate list of shows alphabetically
export const getShows = () => {
  return database.shows.map(show => ({...show})).sort(sortABC)
}