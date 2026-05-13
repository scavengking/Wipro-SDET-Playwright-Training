// q4.ts

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[]; 
};


const root: FolderNode = {
  name: "root",
  files: ["index.ts", "package.json"],
  subFolders: [
    {
      name: "src",
      files: ["app.ts", "utils.ts"],
      subFolders: [
        {
          name: "components",
          files: ["Button.ts", "Modal.ts"],
        }
      ]
    },
    {
      name: "public",
      files: ["index.html"],
    }
  ]
};


function printTree(node: FolderNode, indent: number = 0): void {
  console.log(" ".repeat(indent) + "📁 " + node.name);

  if (node.files) {
    node.files.forEach(f => console.log(" ".repeat(indent + 2) + "📄 " + f));
  }

  if (node.subFolders) {
    node.subFolders.forEach(sub => printTree(sub, indent + 4));
  }
}

printTree(root);