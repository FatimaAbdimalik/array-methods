// Array Method - Map

const names = ["Famita", "Nawal", "Tinta", "Laetitia", "Tas", "Leida"]


// With map method
const sendHolidayMessage = () => {
  const message = "Enjoy your holiday!"

  return names.map(name => message + " " + name)
}

["Famita", "Nawal", "Tinta", "Laetitia", "Tas", "Leida"]
  .map(name => message + " " + name)
  .filter()

// 3                                                                                         V
["Enjoy your holiday! Famita", "Enjoy your holiday! Nawal", "Enjoy your holiday! Tinta", "Laetitia", "Tas", "Leida"]

// // With Loop instead
const sendHolidayMessage = (niceHoliday) => {
  const niceMessage = "Enjoy your holiday!"
  const badMessage = "Don't enjoy your holiday sucker!"
  let emptyArray = []

  for (let i = 0; i < names.length; i++) {
    if (niceHoliday) {
      emptyArray.push(niceMessage + " " + names[i]).filter()
    } else if {
      emptyArray.push(badMessage + " " + names[i]).filter()
    } else {
      emptyArray.push(badMessage + " " + names[i]).filter()
    }
  }

  return emptyArray
}

// // [
// //   'Enjoy your holiday! Famita',
// //   'Enjoy your holiday! Nawal',
// //   'Enjoy your holiday! Tinta',
// //   'Enjoy your holiday! Laetitia',
// //   'Enjoy your holiday! Tas',
// //   'Enjoy your holiday! Leida'
// // ]

// console.log(sendHolidayMessage())