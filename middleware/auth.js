import { currentUser } from '~/mocks/users.js';

export default defineNuxtRouteMiddleware(() => {
  if (!currentUser.isAuth) {
    return navigateTo('/register');
  }
});
