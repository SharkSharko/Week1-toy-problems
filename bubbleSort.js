function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;
const bubbleSort = require('../bubbleSort');

test('sorts an array in ascending order', () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});

test('returns an empty array when given an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
});

test('sorts an already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('sorts an array with negative numbers', () => {
    expect(bubbleSort([-3, -1, -2, 0, 1])).toEqual([-3, -2, -1, 0, 1]);
});

