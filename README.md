# Node.js & MERN Stack Concepts - Practice Session

## ✅ Concepts Covered Today

---

### 1️⃣ MERN Stack

MERN stands for:
- **MongoDB**  
- **Express.js**  
- **React.js**  
- **Node.js**

👉 A full JavaScript stack used for building fast and scalable full-stack web applications.

---

### 2️⃣ Node.js

Node.js is a JavaScript runtime environment that executes JavaScript outside the browser.

#### ✔️ Why Node.js?
- Cross-Platform (Windows, Linux, Mac OS)
- Huge ecosystem of third-party packages
- Open Source
- Massive Community

---

### 3️⃣ Running JavaScript Using Node.js

We can run JavaScript in **two ways**:
1. **Node REPL (Read-Eval-Print-Loop)**
   - Type `node` in terminal → Interactive JavaScript environment.
   - `.exit` to quit.
   
2. **Node CLI**
   - Write JS code in a file (e.g., `index.js`)
   - Run using command:
     ```bash
     node index.js
     ```
   💡 Don’t forget to save the file after changes.

---

### 4️⃣ Module in Node.js

Every JS file in Node.js is treated as a **separate module**.

We can share functionality between files using:
- CommonJS Module Exports
- Modern JS (ES6) Module Exports

---

#### ✅ 4.1 CommonJS Module Exports

##### ➤ Default Export
- Exporting:
    ```js
    module.exports = function add(a, b) {
        return a + b;
    };
    ```
- Importing:
    ```js
    const add = require('./calculator');
    console.log(add(5, 3));
    ```

##### ➤ Named Export
- Exporting:
    ```js
    module.exports.add = (a, b) => a + b;
    module.exports.sub = (a, b) => a - b;
    ```
- Importing:
    ```js
    const { add, sub } = require('./calculator');
    console.log(add(5, 3)); // 8
    console.log(sub(5, 3)); // 2
    ```

---

#### ✅ 4.2 Modern JS Module Exports (ES6 Modules)

> ⚡ Use `.mjs` extension or `"type": "module"` in `package.json`.

##### ➤ Default Export
- Exporting:
    ```js
    export default function add(a, b) {
        return a + b;
    }
    ```
- Importing:
    ```js
    import add from './calculator.mjs';
    console.log(add(5, 3)); // 8
    ```

##### ➤ Named Export
- Exporting:
    ```js
    export const add = (a, b) => a + b;
    export const sub = (a, b) => a - b;
    ```
- Importing:
    ```js
    import { add, sub } from './calculator.mjs';
    console.log(add(5, 3)); // 8
    console.log(sub(5, 3)); // 2
    ```

---

## ✅ Notes

- Use `.mjs` extension when using ES6 module syntax.
- For CommonJS modules, `.js` extension is fine.
- Always save files before running them in Node.js.

---

🚀 Happy Coding!

