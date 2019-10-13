const convertTemp = (x) => {return (x-32)*5/9}

const validate = async (event) => {
    console.log(`triggered validate on ${event.target.id}`)
    const isValid = event.target.checkValidity()
    if (isValid) {
      event.target.nextElementSibling.innerHTML = ''
    } else {
      event.target.nextElementSibling.innerHTML = 'Invalid input'
      event.target.focus()
    }
  }

  const updateWithconvertTemp = async (event) => {
    try {
      document.querySelector('#result').innerHTML = ''
      if (document.querySelector('#temperature').checkValidity()) {
        const regex = /[^a-zA-Z_]/g
        const i = parseInt(document.querySelector('#temperature').value)
        const ans = `Temperature in Celsius: ${convertTemp(i)}.`
        document.querySelector('#result').innerHTML = ans
      }
    } catch (error) { console.error(error) }
  }

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'Button') { updateWithconvertTemp(event) }
  })
  

