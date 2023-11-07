const myName = document.querySelector('.name')
const jop = document.querySelector('.jop')
const aboutInfo = document.querySelector('.about-info')
const profilePic = document.querySelector('.intro .image img')
const skillsContainer = document.querySelector('.skills-container')
const whats = document.querySelectorAll('.whats')
const facebook = document.querySelectorAll('.facebook')
const linkedin = document.querySelectorAll('.linkedin')
const twitter = document.querySelectorAll('.twitter')
const gmail = document.querySelector('.gmail')
const phone = document.querySelector('.phone')
const discord = document.querySelector('.discord')
const projectsContainer = document.querySelector('.projects-container')
const experienceContainer = document.querySelector('.experinces-container')

let mainUserDataArray = []
let mainUserSkillsArray = []
let mainContactData = []
let mainUserProjectsArray = []
let mainUserExperince = []
if (localStorage.userProjects) {
    mainUserProjectsArray = JSON.parse(localStorage.userProjects)
}
else {
    mainUserProjectsArray = []
}
//////////////////////////////////////////////////
if (localStorage.userData) {
    mainUserDataArray = JSON.parse(localStorage.userData)
}
else {
    mainUserDataArray = []
}
//////////////////////////////////////////////////
if (localStorage.contactData) {
    mainContactData = JSON.parse(localStorage.contactData)
}
else {
    mainContactData = []
}
///////////////////////////////////////////////////
if (localStorage.userSkills) {
    mainUserSkillsArray = JSON.parse(localStorage.userSkills)
}
else {
    mainUserSkillsArray = []
}
////////////////////////////////////////////////////
if (localStorage.userExperince) {
    mainUserExperince = JSON.parse(localStorage.userExperince)
}
else {
    mainUserExperince = []
}
////////////////////////////////////////////////////
// mainUserDataArray = JSON.parse(localStorage.userData)
// mainContactData = JSON.parse(localStorage.contactData)
// mainUserSkillsArray = JSON.parse(localStorage.userSkills)
// mainUserExperince = JSON.parse(localStorage.userExperince)
// console.log(mainUserExperince)

myName.textContent = mainUserDataArray[0].name
jop.textContent = mainUserDataArray[0].jop
profilePic.setAttribute('src', mainUserDataArray[0].picture)
aboutInfo.textContent = localStorage.getItem('userAbout')
discord.setAttribute('href', mainContactData.discord)
phone.setAttribute('href', `tel:+2${mainContactData.phone}`)
gmail.setAttribute('href', `mailto:${mainContactData.gmail}`)
linkedin.forEach(ele => {
    ele.setAttribute('href', mainContactData.linkedin)
})
twitter.forEach(ele => {
    ele.setAttribute('href', mainContactData.twitter)
})
facebook.forEach(ele => {
    ele.setAttribute('href', mainContactData.facebook)
})
whats.forEach(ele => {
    ele.setAttribute('href', `https://wa.me/${mainContactData.whatsApp}`)
})

mainUserSkillsArray.forEach(skill => {
    skillsContainer.innerHTML +=
        `
        <div class="skill">
            <div class="image-of-skill">
                <img src="${skill.skillImage}" alt>
            </div>
            <span class="name-of-skill">${skill.skillName}</span>
        </div>
        `
});

mainUserProjectsArray.forEach(project => {
    projectsContainer.innerHTML +=
        `
        <div class="project">
            <div class="image-of-project">
                <img
                    src="${project.projectImage}"
                    alt>
            </div>
            <span class="name-of-project hide">${project.projectName}</span>
            <span class="info-of-project hide">${project.projectInfo}</span>
            <button class="show-project hide">Show Project</button>
        </div>
        `
})

mainUserExperince.forEach(experienc => {
    experienceContainer.innerHTML +=
        `
        <div class="experince">
        <div class="name-and-intecator">
            <span class="intecator-for-name"></span>
            <span class="name-of-experince">${experienc.experinceName}</span>
        </div>
        <div class="info-and-intecator">
            <span class="indecator-for-info"></span>
            <p class="info-of-experince">${experienc.experinceInfo}</p>
        </div>
        </div>
        `
})
const imageProject = document.querySelectorAll('.projects .projects-container .project .image-of-project img')
$('.project').on('click', function () {
    $(this).find('.hide').toggle(300)
    $(this).find('.image-of-project img').toggleClass('blur')
})

// console.log($('.project'))

$('.login-btn').on('click', function () {
    window.open('../login form/index.html')
})