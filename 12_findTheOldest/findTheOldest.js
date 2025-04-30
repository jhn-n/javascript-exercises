const findTheOldest = function (people) {
    function age(person) {
        const deathYear = person.yearOfDeath ?? new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    }

    return people.reduce((oldest, current) => age(current) > age(oldest) ? current : oldest);
}

// Do not edit below this line
module.exports = findTheOldest;
