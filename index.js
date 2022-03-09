// code your solution here
function saturdayFun (noActivity, activity) {
    switch (noActivity, activity) {
        case noActivity:
            return 'This Saturday, I want to roller-skate!';
        case activity:
            return 'This Saturday, I want to bathe my dog!';
    }
}

function mondayWork (activity, overriden) {
    switch (activity, overriden){
        case activity:
            return 'This Monday, I will go to the office.';
        case overriden:
            return 'This Monday, I will work from home.';
    }
}


function wrapAdjective(result = '*') {
    return function (blank = 'special') {
        return 'You are ' + `${result}` + `${blank}` + `${result}` + '!';
    } 
}
wrapAdjective();