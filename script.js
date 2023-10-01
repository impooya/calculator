let $ = document
const calcShow = $.querySelector('form') 
const valueNumber = $.querySelector('.value-number')
const operationList = $.getElementsByClassName('operation')
const clearBtn = $.querySelector('.clear-btn')
const trashBtn = $.querySelector('.trash')
const numbersList = $.querySelectorAll('.numbers p')
const result = $.querySelector('.result')


calcShow.addEventListener('submit', function (event) {
    event.preventDefault()
    let valueCheckRegeX = /\d*\W\d*/
    let isValidValue = valueCheckRegeX.test(valueNumber.value)
    if (isValidValue) {
        valueNumber.value = eval(valueNumber.value)
    } else {
        alert('Please Enter Valid Value🤔\n(Note:please No space between character)')
    }    
})

for (const item of numbersList) {
    item.addEventListener('click', function (event) {
        valueNumber.value += event.target.innerText
    })
}

trashBtn.addEventListener('click', function () {
    valueNumber.value = valueNumber.value.slice(0, -1)
})

clearBtn.addEventListener('click', function () {
    valueNumber.value = ''
})

for (const item of operationList) {
    item.addEventListener('click', function (event) {
        valueNumber.value += event.target.innerText
    })
}


result.addEventListener('click', function () {
    let valueCheckRegeX = /\d*\W\d*/
    let isValidValue = valueCheckRegeX.test(valueNumber.value)
    if (isValidValue) {
        valueNumber.value = eval(valueNumber.value)
    } else {
        alert('Please Enter Valid Value🤔')
        valueNumber.value = ''
    }    
})



