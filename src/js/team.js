export default class Team {
  constructor() {
    this.members = new Set();

    this[Symbol.iterator] = () => {
      let index = 0;
      const members = Array.from(this.members);
      return {
        next() {
          if (index < members.length) {
            index += 1;
            return { done: false, value: members[index - 1] };
          }
          return { done: true };
        },
      };
    };
  }

  addAll(...players) {
    players.forEach((item) => this.members.add(item));
  }
}
