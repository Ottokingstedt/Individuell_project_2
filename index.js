
const state = {
    balance: 0,
    income: 0,
    expense: 0,
    transactions: [
       
    ]
}


const balanceEl = document.querySelector('#balance');
const incomeEl = document.querySelector('#income');
const expenseEl = document.querySelector('#expense');
const transactionsEl = document.querySelector ('#transaction');
const incomeBtnEl = document.querySelector ('#incomeBtn');
const expenseBtnEl = document.querySelector ('#expenseBtn');
const descriptionInputEl = document.querySelector ('#description');
const amountInputEl = document.querySelector ('#amount');

function init() {
    updateState();
    initListeners();
}

function uniqueId () {
    return Math.round(Math.random() * 1000000);
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick); 
}

function onAddIncomeClick(e){
    e.preventDefault();
    addTransction(descriptionInputEl.value, amountInputEl.value, 'income');
}

function addTransction (description, amount, type){
    if (description !== '' && amount !== '') {
        const transaction = {
            id: uniqueId(),
            name: description,
            amount: parseInt(amount), 
            type: type
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('Please enter valid data');
    }

    descriptionInputEl.value = ''; 
    amountInputEl.value = '';
}

function onAddExpenseClick(e){
    e.preventDefault();
    addTransction(descriptionInputEl.value, amountInputEl.value, 'expense');
  
}

function onDeleteclick(event) {
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex; 
    for (var i = 0; i < state.transactions.length; i++){
        if (state.transactions[i].id === id) {
            deleteIndex = i;
            break; 
        }
        
    }
    state.transactions.splice(deleteIndex, 1); 

    updateState();

}

function updateState(){
    var balance = 0,
        income = 0,
        expense = 0,
        item;

    for (var i = 0; i < state.transactions.length; i++){
        item = state.transactions[i];

        if (item.type === 'income') {
          income += item.amount;
        } else if (item.type === 'expense'){
            expense += item.amount;
        }
    }

    balance = income - expense; 

    state.balance = balance; 
    state.income = income;
    state.expense = expense; 

    render ();
}

function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    transactionsEl.innerHTML = '';

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement ('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.setAttribute('data-id', item.id);
        //btnEl.setAttribute('class' ,'remove')
         btnEl.innerHTML = 'remove'
        

   
     btnEl.addEventListener('click', onDeleteclick);
        
function onDeleteclick(event) {
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex; 
    for (var i = 0; i < state.transactions.length; i++){
        if (state.transactions[i].id === id) {
            deleteIndex = i;
            break; 
        }
        
    }
    state.transactions.splice(deleteIndex, 1); 

    updateState();

}



       



        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);

    }
    
}

init ();
