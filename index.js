const { createMachine, interpret } = require("xstate");

const onOffMachine = createMachine({
  initial: "off",

  states: {
    on: {
      entry: () => {
        logCurrentState("on");
      },

      on: {
        TOGGLE: "off",
      },
    },

    off: {
      entry: () => {
        logCurrentState("off");
      },

      on: {
        TOGGLE: "on",
      },
    },
  },
});

let currentState = undefined;

function logCurrentState(state) {
  console.log(
    `entry action is placed on ${state} state and are we in "on" state?`,
    currentState?.matches("on")
  );
}

const service = interpret(onOffMachine)
  .onTransition((state) => {
    currentState = state;
  })
  .start();

service.send("TOGGLE");
service.send("TOGGLE");
service.send("TOGGLE");
