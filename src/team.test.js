
const { Team, Character } = require('./team');

describe('Team', () => {
    let team;
    let character1, character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Character 1');
        character2 = new Character('Character 2');
    });

    test('add method should add character to the team', () => {
        team.add(character1);
        expect(team.members.size).toBe(1);
    });

    test('add method should throw error if character already exists in the team', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Character already exists in the team');
    });

    test('addAll method should add multiple characters to the team', () => {
        team.addAll(character1, character2);
        expect(team.members.size).toBe(2);
    });

    test('addAll method should throw error if any character already exists in the team', () => {
        team.add(character1);
        expect(() => team.addAll(character1, character2)).toThrow('Character already exists in the team');
    });

    test('toArray method should convert set to array', () => {
        team.addAll(character1, character2);
        const array = team.toArray();
        expect(array).toEqual([character1, character2]);
    });
});

