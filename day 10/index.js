class Stack {
 #maxSize;
 #container = [];
 constructor(maxSize = 10) {
  this.#maxSize = maxSize;
 }

 push(element) {
  if (this.#container.length < this.#maxSize) this.#container.push(element);
 }
 pop() {
  this.#container.pop();
 }
 show() {
  console.log(this.#container);
 }
}

const stack = new Stack(2);
stack.push(1); //masuk
stack.push(2); //masuk
stack.push(2); //ga masuk
stack.push(2); //ga masuk
stack.push(2); //ga masuk
stack.push(2); //ga masuk
stack.pop(); // 2 keluar
stack.push(4); //masuk 4
stack.show(); //[1,4]

//queue
class Queue {
 #container = [];

 enqueue(element) {
  this.#container.push(element);
 }
 dequeue() {
  this.#container.shift();
 }
 show() {
  console.log(this.#container);
 }
}
const queue = new Queue();
queue.enqueue(1); //masuk index 0
queue.enqueue(2); //masuk index 1
queue.enqueue(3); //masuk index 2
queue.dequeue(); //hapus index 0

queue.show();

//Set
const fruits = ['apel', 'melon', 'jeruk', 'semangka', 'melon'];
const set = new Set(fruits);
console.log(set);
//set memiliki key dan value yang sama

const lplates = ['BP 100 RI', 'B 4J4', 'B 123 AB']; //array nopolisi
const u_lplates = new Set(lplates); //merubah array menjadi set (unique values)
u_lplates.add('BP 100 RI'); //menambah BP 100 RI tetapi gagal karena element sudah ada
u_lplates.forEach((val) => {
 console.log(val); //mengakses element dalam set
});

//cara lain mengakses elemnt dalam set
for (const val of u_lplates) {
 console.log(val); //mengakses element dalam set
}
console.log(u_lplates.size); //banyak element dalam set = 3
console.log(u_lplates.has('BP 100 RI')); // RETURN BOOL, apakah terdapat bp 100 ri di dalam set? true
u_lplates.clear(); //format set menjadi kosong
console.log(u_lplates.entries()); // mengubah jadi object array [key,value] sama dengan object pada umumnya

const arr = [1, 2, 3, 4];
arr.length = 50;

arr[30] = 50;

console.log(arr);

//HASH MAP

const myMap = new Map();
myMap.set('David', '001');
myMap.set('Buchanan', '002');

console.log(myMap);
for (const [key, value] of myMap) {
 console.log(value); // menampilkan value => 001,002
 console.log(key); //menampilkan keys => David,Buchanan
}

//contoh single linked list dari array ["foto1","foto2","foto3"]
const listFoto = {
 head: {
  value: 'foto1',
  next: {
   value: 'foto2',
   next: {
    value: 'foto3',
    next: null
   }
  }
 }
};

class Node {
 constructor(element) {
  this.element = element;
  this.next = null;
 }
}

class LinkedList {
 head = null;
 size = 0;
 add(element) {
  //google.com pertama
  //facebook.com kedua
  //twitter.com

  const node = new Node(element); //simpan element baru dalam bentuk Node { element : "google.com", next : null}
  let curr; // undefined
  if (this.head == null) {
   this.head = node; // { head: { element : "google.com", next : null} }
  } else {
   curr = this.head; // { element : "google.com", next : null }
   // curr = { element : "google.com", next : { element : "facebook.com", next: null} }

   while (curr.next) {
    //curr.next = { element : "facebook.com", next: null} => true
    curr = curr.next; // curr = null
   }

   curr.next = node; // { element : "google.com", next : { element : "facebook.com", next:  { element: "twitter.com", next:null }} }
  }
  this.size++; //1 => 2 => 3
 }
 printList() {
  let result = '';
  let curr = this.head; //// { element : "google.com", next : { element : "facebook.com", next:  { element: "twitter.com", next:null }} }
  while (curr) {
   result += curr.element + ' => ';
   curr = curr.next; // { element : "facebook.com", next:  { element: "twitter.com", next:null }} , // { element : "google.com", next : { element: "twitter.com", next:null } , null
  }
  console.log(result);
 }

 insertAt(element, index) {
  if (index < 0 || index > this.size) {
   return console.log('please enter a valid index.');
  } else {
   //create node
   const node = new Node(element); // {element : element,next: null }
   let curr = this.head;

   // { head : { element : "google.com", next: null}} //contoh
   // insert "facebook.com" ke index 0
   // head : {element: "facebook.com", next : {element: "google.com", next : null }}

   if (index === 0) {
    node.next = this.head;
    this.head = node;
    //geser index 0 yang sudah ada ke index 1 dan seterusnya dengan reassign
   } else {
    curr = this.head;
    // head : {element: "facebook.com", next : {element: "google.com", next : null }}

    let prev;
    let it = 0;
    //index 1
    // twitter

    while (it < index) {
     it++; //it adalah letak index terakhir => 1
    }

    //cari posisi untuk insert new element ke dalam index 1
    for (let i = 0; i < index; i++) {
     prev = curr; // {element: "facebook.com", next : {element: "google.com", next : null }}
     curr = curr.next; // {element: "google.com", next : null }
    }

    //memasukan element
    prev.next = node; // {element: "facebook.com", next : {element: "twitter.com", next : null }}
    node.next = curr; // {element: "google.com", next : null
   }
   this.size++;
  }
 }

 removeAt(index) {
  if (index < 0 || index > this.size) {
   return console.log('please enter a valid index.');
  } else {
   let curr = this.head;
   let prev = curr;

   /// google.com => www.youtube.com => www.facebook.com => www.twitter.com

   //index = 0 => removeAt(0)

   //delete 1st element
   if (index === 0) {
    this.head = curr.next; //www.youtube.com => www.facebook.com => www.twitter.com
   } else {
    //mencari posisi index
    for (let i = 0; i < index; i++) {
     prev = curr; //www.youtube.com => www.facebook.com => www.twitter.com
     curr = curr.next; // www.facebook.com => www.twitter.com
    }

    //hapus index
    prev.next = curr.next; //www.youtube.com =>  www.twitter.com
   }
   this.size--;

   return curr.element;
  }
 }

 removeElement(element) {
  let curr = this.head;
  let prev = null;
  //element = www.facebook.com
  ///curr =  google.com => www.youtube.com => www.facebook.com => www.twitter.com => null
  while (curr != null) {
   if (curr.element === element) {
    if (prev == null) {
     this.head = curr.next;
    } else {
     prev.next = curr.next; //  www.twitter.com
     //  www.facebook.com => www.twitter.com, www.facebook.com => www.twitter.com
    }
    //prev = //google.com => www.facebook.com => www.twitter.com
    //1,2,3,4
    //2 => prev =>  element : 1, next = 2,3,4
    // prev.next = current.next => 3,4
    // prev => element : 1, next = 3,4
    //
    this.size--;

    return curr.element;
   }
   prev = curr; //google.com => www.youtube.com => www.facebook.com => www.twitter.com, www.youtube.com => www.facebook.com => www.twitter.com
   curr = curr.next; // www.youtube.com => www.facebook.com => www.twitter.com, www.facebook.com => www.twitter.com
  }
  return null;
 }

 indexOf(element) {
  let count = 0;
  let curr = this.head;

  while (curr != null) {
   if (curr.element === element) {
    return count; //return banyak loop/index yg sesuai dengan value element di parameter
   }

   count++; // menghitung berapa bnyk loop sampai element ketemu 1
   curr = curr.next; // menggeser nilai current
  }
  return -1; //not found
 }
}

const linkedBrowser = new LinkedList();
linkedBrowser.add('google.com');
linkedBrowser.add('www.facebook.com');
linkedBrowser.add('www.twitter.com');
console.log(linkedBrowser.printList());

linkedBrowser.insertAt('www.youtube.com', 1);

console.log(linkedBrowser.printList());

linkedBrowser.removeElement('www.youtube.com');

console.log(linkedBrowser.printList());

console.log(linkedBrowser.indexOf('www.twitter.com'));

const linkedBrowser2 = {
 head: {
  element: '',
  next: null
 }
};

//sediakan sebuah object link {}
//link.add("") => class node { element : "", next : null }
//link.head = { element : "", next : null }
// { head : {element : "", next : null}}
//link.add("google.com") => class node { element : "google.com", next : null }
//dia ngecek untuk dapet next === null
// { head : {element : "", next : {  element : "google.com", next : null }  }}
