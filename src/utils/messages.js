export const greetWithUser = (username) => (
  console.log(`Welcome to the File Manager, ${username || 'guest'}!`)
);


export const sayByeToUser = (username) => (
  console.log(`Thank you for using File Manager, ${username || 'guest'}, goodbye!`)
);
