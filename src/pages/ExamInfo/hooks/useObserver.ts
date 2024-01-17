import { useRef, useEffect, RefObject } from 'react'

type UseObserverProps = {
  callback: IntersectionObserverCallback
  target: RefObject<Element>
  options?: IntersectionObserverInit
}
function useObserver({ callback, target, options }: UseObserverProps) {
  useEffect(() => {
    // 기본 옵션 설정
    const observerOptions = options || {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }
    const observer = new IntersectionObserver(callback, observerOptions)
    // 대상 요소가 있으면 관찰 시작
    if (target.current) observer.observe(target.current)

    // 컴포넌트가 언마운트될 때 관찰 종료
    return () => {
      if (target.current) {
        observer.unobserve(target.current)
      }
    }
  }, [callback, options, target])
}

export default useObserver
