### How To Deploy Website (ask leads for permission first)

Firebase has already been configured to this repository for you. So therefore, all you need to do now to compile the React.js code into a static file (creating build folder) and deploy it into Firebase. This can be done like so:

- `npm run build` - This will compile the React.js code into a static file (creating build folder)
- `firebase deploy` - This will deploy the static file into Firebase

## Important

The React.js website is hosted using `Google Firebase`. Although using Github Pages is a possible option, Github Pages does not have support for server side rendering, meaning you cannot use React Routing (to move through the navigation links) without using unfriendly SEO workarounds

## Useful Articles

- https://create-react-app.dev/docs/deployment/#firebase