// time
hi_elsewhere : note("f3 a3 d3 e3").decay(0.1).delay(1)
  .sound("square").fm("1".sub(time)).lpf(lpf).color("yellow")._punchcard()
a: sound("hh*16").gain(sine).hush()
  b: sound("hh*16").gain(sine)._pianoroll()
  e: n(sine.segment(16).range(0,15)).scale("C:minor")
  n: note("c!4").gain("1".div(time.seg(4))).log()