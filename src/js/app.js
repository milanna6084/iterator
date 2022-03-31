import Character from './Character';
import Team from './team';

const player1 = new Character('Лучник', 'Bowman');
const player2 = new Character('Зомби', 'Zombie');
const player3 = new Character('Маг', 'Wizard');
const player4 = new Character('Демон', 'Daemon');
const player5 = new Character('Волшебник', 'Wizard');

const enemiesTeam = new Team();
enemiesTeam.addAll(player1, player2, player3, player4, player5);

for (const item of enemiesTeam) {
  console.log(item);
}
