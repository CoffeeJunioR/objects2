export default function getSpecialAttack({ special }) {
  special.forEach((elem) => {
    const {description = 'Описание недоступно'} = elem;
    elem.description = description;
  });
  return special;
}