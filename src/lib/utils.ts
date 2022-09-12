export const createFallbackTitle = (username: string | null) => {
  if (!username) return '';
  // const lastChar = username.slice(-1).toLowerCase();
  // if (lastChar === 's') {
  //   return `${username}' velog`;
  // }
  // return `${username}'s velog`;
  return `${username}.log`;
};