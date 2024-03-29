export const useScrollTop = () => {
    const scrollTop = (behavior: ScrollBehavior) => {
        window.scrollTo({ top: 0, left: 0, behavior });
    };

    return {
        scrollTop,
    };
};
