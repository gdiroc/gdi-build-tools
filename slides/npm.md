##  NPM

* Node Package Manager
  * Install locally with package.json
  * Install globally

```bash
app/
├── node_modules/
│   ├── package1/
│   ├── package2/
│   └── package3/
└── package.json
```

```javascript
{
  "name": "how-to-be-a-lazy-developer-an-intro-to-build-tools",
  "dependencies": {
    "package1": "~1.4.9"
  },
  "devDependencies": {
    "package2": "^0.4.5"
  }
}
```

note:
  Demo installing globally with `grunt`
  Notice how package3 doesn't exist in package.json - each dependency
  will have sub-dependencies, and all of them will appear in your node_modules folder