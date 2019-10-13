const randomFactURL = 'http://numbersapi.com/random/trivia'

const getFact = async () => {
    try {
      const response = await fetch(randomFactURL)
      const obj = await response.json()
      console.log(`FETCHED. Response JSON ${obj}`)
      const fact = obj.fact
      return fact
    } catch (error) { console.error(error) }
  }


  const updateWithFact = async (event) => {
    try {
      document.getElementById('getFact').innerHTML = ''
      const answer = await getFact()
      document.getElementById('getFact').innerHTML = answer
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
  
  document.getElementById('removeFetch').addEventListener('click', () => {
    localStorage.removeItem('countOfClicks')
    updateWithFact(event)
})  

