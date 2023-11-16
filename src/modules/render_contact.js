import Pooh from '../img/pooh.png';
import Tigger from '../img/tigger-kanga.png';
import Eeyore from '../img/eeyore.png';

function createContactIcon(source) {
    const imgContainer = document.createElement('div');
    imgContainer.classList = "profileContainer";
    
    const icon = new Image();
    icon.src = source;
    icon.classList = "contactImg";

    imgContainer.appendChild(icon);
    return imgContainer;
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

    const detail = document.createElement('div');
    detail.classList = 'contactDetail';

    const profileImage = createContactIcon(image);
    const profileName = addParagraph(employeeName);
    profileName.classList = 'nameLabel';
    const profileSummary = addParagraph(description);
    const profileEmail = addParagraph(email);

    profile.appendChild(profileImage);
    detail.appendChild(profileName);
    detail.appendChild(profileSummary);
    detail.appendChild(profileEmail);
    profile.appendChild(detail);

    return profile;
}

function createContacts() {
    const container = document.createElement('div');
    container.classList = 'container';

    const profile1 = createProfile(Pooh, 'Winnie the Pooh', 
        `Best head chef at Pooh's corner`, `poohbear@fakeemail.com`);
    profile1.id = "contact1";
    const profile2 = createProfile(Tigger, `Tigger`, 
        `Assistant chef making this all happen`, `chefs@fakeemail.com`);
    profile2.id = "contact2";
    const profile3 = createProfile(Eeyore, `Eeyore`, `Manager who'll handle
        all your concerns`, `manager@fakeemail.com`);
    profile3.id = "contact3";

   container.appendChild(profile1);
   container.appendChild(profile2);
   container.appendChild(profile3);

   return container;
}

function renderContacts() {
    const main = document.querySelector("main");
    main.textContent = '';
    //refreshes page
    main.appendChild(createContacts());
}


export default renderContacts;