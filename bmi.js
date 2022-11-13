
let bmibtn = document.getElementById("bmibtn");
bmibtn.addEventListener('click',bmifn);




function bmifn(){
    let height = parseFloat(document.getElementById("hght").value);
    let weight = Number(document.getElementById("wght").value);
    let age = Number(document.getElementById("age").value);
    let meter = parseFloat((height/100)^2);
    let bmi = weight/meter;
    var state;
    if(bmi<18.5){
        state = "  underweight"
    }
    if((bmi>18.5) && (bmi<24.9)){
        state = "  fit"
    }
    if((bmi>=25)&&(bmi<=29.9)){
        state = "  overweight"
    }
    if(bmi>30){
        state = "  obese"
    }
    document.getElementById("percent").innerText = bmi + state;
    document.getElementById("percent").style.display="block";

    if (state == "  underweight"){

        document.getElementById("fit").style.display="none";
        document.getElementById("overweight").style.display="none";
        document.getElementById("obese").style.display="none";
        
        document.getElementById("undr").style.display="block";
        document.getElementById("sbreif").style.display="block";

        
        
    }
    if (state == "  fit"){
        document.getElementById("undr").style.display="none";
        document.getElementById("overweight").style.display="none";
        document.getElementById("obese").style.display="none";
        
        document.getElementById("fit").style.display="block";
        document.getElementById("sbreif").style.display="block";
        
    }
    if (state == "  overweight"){
        
        document.getElementById("fit").style.display="none";
        document.getElementById("undr").style.display="none";
        document.getElementById("obese").style.display="none";


        document.getElementById("overweight").style.display="block";
        document.getElementById("sbreif").style.display="block";
        
    }
    if (state == "  obese"){
        document.getElementById("fit").style.display="none";
        document.getElementById("overweight").style.display="none";
        document.getElementById("undr").style.display="none";
        
        document.getElementById("obese").style.display="block";
        document.getElementById("sbreif").style.display="block";
        
        
    }
    document.getElementById("nav2").style.display="block";
    


}
