import {removeDuplicates} from './data/arrayUtil.api'
import {
  debounce,
  freezeThreadAndWait,
  handlePromiseWithTimeout,
  interactionFunctionCall,
  useDebounce
} from './data/asyncUtil.api'
import {getDateNowInString} from './data/dateAndTimeUtil.api'
import {isProductionEnv} from './data/envUtil.api'
import {only2DigitsFloat, randomIntFromNumbersRange} from './data/numberUtil.api'
import {areObjectsEqualShallow} from './data/objectUtil.api'
import {
  addAndReplaceStateByWindowHistory,
  addSearchParamToQueryString,
  getSearchParams,
  removeAndReplaceStateByWindowHistory,
  removeSearchParamFromQueryString
} from './data/searchParamsUtil.api'
import {getCapitalizedString} from './data/stringUtil.api'
import {isNotDefined, isStringTypeNarrower, OptionalExceptFor, ValueOf} from './data/typesUtil.api'
import {
  getQueryStringWithoutLastMergeChar,
  getURLParameters,
  getURLWithoutSearch,
  setNewURLImmediately
} from './data/urlUtil.api'
import {asyncScrollToTop} from './data/windowUtil.api'
import {useFireOnMountHook} from './data/hooksUtil.api'


export {
  debounce,
  useDebounce,
  handlePromiseWithTimeout,
  freezeThreadAndWait,
  getDateNowInString,
  isProductionEnv,
  randomIntFromNumbersRange,
  only2DigitsFloat,
  isNotDefined,
  setNewURLImmediately,
  getURLParameters,
  getQueryStringWithoutLastMergeChar,
  getURLWithoutSearch,
  asyncScrollToTop,
  getCapitalizedString,
  ValueOf,
  OptionalExceptFor,
  isStringTypeNarrower,
  areObjectsEqualShallow,
  addSearchParamToQueryString,
  getSearchParams,
  removeSearchParamFromQueryString,
  addAndReplaceStateByWindowHistory,
  removeAndReplaceStateByWindowHistory,
  removeDuplicates,
  interactionFunctionCall,
  useFireOnMountHook
}
