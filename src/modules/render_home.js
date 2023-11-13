function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

export {createRestrDescription};
