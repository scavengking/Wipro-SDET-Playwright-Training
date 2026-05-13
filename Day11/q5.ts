// q5.ts


type CSSUnit = "px" | "rem" | "vh";
type MarginValue = `${number}${CSSUnit}`;


const m1: MarginValue = "10px";
const m2: MarginValue = "2rem";
const m3: MarginValue = "5vh";

console.log("Valid margins:", m1, m2, m3);


function setMargin(value: MarginValue): void {
  console.log(`Margin set to: ${value}`);
}

setMargin("10px");   // ✅
setMargin("3rem");   // ✅
setMargin("8vh");    // ✅

