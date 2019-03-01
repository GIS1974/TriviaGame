var questionArray = [
    {
        question: "What is Matrix?",
        answers: [
            { answer: "1111", value: true },
            { answer: "2222", value: false },
            { answer: "3333", value: false },
            { answer: "4444", value: false }
        ]
    },
    {
        question: "What is Matrix_2?",
        answers: [
            { answer: "5555", value: false },
            { answer: "6666", value: true },
            { answer: "7777", value: false },
            { answer: "8888", value: false }
        ]
    },
    {
        question: "What is Matrix_3?",
        answers: [
            { answer: "9999", value: false },
            { answer: "aaaaa", value: false },
            { answer: "bbbbb", value: true },
            { answer: "nnnnn", value: false }
        ]
    }
]

var i = 30;

console.log(questionArray[2].question);
console.log(questionArray[2].answers[2].value);
console.log(questionArray[0].answers[3].answer);

function getAnswer(name) {
    var radioValue = $("input[name='" + name + "']:checked").val();
    var isTrueSet = (radioValue == 'true');

    if (radioValue) {
        if (isTrueSet) {
            console.log("Right answer");
        }
        else {
            console.log("Wrong answer");
        }
    }
    else {
        console.log("NO answer");
    }
}

function getAnswers() {
    getAnswer("radio1");
    getAnswer("radio2");
    // getAnswer("radio3");
    // getAnswer("radio4");
    // getAnswer("radio5");
}

function showTime() {
    while (i > 0) {
        i--;
        $(".timer").html("<p>Time remaining:" + i + "</p>");
        // console.log(i);
    }
}


function timerFunction() {
    setInterval(showTime, 1000);
}

// setTimeout(getAnswer, 3000);


///////////////////////////////////////////////////////

var test =
    "<div id='question-1'>" +
    "<h1>Question 1</h1>" +
    "<div class='radio1'>" +
    "<label class='container'>Answer 1" +
    "<input type='radio' name='radio1' value='true'>" +
    "<span class='checkmark'></span>" +
    "</label>" +
    "<label class='container'>Answer 2" +
    "<input type='radio' name='radio1' value='false'>" +
    "<span class='checkmark'></span>" +
    "</label>" +
    "</div>" +
    // test += 
    "<div id='question-2'>" +
    "<h1>Question 2</h1>" +
    "<div class='radio2'>" +
    "<label class='container'>Answer 1" +
    "<input type='radio' name='radio2' value='false'>" +
    "<span class='checkmark'></span>" +
    "</label>" +
    "<label class='container'>Answer 2" +
    "<input type='radio' name='radio2' value='true'>" +
    "<span class='checkmark'></span>" +
    "</label>" +
    "</div>";

$("#startButton").click(function () {
    $(".questions").html(test);
    timerFunction();

    setTimeout(getAnswers, 5000);
});  
