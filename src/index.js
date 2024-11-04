import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import * as FavoriteService from "./services/favlist.js"

const myCart = [];
const myWhishList = [];

const itemFav1 = await createItem("Xbox One X", 5000.00, 3);
const itemFav2 = await createItem("HEADSET RAZE KRAKEN", 8500.75, 1);
const itemFav3 = await createItem("JBL BASS MAX", 70000.00, 1);
const itemFav4 = await createItem("Samsung A30", 1850.90, 1);
const itemFav5 = await createItem("FERRARI MINIATURE", 99.99, 1);
const itemFav6 = await createItem("IPHONE 16 PRO MAX CASE", 100.00, 4);

console.log("This is your favorites list!💖")
// FAVORITES
await FavoriteService.addFav(myWhishList, itemFav1);
await FavoriteService.addFav(myWhishList, itemFav2);
await FavoriteService.addFav(myWhishList, itemFav3);
await FavoriteService.addFav(myWhishList, itemFav4);
await FavoriteService.addFav(myWhishList, itemFav5);
await FavoriteService.addFav(myWhishList, itemFav6);
/////-----------------------------------------//////
await FavoriteService.displayFav(myWhishList);
await FavoriteService.FavoriteTotal(myWhishList);

console.log("\nWelcome to the your Shopee Cart!")

//adicionado dois itens
const item1 = await createItem("Iphone 16 Pro Max", 15000.70, 4);
const item2 = await createItem("Samsung S24", 6000.59, 1);

//adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//removeu itens
// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);