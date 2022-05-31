//starting number, eventually let user set it
// input: "564" 564 * x = NaN
let number = 0;
feetMeterEl = document.getElementById("feetMeter-el");
litGalEl = document.getElementById("litGal-el");
kiloPndEl = document.getElementById("kiloPnd-el");

function convert(){
    number = parseInt(document.getElementById("num-el").value);
    console.log(number);
    //conversion
    let mtrToFt = number *  3.281
    let ftToMtr = number / 3.281
    let litToGal = number / 3.785
    let galToLit = number * 3.785
    let kiloToPnd = number * 2.205
    let pndToKilo = number / 2.205
    
    //concatenating to display results
    let nmtrToFt = mtrToFt.toFixed(3)
    let nftToMtr = ftToMtr.toFixed(3)
    let feetMeter = number + " Meters = " + nmtrToFt + " Feet" + " | " +  number + " Feet = " + nftToMtr + " Meters"
    feetMeterEl.innerText = feetMeter
    
    let nlitToGal = litToGal.toFixed(3)
    let ngalToLit = galToLit.toFixed(3)
     let litGallon = number + " Litres = " + nlitToGal + " Gallons" + " | " + number + " Gallons = " + ngalToLit + " Litres"
     litGalEl.innerText = litGallon
     
     
     let nkiloToPnd = kiloToPnd.toFixed(3)
     let npndToKilo = pndToKilo.toFixed(3)
     let kiloPnd =  number + " Kilos = " + nkiloToPnd + " Pounds" + " | " +  number + " Pounds = " + npndToKilo + " Kilos"
     kiloPndEl.innerText = kiloPnd
    
}

convert();
