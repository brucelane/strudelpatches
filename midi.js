// midi + switch_angel https://youtu.be/dcmwqqzJubA?si=ypoOOu3uDVWYlajP
// https://strudel.cc/#c2V0Y3BtKDE3MC80KQpzYW1wbGVzKCdnaXRodWI6c3dpdGNoYW5nZWwvYnJlYWtzJykKc2FtcGxlcygnZ2l0aHViOnN3aXRjaGFuZ2VsL3BhZCcpCnNhbXBsZXMoJ2dpdGh1Yjp0aWRhbGN5Y2xlcy91enUtZHJ1bWtpdCcpCgovLyBsZXQgY2MgPSBhd2FpdCBtaWRpbignSW50ZWNoIEdyaWQgTUlESSBkZXZpY2UnKSBtaWRpY2hhbihudW1iZXIpCmxldCBjYyA9IGF3YWl0IG1pZGluKCdMb29wQmUgSW50ZXJuYWwgTUlESScpIC8vLm1pZGljaGFuKDApCi8vbm90ZSgiYyBhIGYgZSIpLmxwZihjYyg0MCkucmFuZ2UoMTAwLCAxMDAwKSkubHBxKGNjKDQwKS5yYW5nZSgzLCAxMCkpLnNvdW5kKCJzYXd0b290aCIpCm5vdGUoIntnIGcgYSMgZyBnNH0lOCIuYWRkKCJ7MCA3IDEyIDB9JTgiKSkubHBmKGNjKDQwKS5yYW5nZSgxMDAsIDEwMDApKQogIC5scHEoY2MoNDApLnJhbmdlKDMsIDEwKSkKLnMoInN1cGVyc2F3IikuZGlzdCgiNDouMiIpCgoKJDogcygiYnJlYWtzOjUvMiIpLmZpdCgpCiAgLnNjcnViKGlyYW5kKDE2KS5kaXYoMTYpLnNlZyg4KQogIC5yaWIoIjw1MD4iLDQpCiAgKQogIC5uKGlyYW5kKDIpLnJpYigyMCwxKSkKICAuYWxtb3N0TmV2ZXIocGx5KCIyIHwgNCIpKQogIC5vcmJpdCgyKQogIC8vIC5kaXN0KCIyOi41IikKCi8vICQ6IHMoIndoaXRlITgiKQovLyAgIC5kZWNheShjYyg0MCkpCi8vICAgLmdhaW4oLjQpCi8vICAgLl9wdW5jaGNhcmQoKQoKJDogcygic3dwYWQiKS5zY3J1YigiMCAuMyAuMjIgLjQiKS5uKDQpLmdhaW4oLjgpLnBoYXNlciguNCkuaHBmKDQpCgokOiBub3RlKCI8YzIgZyMxIGYxQDI%2BLzIiKQogIC5zdHJ1Y3QoIjFANSAxQDMiKQogIC5scGVudigxKQoubHBhKDIpLnMoInN1cGVyc2F3IikubHBmKDEwMCkuZGlzdCgiMjouNSIpCgphbGwoeCA9PiB4LmxwZihzbGlkZXIoMTAsMTAsMTAwKS5wb3coMikpKQo%3D
setcpm(170/4)
samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples('github:tidalcycles/uzu-drumkit')

// let cc = await midin('Intech Grid MIDI device') midichan(number)
let cc = await midin('LoopBe Internal MIDI') //.midichan(0)
//note("c a f e").lpf(cc(40).range(100, 1000)).lpq(cc(40).range(3, 10)).sound("sawtooth")
note("{g g a# g g4}%8".add("{0 7 12 0}%8")).lpf(cc(40).range(100, 1000))
  .lpq(cc(40).range(3, 10))
.s("supersaw").dist("4:.2")


$: s("breaks:5/2").fit()
  .scrub(irand(16).div(16).seg(8)
  .rib("<50>",4)
  )
  .n(irand(2).rib(20,1))
  .almostNever(ply("2 | 4"))
  .orbit(2)
  // .dist("2:.5")

// $: s("white!8")
//   .decay(cc(40))
//   .gain(.4)
//   ._punchcard()

$: s("swpad").scrub("0 .3 .22 .4").n(4).gain(.8).phaser(.4).hpf(4)

$: note("<c2 g#1 f1@2>/2")
  .struct("1@5 1@3")
  .lpenv(1)
.lpa(2).s("supersaw").lpf(100).dist("2:.5")

all(x => x.lpf(slider(10,10,100).pow(2)))
