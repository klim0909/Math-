const orderByProps = require('./app');

describe('orderByProps function', () => {
  it('Должен возвращать массив объектов со свойствами, отсортированными в соответствии с предоставленным порядком', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ["name", "level"];
    const expectedResult = [
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 }
    ];

    expect(orderByProps(obj, order)).toEqual(expectedResult);
  });

  it('Должен возвращать массив объектов с отсортированными по алфавиту свойствами, если они не включены в порядок', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ["name", "level"];
    const expectedResult = [
      { key: "name", value: "мечник" },
      { key: "level", value: 2 },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 }
    ];

    expect(orderByProps(obj, order)).toEqual(expectedResult);
  });

});
