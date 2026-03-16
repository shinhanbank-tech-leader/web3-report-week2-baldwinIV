class MerkleTree {
    constructor(leaves, concat) {
        console.log(leaves)
        this.leaves  = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves){
        if (leaves.length === 1)return leaves[0];
        const nextLayer = [];

        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i+1];
            console.log(left + ' ' + right);
            if(!right){
                nextLayer.push(left);
                return this.getRoot(nextLayer);
            }
            nextLayer.push(this.concat(left, right));
        }
        return this.getRoot(nextLayer);
    }
    getProof(idx, leaves = this.leaves, proof = []) {
        if (leaves.length <= 1) return proof;

        const nextLayer = [];
        let newIdx = Math.floor(idx / 2);

        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];

            if (i === idx || i + 1 === idx) {
                if (idx % 2 === 0) { // left
                    if (right) proof.push({ data: right, left: false });
                } else {
                    proof.push({ data: left, left: true });
                }
            }

            if (!right) {
                nextLayer.push(left);
            } else {
                nextLayer.push(this.concat(left, right));
            }
        }
        console.log(proof)
        return this.getProof(newIdx, nextLayer, proof);
    }

}

module.exports = MerkleTree;