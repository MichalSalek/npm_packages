export const addSearchParamToQueryString = (name: string, value: string, currentSearchParams: string = location.search) => {
  const params = new URLSearchParams(currentSearchParams)
  params.set(name, value)
  return location.pathname + '?' + params.toString()
}


export const getSearchParams = (name: string, currentSearchParams: string = location.search) => {
  const params = new URLSearchParams(currentSearchParams)
  return params.get(name)
}


export const removeSearchParamFromQueryString = (name: string, currentSearchParams: string = location.search) => {
  const params = new URLSearchParams(currentSearchParams)
  params.delete(name)
  const includeQuestionMark = params.size > 0 ? '?' : ''
  return location.pathname + includeQuestionMark + params.toString()
}

export const addAndReplaceStateByWindowHistory = (name: string, value: string, currentSearchParams: string = location.search) => {
  const newUrl = addSearchParamToQueryString(name, value, currentSearchParams)
  window.history.pushState({}, '', newUrl)
}

export const removeAndReplaceStateByWindowHistory = (name: string, currentSearchParams: string = location.search) => {
  const newUrl = removeSearchParamFromQueryString(name, currentSearchParams)
  window.history.pushState({}, '', newUrl)
}
