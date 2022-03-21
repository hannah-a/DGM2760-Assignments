let message 


const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza() {
        console.log('buildPizza has been called')
        message = `Baking a pizza on a ${pizza.size} ${pizza.crust} with ${pizza.topping}s.`
        document.querySelector('.main__feedbackParagraph').textContent = message
    },
    shoppingList(){
        let flour = 1
        if (pizza.crust === 'stuffed'){
            flour *= 2
        }
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('.main__feedbackParagraph').textContent = message
    }
}

//Pizza Crust Listeners
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#stuffed').addEventListener('click', () => pizza.crust = 'stuffed')
document.querySelector('#normal').addEventListener('click', () => pizza.crust = 'normal')


document.querySelector('#olives').addEventListener('click', () => pizza.topping = 'olive')



document.querySelector('.main__buildButton').addEventListener('click', pizza.buildPizza)
document.querySelector('.main__shoppingButton').addEventListener('click', pizza.shoppingList)
