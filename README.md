# Arrays Methods

## Arrays Methods - callbacks

- map
- forEach
- filter
- reduce
- some
- every


## Types
- function (normal functions) - should try to avoid, as you mainly see it in older version of JavaScript you are using. Before ES2015 also called ES6 meaning EcmaScript 2015. EcmaScript is the official name, not JavaScript and is the current standard that is followed moving forward

- const (arrow functions) - the default option, as functions are used in the order they are declared in. There are more differences between arrow and normal functions, but now it’s important you just know the basics for now. We can go into more depth when you are learning React. :sweat_smile:

Again, this depends on the job and codebase you are working on, so it’s best to know both. Just incase you work on a legacy codebase.

## Callback
Callback is very different. They can be arrow or normal functions.
So we all know functions usually return us a another value.

```js static
const giveFavourite = foodName => `I like ${foodName}`

giveFavourite("apples")
// Returns "I like apples"
```

However with a callback, instead of string, number, null, undefined value we pass. We pass it an entire function instead.

```js static
const giveFavourite = foodName => `I like ${foodName}`


giveFavourite("apples")
// Returns "I like apples"

const giveSuggestion = functions => {
	const suggestion = "apples"
	return functions() === "apples"  
		? `I like really like APPLES!!!!`
		: `I have ${callBack(suggestion)}`
}

giveSuggestion(foodName => `I like ${foodName}`)
// Returns "I like bananas"
```

## Why is it called callback?

1) Because you pass in the function
2) The function, that you pass in is then CALLED
3) You then expect the function you pass in, to return BACK a value

So we say the function that you pass is CALLED BACK name is simplified to CALLBACK

Passing functions allow use to do more complex stuff, that passing primitive values just can’t.
More details on:
- ES2015(ES6) - https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/
- Difference between JavaScript and EcmaScript - https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/
