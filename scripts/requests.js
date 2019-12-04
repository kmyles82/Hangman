//HTTP request
//request - what do we want to do (generate a new work or phrase)
//response - what was actually done ()

const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        // console.log(data)
        return country = data.find(country => country.alpha2Code === countryCode)
    } else {
        console.log('An error has taken place')
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=0668ac6278e497')

    if (response.status === 200) {
        let country = await response.json()
        return country
    } else {
        throw new Error('something went wrong')
    }
}

const getCurrentCountry = async () => {
    let location = await getLocation()
    let country = await getCountry(location.country)
    return country
}


//Syncrhonous
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
//     request.send()
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//         ck(undefined, data.puzzle)
//         // console.log(data)
//     } else if (request.readyState === 4) {
//         throw new Error('things did not go well')
//         // console.log('An error has taken place')
//     }
// }

// Fetch
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error('Unable to fetch the puzzle')
//             }
//         })
//         .then(result => {
//             // console.log(result)
//             return result.puzzle
//         }).then(data => data)

// }