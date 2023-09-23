const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // ?: Opcional
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter', 'Prueba']
};

console.table(strider);

export {};