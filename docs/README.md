### Important

**When using React, the only html file being used is the root file** (``index.html``)

While testing we launch our app with **``npm start``**. With Github Pages, we're using the gh-pages branch to host our website. This is the branch that is being used to host our website. 

**npm run deploy** will build the app and push it to the gh-pages branch.

It works like this:
```json
- "predeploy": "npm run build"
- "deploy": "gh-pages -d build"

// "predeploy" compiles the react app into a build folder, which makes it a static website. 
// "deploy" pushes the build folder to the gh-pages branch.
```

**With React, github pages is not running the Main branch**. However, we should still have our most stable version of the website in the main branch.

### React Routing with Github Pages

**GitHub Pages doesn't natively support single page apps.** When there is a fresh page load for a url like ``example.tld/foo``, where ``/foo`` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of ``/foo``.

In a nutshell, Github servers don't know how to listen for these routes, and all our code is client-side (front-end). To bypass this, we manipulate the 404 page to redirect to our index.html file.

The custom 404.html page contains a script that takes the current url and converts the path and query string into just a query string, and then redirects the browser to the new url with only a query string and hash fragment. For example, example.tld/one/two?a=b&c=d#qwe, becomes example.tld/?/one/two&a=b~and~c=d#qwe.

**The GitHub Pages server receives the new request, e.g. example.tld/?/..., ignores the query string and returns the index.html**

### External Articles

- https://reginafurness.medium.com/client-side-routing-on-github-pages-with-create-react-app-f5a393341c2
- https://github.com/rafgraph/spa-github-pages