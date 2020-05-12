// Array Methods - reduce

// reduce means REDUCES DOWN to ONE single value
// reduce - decrease it down to something small

// not the same as REDUCER - reduce means REDUCES DOWN to ONE single value

const strings = [1, 2, 3, 4] // number type

const sum = array => array.reduce(
  (previousValue, currentValue) => previousValue + currentValue
)

// [1, 2, 3, 4]
// [3, 3, 4]
// [6, 4]
// [10]
// 10

// console.log(sum(strings))

const laetitiaBank = {
  name: 'Laetita',
  gender: 'female',
  currency: 'euro',
  amount: [
    { // 1st item starts 
      currentAccount: [
        { shopping: 1500 },
        { groceries: 30 },
        { transportation: 0 },
        { bill: 10000 },
        { entertainment: 0 },
      ]
    }, // 1st item ends

    { savingAccount: 120000.00 }, // 2nd item
  ],
}

const targetSpending = "groceries"

const getBackTotal = item => item[targetSpending]

const targetAmount = laetitiaBank.amount[0].currentAccount
  .filter(getBackTotal)
  .map(getBackTotal)
  .reduce(getBackTotal)

const categories = laetitiaBank.amount[0].currentAccount
  .map(amount => Object.keys(amount)[0])

const totalAmount = laetitiaBank.amount[0].currentAccount
  .map(amount => {
    const categoryName = Object.keys(amount)[0]
    return amount[categoryName]
  })
  .reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(totalAmount)
