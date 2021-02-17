import React from 'react';
import styles from '../Column/Column.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    cards: PropTypes.array,
    searchString: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
  icon: settings.defaultColumnIcon,
};

  render() {
    const {icon, cards, children} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          {children}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
