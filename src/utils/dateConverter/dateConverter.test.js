import { dateConverter } from './dateConverter';

test('Check dateConvert return value 01', () => {
    expect(dateConverter('2020-10-24T11:31:00-04:00')).toEqual('24/10/2020');
});

test('Check dateConvert return value 02', () => {
    expect(dateConverter('2020-11-21T09:17:00-08:00')).toEqual('21/11/2020');
});

test('Check dateConvert return value 03', () => {
    expect(dateConverter('2020-11-15T19:27:00-05:00')).toEqual('16/11/2020');
});