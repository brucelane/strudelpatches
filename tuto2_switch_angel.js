// dnb_switch_angel https://www.youtube.com/watch?v=3h1vM0lIrpM
// https://strudel.cc/#c2V0Y3BtKDE3MC80KQpzYW1wbGVzKCdnaXRodWI6c3dpdGNoYW5nZWwvYnJlYWtzJykKc2FtcGxlcygnZ2l0aHViOnN3aXRjaGFuZ2VsL3BhZCcpCnNhbXBsZXMoJ2dpdGh1Yjp0aWRhbGN5Y2xlcy91enUtZHJ1bWtpdCcpCgpfJDogcygiYnJlYWtzLzIiKS5maXQoKQogIC5zY3J1YihpcmFuZCgxNikuZGl2KDE2KS5zZWcoOCkucmliKDUsLjUpKQogIC5vcmJpdCgzKS5kaXN0KCIzOi41IikuZGVjYXkoLjEpCiAgLmNvYXJzZShzbGlkZXIoMTYuMTUsMCw1MCkpCgoKXyQ6IHMoImJkOjQiKS5iZWF0KCIwLDEwIiwxNikKCl8kOiBzKCJzZDoyIikuYmVhdCgiNCwxMiIsMTYpCgpfJDogcygid2hpdGUhOCIpLmRlY2F5KHRyaS5yYW5nZSgwLjAzLDAuMSkuZmFzdCgyKSkuZ2FpbigwLjYpCgpfJDogcygicmltOjEiKS5zdHJ1Y3QocmFuZC5tdWwoLjYpLnJvdW5kKCkuc2VnKDE2KS5yaWIoMywyKSkuZ2FpbigwLjUpCgokOiBzKCJzd3BhZCIpLnNjcnViKCIwQDUgMEAzIi5hZGQoIjwuM0AzIC4yPiIpKS5nYWluKDAuNSkKLmF0dCguMykKCl8kOiBzKCJwdWxzZSE4IikuZm0odGltZSkuZm1oKHRpbWUpLnJvb20oMSkuZ2FpbigwLjUpCgpfJDogcygiZ21fc3ludGhfYmFzc18yOjQiKQogIC5zY3J1YihwZXJsaW4ucmFuZ2UoLjE3LCAuMykKICAuZmFzdCg0KS5zZWcoIjggNCA0IDgiKS5yaWIoMjIsMikpCiAgLmxwZihzbGlkZXIoMTg3Mi40LDQwMCw0MDAwKSkgICAgICAgICAgICAgICAKICAuc29tZXRpbWVzQnkoLjE1LCB4ID0%2BIHguc3BlZWQoIi0xIikpCiAgLnBoYXNlciguOCkuZGlzdCgiMi41Oi40NSIpCiAgLmRlbGF5KHJhbmQuZmFzdCgzKSkKICAuZGVsYXl0aW1lKHJhbmQpCiAgLmdhaW4oMC4yNSkKCi8vIGFsbCh4ID0%2BIHgucmliKDAsMS80KSk%3D

setcpm(170/4)
samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples('github:tidalcycles/uzu-drumkit')

_$: s("breaks/2").fit()
  .scrub(irand(16).div(16).seg(8).rib(5,.5))
  .orbit(3).dist("3:.5").decay(.1)
  .coarse(slider(16.15,0,50))


_$: s("bd:4").beat("0,10",16)

_$: s("sd:2").beat("4,12",16)

_$: s("white!8").decay(tri.range(0.03,0.1).fast(2)).gain(0.6)

_$: s("rim:1").struct(rand.mul(.6).round().seg(16).rib(3,2)).gain(0.5)

$: s("swpad").scrub("0@5 0@3".add("<.3@3 .2>")).gain(0.5)
  .att(.3)

_$: s("pulse!8").fm(time).fmh(time).room(1).gain(0.5)

_$: s("gm_synth_bass_2:4")
  .scrub(perlin.range(.17, .3)
  .fast(4).seg("8 4 4 8").rib(22,2))
  .lpf(slider(1872.4,400,4000))               
  .sometimesBy(.15, x => x.speed("-1"))
  .phaser(.8).dist("2.5:.45")
  .delay(rand.fast(3))
  .delaytime(rand)
  .gain(0.25)

// all(x => x.rib(0,1/4))