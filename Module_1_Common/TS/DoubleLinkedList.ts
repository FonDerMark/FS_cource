class Node<T> {
    data: T;
    prev: Node<T> | null;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data: T): void {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    insertAt(index: number, data: T): void {
        if (index < 0 || index > this.length) {
            console.error("Wrong index");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
        } else if (index === this.length) {
            newNode.prev = this.tail;
            if (this.tail) this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (current) current = current.next;
            }

            if (current) {
                newNode.next = current.next;
                newNode.prev = current;
                if (current.next) current.next.prev = newNode;
                current.next = newNode;
            }
        }

        this.length++;
    }

    removeAt(index: number): void {
        if (index < 0 || index >= this.length) {
            console.error("Wrong index");
            return;
        }

        let current = this.head;

        if (index === 0) {
            this.head = current ? current.next : null;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.length - 1) {
            current = this.tail;
            this.tail = current ? current.prev : null;
            if (this.tail) this.tail.next = null;
        } else {
            for (let i = 0; i < index; i++) {
                if (current) current = current.next;
            }

            if (current && current.prev && current.next) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }

        this.length--;
    }

    // Изменение элемента по индексу
    updateAt(index: number, newData: T): void {
        if (index < 0 || index >= this.length) {
            console.error("Wrong index");
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) current = current.next;
        }

        if (current) current.data = newData;
    }

    // Поиск элемента по индексу
    search(data: T): Node<T> | null {
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
    getLength(): number {
        return this.length;
    }

    // Элементы списка
    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
