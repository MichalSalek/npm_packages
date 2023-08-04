export const getDateNowInString = (
  {
    withTimestamp = true,
    getISOFormat = true,
  }: {
    withTimestamp?: boolean;
    getISOFormat?: boolean;
  } = { withTimestamp: true, getISOFormat: true }
): string => {
  const dateNow = new Date()

  if (getISOFormat) {
    return `${
      withTimestamp ? '[' + Date.now() + ']' : ''
    } ${dateNow.toISOString()}`
  } else {
    const date = dateNow.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    return `${withTimestamp ? '[' + Date.now() + ']' : ''} ${date}`
  }
}
