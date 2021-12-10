var name = window.prompt("please enter Your name")
var age = window.prompt("please enter Your age")


window.onload(visit(age))

function visit(age) {
    if (age < 18) {
        window.alert("You Submitted that You are: " + age + "Years Old" + name)
        window.alert("you Must be 18 Years old To visit this site")
        var age = window.prompt("please enter Your age")
        
    }else {
        location.href("./index.html")
    }
}