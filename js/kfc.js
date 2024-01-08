import {dataFood} from './dataFood.js';


const setInfoToextendedPanel = function(){

    let parent = this.parentNode;
    
    let extended_name = document.getElementById('extended-title');
    let extended_description = document.getElementById('extended-description');
    let extended_price = document.getElementById('extended-price');
    let extended_image = document.getElementById('extended-image');

    extended_name.textContent = parent["my_property_name"];
    extended_description.textContent = parent["my_property_description"];
    extended_image.style.backgroundImage = `url(${parent["my_property_image"]})`;
    extended_price.textContent = `Buy by ${parent["my_property_price"]}$`;

    
    let extended_general = document.querySelector('.extended-general');
    extended_general.classList.remove('element-is-hide');
};


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
    item_buy_button.addEventListener('click', setInfoToextendedPanel);
    
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
    result["my_property_name"] = name;
    result["my_property_description"] = description;
    result["my_property_image"] = image;

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
    
let extended_general = document.querySelector('.extended-general');
extended_general.addEventListener('click', function(event){
    this.classList.add('element-is-hide');
});


let extended_area = document.querySelector('.extended-area');
extended_area.addEventListener('click', function(event){
    event.stopPropagation();
});