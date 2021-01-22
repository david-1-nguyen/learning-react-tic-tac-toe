import { calculateWinner } from './helpers';

// test('2 + 2 should return 4', () => {
//     expect(2 + 2).toBe(5); // this test fails!
// });

test('should return X as the winner if it has the top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('X');
});

test('should return O as the winner when middle and bot right blank', () => {
    // Arrange the test
    // O X O
    // O _ x
    // O X _
    const squares = ['O', 'X', 'O', 'O', null, 'X', 'O', 'X', null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('O');
});

test('should return null as winner since no one will win', () => {
    // Arrange the test
    // O X O
    // O O X
    // X O X
    const squares = ['O', 'X', 'O',
                    'O', 'O', 'X',
                    'X', 'O', 'X'];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBeNull()
});