const userLanguages = `
query LanguageUser($id: ID!) {
    languagesUser(id: $id) {
       languages {
        id
        name
       }
    }
}
`;
export { userLanguages };
