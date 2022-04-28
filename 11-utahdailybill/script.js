const prefiledDiv = document.querySelector('.main__prefiled')
const introducedDiv = document.querySelector('.main__introduced')
const engrossedDiv = document.querySelector('.main__engrossed')
const enrolledDiv = document.querySelector('.main__enrolled')
const passedDiv = document.querySelector('.main__passed')
const vetoedDiv = document.querySelector('.main__vetoed')
const failedDiv = document.querySelector('.main__failed')



async function getMasterList() {
    try {
      const response = await fetch('https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getMasterList&state=ut')
      return await response.json() //Return the JSON object
  
    } catch (error) {
      console.error(error) //passing the error object to .error
    }
}
let masterListData = {} //list of bills
getMasterList().then(data => {
    delete data.masterlist.session //deletes the session object from the list of bills
    masterListData = data.masterlist 
    for(const [key, value] of Object.entries(masterListData)) {
        async function getBillData() { 
                console.log('fetch is working')//method to fetch the getBill API 
                const response = await fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getBill&id=${value.bill_id}`)
                return await response.json()
        }
       getBillData().then(bill => {
           const billDiv = document.createElement('div')

       })
       const bill = new Bill(value.bill_id)
       console.log(bill)
    }
})

//class to get detailed bill information 
class Bill {
    constructor(bill_id) {
        this.bill_id = bill_id,
        this.title = title,
        this. 
        console.log('constructor is working')
    }
}    


// async function getBillData() { 
//     console.log('fetch is working')//method to fetch the getBill API 
//     const response = await fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getBill&id=${this.bill_id}`)
//     return await response.json()
// }
// console.log(this.getBillData())
    // for(const [key, value] of Object.entries(billList[masterlist])) {
    //     console.log(`${key}, ${value}`)
    //     for(key of bill) {
    //         if(key.status === 0) {
    //             preFiled.push(key.status)
    //         } else if(key.status == 1) {
    //             introduced.push(key.status)
    //         } else if(key.status == 2) {
    //             engrossed.push(key.status)
    //         } else if(key.status == 3) {
    //             enrolled.push(key.status)
    //         } else if(key.status == 4) {
    //             passed.push(key.status)
    //             console.log(passed)
    //         } else if(key.status == 5) {
    //             vetoed.push(key.status)
    //         } else if(key.status == 6) {
    //             failed.push(key.status)
    //         }
    //     }
    // }
    

    // return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getBill&id=${master.masterlist[7].bill_id}`)


//Status Codes
// 0 N/A Pre-filed or pre-introduction
// 1 -Introduced
// 2- Engrossed
// 3 - Enrolled
// 4 - Passed
// 5 - Vetoed
// 6 - Failed Limited support based on state








// fetch('https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getMasterList&state=ut').then(function (response) {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject(response)
//     }
// }).then(function (data) {
//     master = data
//     return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getBill&id=${master.masterlist[7].bill_id}`)
// }).then(function (response) {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject(response)
//     }
// }).then (function (billData) {
//     bill = billData
//     console.log(bill.bill.votes[0].roll_call_id)
//     return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getRollCall&id=${bill.bill.votes[0].roll_call_id}`)
// }).then(function (response) {
//     if (response.ok) {
//         return response.json()
//     } else {
//         console.log('not working')
//         return Promise.reject(response)
//     }
// }).then (function (rollCall) {
//     rollcall = rollCall
//     console.log(rollcall.roll_call.votes[0].people_id)
//     return fetch(`https://api.legiscan.com/?key=d5c197df7f4d28c4c21bf867cad37a56&op=getPerson&id=${rollcall.roll_call.votes[0].people_id}`)
// }).then(function (response) {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject(response)
//     }
// }).then(function (person) {
//     person = person
//     console.log(person.person.name)
//     return person
// }).then(function (response) {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject(response)
//     }
// }).then(function (name) {
//     console.log(person, name)
// }).catch(function (error) {
//     console.warn(error)
// })


//DATE CHECKER

//Get the Roll call for the two most recent votes for H and S array.reduce((a, b) => (a.MeasureDate > b.MeasureDate ? a : b));

