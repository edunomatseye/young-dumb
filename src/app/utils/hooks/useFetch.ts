import React, { useState, useEffect } from "react";

let cache = new Map();

function useFakeFetch(URL: string) {
  let location = useLocation();
  let cacheKey = location.key + URL;
  let cached = cache.get(cacheKey);

  let [data, setData] = useState(() => {
    // initialize from the cache
    return cached || null;
  });

  let [state, setState] = useState(() => {
    // avoid the fetch if cached
    return cached ? "done" : "loading";
  });

  useEffect(() => {
    if (state === "loading") {
      let controller = new AbortController();
      fetch(URL, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          if (controller.signal.aborted) return;
          // set the cache
          cache.set(cacheKey, data);
          setData(data);
        });
      return () => controller.abort();
    }
  }, [state, cacheKey, URL]);

  useEffect(() => {
    setState("loading");
  }, [URL]);

  return data;
}

function useLocation() {
  return Object.assign({}, location, {
    state: "loading",
    key: "4893kj4j4",
  });
}
