import { textShortener } from './textShortener';

test('check textShortener return value (short text input)', () => {
    // should not shorten text
    const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    const expected =
        <div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
        </div>
    
    expect(textShortener(sampleText, 200)).toEqual(expected);
});
