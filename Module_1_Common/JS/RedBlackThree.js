class RedBlackNode {
    constructor(key, value, color = 'red') {
        this.key = key;
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Поиск элемента по ключу
    search(key) {
        return this._search(this.root, key);
    }

    _search(node, key) {
        if (node === null || key === node.key) {
            return node;
        }

        if (key < node.key) {
            return this._search(node.left, key);
        } else {
            return this._search(node.right, key);
        }
    }

    // Вставка элемента
    insert(key, value) {
        this.root = this._insert(this.root, key, value);
        this.root.color = 'black'; // Корень всегда черный
    }

    _insert(node, key, value) {
        if (node === null) {
            return new RedBlackNode(key, value);
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._insert(node.right, key, value);
        } else {
            node.value = value; // Если ключ уже существует, обновляем значение
        }

        return node;
    }

    // Удаление элемента
    remove(key) {
        this.root = this._remove(this.root, key);
    }

    _remove(node, key) {
        if (node === null) {
            return null;
        }

        return node;
    }

    // Изменение элемента
    update(key, value) {
        const node = this.search(key);
        if (node) {
            node.value = value;
        }
    }
}
