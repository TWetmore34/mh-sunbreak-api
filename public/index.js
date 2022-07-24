// form1 dom vars
const armorSub = document.getElementById('armor');
const armorForm = document.querySelectorAll('.form1');
const armorText = document.getElementById('stats')
// form2 dom vars
const skillForm = document.querySelectorAll('.form2');
const skillSub = document.getElementById('skillsub');
const skillText = document.getElementById('skills')
// form3 dom vars
const slotForm = document.getElementById('slot-list');
const slotQuant = document.getElementById('slot-num');
const slotSub = document.getElementById('slotSub');
const slotText = document.getElementById('slots')
// form4 dom vars
const setForm = document.getElementById('form4');
const setSub = document.getElementById('set-sumbit')

// final submit dom vars
const textFinal = document.getElementById('final');
const finalSub = document.getElementById('submit');

// well have to implement some jquery to do this, so wait till the hotel for it
// setting up a parent el in the db shouldnt take too long to change around, and we wont be implementing any actual data yet anyways
// console.log(setForm.innerText)
function setArmorSet(e) {
    e.preventDefault();
    let res = {};


}

function setArmor(e) {
    e.preventDefault();
    let res = {}
    for(i=0; i<armorForm.length;i++){
        res[armorForm[i].id] = armorForm[i].value;
    }
    armorText.innerHTML = JSON.stringify(res)
    return res
};

// global arr of objs for skills
let skillArr = []
function setSkill(e) {
    e.preventDefault();
    let res = {

    }
    for(i=0;i<skillForm.length;i++){
        res[skillForm[i].id] = skillForm[i].value;
    }
    skillText.innerHTML += JSON.stringify(res)
    skillArr.push(res);
    skillText.innerHTML = JSON.stringify(skillArr);
};
// global arr of objs for slots
let slotArr = []
function setSlot(e) {
    e.preventDefault();
    let res = {}
    res[slotForm.value] = slotQuant.value
    slotArr.push(res)
    slotText.innerHTML = JSON.stringify(slotArr);
}

function sendFinal () {
    finalObj = {
        stats: armorText.innerHTML,
        skills: skillText.innerHTML,
        slots: slotText.innerHTML
    };
    fetch('/api/new-armor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(finalObj),
    })
    // reset global vars
    skillArr = [];
    slotArr = [];
}
armorSub.addEventListener('click', setArmor);
skillSub.addEventListener('click', setSkill);
slotSub.addEventListener('click', setSlot);
finalSub.addEventListener('click', sendFinal);