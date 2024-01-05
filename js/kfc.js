import {dataFood} from './dataFood.js';

const DataForming = function({name, description, image, price}){

    let result = document.createElement('div');
    result.classList.add('item-area');

    let item_title = document.createElement('p');
    item_title.classList.add('item-title');
    item_title.classList.add('item-property');
    item_title.textContent = name;

    let item_description = document.createElement('p');
    item_description.classList.add('item-description');
    item_description.textContent = description;

    let item_image = document.createElement('div');
    item_image.classList.add('item-image');
    item_image.style.backgroundImage = (`url(${image})`);

    let item_price = document.createElement('p');
    item_price.classList.add('item-price');
    item_price.textContent = `Buy by ${price}$`;

    let item_buy_button = document.createElement('button');
    item_buy_button.classList.add('item-buy-button');
    item_buy_button.classList.add('center-content');
    item_buy_button.appendChild(item_price);
    
    let item_line_1 = document.createElement('div');
    item_line_1.classList.add('item-line');
    
    let item_line_2 = document.createElement('div');
    item_line_2.classList.add('item-line');
    
    let title_area = document.createElement('div');
    title_area.classList.add('title-area');
    title_area.appendChild(item_line_1);
    title_area.appendChild(item_title);
    title_area.appendChild(item_line_2);

    result.appendChild(item_description);
    result.appendChild(item_image);
    result.appendChild(item_buy_button);
    result.appendChild(title_area);

    result["my_property_price"] = price;

    return result;
};

const SortToMore = function(compareFunc, collection){
    collection.sort((a,b)=>{a.my_property_price - b.my_property_price});
};
const SortToLess = function(compareFunc, collection){
    collection.sort((a,b)=>{b.my_property_price - a.my_property_price});
};

let menu = document.getElementById('list-menu');
dataFood.map(DataForming).forEach(element=>{
    menu.appendChild(element);
});