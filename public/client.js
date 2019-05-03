function Query1() {
    function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('mongo1.txt');
    document.getElementById("query").innerHTML = "Who is the oldest employee, male and female?";
}

function Query2() {
    function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('mongo2.txt');
    document.getElementById("query").innerHTML = "Get number of employees in each department";
}

function Query3() {
    function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('mongo3.txt');
    document.getElementById("query").innerHTML = "Give a breakdown of department managers by gender";
}

function Query4() {
    function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('mongo4.txt');
    document.getElementById("query").innerHTML = "Which department has the highest paid employee (provide both male and female)?";
}

function Query5() {
    function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('mongo5.txt');
    document.getElementById("query").innerHTML = "What is the average duration of each title? In other words, what is the average length of stay a title is being held by an employee?";
}

document.getElementById("Q1Button").addEventListener("click", function(){
   Query1();  
});

document.getElementById("Q2Button").addEventListener("click", function(){
   Query2();  
});

document.getElementById("Q3Button").addEventListener("click", function(){
   Query3();  
});

document.getElementById("Q4Button").addEventListener("click", function(){
   Query4();  
});

document.getElementById("Q5Button").addEventListener("click", function(){
   Query5();  
});

