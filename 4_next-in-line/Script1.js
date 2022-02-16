// JavaScript source code



function nextInLine(arr, item) {
    arr.push(item);
    let firstItem = arr.shift(arr);
    return firstItem;
}

