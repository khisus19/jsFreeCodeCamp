/* Mini proyecto. Una función que pasandole dos argumentos (name, prop) busque en un array (lista) de contactos y si encuentra el name verifique que ese contacto tenga la prop pasada y devuelva su valor. Si el contacto no tiene esa prop devuelve "No such property". Si el name no esta en la lista devuelve "No such contact" */
// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact"
    // Cambia solo el código encima de esta línea
}
  
lookUpProfile("Akira", "likes");

/* Code Explanation
The for loop runs through contacts. The if statement checks if the name arg is in the array. If it find a name that match with first.Name then return that contact prop value (if it has that property). The || means that if contacts[i][prop] does not exists then return "No such property". The for loop keep looking until it can't find more name that match the if then return "No such contact"
 */