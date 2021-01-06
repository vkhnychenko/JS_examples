const fetch = require('node-fetch')

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000).then(() => {
//         return fetch(url)
//     })
//     .then(response => response.json())
// }

// fetchTodos().then(data => {console.log(data)}).catch(e => console.error(e))

async function fetchAsyncTodos(){
    console.log('Fetch todo started...')
    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e){
        console.error(e)
    } finally{
        console.log('Finally')
    }
    // console.log('Data: ', data)
}

const data = fetchAsyncTodos()
data.then((data) => console.log(data))