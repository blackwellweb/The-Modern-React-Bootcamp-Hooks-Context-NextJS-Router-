import 'shortid';


// This will generate a unique ID we can use for keys 
function generateId() {
    const shortid = require('shortid');
    return shortid.generate();
}


export { generateId };
