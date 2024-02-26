class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Добавление элемента
    append(data) {
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
    insertAt(index, data) {
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
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        this.length++;
    }

    // Удаление элемента
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            console.error("Неверный индекс");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }

        this.length--;
    }

    // Изменение элемента
    updateAt(index, newData) {
        if (index < 0 || index >= this.length) {
            console.error("Неверный индекс");
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.data = newData;
    }

    // Поиск элемента
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
}
