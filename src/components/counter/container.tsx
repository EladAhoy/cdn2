import { connect } from "react-redux";
import { FixMeLater } from "../../types/general";
import { CounterComponent } from "./countercomponent";

const mapStateToProps = (state: FixMeLater) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch: FixMeLater) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};
export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
