function createItemImage(imageFile) {
    const image = new Image();
    image.src = imageFile;
    return image;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.classList = 'itemParagraph';
    paragraph.innerHTML = text;
    return paragraph;
}

function createItemDetail(itemName, cost, detail) {
    const summary = document.createElement('div');
    summary.classList = 'itemSummary';

    const itemName = createParagraph(itemName);
    const itemCost = createParagraph(`$`+cost);
    const itemDetail = createParagraph(detail);

    summary.appendChild(itemName);
    summary.appendChild(itemCost);
    summary.appendChild(itemDetail);
    return summary;
}

function createItem(imageFile, itemName, cost, detail) { 
    const menuItem = document.createElement('div');
    menuItem.classList = 'menuItem';

    const image = createItemImage(imageFile);
    const details = createItemDetail(itemName, cost, detail);

    menuItem.appendChild(image);
    menuItem.appendChild(details);
    return menuItem;
}

function renderMenu() {
    
}

export default renderMenu;