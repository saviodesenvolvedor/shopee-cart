async function addFav(FavL, item){
    FavL.push(item);
}

//deletar item da lista
async function deleteItemF(FavL, name) {
    const index = FavL.findIndex((item) => item.name === name);

    if(index !== -1){
        FavL.splice(index, 1);
    }
}

// -> ✅ remover um item - diminui um item
async function removeItemF(FavL, item) {
    //1. encontrar o indice do item
    const indexFound = FavL.findIndex((p) => p.name === item.name);

    //2. Caso não encontre o item
    if(indexFound == -1) {
        console.log("item not found");
        return;
    }
    
    //3. item > 1 subtrair um item
    if(FavL[indexFound].quantity > 1) {
        FavL[indexFound].quantity -= 1;
        return;
    }

    //4. caso item = 1 deletar o item
    if(FavL[indexFound].quantity == 1) {
        FavL.splice(indexFound, 1);
        return;
    }
}

//✅ -> calcular o total da lista
async function FavoriteTotal(FavL) {
    console.log("\nShopee favorites TOTAL IS:");
    
    const result = FavL.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁Total: ${result}`);  
}

async function displayFav(FavL) {
    console.log("\nShopee favorites list:");
    FavL.forEach((item, index) => {
        console.log(
            `${index +1}. ${item.name} - R$ ${item.price} | ${
                item.quantity
            }x | Subtotal = ${item.subtotal()}`
        );
    });
}

export {displayFav, addFav, removeItemF, deleteItemF, FavoriteTotal};