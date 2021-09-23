// Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function. Weave receives two 
// queues as arguments and combines the content of each into a new, third queue. 
// The third queue should contain the *alteratiing* content of the two queues. 
// The function should handle queues of different lengths without inserting 'undefined'
// into the new onemptied. 
// *Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions. 

// Examples
// const queueOne = new Queue();
// queueOne.add(1);
// queueOne.add(2);

// const queueTwo = new Queue();
// queueTwo.add('Hi');
// queueTwo.add('There');
// const q = weave(queueOne, queueTwo);
// q.remove() // 1
// q.remove() // 'Hi'
// q.remove() // 2
// q.remove() // There

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}

module.exports = weave;


// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     add(record) {
//         this.data.unshift(record);
//     }

//     remove() {
//         return this.data.pop();
//     }

//     peek() {
//         return this.data[this.data.length - 1];
//     }

// }

