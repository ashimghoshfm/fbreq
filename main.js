let bt = document.querySelector("button");

bt.addEventListener("click", req);

change = true; 

function req() {
    if (change) {

        bt.innerHTML = "<i class='fas fa-user-minus'></i>&nbsp;&nbsp;Cancel Request";
        change = false;

    }
    else {
        bt.innerHTML = "<i class='fas fa-user-plus'></i>&nbsp;&nbsp;Add Friend"
        change = true;
    }
}