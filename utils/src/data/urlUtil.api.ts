export const setNewURLImmediately = (url: string): void => {
  window.history.pushState({path: url}, '', url)
}

type GetURLParameters = {
  // @additionalURLParameter: Should looks like 'key=value', without prefixed ? or &.
  additionalURLParameter: string

  usePassedSearchParams?: string

  keepCurrentParams?: boolean
}
export const getURLParameters = (config?: GetURLParameters | undefined) => {
  const additionalURLParameter = config?.additionalURLParameter
  const keepCurrentParams = config?.keepCurrentParams ?? false
  const usePassedSearchParams = config?.usePassedSearchParams ?? window.location.search

  const currentParams = keepCurrentParams ? usePassedSearchParams : ''
  if (!additionalURLParameter) return currentParams

  return currentParams + (!!usePassedSearchParams ? '&' : '?') + additionalURLParameter
}

export const getQueryStringWithoutLastMergeChar = (querystring: string): string => {
  if (querystring.substring(querystring.length - 1) === '&') {
    return querystring.substring(0, querystring.length - 1)
  } else {
    return querystring
  }
}

export const getURLWithoutSearch = (): string => window.location.protocol + '//' + window.location.host + window.location.pathname
