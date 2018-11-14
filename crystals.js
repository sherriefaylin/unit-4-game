//VARIABLE
// var crystals = ["c1", "c2", "c3", "c4"];







$(document).ready (function() {
    var goalScore = 0;
    var score = 0;
    var wins = 0
    var losses = 0

    function start() {

        $("#start").text("");
        goalScore = Math.floor(Math.random() * 100 + 19);
        $("#goalScore").text("GOAL: " + goalScore);


    };
    start();
    
    function reset() {
        score = 0;
        start();
    }

    function win() {
        wins++;
        $("#wins").text("WINS: " + wins);
        reset()
    }

    function lose() {
        losses++;
        $("#losses").text("LOSSES: " + losses);
        reset()    
    }


        //oh my god it's working
        //ASSIGNS VALUE FOR EACH CRYSTAL (NEEDS TO NOT REPEAT THO)
        
        //lol seems like we need to do them individually instead
        var crystal1 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal1);
            $("#crystal1").mouseover(function() {
                $(this).attr('src', 'assets/images/lovegemb.png')
            })
            $("#crystal1").mouseout(function() {
                $(this).attr('src', 'assets/images/lovegema.png')
            })
           
            $("#crystal1").on("click", function() {
                // $("#crystal1").animate({width: "125px"});
                score = score + crystal1;
                $("#currentScore").text("SCORE: " + score);
                if (score == goalScore) {
                    win();
                } 
                else if (score > goalScore) {
                    lose();
                }
            });

        var crystal2 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal2);
         $("#crystal2").mouseover(function() {
                $(this).attr('src', 'assets/images/happygemb.png')
            })
            $("#crystal2").mouseout(function() {
                $(this).attr('src', 'assets/images/happygema.png')
            })
        $("#crystal2").on("click", function() {
            score = score + crystal2;
            $("#currentScore").text("SCORE: " + score);
            if (score == goalScore) {
                win();
            } 
            else if (score > goalScore) {
                lose();
            }
        });

        var crystal3 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal3);
        $("#crystal3").mouseover(function() {
            $(this).attr('src', 'assets/images/grumpygemb.png')
        })
        $("#crystal3").mouseout(function() {
            $(this).attr('src', 'assets/images/grumpygema.png')
        })
        $("#crystal3").on("click", function() {
            score = score + crystal3;
            $("#currentScore").text("SCORE: " + score);
            if (score == goalScore) {
                win();
            } 
            else if (score > goalScore) {
                lose();
            }
        });


        var crystal4 = Math.floor(Math.random() * 10 + 2);
        console.log(crystal4);
        $("#crystal4").mouseover(function() {
            $(this).attr('src', 'assets/images/sadgemb.png')
        })
        $("#crystal4").mouseout(function() {
            $(this).attr('src', 'assets/images/sadgema.png')
        })

        $("#crystal4").on("click", function() {
            score = score + crystal4;
            $("#currentScore").text("SCORE: " + score);
            if (score == goalScore) {
                win();
            } 
            else if (score > goalScore) {
                lose();
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

        // .attr("data-stuff")
    







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


