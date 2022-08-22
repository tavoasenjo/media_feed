# Reducer

Reducers help us to manage the state of an application.
A **Reducer is a function** which takes two arguments: **state** (the initial state) and **action** (sort of the event that triggers the change), and **returns a new state**.

it would be something like this:

```js
(state, action) => newState;
```

For the scenario of increasing a number by one, it would be like:

```js
const counterReducer = (state, action) => state + 1;
```

The Reducer Function is a **pure function** without any side effect, which means that **given the same input (state and action), the expected output (new state) will always be the same**.

In other words, you can repeat the same test with the same input as arguments and always expect the same output:

## Action

The **action** is normally defined as an **object** with a `type` property. Based on the type of action, the reducer can perform conditional state transitions:

```js
const conuterReducer = (count, action) => {
  if (action.type === "INCREASE") {
    return count + 1;
  }

  if (action.type === "DECREASE") {
    return count - 1;
  }

  return count;
};
```

If the `action.type` doesn't match any condition, we return an unchanged state.

More likely we will see a **Switch Case Statement** in order to map multiple state transitions for a reducer function. That would be:

```js
const counterReducer = (count, action) => {
  switch (action.type) {
    case "INCREASE":
      return count + 1;
    case "DECREASE":
      return count - 1;
    default:
      return count;
  }
};
```

In case of a more **complex state**, meaning not just an integer, that will be usually an object:

```js
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
```

## Rules

- **The state processed by a reducer function is inmmutable**. That means that the **incoming state (initial state) is never directly changed**. The reducer function **always has to return a new state object**.
- We can use the `...` spread operator to create a new state object from the incoming state and the part we want to change. This way we ensure that the other properties that aren't touched from the incoming state object are still kept intact for the new state object.

```js
const personReducer = (person, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...person, age: person.age + 1 };
    case "CHANGE_LASTNAME":
      return { ...person, lastname: action.lastname };
    default:
      return person;
  }
};
```

For fully comprehension, We could change the last name of a user the following way:

```js
// Define initial State
const initialState = {
  firstname: "Tavo",
  lastname: "Asenjo",
  age: 38,
};

//Define action
const action = {
  type: "CHANGE_LASTNAME",
  lastname: "The Greatest",
};

const personReducer = (person, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...person, age: person.age + 1 };
    case "CHANGE_LASTNAME":
      return { ...person, lastname: action.lastname };
    default:
      return person;
  }
};

const result = personReducer(initialState, action);
```

As you see from the example above, **the action provided for a reducer function can have an optional payload (lastname)** next to the mandatory action type property.

The **payload** is additional information to perform the state transition. For instance, in our example the reducer wouldn't know the new last name of our person without the extra information.

Ofter, this new information would be put in a **generic payload property**, like this:

```js
const action = {
  type: "CHANGE_LASTNAME",
  payload: {
    lastname: "The Greatest",
  },
};
```

In that case the reducer function would be like:

```js
const personReducer = (person, action) => {
  switch (action.type) {
    case "CHANGE_LASTNAME":
      return { ...person, lastname: action.payload.lastname };
    default:
      return person;
  }
};
```

## useReducer Hook

The **useReducer** hook is similar to the **useState** hook.

- The **useReducer** accepts two arguments: **reducer** and **initialState**
- The **useReducer** **returns the current state and a dispatch method**.

Example:

```js
import { useReducer } from "react";

// Initial State
const initialPlayers = [
  {
    id: 1,
    name: "Lionel Messi",
    active: true,
  },
  {
    id: 2,
    name: "Diego Maradona",
    active: false,
  },
];

// Action
const action = {
  type: "ADD_PLAYER",
  payload: {
    newplayer: {
      id: 3,
      name: "Pele",
      active: false,
    },
  },
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, action.payload.newplayer];
    default:
      return state;
  }
};

// useReducer

const [players, dispatch] = useReducer(playerReducer, initialPlayers);

//Dispatch and action (instead of the setState to update the state)
dispatch({
  type: "ADD_PLAYER",
  payload: {
    newplayer: {
      id: 3,
      name: "Pele",
      active: false,
    },
  },
});
```

# In Our Project

- We created `MediaReducer.jsx` inside the context folder.
- We created our reducer inside:

```js
const mediaReducer = (state, action) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};

export default mediaReducer;
```

- Now in our `MediaContext.jsx` file, instead of using `useState` we will use **useReducer**.
- We will import **mediaReducer** and create our **initial state**.

```js
import mediaReducer from "./MediaReducer";

const initialState = {
  user: "Tavo",
  posts: [],
};
```
