
// var socket = io("http://localhost:9080/");
// window.onload = clearInputs();

window.addEventListener('load', function() {

    // function updateOnlineStatus(event) {
    //     socket.emit("check", {data: "1"})
    //     document.body.setAttribute("data-online", navigator.onLine);
    // }
    // updateOnlineStatus();
    clearInputs();
    appendCom();
    changeViews();
    // window.addEventListener('online',  updateOnlineStatus);
    // window.addEventListener('offline', updateOnlineStatus);
  });

  window.addEventListener('scroll', () => {
    document.getElementsByClassName("xo-see-people")[0].classList.remove('scroll-modal');
    setTimeout(() => {
        document.getElementsByClassName("xo-see-people")[0].classList.add('scroll-modal');
    }, 2000)}
  )


function clearInputs() {
    //inputs 
    document.getElementsByClassName("form-person")[0].value = "";
    document.getElementsByClassName("form-email")[0].value = "";
    document.getElementsByClassName("form-phone")[0].value = "";
    document.getElementsByClassName("form-start")[0].value = "";
    document.getElementsByClassName("form-aim")[0].value = "";
    document.getElementsByClassName("form-type")[0].value = "";
    document.getElementsByClassName("form-header")[0].value = ""; 
    document.getElementsByClassName("form-body")[0].value = "";
}


// socket.on("check", (data) => {
//     console.log("check data " + data);
// })

function sendEmail() {
    //inputs 
    var from = document.getElementsByClassName("form-email")[0].value; 
    var subject = document.getElementsByClassName("form-header")[0].value; 
    var body = "PERSON: " + document.getElementsByClassName("form-person")[0].value + "<br/>" + "<br/>" +
                "TEL.: " + document.getElementsByClassName("form-phone")[0].value + "<br/>" + "<br/>" +
                "START: " + document.getElementsByClassName("form-start")[0].value  + "<br/>" +
                "CEL: " + document.getElementsByClassName("form-aim")[0].value  + "<br/>" + "<br/>" +
                "TYPE OF LOAD: " + document.getElementsByClassName("form-type")[0].value  + "<br/>" + "<br/>" +
                "MESSAGE: " + document.getElementsByClassName("form-body")[0].value  + "<br/>"; 

    
	Email.send({
        SecureToken : "a412476e-c856-4d10-a2a9-79ea1ca46e7e",
        To : 'nguyentienthinh41298@gmail.com@gmail.com',
        From : from,
        Subject : subject,
        Body : body,
	}).then(
    );
    
    swal({
        title: "Thank you!",
        text: "Message was sent!",
        icon: "success",
        button: "OK",
      });
    clearInputs();
}

var dataViews = [81, 83, 84, 86, 89, 91, 92, 93, 91, 86, 93];
var dataWord = [11, 12, 9, 6, 8, 7, 5];
var dataViewsElm = '';
var dataWordElm = '';
var viewStart = 1;
var wordStart = 1;
var boxElm = document.getElementById("box1");
var boxElm1 = document.getElementById("box2");
function appendCom(){
    dataViewsElm += `<b class="is-visible">${dataViews[0]}</b>`;
    dataWordElm  += `<b class="is-visible">${dataWord[0]}</b>`
    for (let index = 1; index < dataViews.length; index++) {
        dataViewsElm += `<b class="is-hidden">${dataViews[index]}</b>`;
    }
    for (let index = 1; index < dataWord.length; index++) {
        dataWordElm  += `<b class="is-hidden">${dataWord[index]}</b>`
    }

    boxElm.innerHTML += dataViewsElm;
    boxElm1.innerHTML += dataWordElm;
}

function changeViews(){
    setInterval(() => {
        const boxElmChild = boxElm.querySelectorAll('b');
        const box1ElmChild = boxElm1.querySelectorAll('b');
        for (let index = 0; index < boxElmChild.length; index++) {
            if(boxElmChild[index].classList.contains("is-visible")){
                viewStart = index + 1;
                boxElmChild[index].classList.remove("is-visible");
                boxElmChild[index].classList.add("is-hidden");
            }
        }
        if(viewStart < dataViews.length){
            boxElm.classList.add("change");
            boxElmChild[viewStart].classList.remove("is-hidden");
            boxElmChild[viewStart].classList.add("is-visible");
            if(boxElm.classList.contains("change")){
                setTimeout(() => {
                    boxElm.classList.remove("change");
                }, 1000)
            }
            viewStart++;
        }else{
            viewStart = 0;
            boxElmChild[viewStart].classList.remove("is-hidden");
            boxElmChild[viewStart].classList.add("is-visible");
            if(boxElm.classList.contains("change")){
                setTimeout(() => {
                    boxElm.classList.remove("change");
                }, 1000)
            }
        }
        
        for (let index = 0; index < box1ElmChild.length; index++) {
            if(box1ElmChild[index].classList.contains("is-visible")){
                wordStart = index + 1;
                box1ElmChild[index].classList.remove("is-visible");
                box1ElmChild[index].classList.add("is-hidden");
            }
        }
        if(wordStart < dataWord.length){
            boxElm1.classList.add("change");
            box1ElmChild[wordStart].classList.remove("is-hidden");
            box1ElmChild[wordStart].classList.add("is-visible");
            if(boxElm1.classList.contains("change")){
                setTimeout(() => {
                    boxElm1.classList.remove("change");
                }, 1000)
            }
            wordStart++;
        }else{
            boxElm1.classList.add("change");
            wordStart = 0;
            box1ElmChild[wordStart].classList.remove("is-hidden");
            box1ElmChild[wordStart].classList.add("is-visible");
            if(boxElm1.classList.contains("change")){
                setTimeout(() => {
                    boxElm1.classList.remove("change");
                }, 1000)
            }
        }
    },2000)
}