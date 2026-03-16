const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;

        for (const char of word) {
            node.children[char] ??= new TrieNode(char);
            //null이나 undefined일때만 왼쪽에 할당
            node = node.children[char];
        }
        node.isWord = true;
    }

    contains(word) {
        let node = this.root;

        for (const char of word) {
            node = node.children[char];
            if (!node) return false;
        }
        return node.isWord;
    }
}

module.exports = Trie;