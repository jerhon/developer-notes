# Redux

Redux is a popular library for state management in javascript.  While it commonly is used in conjunction with React.js, there is nothing explicitly tying it to React.

[Link to Redux homepage](https://redux.js.org/)

At first dealing with Redux can be a somewhat daunting task.  However, it is really quite a simple system.

## Why Redux?
* Well defined pattern for state storage.
* Single state can be stored and retrieved later, for example in local storage, or passed on to the server.
* Debugging tools can be used to easily check internal application state without having to complex debuging sessions.
* Immutable state changes.


## Why not Redux?
* It requires a lot of extra code just to implement simple asynchronous operations.

# Architecture

There are several pieces and terms that are important to understand in Redux.

* Dispatch - This is a function used to issue "actions".
* Action - This is an object which represents a state change in the store.  Thus it is coined an action not because it does something, but because it describes what should change.
* Reducer - This takes actions and applies the state change to the store.
* Store - This is where the state is kept track of.

## Basic Flow

The following diagram can explain the basics of how a state change occurs in react.
1. _Something_ occurs in the application which will requires a state change (_Trigger State Change_).  The data that encompasses the state change is encapsolated as an _Action_.
2. The redux _Dispatch_ method from the _Store_ is invoked with the _Action_ to notify that a state change is to occur.
3. The _Dispatch_ method from redux takes the action and passes it to all _Reducer_ methods connected to the store. 
4. A _Reducer_ inspects the _Action_ object and _Current State_ from the _Store_ and applies the change based upon the "Action".
5. The resulting _Updated State_ is then written to the _Store_.


![Redux Overview](redux.svg "Redux Overview")



## Combining reducers in the Store

In many cases, a react application is not just a single reducer but a combination of many reducers.  The combineReducers function can take these multiple reducers and generate a common state from all of them.

For example, this snippet would create a single reducer from two, and the underlying state object generated from the masterReducer would contain state from the two inner reducers.

```javascript
const masterReducer = combineReducers({
  users,
  widgets,
});
```

## Interaction with React.js

react-redux is a common library that provides a method named connect which can be used to connect a component with the redux store.  

Once you have implemented a component in React, you can use the connect API in order to connect it to the redux store.   This also requires setting up a Provider component at the base of your React application which injects the store throughout the React component tree when it is constructed.

# Implementation

For a basic operation you need to implement:
1. Some method which calls dispatch to indicate that a state change should occur.
2. Some method which acts as the "Reducer" which changes that action into the actual state that will be in the "Store".  Using redux-thunk can simplify this process.
3. Create the store with an initial state and the reducers. Reduxers can be combined via the combineReducers method.

# Redux-Thunk

One of the defficiencies of redux is that it doesn't allow for actions to be dispatched at a later time out of the box.  For example, say you have some asynchronous operation and only at the completion of the asynchronous operation should an action be dispatched to update the state of the redux store.

Redux thunk provides middleware such that action creators can dispatch functions, thus dispatching at multiple times during an execution cycle.  Take for example this method, when it is called it is going to dispatch an action prior to calling 'theMethod'.  Once the method has completed, it will dispatch another action indicating it is complete.  If there is an error, it will dispatch a final action to indicate the error.

This all sounds really complicated, but looking at code makes this a lot easier to grasp.

```typescript
export function invokeSomeMethodWithState() {
    return (dispatch: Dispatch<IAction>) => {

        dispatch({ type: ActionType.ASYNC_ACTION_START });

        theMethod().then((result) => {

            dispatch({ type: ActionType.ASYNC_ACTION_COMPLETE, someResult: result });

        }).catch((err) => {

            dispatch({ type: ActionType.ASYNC_ACTION_ERROR, error: err });

        });
    };
}
```

You can actually see a pattern emerge which allows us to create a more generic structure around async actions like this that let's us track if an action is in progress, complete, or in an error state.  So, if you had a method returning a Promise you wished to track the progress of a general reducer could be built.

TODO: add sample code for that here, or perhaps a GIST