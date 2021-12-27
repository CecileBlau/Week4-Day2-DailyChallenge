// Instructions
// Using this object :

let groceries = {
	fruits : ["pear", "apple", "banana"],
	vegetables: ["tomatoes", "cucumber", "salad"],
	totalPrice : "20$",
	other : {
		payed : true,
		meansOfPayment : ["cash", "creditCard"]
	}
}

let cecile = groceries
groceries.other.payed= false
console.log(cecile.other.payed)
console.log(groceries.other.payed)


//------------ANSWER
// the variable groceries and the variable cecile are now linked to the same reference, 
// so if you modify something in any of this variables,
// the other variable will receive the same output since they are referenced to the same adress.
