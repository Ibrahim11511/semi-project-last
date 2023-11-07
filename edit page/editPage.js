const nameEdit = document.querySelector('.name-edit')
const trackEdit = document.querySelector('.track-edit')
const aboutEditText = document.querySelector('.about-edit-text')
const imageEdit = document.querySelector('.image-edit')
const newSkillName = document.querySelector('.new-skill-name')
const newSkillimage = document.querySelector('.new-skill-image')
const ulOfAllSkills = document.querySelector('.ul-of-all-skills')
const submitContactBtn = document.querySelectorAll('.submit-contact-btn')
const contactText = document.querySelectorAll('.contact-text')
const allProjects = document.querySelector('.all-projects')
const newProjectName = document.querySelector('.new-project-name')
const newProjectInfo = document.querySelector('.new-project-info')
const newProjectImage = document.querySelector('.new-project-img')
const editProjectName = document.querySelector('.edit-project .edit-project-name')
const editProjectInfo = document.querySelector('.edit-project .edit-project-info')
const editProjectImg = document.querySelector('.edit-project .edit-project-img')
const submitEditProjectBtn = document.querySelector('.submit-edit-project-btn')
const allExperince = document.querySelector('.all-experince')
const newExperinceName = document.querySelector('.new-experince-name')
const newExpericeInfo = document.querySelector('.new-experice-info')
const editExperinceName = document.querySelector('.edit-experince-name')
const editExpericeInfo = document.querySelector('.edit-experice-info')

let deleteSkillBtn
let deleteProjectBtn
let editProjectBtn
let editEexperinceBtn
let deleteExperinceBtn

let userContactData = {
    'whatsApp': null,
    'facebook': null,
    'twitter': null,
    'linkedin': null,
    'gmail': null,
    'phone': null,
    'discord': null,
}
let userDataArray = []
let userSkillsArray = []
let userProjectsArray = []
let userExperinceArray = []

function getExperincesFromlocalStorage() {
    if (localStorage.userExperince != null) {
        userExperinceArray = JSON.parse(localStorage.userExperince);
        addExperinceToPage(userExperinceArray)
    }
}
function getSkillsFromlocalStorage() {
    if (localStorage.userSkills != null) {
        userSkillsArray = JSON.parse(localStorage.userSkills);
        addSkillsTopage(userSkillsArray)
    }
}

function getContactDataFromLocalSorage() {
    if (localStorage.contactData != null) {
        userContactData = JSON.parse(localStorage.contactData)
    }
}

function getProjectsFromLocalStorage() {
    if (localStorage.userProjects != null) {
        userProjectsArray = JSON.parse(localStorage.userProjects)
        addProjectToPage(userProjectsArray)
    }
}
getContactDataFromLocalSorage()
getSkillsFromlocalStorage()
getProjectsFromLocalStorage()
getExperincesFromlocalStorage()

function addUserSkillsToArray(skill_name, skill_image) {
    const user_skill = {
        'id': Date.now(),
        'skillName': skill_name,
        'skillImage': skill_image,
    }
    userSkillsArray.push(user_skill)
}

$('.skills-btn').on('click', function () {
    if (newSkillName.value != '' && newSkillimage.value != '') {
        const storeSkillName = newSkillName.value
        const storeSkillImage = newSkillimage.value
        addUserSkillsToArray(storeSkillName, storeSkillImage)
        localStorage.setItem('userSkills', JSON.stringify(userSkillsArray))
    }
    addSkillsTopage(userSkillsArray)
    newSkillName.value = ''
    newSkillimage.value = ''
})

function addUserprojectsToArray(project_name, project_image, project_info) {
    const user_project = {
        'id': Date.now(),
        'projectName': project_name,
        'projectImage': project_image,
        'projectInfo': project_info,
    }
    userProjectsArray.push(user_project)
}

$('.project-btn').on('click', function () {
    if (newProjectName.value != '' && newProjectInfo.value != '' && newProjectImage.value != '') {
        const storeprojectname = newProjectName.value
        const storeprojectInfo = newProjectInfo.value
        const storeProjectImage = newProjectImage.value
        addUserprojectsToArray(storeprojectname, storeProjectImage, storeprojectInfo)
        localStorage.setItem('userProjects', JSON.stringify(userProjectsArray))
        addProjectToPage(userProjectsArray)
    }
    newProjectName.value = ''
    newProjectInfo.value = ''
    newProjectImage.value = ''
})

let counter
function addProjectToPage(array) {
    allProjects.innerHTML = ''
    array.forEach(project => {
        allProjects.innerHTML +=
            `
            <span class="project-name-edit">${project.projectName}</span>
            <p class="project-info-edit">${project.projectInfo}</p>
            <div class="buttons">
                <button class="delete-project-btn">Delete</button>
                <button class="edit-project-btn">Edit</button>
            </div>
            `
    })
    deleteProjectBtn = document.querySelectorAll('.delete-project-btn')
    deleteProjectBtn.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            userProjectsArray.splice(idx, 1)
            localStorage.setItem('userProjects', JSON.stringify(userProjectsArray))
            addProjectToPage(userProjectsArray)
        })
    })

    editProjectBtn = document.querySelectorAll('.edit-project-btn')
    editProjectBtn.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            $('.new-project').hide(500)
            $('.edit-project').show(700)
            editProjectName.value = userProjectsArray[idx].projectName
            editProjectInfo.value = userProjectsArray[idx].projectInfo
            editProjectImg.value = userProjectsArray[idx].projectImage
            counter = idx
        })
    })
}

