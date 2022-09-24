const mainTable = document.getElementsByClassName("board")[0]

var arr = []
for (var i = 3; i <= 35;i++) {
    // console.log(i)
    arr.push(i)
    mainTable.innerHTML += `<span id="c${i}">${i}</span>`
}
const draw = () => {
    if (arr.length > 3) {
        var rmItem = arr[Math.floor(Math.random()*arr.length)]
        arr = arr.filter(item => item !== rmItem)
        console.log(arr)
        console.log(rmItem)
        document.getElementById(`c${rmItem}`).style.visibility = "hidden"
        document.getElementById(`topCard`).innerText = `${rmItem}`
    }
}