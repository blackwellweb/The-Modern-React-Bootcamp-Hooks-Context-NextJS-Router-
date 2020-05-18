// Choice will take an array and return a random color 
function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export {choice};