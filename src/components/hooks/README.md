### Important:

**Do not edit this folder unless you have a good understanding of React.js fundementals**

React.js does not have hooks for everything, so we can make our own custom hooks

For Example:
```js

// {ref} is the element we want to observe for
// {options} is the customization of a intersection observer such as playing animation after user scrolls halfway through ref element
export default function useIntersectionObserver(ref, options)

```
This custom hook will allow us to use the vanilla IntersectionObserver API inside react.js. 
- The reason for this is that reactjs is a **framework built on top of normal javascript**, meaning we have have to work around the react architecture to use the intersection observer API.
