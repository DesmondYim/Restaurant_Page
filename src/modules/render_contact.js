import Pooh from '../img/Pooh.png';
import Tigger from '../img/tigger-kanga.png';
import Eeyore from '../img/eeyore.png';

function createContactIcon(source) {
    const icon = new Image();
    icon.src = source;
    return icon
}

function addEmployeeName(EmployeeName) {
    const nameLabel = document.createElement('div');
    nameLabel.classList = 'nameLabel';
    nameLabel.innerHTML = EmployeeName
    return nameLabel;
}

function addParagraph(description) {
    const paragraph = document.createElement('p');
    paragraph.classList = 'paragraph';
    paragraph.innerHTML = description;
    return paragraph;
}

function createProfile(image, employeeName, description, email) {
    const profile = document.createElement('div');
    profile.classList = 'profile';

    const profileImage = createContactIcon(image);
    const profileName = addEmployeeName(employeeName);
    const profileSummary = addParagraph(description);
    const profileEmail = addParagraph(email);

    profile.appendChild(profileImage);
    profile.appendChild(profileName);
    profile.appendChild(profileSummary);
    profile.appendChild(profileEmail);

    return profile;
}

function renderContacts() {
    const container = document.createElement('div');
    container.classList = 'container';

    const profile1 = createProfile(Pooh, 'Winnie the Pooh', 
        `Best head chef at Pooh's corner`, `poohbear@fakeemail.com`);
    const profile2 = createProfile(Tigger, `Kanga and Tigger`, 
        `Chef assistants making this all happen`, `chefs@fakeemail.com`);
    const profile3 = createProfile(Eeyore, `Eeyore`, `Manager who'll handle
        all your concerns`, `manager@fakeemail.com`);

   container.appendChild(profile1);
   container.appendChild(profile2);
   container.appendChild(profile3);

   return container;
}


export default renderContacts;