export const goTo = (history) => {
  history.push("/");
};

export const goTo = (history) => {
  history.push("/signup");
};

export const goTo = (history) => {
  history.push("/addrecipe");
};

export const goTo = (history) => {
  history.push("/recipeslist");
};

export const goTo = (history, id) => {
  history.push(`/recipedetail/${id}`);
};
