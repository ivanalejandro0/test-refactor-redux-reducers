// This is the old approach:
// import { usersById } from "./usersById_old.js";

// This is the refactored approach:
import { usersById } from "./usersById.js";

// import actions to test
import { userAdd, userRemove } from "../actions/users.js";

describe("usersById", () => {
  let testUsers;

  beforeAll(() => {
    // define some data for our tests
    const userA = { id: "user-id-1", username: "john-doe-01" };
    const userB = { id: "user-id-2", username: "john-doe-02" };
    const userC = { id: "user-id-3", username: "john-doe-03" };
    const userD = { id: "user-id-4", username: "john-doe-04" };

    testUsers = { userA, userB, userC, userD };
  });

  describe("on USER_ADD", () => {
    test("with empty state", () => {
      const initialState = {};

      // define payload for the action we'll use to test the reducer
      const { userA } = testUsers;
      const user = userA;

      // define expected state
      const expectedState = {
        [userA.id]: userA,
      };

      // call our reducer
      const result = usersById(initialState, userAdd(user));

      // check that the result we got is what we need
      expect(result).toEqual(expectedState);

      // Do not mutate state check
      expect(result).not.toBe(initialState);
    });

    test("having users already", () => {
      const { userA, userB, userC } = testUsers;

      const user = userB;

      const initialState = {
        [userA.id]: userA,
        [userC.id]: userC,
      };

      const expectedState = {
        [userA.id]: userA,
        [userB.id]: userB,
        [userC.id]: userC,
      };

      const result = usersById(initialState, userAdd(user));
      expect(result).toEqual(expectedState);

      // Do not mutate state check
      expect(result).not.toBe(initialState);
    });

    test("add existing user", () => {
      const { userA, userB } = testUsers;

      const user = userB;

      const initialState = {
        [userA.id]: userA,
        [userB.id]: userB,
      };

      const expectedState = {
        [userA.id]: userA,
        [userB.id]: userB,
      };

      const result = usersById(initialState, userAdd(user));
      expect(result).toEqual(expectedState);

      // Do not mutate state check
      expect(result).not.toBe(initialState);
    });
  });

  describe("on USER_REMOVE", () => {
    test("having users", () => {
      const { userA, userB, userC } = testUsers;

      const userId = userC.id;

      const initialState = {
        [userA.id]: userA,
        [userB.id]: userB,
        [userC.id]: userC,
      };

      const expectedState = {
        [userA.id]: userA,
        [userB.id]: userB,
      };

      const result = usersById(initialState, userRemove(userId));
      expect(result).toEqual(expectedState);

      // Do not mutate state check
      expect(result).not.toBe(initialState);
    });
  });
});
