export const areObjectsEqualShallow = (a: { [key:unknown] }, b: { [key:unknown] }) => {
  for(var key in a) {
    if(a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
