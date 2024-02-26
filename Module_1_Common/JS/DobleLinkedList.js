class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    insertAt(index, data) {
        if (index < 0 || index > this.length) {
            console.error("Wrong index");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else if (index === this.length) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
        }

        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            console.error("Wrong index");
            return;
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.length - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }

            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.length--;
    }

    // Изменение элемента по индексу
    updateAt(index, newData) {
        if (index < 0 || index >= this.length) {
            console.error("Wrong index");
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.data = newData;
    }

    // Поиск элемента по индексу
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    // Получение длины списка
    getLength() {
        return this.length;
    }

    // Элементы списка
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

