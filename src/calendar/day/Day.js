import cn from 'classnames';
import React from 'react';

import PropTypes from 'prop-types';
import styles from './Day.module.css';

const Day = ({day, isCurrent, key, columnStart}) => <div data-testid="calendarDay" className={cn(styles['Day'], {
    [styles['Day--isCurrent']]: isCurrent,
    [styles[`Day--gridItem-colStart${columnStart}`]]: columnStart !== null
    })}
    key={key}> {day} </div>;

Day.defaultProps = {
    isCurrent: false,
    isFirstDay: false,
    key: null,
    columnStart: null,
}

Day.propTypes = {
    day: PropTypes.number.isRequired,

    /**
     * Is it the current day? Used to apply styling if true
     */
    isCurrent: PropTypes.bool,

    /**
     * Key value for Day objects in a list
     */
    key: PropTypes.number,

    columnStart: PropTypes.number,
}

export default Day;