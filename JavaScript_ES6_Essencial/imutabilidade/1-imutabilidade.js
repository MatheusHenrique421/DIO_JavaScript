const user = {
    name: 'Matheus',
    lastName: 'Henrique Schumliak'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}
const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);