import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;