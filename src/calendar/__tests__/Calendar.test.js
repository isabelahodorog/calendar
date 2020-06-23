import React from 'react';

import { render } from '@testing-library/react';

import Calendar from '../Calendar';

describe('Calendar: ', () => {
    it('should match default snapshot', () => {
        const { container } = render(<Calendar currentDate={new Date(2020, 6, 17)}/>);
        expect(container).toMatchSnapshot();
    });

    it('should be displayed as a grid starting from third column', () => {
        const testDate = new Date(2020, 6, 6); //july 2020 starts on a Wednesday
        const { getAllByTestId } = render(<Calendar currentDate={testDate} />);
        expect(getAllByTestId("calendarDay")[0].className).toBe("Day Day--gridItem-colStart3");
    });
})