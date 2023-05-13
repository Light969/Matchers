import sortHeroes from '../matchers';

test('Cортировка по убыванию', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const newHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const sortingHeroes = sortHeroes(heroes);

  expect(sortingHeroes).toEqual(newHeroes);
});
