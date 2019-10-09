let message

const pizza = {
    crust: 'thin',
    size: 'large',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} Pizza with ${pizza.crust} crust and ${pizza.topping} toppings.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        else if (pizza.size === 'small') flour /= 2
        message = `You will need to have ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}
// RADIO BUTTONS
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage') 
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')




// ACTUAL BUTTONS
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)