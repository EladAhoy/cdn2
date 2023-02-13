import { connect } from 'react-redux';
import { CounterComponent } from './countercomponent';

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  };
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);