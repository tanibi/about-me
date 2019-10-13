QUnit.module('MAIN MODULE', {})

QUnit.test('TEST convertTemp', assert => {
  assert.equal(convertTemp(32), 0, 'Zero')
  assert.equal(convertTemp(77), 25, 'Positive')
  assert.equal(convertTemp(14), -10, 'Negative')
})

QUnit.config.autostart = false // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    }).catch(error => { console.error(`ERROR: ${error}`) })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => { console.error(error); QUnit.start() })
})

QUnit.test('TEST input validation (DOM manipulation)', assert => {
  const input = document.querySelector('#temperature')
  const warning = document.querySelector('#firstWarning')
  input.value = -3
  assert.equal(input.value, -3, 'Bad value assigned')
  assert.strictEqual(input.checkValidity(), false, 'Correctly fails validation')
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})
