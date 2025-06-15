const ulTag = document.getElementById("nav-container");
const listItems = ulTag.getElementsByTagName("li")
let lastClicked = null;
for (let singleListItem of listItems) {
    singleListItem.addEventListener("click", function () {
        console.log(lastClicked);
        if (lastClicked == null) {
            // style purpose
            singleListItem.style.backgroundColor = ("red")
            singleListItem.style.color = ("whit")
            lastClicked = singleListItem
        } else {
            lastClicked.style.backgroundColor = "transparent"
            lastClicked.style.color = "#000000"
            singleListItem.style.backgroundColor = "red"
            singleListItem.style.color = "whit"
            lastClicked = singleListItem
        }
    })
}