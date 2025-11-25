// dnb + dj_dave___ (instagram.com/dj_dave___)
const lpf = slider(619.6,400,4000)
hi_elsewhere : note("f3 a3 d3 e3").decay(0.1).delay(1).sound("square").lpf(lpf)._punchcard()
// chops: s("airglow").clip(1).slice(16, "14|14|8|14")
setcpm(36)

$: sound("~ ~ sd ~ ~ ~ sd ~").sound("rolandmc303_sd").spiral().color("red")

$: sound("bd ~ ~ ~ ~  bd ~ ~ ").sound("rolandmc303_bd").spiral().color("purple")

 $: sound("~ ~ ~ ~ ~ ~ ~ ~").sound("rolandmc303_oh").spiral().color("blue")
 $: sound("~ rd:0 ~ rd:3 rd:3 ~ ~ rd").sound("rolandmc303_rd").spiral().color("green")
 $: sound("~ hh:0 ~ hh:3 hh:3 ~ ~ hh").sound("rolandmc303_hh").spiral().color("orange")

 $: arrange(
  [3, "d0 f1 g1 c2 d2 d0 f1 g1 "],
   [1, "d1 f1 g1 c2 d2 d0 f1 g1 "]
).decay(0.1).delay(1).note().sound("supersaw").lpf(lpf)._punchcard().color("yellow")

 $: arrange(
  [3, "~ ~ d0@2 ~  <f2@2 g1@2> ~ "]
).note().sound("square").spiral().color("orange")

//$: sound("bd hh hh hh hh hh hh hh oh").spiral().color("green")

   arrange(
  [3, "d2 f3 g3 c4 d4 d2 f3 g3 c4"]
).note().sound("gm_electric_guitar_clean").spiral().color("yellow")

   arrange(
  [3, "d2@4 ~ ~ ~ ~ "],  
  [1, "d2@4 ~ ~ ~ d2 "],   
  [1, "e2 f2@4 ~ ~ ~ "],  
  [2, "f2@4 ~ ~ ~ ~ "],   
  [1, "f2@4 ~ ~ ~ f2 "],   
  [1, "e2 d2@4 ~ ~ ~ "],
).note().sound("gm_electric_bass_finger").spiral().color("magenta")