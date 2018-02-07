$(document).ready(function() {
    $("#introSection").hide();
    $("#messageSection").hide();
        delay: 50;
    });


    $("#questionSpace").hide();
    var correctCounter = 0,
        incorrectCounter = 0,
        unansweredCounter = 0,
        currentQuestionIndex = 0;


    var congratsMessages = ['Well, you have done', 'The Force is Strong with You', "I can feel the power coursing through you!"];

    function randomNum(x) {
        var roll = Math.floor(Math.random() * x);
        return roll;
    }

    function randomCongrats() {
        var messageRoll = randomNum(congratsMessages.length);
    }

    function countDown() {
        $('.pickAnswer').click(function() {
            $(this).data('clicked', true);
        });
        var i = 30;
        var myInterval = setInterval(function() {

            if (i < 10) {
                $('#timerSeconds').html("0" + i);
                $(".pickAnswer").on("click", function() {
                    clearInterval(myInterval);
                });
            } else {
                $('#timerSeconds').html(i);
                $(".pickAnswer").on("click", function() {
                    clearInterval(myInterval);
                });
            }

            if (i === 0) {
                unansweredCounter++;
                clearInterval(myInterval);
                currentQuestionIndex++;
                $('#timer').effect("pulsate", {
                    times: 25
                }, 1000 * 5);
                i = 30;
                postQuestion(currentQuestionIndex);
            } else {
                i--;
            }
        }, 1000);
    }

    var questions = [
        // question 1
        {
            "q": "Who is Luke Skywalker's Father?",
            "c": ["Darth Vader", "Han Solo", "Obi-Wan Kenobi"],
            "answer": 0
        },
        // question 2
        {
            "q": "Boba Fett is from which planet?",
            "c": ["Kamino", "Mandalore", "Dantooine"],
            "answer": 0
        },
        // question 3
        {
            "q": "What is the name of Han's Ship?",
            "c": ["X-wing", "The Ebon Hawk", "The Millinium Falcon"],
            "answer": 2
        },
        // question 4
        {
            "q": "Which planet is Queen Amidala from?",
            "c": ["Alderaan", "Coruscant", "Naboo"],
            "answer": 2
        },
        // question 5
        {
            "q": "What race is Chewbacca?",
            "c": ["Wookie", "Ewok", "Bantha"],
            "answer": 0
        },
        // question 6
        {
            "q": "What is the name of the ice planted featured in Episode VI?",
            "c": ["Alderaan", "Hoth", "Tattooine"],
            "answer": 1
        },
        // question 7
        {
            "q": "What is the name of the soldiers in the Imperial Army?",
            "c": ["Stormcloaks", "Stormtroopers", "Stormchasers"],
            "answer": 1
        },
        // question 8
        {
            "q": "Which droid is gold?",
            "c": ["R2-D2", "BB-8", "C-3PO"],
            "answer": 2
        },
        // question 9
        {
            "q": "Who was Luke's co-pilot in the Battle of Hoth?",
            "c": ["Dak", "Biggs", "Porkins"],
            "answer": 0
        },
        // question 10
        {
            "q": "Leia is Luke's _______.",
            "c": ["Mother", "Sister", "Aunt"],
            "answer": 1
        }
    ];


    function postQuestion(n) {

        if (currentQuestionIndex < questions.length) {
            $('#question').remove();
            $('.pickAnswer').remove();
            countDown();
            $('#questionContainer').append("<div id='question'>" + questions[n].q + "</div>");
            for (var i = 0; i < questions[n].c.length; i++) {
                var newDiv = $("<div>");
                newDiv.addClass("pickAnswer").attr("indexnum", i).text(questions[n].c[i]);
                $('#choices').append(newDiv);
            }


        } else {
            resetGame(); // the conditional successfully loops the game
        }

        $(".pickAnswer").on("click", function() {
            var userChoice = $(this).attr('indexnum'); // stored as a string not a number
            userChoice = parseInt(userChoice);

            // checks if user is correct and will tally accordingly
            if (userChoice === questions[currentQuestionIndex].answer) {
                correctCounter++;
                currentQuestionIndex++;
                randomCongrats();

            } else {
                incorrectCounter++;
                currentQuestionIndex++;

            }
            postQuestion(currentQuestionIndex);
        });
    }

    function startTrivia() {
        $('#messageSection').hide();
        $('#gameMessage').empty();
        $('#questionContainer').show();
        $('#choices').show();
        $("#timer").show();
        correctCounter = 0;
        incorrectCounter = 0;
        unansweredCounter = 0;
        currentQuestionIndex = 0;

        postQuestion(currentQuestionIndex);

    }

    function resetGame() {
        $('#messageSection').show();
        $('#questionContainer').hide();
        $('#choices').hide();
        $('#timer').hide();

        $('#gameMessage').append("<h2>You have completed the game!</h2>");
        $('#gameMessage').append("<h4>Total Correct: " + correctCounter + "</h4>");
        $('#gameMessage').append("<h4>Total Incorrect: " + incorrectCounter + "</h4>");
        $('#gameMessage').append("<h4>Total Unanswered: " + unansweredCounter + "</h4>");

        setTimeout(startTrivia, 1000 * 10);

    }



    $("#startButton").on("click", function() {
        $("#buttonRow").hide();
        $("#introCard").remove();
        $("#timer").append("<span id='timerMinutes'>00</span>:<span id='timerSeconds'>00</span>");
        $("#questionSpace").show();

        startTrivia();


    });


};