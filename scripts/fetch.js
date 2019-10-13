const randomFactURL = 'https://uselessfacts.jsph.pl/random.html'

export const getFact = async () => {
    try {
      const response = await fetch(randomFactURL)
      const obj = await response.json()
      console.log(`FETCHED. Responce JSON ${obj}`)
      const fact = obj.value.fact || 'No fact'
      return fact
    } catch (error) { console.error(error) }
  }


  const updateWithFact = async (event) => {
    try {
      document.getElementById('getFactButton').innerHTML = ''
      const answer = await getFact()
      document.getElementById('getFactButton').innerHTML = answer
    } catch (error) { console.error(error) }
  }

document.addEventListener('click', () => {
    if (event.target && event.target.id === 'getFactButton') 
    { updateWithFact(event) }

    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    const count = origCount + 1
    const countResult = `You have fetched ${count} random facts.`
    document.getElementById('count').innerHTML = countResult
    localStorage.setItem('countOfClicks', count) 
  })

