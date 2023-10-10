function selectionSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var inputElement = document.getElementById('input');
    var inputValue = inputElement.value.trim();

    if (inputValue === "") {
        alert("Please enter an array of numbers separated by spaces.");
        return;
    }

    var inputArray = inputValue.split(' ').map(Number);
    var sortedArray = selectionSort(inputArray);
    var sortedArrayElement = document.getElementById('sortedArray');
    sortedArrayElement.textContent = sortedArray.join(' ');
});
