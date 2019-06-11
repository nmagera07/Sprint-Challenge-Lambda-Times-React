What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Prop Types are used for typechecking, mostly. As your app grows there are bound to be errors in your data. Prop types help to catch them with validation.

Describe a life-cycle event in React?

A life-cycle event in React is an event when the page loads. For example, there are 3 phases. Render phase, pre-commit phase and commit phase. The render phase consists of the constructor and render functions. The pre-commit phase consists of events that can read the DOM (ex: getSnapshotBeforeUpdate). Commit phase consists of events that can work with the DOM, run side effects and schedule updates (ex: componentDidMount). Additionally there is Mounting, Updating and Unmounting. You use setState() during the updating phase. And componentWillUnmount in the unmounting phase. 

Explain the details of a Higher Order Component?

It's a function that takes a component and returns a new component. 

What are three different ways to style components in React? Explain some of the benefits of each.

You can use vanilla CSS to style components. Perhaps the simplest. Another way is to use a pre-processor. This may be faster for you. A third way is to use styled components. Takes a little getting used to, but they're pretty cool to use when you get the hang of it. If you like writing in JavaScript, styled components are for you. 