'use strict';
const isFunction = input => typeof input === 'function';
export default predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;

  // from https://stackoverflow.com/questions/30266831/hide-show-components-in-react-native