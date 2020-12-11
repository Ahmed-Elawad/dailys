/*
    Given 3 lists determine the number of duplicate items
    An item is considered a duplicate if it has been listed prior and all attributes match:
    ie: price, wieght, name

    ex: 
    name = [ball, racket, ball]
    price = [1, 1, 1]
    wieght = [2, 5, 2]
    result: there is one duplicate item

    list:
    item    price  weight
    ball      1      2 *   
    racket    1      5
    ball      1      2 *
*/

let findDups = (name, price, weight) => {
    // store reference info and cout of duplicates 
    let listStorage = [],
        reference = {index: 0},
        dupCount = 0;

    // helper function to create instance of list item
        // only none dups
    const createInstance = (isNew, name, price, weight) => {
        if (isNew) {
            reference[name] = [reference.index];
            listStorage.push([price, weight]);
        } else {
            reference[name].push(reference.index);
        }
        reference.index++;
        return;
    };

    // traverse the list of names comparing metrics
        // create a new instance if a dup isnt foud
        // otherwise increment dup count
    name.forEach((itemName, i) => {
        let itemPrice = price[i],
            itemWeght = weight[i];
            if (reference[itemName] === undefined) {
                createInstance(true, itemName, itemPrice, itemWeght);
            } else {
                reference[itemName].forEach((index) => {
                    if (listStorage[index][0] !== itemPrice || listStorage[index[1] !== itemWeght]) {
                        createInstance(false, itemName, itemPrice, itemWeght);
                    } else {
                        dupCount++;
                    }
                })
            }
    })

    // return accumulated count
    return dupCount;
}

let noDups = findDups(['Ahmed', 'Ahmed', 'Ahmed'], [1, 1, 3], [1, 1, 1]);
