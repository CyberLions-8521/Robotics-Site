### How To Deploy Website (ask leads for permission first)

Firebase has already been configured to this repository for you. So therefore, all you need to do now to compile the React.js code into a static file (creating build folder) and deploy it into Firebase. **Before**, this would have been done like so:

- `npm run build` - This will compile the React.js code into a static file (creating build folder)
- `firebase deploy` - This will deploy the static file into Firebase

**However the commands above are no longer required.** Because of continuous integration, the website will automatically be deployed to Firebase when you create a pull request and push to the `main` branch. This is done using Github Actions. The workflow file can be found in `.github/workflows/main.yml`

## Important

The React.js website is hosted using `Google Firebase`. Although using Github Pages is a possible option, Github Pages does not have support for server side rendering, meaning you cannot use React Routing (to move through the navigation links) without using unfriendly SEO workarounds

## Useful Articles

- https://create-react-app.dev/docs/deployment/#firebase