//if no key-value, get default
const getValueTolerantly = (props, key, defaults) =>
    (props[key] !== undefined && props[key]) || defaults[key];
//if no key-value, get undefined
const getValueStrictly = (props, key) => props[key] !== undefined && props[key];
const getParsedValueStrictly = (props, key, parser) =>
    props[key] !== undefined && parser(props[key]);
export { getValueTolerantly, getValueStrictly, getParsedValueStrictly }