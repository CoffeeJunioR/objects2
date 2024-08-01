export default function getSpecialAttack([attack1,attack2]) {
    const array = [];
    if ((!attack1.hasOwnProperty('description') && (!attack2.hasOwnProperty('description')))) {
      attack2.description = 'Описание недоступно';
      attack1.description = 'Описание недоступно';
      array.push(attack1, attack2);
    } else if (!attack2.hasOwnProperty('description')) {
      attack2.description = 'Описание недоступно';
      array.push(attack1,attack2);
    } else {
      array.push(attack1,attack2);
    }
    
    return array;
  }