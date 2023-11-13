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

function addEmployeeSummary(description) {
    const employeeSummary = document.createElement('div');
    employeeSummary.classList = 'employeeSummary';
    employeeSummary.innerHTML = description;
    return employeeSummary;
}

function createProfile(image, employeeName, description) {
    const profile = document.createElement('div');
    profile.classList = 'profile';

    const profileImage = createContactIcon(image);
    const profileName = addEmployeeName(employeeName);
    const profileSummary = addEmployeeSummary(description);

    profile.appendChild(profileImage);
    profile.appendChild(profileName);
    profile.appendChild(profileSummary);

    return profile;
}

export default createProfile;