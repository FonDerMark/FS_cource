class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node<T> | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Добавление элемента
    append(data: T): void {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
    }

    // Вставка элемента
    insertAt(index: number, data: T): void {
        if (index < 0 || index > this.length) {
            console.error("Неверный индекс");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (current) current = current.next;
            }
            newNode.next = current ? current.next : null;
            if (current) current.next = newNode;
        }

        this.length++;
    }

    // Удаление элемента
    removeAt(index: number): void {
        if (index < 0 || index >= this.length) {
            console.error("Неверный индекс");
            return;
        }

        if (index === 0) {
            this.head = this.head ? this.head.next : null;
        } else {
            let current = this.head;
            let prev: Node<T> | null = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                if (current) current = current.next;
            }
            if (prev && current) prev.next = current.next;
        }

        this.length--;
    }

    // Изменение элемента
    updateAt(index: number, newData: T): void {
        if (index < 0 || index >= this.length) {
            console.error("Неверный индекс");
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) current = current.next;
        }

        if (current) current.data = newData;
    }

    // Поиск элемента
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
}
