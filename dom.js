var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form sumbit event
form.addEventListener('sumbit', addItem);
itemList.addEventListener('click', removeItem);

//add item
function addItem(e) {
    e.preventDefault();
    //console.log(1);
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    console.log(1);
    if (e.target.classList.conatins('delete')); {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}