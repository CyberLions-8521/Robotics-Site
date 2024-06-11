import {useState, useEffect, useMemo} from 'react'

export default function useIntersectionObserver(options, ref) {

    // allow interesection observer to check if element is visible to user 
    const [elementVisible, setElementVisible] = useState(false);

    const observerCallback = (entries) => {
        // Get the first entry (we only observe one element)
        const [entry] = entries;
        setElementVisible(entry.isIntersecting);
    }

    // we use an options memo to prevent the options from being recreated on every render and save the specific object of the mount
    const optionsMemo = useMemo(() => { return options; }, [options]);

    // create the intersection observer once ref and optionsMemo mount
    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, optionsMemo);
        const target = ref.current;

        // if the element exists, then observe the element in the DOM
        if (target) observer.observe(target);

        // react actually runs return first before running useEffect to clean up and prevent multiple observe methods from being made
        return (() => {
            if (target) observer.unobserve(target);
        });
    }, [optionsMemo, ref]);

    return elementVisible;
}
