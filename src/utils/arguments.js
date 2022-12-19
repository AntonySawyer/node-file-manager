export const parseCliArgument = (argForSearch) => {
  const cliArgsArray = process.argv.slice(2);

  const requestedArgument = cliArgsArray.find((arg) => (
    arg.includes(`${argForSearch}=`)
  ));

  const isRequestedArgumentExist = requestedArgument !== undefined;

  if (!isRequestedArgumentExist) {
    return null;
  }

  const result = requestedArgument.split('=')[1];

  return result;
}
