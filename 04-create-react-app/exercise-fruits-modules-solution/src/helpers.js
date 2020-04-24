

const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}

const remove = (items, item) => {
    const index = items.indexOf(item);
    return items.splice(index, 1);
}

export { choice , remove };