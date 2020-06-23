import React from 'react';

import { render } from '@testing-library/react';

import Day from '../Day';

describe('Day: ', () => {
    it('should have correct innerHTML', () => {
        const { getByTestId } = render(<Day day={2}/>);
        expect(getByTestId("calendarDay").innerHTML).toBe(" 2 ");
    });

    it('should have className Day', () => {
        const { getByTestId } = render(<Day day={2}/>);
        expect(getByTestId("calendarDay").className).toBe("Day");
    });

    it('should have className for current day', () => {
        const { getByTestId } = render(<Day day={12} isCurrent/>);
        expect(getByTestId("calendarDay").className).toBe("Day Day--isCurrent");
    });

    it('should have correct className for beginning of month on a Tuesday', () => {
        const { getByTestId } = render(<Day day={12} isCurrent columnStart={2}/>);
        expect(getByTestId("calendarDay").className).toBe("Day Day--isCurrent Day--gridItem-colStart2");
    });
});