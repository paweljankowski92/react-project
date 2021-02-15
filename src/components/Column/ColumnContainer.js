import {connect} from 'react-redux';
import Column from './Column';
import {getCardsforColumn, createActionAddCards} from '../../Redux/cardsRedux'

const mapStateToProps = (state, props) => ({
  cards: getCardsforColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCards({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
