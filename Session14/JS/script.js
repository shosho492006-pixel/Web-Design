let users = []

function addUser() {
    
    let id = +prompt("Enter ID:")
    let name = prompt("Enter Name:")
    let balance = +prompt("Enter Balance:")

    let user = {
        name: name,
        id: id,
        balance: balance
    }

    users.push(user)

    console.log(users)
}

addUser()
addUser()
addUser()


function editUserBalanceByID() {

    let id = +prompt("Enter ID:")
    let newBalance = +prompt("Enter New Balance:")

    let index = users.findIndex(item => item.id == id)

   
    users[index].balance = newBalance
    

    console.log(users)
}

editUserBalanceByID()


function transferBalance() {
    let fromID = +prompt("Enter From ID:")
    let toID = +prompt("Enter To ID:")
    let balance = +prompt("Enter Balance:")

    let fromIndex = users.findIndex(item => item.id == fromID)
    let toIndex = users.findIndex(item => item.id == toID)

    users[fromIndex].balance -= balance
    users[toIndex].balance += balance


    console.log(users)
}


transferBalance()


function deleteUserByID() {
    let id = +prompt("Enter ID:")
    let index = users.findIndex(item => item.id == id)
    users.splice(index)

    console.log(users)
}

deleteUserByID()

