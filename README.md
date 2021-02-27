# New Color Picker

// Style 3, Gradient strip text
.stripe-text {
position: relative;
$random-text: 'quick turnover';
$stroke-width: $extra-large _ 0.05;
font-size: $extra-large;
text-transform: uppercase;
font-weight: 900;
font-family: 'Catamaran', sans-serif;
font-style: italic;
&:after {
position: absolute;
left: 0;
content: $random-text;
$stripe-size: 20px;
background: -webkit-repeating-linear-gradient(
135deg,
$pink,
$pink $stripe-size,
$yellow $stripe-size,
$yellow $stripe-size _ 2,
$purple $stripe-size _ 2,
$purple $stripe-size _ 3,
$green $stripe-size _ 3,
$green $stripe-size _ 4
);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
-webkit-text-stroke-width: $stroke-width;
-webkit-text-stroke-color: white;
}
&:before {
z-index: -1;
position: absolute;
content: $random-text;
color: $pink;
top: 0px;
left: 0px;
$x: 5px;
$y: 0px;
$step: 1px;
text-shadow: $x $y $pink,
$x + $step $y + $step $pink,
$x + $step _ 2 $y + $step _ 2 $pink,
$x + $step _ 3 $y + $step _ 3 $pink,
$x + $step _ 4 $y + $step _ 4 $pink,
$x + $step _ 5 $y + $step _ 5 $pink,
$x + $step _ 6 $y + $step _ 6 $pink,
$x + $step _ 7 $y + $step _ 7 $pink,
$x + $step _ 8 $y + $step _ 8 $pink,
$x + $step _ 9 $y + $step _ 9 $pink,
$x + $step _ 10 $y + $step _ 10 $pink,
}
}
