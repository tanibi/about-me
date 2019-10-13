QUnit.module('FETCH MODULE', {})

QUnit.test('TEST getFact (aysnc)', async assert => {
  assert.expect(1) 
  const ans = await getFact()
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.notEqual(0, len, 'Length is not zero')
})