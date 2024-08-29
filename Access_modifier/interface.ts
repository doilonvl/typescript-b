interface IPerson {
    firstName?: string;
    readonly lastName: string;
}

interface IPerson {
    x: string;
}
type TPerson = {
    firstName: string;
    lastName: string;
} 

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName} is ${person.x}`;
}