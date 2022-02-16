// JavaScript source code



function golfScore(par,strokes){

let par = Number(str);
let strokes = Number(str);

if (par < 0 && strokes < 0) {
return "par` and `strokes` will always be numeric and positive";
}
if (strokes == 1)
        return "Hole-in-one!";
if (strokes <= par - 2) {
    return "Eagle";
}
if (strokes == par - 1) {
    return "Birdie";
}
 if (strokes == par) {
    return "Par";
}
 if (strokes == par + 1) {
    return "Bogey";
}
if (strokes == par + 2) {
    return "Double Bogey";
}
if (strokes >= par + 3) {
    return "Go Home!";
    };


golfScore(0, 1);
