//CASOS DE USO DOS ITENS
// -> criar item com subtotal certo
async function createItem(name, price, quantity) {
    const sale = 0.30;
    return {
        name,
        price,
        quantity,
        subtotal: () => {
            if (quantity > 3){
               return price * quantity * sale;
            }else if (quantity <= 3){
                return price * quantity;
            }
        } 
    };
}

export default createItem;