exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    console.log("*********", `"${fileNode.absolutePath}"`);
    console.log("*********", `"${fileNode.relativeDirectory}"`);
  }
};
