export const reducer = (toys, action) => {
  switch (action.type) {
    case "add_toy":
      return [...toys, action.payload]; // Add a toy
    case "remove_toy":
      return toys.filter((toy) => toy !== action.payload);
    default:
      return toys;
  }
};
