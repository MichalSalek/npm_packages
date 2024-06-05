export const areObjectsEqualShallow = (a: Record<any,any>, b: Record<any,any>) => {
  for(var key in a) {
    if(a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
