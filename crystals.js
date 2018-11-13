//VARIABLE
// var crystals = ["c1", "c2", "c3", "c4"];







$(document).ready (function() {
    var goalScore = "";
    var score = 0;
    var wins = 0
    var losses = 0

    function start() {
    $("#start").on("click", function() {
        //make this disappear until reset
        $("#start").text("");
        var goalScore = Math.floor(Math.random() * 100 + 19);
        $("#goalScore").text("Goal: " + goalScore);
    })};
    start();

        //oh my god it's working
        //ASSIGNS VALUE FOR EACH CRYSTAL (NEEDS TO NOT REPEAT THO)
        
        //lol seems like we need to do them individually instead
        var crystal1 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal1);
            $("#crystal1").on("click", function() {
                score = score + parseInt(crystal1);
                $("#currentScore").text("Score: " + score);
                if (score == goalScore) {
                    $("#wins").text("Wins: " + wins++) 
                } else if (score > goalScore) {
                    $("#losses").text("Losses: " + losses++)
                }
            });

        var crystal2 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal2);
        $("#crystal2").on("click", function() {
            score = score + parseInt(crystal2);
            $("#currentScore").text("Score: " + score);
                if (score == goalScore) {
                    $("#wins").text("Wins: " + wins++) 
                } else if (score > goalScore) {
                    $("#losses").text("Losses: " + losses++)
                }
        });

        var crystal3 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal3);
        $("#crystal3").on("click", function() {
            score = score + parseInt(crystal3);
            $("#currentScore").text("Score: " + score);
            if (score == goalScore) {
                $("#wins").text("Wins: " + wins++) 
            } else if (score > goalScore) {
                $("#losses").text("Losses: " + losses++)
            }
        });
        var crystal4 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal4);
        $("#crystal4").on("click", function() {
            score = score + parseInt(crystal4);
            $("#currentScore").text("Score: " + score);
            if (score == goalScore) {
                $("#wins").text("Wins: " + wins++) 
            } else if (score > goalScore) {
                $("#losses").text("Losses: " + losses++)
            } 
        });
        
        // function nextRound() {
        //     start();

        // }

        // if (score + crystal1 ||
        //     score + crystal2 ||
        //     score + crystal3 ||
        //     score + crystal4 > goalScore) {
        //         $("#losses").text("Losses: " + losses++)
        //         nextRound();
        //     }

       

        
        // for (var n = 0; n < crystals.length; n++) {
        //     crystals[n] = Math.floor(Math.random() * 10 + 2);
        //     console.log(crystals[n]);
        //     // console.log(c1);
        //     //LOCK IN THESE VALUES
        // }

        // $("#crystal1").on("click", function() {
        //     //UPDATE SCORE
        //     // var updatedScore = 
        //     $("#score").text(c1);
        });
    







    // $(".crys").on("click", function() {
    //     //WORKING BUT IT NEEDS TO BE !== 0, 1. 
    //     var c1 = Math.floor(Math.random() * 9);
    //     console.log(c1);

    //     var c2 = Math.floor(Math.random() * 9);
    //     console.log(c2);

    //     var c3 = Math.floor(Math.random() * 9);
    //     console.log(c3);

    //     var c4 = Math.floor(Math.random() * 9);
    //     console.log(c4);
        
    // })



    // userPick = crystals (function(round) {
    //     console.log(this);
        
        // Math.floor(Math.random() * crystals.length);
        // console.log(this);
        // winningNum = Math.floor(Math.random() * 1);
        // console.log(this);
//     })


