export const requiredFieald = (name) => (val) => {
    return val ? undefined : `Field "${name}" is required`
};

