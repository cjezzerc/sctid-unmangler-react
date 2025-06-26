export function RefreshRequiredMessage({
  inputsAsRun,
  ignoreDescriptions,
  enteredData,
}) {
  if (
    ignoreDescriptions != inputsAsRun.ignoreDescriptions ||
    enteredData != inputsAsRun.enteredData
  ) {
    return <div style={{color:"red"}}> (Click "Check codes" to refresh) </div>;
  }
}