// Tunnel
 
setcpm(16)

$: sound("bd hh hh hh hh hh hh hh oh").spiral().color("green")

  $: arrange(
  [3, "d2 f3 g3 c4 d4 d2 f3 g3 c4"]
).note().sound("gm_electric_guitar_clean").spiral().color("yellow")

  $: arrange(
  [3, "d2@4 ~ ~ ~ ~ "],  
  [1, "d2@4 ~ ~ ~ d2 "],   
  [1, "e2 f2@4 ~ ~ ~ "],  
  [2, "f2@4 ~ ~ ~ ~ "],   
  [1, "f2@4 ~ ~ ~ f2 "],   
  [1, "e2 d2@4 ~ ~ ~ "],
).note().sound("gm_electric_bass_finger").spiral().color("magenta")