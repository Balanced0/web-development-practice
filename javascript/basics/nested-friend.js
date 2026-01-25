let my_marks = 89;
let friends_marks = 78;
if(my_marks > 80){
    if(friends_marks > 80){
        console.log("lunch");
    }
    else if(friends_marks >= 60 && friends_marks < 80){
        console.log("good luck next time");
    }
    else if(friends_marks >= 40 && friends_marks < 60){
        console.log("message unseen");
    }
    else{
        console.log("Blockec");
    }
}
else{
    console.log("Sad");
}