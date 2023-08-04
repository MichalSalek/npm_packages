import {freezeThreadAndWait} from './asyncUtil.api'

export const asyncScrollToTop = async (offsetTime = 800) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  await freezeThreadAndWait(offsetTime)
}
