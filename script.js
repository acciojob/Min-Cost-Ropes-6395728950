const MinHeap = require('heap-js').MinHeap;

function mincost(arr) {
    const heap = new MinHeap(arr);
    let totalCost = 0;

    while (heap.size() > 1) {
        const cost = heap.pop() + heap.pop();
        totalCost += cost;
        heap.push(cost);
    }

    return totalCost;
}

module.exports = mincost;
