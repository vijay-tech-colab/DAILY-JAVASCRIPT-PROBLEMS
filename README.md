<h1 align="center">📘 JavaScript Daily Practice</h1>
<p align="center">
  Improve your JavaScript skills with <b>daily practice</b> — from <i>basics</i> to <i>advanced</i>.<br/>
  Solve one problem a day, learn core concepts, and build real projects.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES202X-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Learning-365%20Days-blue" alt="365 Days">
  <img src="https://img.shields.io/github/license/yourname/yourrepo" alt="License">
</p>

<hr/>

<h2>📑 Table of Contents</h2>
<ol>
  <li><a href="#about">About</a></li>
  <li><a href="#goals">Goals</a></li>
  <li><a href="#structure">Repository Structure</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#daily-template">Daily Challenge Template</a></li>
  <li><a href="#concepts">Concepts: Basic → Advanced</a></li>
  <li><a href="#roadmap">90-Day Roadmap</a></li>
  <li><a href="#patterns">Common Patterns & Tips</a></li>
  <li><a href="#dsa">Data Structures & Algorithms</a></li>
  <li><a href="#projects">Mini Projects</a></li>
  <li><a href="#testing-tooling">Testing & Tooling</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#resources">Recommended Resources</a></li>
  <li><a href="#license">License</a></li>
</ol>

<hr/>

<h2 id="about">📣 About</h2>
<p>
  This repository is a curated path to master JavaScript through <b>daily code exercises</b>, concept write-ups,
  and mini projects. Each day focuses on a small problem or concept with a solution and explanation.
</p>

<h2 id="goals">🎯 Goals</h2>
<ul>
  <li>Build strong fundamentals with modern JS (ES6+).</li>
  <li>Practice problem solving with daily challenges.</li>
  <li>Learn by doing: DOM, Async, OOP, Patterns, Testing.</li>
  <li>Create small projects to cement knowledge.</li>
</ul>



<h2 id="getting-started">🚀 Getting Started</h2>
<ol>
  <li>Clone the repo:</li>
</ol>
<pre><code class="language-bash">git clone https://github.com/&lt;your-username&gt;/&lt;your-repo&gt;.git
cd &lt;your-repo&gt;</code></pre>
<ol start="2">
  <li>Open <code>index.html</code> (if provided) or run examples with Node:</li>
</ol>
<pre><code class="language-bash">node basics/01-variables.js</code></pre>

<h2 id="daily-template">🗓 Daily Challenge Template</h2>
<p>Create files like <code>day-001.md</code> + <code>day-001.js</code>. Use this template:</p>
<details>
<summary><b>Click to view template</b></summary>
<pre><code class="language-md"># Day NNN – Title
## Problem
Describe the task...
## Input
Example inputs...
## Output
Expected outputs...
## Approach
- Thought process...
## Complexity
Time: O(...), Space: O(...)
## Code (JavaScript)
</code></pre>

<pre><code class="language-js">// day-NNN.js
/**
 * Title: ...
 * Idea: ...
 * Complexity: Time O(...), Space O(...)
 */
function solve(input) {
  // your solution
  return result;
}

// Simple test
if (require.main === module) {
  console.log(solve(/* sample input */));
}
module.exports = solve;
</code></pre>
</details>

<h2 id="concepts">🧠 Concepts: Basic → Advanced</h2>

<h3>🟢 Basics</h3>
<ul>
  <li><b>Variables:</b> <code>var</code>, <code>let</code>, <code>const</code></li>
  <li><b>Data Types:</b> string, number, boolean, null, undefined, symbol, BigInt</li>
  <li><b>Type Coercion</b> &amp; equality (<code>==</code> vs <code>===</code>)</li>
  <li><b>Operators:</b> arithmetic, logical, comparison, bitwise, ternary</li>
  <li><b>Control Flow:</b> if/else, switch, loops (<code>for</code>, <code>while</code>, <code>for...of</code>, <code>for...in</code>)</li>
  <li><b>Functions:</b> declarations, expressions, arrow functions, default/rest params</li>
  <li><b>Scope &amp; Hoisting</b>, <b>Closures</b>, <b>this</b> binding, call/apply/bind</li>
</ul>

<h3>🟡 Intermediate</h3>
<ul>
  <li><b>Arrays &amp; Objects:</b> map/filter/reduce, spread/rest, destructuring</li>
  <li><b>Modules:</b> ES modules (<code>import/export</code>), CommonJS</li>
  <li><b>DOM:</b> select, traverse, manipulate, forms, events, event delegation</li>
  <li><b>Browser APIs:</b> Fetch, Storage, URL, History, Clipboard, IntersectionObserver</li>
  <li><b>Error Handling:</b> try/catch, custom errors</li>
  <li><b>Dates &amp; Intl</b> (formatting, time zones)</li>
</ul>

