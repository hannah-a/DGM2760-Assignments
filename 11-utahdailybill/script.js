let master
let bill
let rollcall
let person

fetch('https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getMasterList&state=ut').then(function (response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject(response)
    }
}).then(function (data) {
    master = data
    return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getBill&id=${master.masterlist[7].bill_id}`)
}).then(function (response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject(response)
    }
}).then (function (billData) {
    bill = billData
    console.log(bill.bill.votes[0].roll_call_id)
    return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getRollCall&id=${bill.bill.votes[0].roll_call_id}`)
}).then(function (response) {
    if (response.ok) {
        return response.json()
    } else {
        console.log('not working')
        return Promise.reject(response)
    }
}).then (function (rollCall) {
    rollcall = rollCall
    console.log(rollcall.roll_call.votes[0].people_id)
    return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getPerson&id=${rollcall.roll_call.votes[0].people_id}`)
}).then(function (response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject(response)
    }
}).then(function (person) {
    person = person
    console.log(person.person.name)
    return person
}).then(function (response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject(response)
    }
}).then(function (name) {
    console.log(person, name)
}).catch(function (error) {
    console.warn(error)
})
