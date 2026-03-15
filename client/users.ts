export const getUsers = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    return res.json();
};