<h3>🔵 Advanced</h3>
<ul>
  <li><b>Asynchronous JS:</b> callbacks, promises, async/await, micro/macro tasks</li>
  <li><b>Generators &amp; Iterators</b></li>
  <li><b>Symbols, Proxies, Reflect, WeakMap/WeakSet</b></li>
  <li><b>OOP:</b> classes, private fields (<code>#</code>), inheritance, composition</li>
  <li><b>FP:</b> immutability, pure functions, curry, compose/pipe</li>
  <li><b>Patterns:</b> module, factory, singleton, observer, strategy, decorator</li>
  <li><b>Performance:</b> big-O basics, debouncing/throttling, memoization, web workers</li>
  <li><b>Security:</b> XSS basics, CSP, escaping, safe eval alternatives</li>
  <li><b>Tooling:</b> npm/yarn/pnpm, ESLint, Prettier, bundlers (Vite/Webpack), TS intro</li>
</ul>

<h2 id="roadmap">🗺️ 90-Day Roadmap (Suggested)</h2>
<details>
<summary><b>Click to expand</b></summary>
<ul>
  <li><b>Days 1–15:</b> Basics + 1 problem/day</li>
  <li><b>Days 16–30:</b> Arrays/Objects + DOM events</li>
  <li><b>Days 31–45:</b> Async (fetch, promises, async/await)</li>
  <li><b>Days 46–60:</b> OOP + FP + Patterns</li>
  <li><b>Days 61–75:</b> DSA implementations</li>
  <li><b>Days 76–90:</b> 3–5 mini projects + tests</li>
</ul>
</details>

<h2 id="patterns">🧩 Common Patterns & Tips</h2>
<pre><code class="language-js">// Debounce
function debounce(fn, delay = 300) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle
function throttle(fn, delay = 300) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last &gt;= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// Memoize
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}
</code></pre>

<h2 id="dsa">🧮 Data Structures & Algorithms</h2>
<ul>
  <li>Arrays, Strings, Hash Maps (Objects/Map)</li>
  <li>Stacks, Queues, Deque</li>
  <li>Linked Lists (Singly/Doubly)</li>
  <li>Trees (BST, Traversals), Tries</li>
  <li>Graphs (BFS/DFS, Dijkstra)</li>
  <li>Sorting (Quick/Merge/Heap), Searching (Binary)</li>
  <li>Sliding Window, Two Pointers, Greedy, DP</li>
</ul>

<details>
<summary><b>Sample: Two Sum (Map)</b></summary>
<pre><code class="language-js">function twoSum(nums, target) {
  const idx = new Map();
  for (let i = 0; i &lt; nums.length; i++) {
    const need = target - nums[i];
    if (idx.has(need)) return [idx.get(need), i];
    idx.set(nums[i], i);
  }
  return [-1, -1];
}
</code></pre>
</details>

<h2 id="projects">🛠 Mini Projects</h2>
<ul>
  <li>To-Do App (DOM + localStorage)</li>
  <li>Weather Dashboard (fetch + async/await)</li>
  <li>Quiz App (timers, state management)</li>
  <li>Notes App (CRUD, search, debounce)</li>
  <li>Currency Converter (API + validation)</li>
</ul>

<h2 id="testing-tooling">🧪 Testing & Tooling</h2>
<ul>
  <li><b>Testing:</b> Jest/Vitest basics, testing pure functions & DOM</li>
  <li><b>Lint/Format:</b> ESLint + Prettier setup</li>
  <li><b>TypeScript Intro:</b> types for functions, objects, generics</li>
  <li><b>CI idea:</b> run tests on PR</li>
</ul>

<h3>Example Test</h3>
<pre><code class="language-js">// tests/sum.test.js
const sum = (a, b) =&gt; a + b;
test('adds 2 + 2 = 4', () =&gt; {
  expect(sum(2, 2)).toBe(4);
});
</code></pre>

<h2>✅ Progress Checklist</h2>
<ul>
  <li>[ ] 30 Days Streak</li>
  <li>[ ] 60 Days Streak</li>
  <li>[ ] 90 Days Streak</li>
  <li>[ ] 10 Mini Projects</li>
  <li>[ ] 50 DSA Problems</li>
</ul>

<h2 id="contributing">🤝 Contributing</h2>
<ol>
  <li>Fork the repo &amp; create a feature branch.</li>
  <li>Add your challenge in the correct folder with <code>README.md</code> or comments.</li>
  <li>Open a PR with a brief description.</li>
</ol>

<h2 id="resources">📎 Recommended Resources</h2>
<ul>
  <li>MDN Web Docs (JavaScript Guide)</li>
  <li>You Don’t Know JS (book series)</li>
  <li>Eloquent JavaScript</li>
  <li>JavaScript.info</li>
</ul>

<h2 id="license">📄 License</h2>
<p>MIT — feel free to use and modify for your learning.</p>

<hr/>

<p align="center">
  Happy Coding! ✨ Keep pushing one commit a day.
