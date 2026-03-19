export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        login: user.login
      }
    });
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    console.error("Github OAuth eror: ", error);
    return sendRedirect(event, "/");
  }
});
