import { connect } from "react-redux";
import {
    setUrl,
    setSide,
    setLeftList,
    setRightList,
    saveRule
} from "./action";
import Page from "../pages/BP";
import { namespace } from "./model";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUrl: url => dispatch(setUrl(url)),
    setSide: side => dispatch(setSide(side)),
    setLeftList: list => dispatch(setLeftList(list)),
    setRightList: list => dispatch(setRightList(list)),
    saveRule: rule => dispatch(saveRule(rule))
  };
};

const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
export default Component;
