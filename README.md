# cypress-test-api

Folder structure:

```
../projects/
    automaçãoTeste/
      package.json
      node_modules
      cypress.json
      cypress/
        fixture
        integration/
          Tests
        plugins
        support
        videos

    
```
```json
{
  "scripts": {
    "test": "npm run tests",
    "tests": "cypress run --reporter-options mochaFile=result.xml,toConsole=true"
  }
}
```

```
  Execute npm run tests ineer testCypressApi folder.
```
# testCypressApi
