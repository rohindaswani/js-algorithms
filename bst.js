class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
}
}

function kthSmallest(root, k) {
    var min = Number.MAX_SAFE_INTEGER;
    var stack = [];

    var pCrawl = root;

    while(pCrawl !== null) {
        stack.push(pCrawl);
        pCrawl = pCrawl.left;
    }

    var counter = 0;
    while(stack.length != 0) {
        pCrawl = stack.pop();
        counter++;
        if (counter === k) return pCrawl.val;
        if (pCrawl.right !== null) {
            pCrawl = pCrawl.right;
            while (pCrawl !== null) {
                stack.push(pCrawl);
                pCrawl = pCrawl.left;
            }
        }
    }
}


var root = new TreeNode(10);
root.left = new TreeNode(8);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(9);
root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(16);

console.log('find smallest', kthSmallest(root, 5));