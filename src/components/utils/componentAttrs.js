export const componentSize = (ref) => {
    const currentComponentInfoObj = ref.current.getBoundingClientRect()
    return currentComponentInfoObj;
}