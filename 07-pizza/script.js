let message

const pizza = {
    crust: '',
    size: '',
    topping: [],
    buildPizza() {
        console.log('buildPizza has been called')
        message = `Baking a pizza on a ${pizza.size} ${pizza.crust} with ${pizza.topping}s.`
        document.querySelector('.main__feedbackParagraph').textContent = message
    },
    shoppingList() { 
        //inital recipe values
        let yeastAmount = 1
        let flourAmount = 3.75 
        let oilAmount = 2
        let saltAmount = 2
        let sugarAmount = 1

        //Doubling the recipe for certain conditions
        if (pizza.crust === 'thick' || pizza.crust === 'stuffed' || pizza.size === 'large') {
            yeastAmount *= 2
            flourAmount *= 2
            oilAmount *= 2
            saltAmount *= 2
            sugarAmount *= 2
            console.log(pizza.crust)
        } 
        //Conditions for stuffed crust
        let cheese = ''
        if (pizza.crust === 'stuffed'){
            cheese = '8oz Cheese'
        }

        //Shopping list generation
        message = `For the Pizza Dough:<br>
            ${yeastAmount} package of active dry yeast <br>
            ${flourAmount} cups of flour <br>
            ${oilAmount} tablespoons of extra virgin olive oil <br>
            ${saltAmount} teaspoons of salt <br>
            ${sugarAmount} teaspoons of sugar <br>
            ${cheese} <br>
            <br>
            For the sauce: <br>
            Use canned sauce <br>
            <br>
            Topping List: <br>
             `;
        //Iterate through the toppings array to make a list
        for (let i=0;i<pizza.topping.length; i++){
            message += `${pizza.topping[i]}<br> `
        }
        //Embeding in HTML
        document.querySelector('.main__feedbackParagraph').innerHTML = message
    }
}
console.log(pizza)

//Size listeners
document.querySelector('#small').addEventListener('click', () => pizza.size= 'small')
document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

//Pizza Crust Listeners
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#stuffed').addEventListener('click', () => pizza.crust = 'stuffed')
document.querySelector('#normal').addEventListener('click', () => pizza.crust = 'normal')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')


//Adding and Removing Toppings Listeners
document.querySelector('#olives').addEventListener('click', (e) => {
    if (document.querySelector('#olives').checked == true) {
    pizza.topping.push('olives')
    } else {
        const index = pizza.topping.indexOf('olives') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    e.stopPropagation()
    console.log(pizza)
})
document.querySelector('#ham').addEventListener('click', () => {
    if (document.querySelector('#ham').checked == true) {
    pizza.topping.push('ham')
    } else {
        const index = pizza.topping.indexOf('ham') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    console.log(pizza)
})
document.querySelector('#pepperoni').addEventListener('click', () => {
    if (document.querySelector('#pepperoni').checked == true) {
    pizza.topping.push('pepperonis')
    } else {
        const index = pizza.topping.indexOf('pepperonis') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    console.log(pizza)
})
document.querySelector('#anchovies').addEventListener('click', () => {
    if (document.querySelector('#anchovies').checked == true) {
    pizza.topping.push('anchovies')
    } else {
        const index = pizza.topping.indexOf('anchovies') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    console.log(pizza)
})
document.querySelector('#jalapenos').addEventListener('click', () => {
    if (document.querySelector('#jalapenos').checked == true) {
    pizza.topping.push('jalapenos')
    } else {
        const index = pizza.topping.indexOf('jalapenos') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    console.log(pizza)
})
document.querySelector('#pineapple').addEventListener('click', () => {
    if (document.querySelector('#pineapple').checked == true) {
    pizza.topping.push('pineapples')
    } else {
        const index = pizza.topping.indexOf('pineapples') //Removing toppings by index
        pizza.topping.splice(index,1)
    }
    console.log(pizza)
})


//Button Listeners
document.querySelector('.main__buildButton').addEventListener('click', pizza.buildPizza)
document.querySelector('.main__shoppingButton').addEventListener('click', pizza.shoppingList)

