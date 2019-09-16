export function formatViewCount(viewCount) {
  if (viewCount > 999 && viewCount <= 999999) {
    return `${Math.round(viewCount / 1000)}K`
  } else if (viewCount >= 1000000) {
      return `${Math.round(viewCount / 1000000)}M`
  } else {
      return viewCount
  }
}