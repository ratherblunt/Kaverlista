const friendList = [];

function addFriend() {
    const friendNameInput = document.getElementById("friendName");
    const friendName = friendNameInput.value.trim();
    if (friendName !== "") {
        friendList.push(friendName);
        friendNameInput.value = "";
        updateFriendList();
    }
}

function sortFriends() {
    friendList.sort();
    updateFriendList();
}

function removeFriend(index) {
    friendList.splice(index, 1);
    updateFriendList();
}

function updateFriendList() {
    const friendListElement = document.getElementById("friendList");
    friendListElement.innerHTML = "";
    friendList.forEach((friend, index) => {
        const li = document.createElement("li");
        li.textContent = friend;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeFriend(index));
        
        li.appendChild(removeButton);
        
        friendListElement.appendChild(li);
    });
}

