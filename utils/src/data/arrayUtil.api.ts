export const removeDuplicates = <T>(data: T[]) => {
  return Array.from(new Set(data))
}
