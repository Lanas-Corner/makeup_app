import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    function handleMatch() {
      setMatches(media.matches);
    }
    media.addEventListener("change", handleMatch);
    return () => media.removeEventListener("change", handleMatch);
  }, [query, matches]);

  return matches;
}