submitEditProjectBtn.addEventListener('click', function () {
    if (editProjectName.value != '' && editProjectInfo.value != '' && editProjectImg.value != '') {
        userProjectsArray[counter].projectName = editProjectName.value
        userProjectsArray[counter].projectInfo = editProjectInfo.value
        userProjectsArray[counter].projectImage = editProjectImg.value
        addProjectToPage(userProjectsArray)
        localStorage.setItem('userProjects', JSON.stringify(userProjectsArray))
        $('.new-project').show(500)
        $('.edit-project').hide(700)
    }
})

function addUserDataToArray(user_name, user_image, user_jop) {
    const user_data = {
        'name': user_name,
        'jop': user_jop,
        'picture': user_image,
    }
    userDataArray.pop()
    userDataArray.push(user_data)
}

function addExperinceToArray(experince_name, experince_info) {
    const user_experince = {
        'experinceName': experince_name,
        'experinceInfo': experince_info,
    }
    userExperinceArray.push(user_experince)
    localStorage.setItem('userExperince', JSON.stringify(userExperinceArray))
}

$('.experince-btn').on('click', function () {
    if (newExperinceName.value != '' && newExpericeInfo.value != '') {
        addExperinceToArray(newExperinceName.value, newExpericeInfo.value)
        addExperinceToPage(userExperinceArray)
        console.log(userExperinceArray)
    }
    newExperinceName.value = ''
    newExpericeInfo.value = ''
})

let counterExperince
function addExperinceToPage(array) {
    allExperince.innerHTML = ''
    array.forEach(experince => {
        allExperince.innerHTML +=
            `
        <span class="experince-name-edit">${experince.experinceName}</span>
        <p class="exprince-info-edit">${experince.experinceInfo}</p>
        <div class="buttons">
            <button class="delete-experince-btn">Delete</button>
            <button class="edit-experince-btn">Edit</button>
        </div>
        `
    })
    deleteExperinceBtn = document.querySelectorAll('.delete-experince-btn')
    editEexperinceBtn = document.querySelectorAll('.edit-experince-btn')
    deleteExperinceBtn.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            userExperinceArray.splice(idx, 1)
            localStorage.setItem('userExperince', JSON.stringify(userExperinceArray))
            addExperinceToPage(userExperinceArray)
        })
    })

    editEexperinceBtn.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            $('.new-experince-container').hide(500)
            $('.edit-experince-container').show(700)
            editExperinceName.value = userExperinceArray[idx].experinceName
            editExpericeInfo.value = userExperinceArray[idx].experinceInfo
            counterExperince = idx
        })
    })
}



$('.experince-btn-edit').on('click', function () {
    if (editExperinceName.value != '' && editExpericeInfo.value != '') {
        userExperinceArray[counterExperince].experinceName = editExperinceName.value
        userExperinceArray[counterExperince].experinceInfo = editExpericeInfo.value
        addExperinceToPage(userExperinceArray)
        localStorage.setItem('userExperince', JSON.stringify(userExperinceArray))
        $('.new-experince-container').show(500)
        $('.edit-experince-container').hide(700)
    }
})

$('.intro-btn').on('click', () => {
    if (imageEdit.value != '' && trackEdit.value != '' & nameEdit.value != '') {
        const storeName = nameEdit.value
        const storeTrack = trackEdit.value
        const storeImage = imageEdit.value
        addUserDataToArray(storeName, storeImage, storeTrack)
        localStorage.setItem('userData', JSON.stringify(userDataArray))
    }
    nameEdit.value = ''
    trackEdit.value = ''
    imageEdit.value = ''
})

$('.about-btn').on('click', () => {
    if (aboutEditText.value != '') {
        const storeAbout = aboutEditText.value;
        localStorage.setItem('userAbout', storeAbout);
    }
    aboutEditText.value = '';
})

function addSkillsTopage(array) {
    ulOfAllSkills.innerHTML = ''
    array.forEach(skill => {
        ulOfAllSkills.innerHTML +=
            `
            <li class="skill-name-edit"><span class="name">${skill.skillName}</span>
                <button class="delete-skill-btn">x</button>
            </li>
            `
    })
    deleteSkillBtn = document.querySelectorAll('.delete-skill-btn')
    deleteSkillBtn.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            userSkillsArray.splice(idx, 1)
            localStorage.setItem('userSkills', JSON.stringify(userSkillsArray))
            addSkillsTopage(userSkillsArray)
        })
    })
}



submitContactBtn.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        if (this.previousElementSibling.value != '') {
            if (idx == 0) {
                userContactData.whatsApp = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 1) {
                userContactData.facebook = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 2) {
                userContactData.twitter = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 3) {
                userContactData.linkedin = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 4) {
                userContactData.gmail = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 5) {
                userContactData.phone = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
            else if (idx == 6) {
                userContactData.discord = this.previousElementSibling.value
                this.previousElementSibling.value = ''
            }
        }
        localStorage.setItem('contactData', JSON.stringify(userContactData))
    })
})