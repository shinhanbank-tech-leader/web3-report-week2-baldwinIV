function verifyProof(proof, node, root, concat) {
    if (!proof.length) return node === root;

    const [{ data, left }, ...rest] = proof;
    const newNode = left ? concat(data, node) : concat(node, data);
    
    return verifyProof(rest, newNode, root, concat);
}

module.exports = verifyProof;