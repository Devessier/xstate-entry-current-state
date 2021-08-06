# xstate-entry-current-state

A demonstration that the current state of a state machine is updated only after entry actions have been called.

To run `index.js` script, execute:

```bash
node index
```

You will see the following result:

```txt
entry action is placed on off state and are we in "on" state? undefined
entry action is placed on on state and are we in "on" state? false
entry action is placed on off state and are we in "on" state? true
entry action is placed on on state and are we in "on" state? false
```
