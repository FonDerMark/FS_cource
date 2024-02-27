class RedBlackNode<K, V> {
    key: K;
    value: V;
    color: 'red' | 'black';
    left: RedBlackNode<K, V> | null;
    right: RedBlackNode<K, V> | null;

    constructor(key: K, value: V, color: 'red' | 'black' = 'red') {
        this.key = key;
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
    }
}

class RedBlackTree<K, V> {
    root: RedBlackNode<K, V> | null;

    constructor() {
        this.root = null;
    }

    // Поиск элемента по ключу
    search(key: K): RedBlackNode<K, V> | null {
        return this._search(this.root, key);
    }

    private _search(node: RedBlackNode<K, V> | null, key: K): RedBlackNode<K, V> | null {
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
    insert(key: K, value: V): void {
        this.root = this._insert(this.root, key, value);
        if (this.root) this.root.color = 'black'; // Корень всегда черный
    }

    private _insert(node: RedBlackNode<K, V> | null, key: K, value: V): RedBlackNode<K, V> {
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
    remove(key: K): void {
        this.root = this._remove(this.root, key);
    }

    private _remove(node: RedBlackNode<K, V> | null, key: K): RedBlackNode<K, V> | null {
        if (node === null) {
            return null;
        }

        return node;
    }

    // Изменение элемента
    update(key: K, value: V): void {
        const node = this.search(key);
        if (node) {
            node.value = value;
        }
    }
}
