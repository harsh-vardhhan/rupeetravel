import fs from "fs";
import path from "path";

function getFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!file.startsWith(".") && file !== "node_modules" && file !== ".next") {
        results = results.concat(getFiles(fullPath, extensions));
      }
    } else {
      if (extensions.some((ext) => fullPath.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const targetDirs = ["./src", "./_posts"];
const extensions = [".js", ".jsx", ".ts", ".tsx", ".md", ".json"];
let files = [];

for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    files = files.concat(getFiles(dir, extensions));
  }
}

// Regex to capture /images/... paths
const imageRegex = /\/images\/[a-zA-Z0-9_\-.]+\.(webp|avif|png|jpg|jpeg|svg|gif|ico)/g;

let errors = [];
let checkedCount = 0;

for (const filePath of files) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    let match;
    // Reset regex index for line iteration
    const regex = new RegExp(imageRegex);
    while ((match = regex.exec(line)) !== null) {
      checkedCount++;
      const imagePath = match[0];
      const targetDiskPath = path.join(process.cwd(), "public", imagePath);

      if (!fs.existsSync(targetDiskPath)) {
        errors.push({
          file: filePath,
          line: index + 1,
          imagePath,
        });
      }
    }
  });
}

if (errors.length > 0) {
  console.error(`\n❌ Found ${errors.length} missing image reference(s):\n`);
  errors.forEach((err) => {
    console.error(`  • ${err.file}:${err.line} -> ${err.imagePath}`);
  });
  console.error("\nPlease fix or remove these image paths before building.\n");
  process.exit(1);
} else {
  console.log(`✓ Verified ${checkedCount} image paths. All files exist in public/`);
}
