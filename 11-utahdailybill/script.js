

const prefiledDiv = document.querySelector(".main__prefiled");
const introducedDiv = document.querySelector(".main__introduced");
const engrossedDiv = document.querySelector(".main__engrossed");
const enrolledDiv = document.querySelector(".main__enrolled");
const passedDiv = document.querySelector(".main__passed");
const vetoedDiv = document.querySelector(".main__vetoed");
const failedDiv = document.querySelector(".main__failed");

let masterListData = {}//list of bills
let oldMasterData = localStorage.getItem("masterListData"); //first variable to check if its in storage
async function getMasterList() {
    try {
      const response = await fetch("./data/masterlist.json");
      return await response.json(); //Return the JSON object
    } catch (error) {
      console.error(error); //passing the error object to .error
    }
}
if (oldMasterData) {
  console.log("You have old data");
} else {
  console.log('MasterDataList cached')
  getMasterList().then((data) => {
    delete data.masterlist.session  
    masterListData = data.masterlist
    let masterStringData = JSON.stringify(masterListData);
    localStorage.setItem("masterListData", masterStringData);
  }).catch(function (error) {
        console.warn(error)
    })
}

let billsData = {}
function makeBills() {
  const parsedMasterListData = JSON.parse(
    localStorage.getItem("masterListData") //second variable to use as parsed data
  );

  for (const [key, value] of Object.entries(parsedMasterListData)) {
   
  }
};

//event listener on billDiv needs to run function that takes the reduced rollcall id's, gets the data and then takes the user to another page to display the data of the members list. So if I make that a seperate api call and function then i can pass in the roll_call_id's I need into it so I'm going to need to reduce the roll calls for every bill so that I can get those pass those two id's into the new function call.

//localStorage.getItem()
//localStorage.key(index)

//class to get detailed bill information
class Bill {
  constructor(
    bill_id,
    bill_type,
    title,
    bill_number,
    description,
    committee,
    status,
    status_date,
    body,
    state_link,
    subjects,
    sponsors,
    votes
  ) {
    (this.bill_id = bill_id),
      (this.bill_type = bill_type),
      (this.title = title),
      (this.bill_number = bill_number),
      (this.description = description),
      (this.committee = committee),
      (this.status = status),
      (this.status_date = status_date),
      (this.body = body),
      (this.state_link = state_link),
      (this.subjects = subjects),
      (this.sponsors = sponsors),
      (this.votes = votes),
      function houseRollCall() {
        const houseObjectArray = [];
        votes.forEach((rollCall) => {
          if (rollCall.chamber == H) {
            houseObjectArray.push(rollCall);
          }
        });
        if (votes.length > 1) {
          //only runs if there is more than 1 object in the votes array
          houseObjectArray.reduce((a, b) => (a.date > b.date ? a : b));
        }
        console.log(houseObjectArray);
      };
  }
}


//to make each bill on click
// async function getBillData() {
//     console.log("fetch is working");
//     try {
//       const response = await fetch(`./data/UT/bill/${value.number}.json`); //fetch the getBill API
//       return await response.json();
//     } catch (error) {
//       console.error(error); //passing the error object to .error
//     }
//   }
//   getBillData().then((billData) => {
//     const billDiv = document.createElement("div");
//     const bill = new Bill(
//       billData.bill.bill_id,
//       billData.bill.bill_type,
//       billData.bill.title,
//       billData.bill.bill_number,
//       billData.bill.description,
//       billData.bill.committee,
//       billData.bill.status,
//       billData.bill.status_date,
//       billData.bill.body,
//       billData.bill.state_link,
//       billData.bill.subjects,
//       billData.bill.sponsors,
//       billData.bill.votes
//     );
//     console.log(bill)













































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
