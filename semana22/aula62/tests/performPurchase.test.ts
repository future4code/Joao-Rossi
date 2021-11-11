import { performPurchase } from "../src/services/performPurchase";
import { User } from "../src/model/User";

describe("Testing purchase values and user account", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };
    const result = performPurchase(user, 40);
    expect(result).toEqual({
      name: "Astrodev",
      balance: 60
    });
  });

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };
    const result = performPurchase(user, 40);
    expect(result).toEqual({
      name: "Astrodev",
      balance: 60
    });
  });

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30
    };
    const result = performPurchase(user, 50);
    expect(result).not.toBeDefined();
  });
});
