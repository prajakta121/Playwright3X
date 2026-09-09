function questionName(input) {

const { name, role } = input;

return name.map((name, index) => {

const username = name.toLowerCase().replace(/\s+/g, "_");

return {
username,
email: `${username}@playwrightbatch.com`,
role: role[index]
};

});
}
