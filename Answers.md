# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.

1. What does it mean to think in react?

What React did very well was to bring immutable UIs to the masses - you never "mutate" a UI - you always (re-)render it! Always run the same function that was used for the initial rendering to get the updated interface. This leads us to the main point of the React way of thinking.

1. Describe state.

React Component is an independent, reusable code and it contains HTML + Javascript. Components data will be stored in component's State. This state can be modified based on user action or other action. when a component state is changed React will re-render the component to the browser

1. Describe props.

React controls the data flow in the components with state and props. The data in states and props are used to render the Component with dynamic data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don’t require clean-up and those that do require cleanup.
