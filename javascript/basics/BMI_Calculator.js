let weight = 96;
let height = 1.71;
let BMI = weight / (height * height);
if(BMI < 18.5){
    console.log("You are underweight");
}
else{
    if(BMI >= 18.5 && BMI <= 24.9){
        console.log("you are normal");
    }
    else if(BMI >= 25 && BMI <= 29.9){
        console.log("you are overweight");
    }
    else{
        console.log("you are obese");
    }
}