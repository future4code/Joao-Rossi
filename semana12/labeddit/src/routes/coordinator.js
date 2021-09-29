export const goToWelcomePage = (history) => {
  history.push("/");
};

export const goSignUpPage = (history) => {
  history.push("/signup");
};

export const goNewUserPage = (history) => {
  history.push("/newlogin");
};

export const goToFeedPage = (history) => {
  history.push("/");
};

export const goToPostPage = (history, id) => {
  history.push(`/postpage/${id}`);
};
