
/**
 * Dado un array de números devuelve solo los pares
 * @param [1, 2, 3, 4] numbers
 * @returns [2, 4]
 */
function getEvens(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}


/**
 * Dado un array de elementos, elimina todos los null o undefined
 * @param [1, 2, undefined, false, null, "a"] elements
 * @returns [1, 2, false, "a"]
 */
function clean(elements) {
  const cleanArray = elements.filter((element) => element !== undefined || element !== null);
  return cleanArray;
}


/**
 * Dado un array de usuarios con habilidades, devuelve los usuarios con la habilidad dada.
 * @param [
    {
      name: 'Juanito',
      skills: ['JS', 'Java']
    },
    {
      name: 'Menganito',
      skills: ['HTML', 'CSS']
    },
    {
      name: 'Futanito',
      skills: ['Bash']
    }
 * ] users
 * @param "JS" skill
 * @returns [1, 2, false, "a"]
 */
function filterBySkill(users, skill) {
  const filteredUsers = users.filter((user) => user.skills.includes(skill));
  return filteredUsers;
} 


module.exports = {
  getEvens,
  clean,
  filterBySkill
}