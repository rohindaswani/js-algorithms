
const findPath = (root, path, k) => {
  if (root === null) {
    return false;
  }

  path.push(root.key);

  if (root.key === k) {
    return true;
  }

  if ((root.left !== null && findPath(root.left, path, k)) || (root.right !== null && findPath(root.right, path, k))) {
    return true;
  }

  path.pop();
  return false;
}