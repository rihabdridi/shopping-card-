// Add Quantity
// Get the plus buttons
let plusBtn = document.getElementsByClassName('btn-plus');
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;

    // Update the total price
    totalPrice();
  });
}

// Dimune Quantity
// Get the minus buttons
let minusBtn = document.getElementsByClassName('btn-moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }

    // Update the total price
    totalPrice();
  });
}

// Calculate the total price
function totalPrice() {
  // Get the product price
  let productPrice = document.getElementsByClassName('prx');
  // Get the product quantity
  let productQuantity = document.getElementsByClassName('quantity');
  // Initilize the sum
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}

// Delete a product
// Get the delete buttons
let deleteBtn = document.querySelectorAll('.btn-delete');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();

    // Update the total price
    totalPrice();
  });
}

// Like a product
// Get the like buttons
let likeBtn = document.querySelectorAll('.btn-like');
// Get the heart icon
let heartIcon = document.querySelectorAll('.like');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
    if (heartIcon[i].style.fill === 'black') {
      heartIcon[i].style.fill = '#2da345';
    } else {
      heartIcon[i].style.fill = 'black';
    }
  });
}
