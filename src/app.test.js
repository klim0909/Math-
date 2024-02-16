const extractSpecialAttacks = require('./app');

test('Извлечение специальных атак с описанием по умолчанию, если оно не предоставлено.', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  };

  const expectedOutput = [
    {
      id: 8,
      name: 'Двойной выстрел',
      description: 'Двойной выстрел наносит двойной урон',
      icon: 'http://...'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      description: 'Описание недоступно',
      icon: 'http://...'
    }
  ];

  const result = extractSpecialAttacks(character);

  expect(result).toEqual(expectedOutput);
});