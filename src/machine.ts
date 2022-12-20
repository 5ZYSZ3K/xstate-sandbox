import { Machine } from "xstate";

export const parentMachine = Machine({
  id: "Parent",
  initial: "initialStep",
  states: {
    initialStep: {
      on: {
        NEXT: "firstStep"
      }
    },
    firstStep: {
      on: {
        NEXT: "secondStep"
      }
    },
    secondStep: {
      on: {
        NEXT: "thirdStep"
      }
    },
    thirdStep: {
      on: {}
    }
  }
});
