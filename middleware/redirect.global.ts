export default defineNuxtRouteMiddleware((to, from) => {
    if (false&&to.path == '/') {
        return navigateTo('/home')
      }
  });