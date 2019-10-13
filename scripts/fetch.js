const randomFactURL = 'https://uselessfacts.jsph.pl/random.html'

export const getRandomFact = async () => {
    try {
      const response = await fetch(randomFactURL)
      const obj = await response.json()
      console.log(`FETCHED:${obj}`)
      const fact = obj.value.fact || 'No fact'
      return fact
    } catch (error) { console.error(error) }
  }

const updateWithFact = async (event) => {
  const def = 'Chuck Norris went out of an infinite loop.'
  document.querySelector('#fact').innerHTML = await getJoke() || def
}

const updateWithFact = async (event) => {
    try {
      document.getElementById('catFact').innerHTML = ''
      const result = await getFact()
      document.getElementById('catFact').innerHTML = result
    } catch (error) { 
        console.error(error) 
      }
  }

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'btn') { updateWithFact(event) }
})

document.addEventListener('DOMContentLoaded', updateWithFact)