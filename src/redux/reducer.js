import { createEmptyImagelist, EmptyImage, BPRule } from "../pages/BP/utils";

const InitialState = {
  url: EmptyImage,
  side: 0,
  leftList: createEmptyImagelist(5),
  rightList: createEmptyImagelist(5),
  rule: BPRule
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SETURL":
      return {
        ...state,
        url: action.payload || EmptyImage
      };
    case "SETSIDE":
      return {
        ...state,
        side: action.payload
      };
    case "SETLEFTLIST":
      return {
        ...state,
        leftList: action.payload
      };
    case "SETRIGHTLIST":
      return {
        ...state,
        rightList: action.payload
      };
    case "SAVERULE":
      return {
        ...state,
        rule: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
