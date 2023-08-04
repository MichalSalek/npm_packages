export const getCapitalizedString = (string: string): string => {
  const trimmed = string.trim()
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
}
