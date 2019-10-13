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
    try {
      document.getElementById('randomFact').innerHTML = ''
      const result = await getFact()
      document.getElementById('randomFact').innerHTML = result
    } catch (error) { 
        console.error(error) 
      }
  }

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getFact') 
  { updateWithFact(event) }

  const startCount = parseInt(localStorage.getItem('numberOfFetches')) || 0
  const count = startCount + 1
  const countResult = `You have fetched ${count} random facts.`
  document.getElementById('count').innerHTML = countResult

  localStorage.setItem('numberOfFetches', count)
})

document.addEventListener('DOMContentLoaded', updateWithFact)