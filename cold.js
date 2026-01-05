samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples('github:tidalcycles/uzu-drumkit')

register('rlpf', (x,pat) => {return pat.lpf(pure(x).mul(12).pow(4))})
register('acidenv', (x,pat) => {return pat.lpf(100)
  .lpenv(x * 9).lps(0.1).lpd(.1).lpq(2)})
setcpm(132/4)
const lpf = slider(12.56,0,40)

$: s("sawtooth!16")
  .diode("4:.4")
  .note("f1")
  .acidenv(slider(0.5)).o(3)

$: s("bd!4").duck("3:4").duckdepth(.8).o(2)

$: note(irand(54).add(30)).s("sawtooth").scope()

$: s("white!16").dec(tri.fast(4).mul(.22)).o(2)

all(x => x.mul(postgain(0.9)))