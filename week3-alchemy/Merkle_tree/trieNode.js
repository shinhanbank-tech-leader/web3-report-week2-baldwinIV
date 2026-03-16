class TrieNode {
    constructor(key) {
        this.key = key;          // 문자 저장 (예: 'a', 'b', ...)
        this.children = {};      // 자식 노드들을 저장할 객체
        this.isWord = false;     // 단어의 완성 여부
    }

}

module.exports = TrieNode;