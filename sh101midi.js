// https://www.youtube.com/watch?v=qKZXQGCLRJY
// https://warm.strudel.cc/#JDogcygic2JkITQiKS5maXQoKQoKJDogcygid2hpdGUhMTYiKS5kZWModHJpLmZhc3QoNCkubXVsKC4yMikpLm8oMikKCiQ6IGNob3JkKCI8Q143IEE3IERtNyBHNz4iKS52b2ljaW5nKCkubWlkaSgnWk9PTSBVLTI0IE1JREknKQphbGwoeCA9PiB4Lm11bChwb3N0Z2FpbigwLjkpKSkKCiQ6IHMoInN1cGVyc2F3IikuZGV0dW5lKDEpCi5yZWwoNSkuYmVhdCgyLDMyKS5zbG93KDIpLm9yYml0KDMpCi5mbSgyKS5mbWgoMi4wNCkucm9vbSgxKS5yb29tc2l6ZSg2KQ%3D%3D

$: chord("<C^7 A7 Dm7 G7>").voicing().midi('ZOOM U-24 MIDI')
all(x => x.mul(postgain(0.9)))

$: s("supersaw").detune(1)
.rel(5).beat(2,32).slow(2).orbit(3)
.fm(2).fmh(2.04).room(1).roomsize(6)

