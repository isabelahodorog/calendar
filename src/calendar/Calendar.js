import React from 'react';
import PropTypes from 'prop-types';

import Day from './day';
import styles from './Calendar.module.css'

const Calendar = ({currentDate}) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[currentDate.getMonth()];

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    let calendarDays = [];
    calendarDays.push(<Day day={1} isCurrent={1===currentDate.getDate()} key={1} columnStart={firstDayOfMonth.getDay()}/>)

    for (let i = 2; i <= lastDayOfMonth.getDate(); i++) {
        calendarDays.push(<Day day={i} isCurrent={i===currentDate.getDate()} key={i}/>)
    }

    return (
        <div className={styles['Calendar']}>
            <h1>
                {currentMonth} {currentDate.getFullYear()}
            </h1>
            <div className={styles['Calendar--grid']}>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>Su</span>
            </div>
            <hr/>
            <div className={styles['Calendar--grid']}>
                {calendarDays}
            </div>
        </div>
    );
};

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date).isRequired
}

export default Calendar;