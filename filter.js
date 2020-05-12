// 1) whether the value evaluates to truthy or falsy value

// 1i) falsy - what is a falsy value?
// 1i) truth - what is a falsy value?

// 2a) If truthy value it returns value
// 2b) If false value no value is return



// Truthy and Falsy
// const value = "Tinta" // string - truthy are like fake `true` value
// const value1 = 5 // number - truthy are like fake `true` value
// const value2 = [] // 'object' - truthy value

// const value3 = 0 // number - falsy value
// const value4 = "" // false - falsy value
// const value5 = null // null - falsy value
// const value6 = undefined // undefined - falsy value
// const value7 = NaN // NaN - falsy value
// const value8 = -0 // number - falsy value

// ["Tinta", 5, [], 0, "", null, undefined, NaN, -0].filter(value => value)

// // filter
// //                       V
// ["Tinta", 5, [], 0, "", null, undefined, NaN, -0, Infinity]

// ["Tinta", 5, [], Infinity]

// const value = "Tinta" // string - truthy are like fake `true` value
// const value1 = 5 // number - truthy are like fake `true` value
// const value2 = [] // 'object' - truthy value

// const value3 = 0 // number - falsy value
// const value4 = "" // false - falsy value
// const value5 = null // null - falsy value
// const value6 = undefined // undefined - falsy value
// const value7 = NaN // NaN - falsy value
// const value8 = -0 // number - falsy value

// const normalArray = ["Tinta", 5, [], 0, "", null, undefined, NaN, -0, Infinity]
// const masterArray = [true, true, true, false, false, false, false, false, false, true]

const inputStrings = [
  "password13",
  "passwrd123",
  "passwo123",
  "Password123",
  "password 123",
  "password123"
]

// const inputStrings = [false, false, false, false, false]

const password = "password123"

console.log(
  inputStrings.filter(valueEntered => {

    if (valueEntered === "password123") {
      return true
    }

    return false

  })
)
