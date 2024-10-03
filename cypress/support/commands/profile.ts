/* eslint-disable max-len */
export const updateProfile = (lastname: string) => {
    cy.getByTestId('EditableProfileCardFooter.EditButton').click();
    cy.getByTestId('ProfileCard.lastname').clear();
    cy.getByTestId('ProfileCard.lastname').type(lastname);
    cy.getByTestId('EditableProfileCardFooter.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
        id: '5',
        first: 'pusheen',
        lastname: 'the cat',
        birthDate: '2001-04-21',
        age: '13.07.2002',
        currency: 'RUB',
        country: 'Russia',
        city: 'Moscow',
        username: 'testuser',
        avatar: 'https://www.funnyart.club/uploads/posts/2022-12/thumbs/1671406601_www-funnyart-club-p-kartinki-kotika-pushina-krasivo-14.png',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
