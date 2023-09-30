import { play, printBoard, markBoard, checkTie, checkWin } from './tictactoe'


test('must play a game with a winner', async () => {
  play("X", 1)
  play("O", 2)
  play("X", 5)
  play("O", 3)
  let result = await play("X", 9)

  expect(result).toBe("X")
});


test('must verify a loser in line ', () => {
  markBoard(1, 'x')
  markBoard(5, 'o')
  markBoard(2, 'x')
  markBoard(4, 'o')
  markBoard(3, 'x')
  const play = checkWin('O');
  expect(play).toEqual(false)
});

test('must verify a loser in column ', () => {
  markBoard(1, 'x')
  markBoard(5, 'o')
  markBoard(4, 'x')
  markBoard(3, 'o')
  markBoard(7, 'x')
  const play = checkWin('O')
  expect(play).toEqual(false)
});


test('must verify a winner in column ', () => {
  markBoard(1, 'x')
  markBoard(5, 'o')
  markBoard(4, 'x')
  markBoard(3, 'o')
  markBoard(7, 'x')
  const play = checkWin('X')
  expect(play).toEqual(true)
});

test('must verify a winner in line ', () => {
  markBoard(1, 'x')
  markBoard(5, 'o')
  markBoard(2, 'x')
  markBoard(4, 'o')
  markBoard(3, 'x')
  const play = checkWin('X');
  expect(play).toEqual(true)
});

test('must verify a winner in diagonal ', () => {
  markBoard(1, 'x')
  markBoard(5, 'o')
  markBoard(3, 'x')
  markBoard(4, 'o')
  markBoard(9, 'x')
  const play = checkWin('X')
  expect(play).toEqual(true)
});

test('must verify if it was a tie ', () => {
  markBoard(1, 'x')
  markBoard(2, 'o')
  markBoard(3, 'x')
  markBoard(4, 'o')
  markBoard(5, 'x')
  markBoard(7, 'o')
  markBoard(6, 'x')
  markBoard(9, 'o')
  markBoard(8, 'x')
  const play = checkTie();
  expect(play).toEqual(true)
});

