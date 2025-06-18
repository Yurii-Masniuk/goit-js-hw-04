function isEnoughCapacity(products, containerSize) {
    let totalProducts = 0;
    const values = Object.values(products);
    for (const value of values) {
        totalProducts += value;
    }
    return totalProducts <= containerSize;    
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));