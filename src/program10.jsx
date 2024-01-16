
 const array1=[1,2,3]
const array2=[2,3,4,5]
for (let i = 0; i < array1.length; i++) {
    const indexToRemove = array2.indexOf(array1[i]);

    if (indexToRemove !== -1) {
        array2.splice(indexToRemove, 1);
        i--;
    }
}
console.log(array2);
