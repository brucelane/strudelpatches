// midi + switch_angel https://youtu.be/dcmwqqzJubA?si=ypoOOu3uDVWYlajP
// https://strudel.cc/#c2V0Y3BtKDE3MC80KQpzYW1wbGVzKCdnaXRodWI6c3dpdGNoYW5nZWwvYnJlYWtzJykKc2FtcGxlcygnZ2l0aHViOnN3aXRjaGFuZ2VsL3BhZCcpCnNhbXBsZXMoJ2dpdGh1Yjp0aWRhbGN5Y2xlcy91enUtZHJ1bWtpdCcpCgovLyBsZXQgY2MgPSBhd2FpdCBtaWRpbignSW50ZWNoIEdyaWQgTUlESSBkZXZpY2UnKSBtaWRpY2hhbihudW1iZXIpCmxldCBjYyA9IGF3YWl0IG1pZGluKCdMb29wQmUgSW50ZXJuYWwgTUlESScpIC8vLm1pZGljaGFuKDApCm5vdGUoImMgYSBmIGUiKS5scGYoY2MoMCkucmFuZ2UoMCwgMTAwMCkpLmxwcShjYyg0MCkucmFuZ2UoMCwgMTApKS5zb3VuZCgic2F3dG9vdGgiKQoKLy8gJDogcygiYnJlYWtzOjUvMiIpLmZpdCgpCi8vICAgLnNjcnViKGlyYW5kKDE2KS5kaXYoMTYpLnNlZyg4KQovLyAgICAgICAgIC5yaWIoMjAwLDEpCi8vICAgICAgICAgKQovLyAgIC5vcmJpdCgyKQoKJDogcygid2hpdGUhOCIpCiAgLmRlY2F5KGNjKDQwKSkKICAuZ2FpbiguNCkKICAuX3B1bmNoY2FyZCgp

setcpm(170/4)
samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples('github:tidalcycles/uzu-drumkit')

// let cc = await midin('Intech Grid MIDI device') midichan(number)
let cc = await midin('LoopBe Internal MIDI') //.midichan(0)
note("c a f e").lpf(cc(40).range(0, 1000)).lpq(cc(40).range(0, 10)).sound("sawtooth")

// $: s("breaks:5/2").fit()
//   .scrub(irand(16).div(16).seg(8)
//         .rib(200,1)
//         )
//   .orbit(2)

$: s("white!8")
  .decay(cc(40))
  .gain(.4)
  ._punchcard()