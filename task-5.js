const pizzaMenu = {
    SIZE_S:{param: "SIZE_S", price:60, calorie: 300},
    SIZE_M:{param: "SIZE_M", price:90, calorie: 450},
    SIZE_L:{param: "SIZE_L", price:160, calorie: 600},
    KIND_MEAT:{param: "KIND_MEAT", price:55, calorie: 230},
    KIND_FISH:{param: "KIND_FISH", price:70, calorie: 150},
    KIND_CHEESE:{param: "KIND_CHEESE", price:50, calorie: 200},
    KIND_VEGETARIAN:{param: "KIND_VEGETARIAN", price:35, calorie: 50},
    INGREDIENT_TOMATOES:{param: "INGREDIENT_TOMATOES", price:15, calorie: 5},
    INGREDIENT_PEPPER:{param: "INGREDIENT_PEPPER", price:18, calorie: 5},
    INGREDIENT_BACON:{param: "INGREDIENT_BACON", price:25, calorie: 40},
    INGREDIENT_OLIVES:{param: "INGREDIENT_OLIVES", price:20, calorie: 0}
};

class PizzaMaker {
    constructor(size, kind){
        this.size = size;
        this.kind = kind;
        this.param = {
            size: size,
            kind: kind,
            ingredient: []
        }
    }

    addIngredient(ingredient){
        let currentIngredient = this.params.ingredient;
        let isPresent = 0;
        for (let i = 0; i < currentIngredient.length; i++){
            if (currentIngredient[i].param === ingredient.param){
                isPresent++;
            }
        }
        if (!isPresent){
            currentIngredient.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        } else {
            console.log('Such an ingredient already exists!');
        }
    }

    deleteIngredient(ingredient){
        let currentIngredient = this.params.ingredient;

        for (let i = 0; i < currentIngredient.length; i++){
            if (currentIngredient[i].param === ingredient.param){
                currentIngredient.splice(i, 1);
                console.log(`${ingredient.param} has been deleted`);
            }
        }
    }

    getIngredient(){
        return this.param.ingredient;
    }

    calculatePrice() {
        let currentParams = this.params;
        let totalPrice;
        let basePrice = currentParams.size.price;
        let kindPrice = currentParams.kind.price;
        let ingredientPrice = 0;
        for (let i = 0; i < currentParams.ingredient.length; i++){
            ingredientPrice += currentParams.ingredient[i].price;
        }
        totalPrice = basePrice + kindPrice + ingredientPrice;
        return totalPrice;
    }

    calculateCalories(){
        let currentParams = this.params;
        let totalCalories;
        let baseCalories = currentParams.size.calorie;
        let kindCalories = currentParams.kind.calorie;
        let ingredientCalories = 0;
        for (let i = 0; i < currentParams.ingredient.length; i++){
            ingredientCalories += currentParams.ingredient[i].calorie;
        }
        totalCalories = baseCalories + kindCalories + ingredientCalories;
        return totalCalories;
    }
}