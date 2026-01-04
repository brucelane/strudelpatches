// https://www.youtube.com/watch?v=PhjtM9ePmYY
// https://strudel.cc/#cmVnaXN0ZXIoJ3JscGYnLCAoeCxwYXQpID0%2BIHtyZXR1cm4gcGF0LmxwZihwdXJlKHgpLm11bCgxMikucG93KDQpKX0pCnNldGNwbSgxNTAvNCkKY29uc3QgbHBmID0gc2xpZGVyKDAsMCw0MCkKCiR5byA6IG5vdGUoIjw3QDQgMTVAMiAxMEAyPiIuYWRkKDI0KSkKICAuZGV0dW5lKC43KQogIC5zKCJzdXBlcnNhdyIpCi5ybHBmKHNsaWRlcigwLjEzNikpLnNlZygxNikubHBlbnYoOCkKLmRpb2RlKCIxOjEiKS5vKDQpLnJvb20oLjYpLnJvb21zaXplKDMpCgokOiBub3RlKCI8ZzQgZjQgZDUgZzQgZzQgZjQgZDUgZzQgZzQhMiBkNSBnNCBnNCBmNCBkNSBkIzU%2BIikucygicGlhbm8iKS5kZWxheSguNikucmVsKDIpCgoKCl8kZHJ1bXM6IHN0YWNrKAogIHMoImJkOjEiKS5iZWF0KCIwLDc%2FLDEwIiwxNikuZHVjaygiMyIpLAogIHMoInNkOjIiKS5iZWF0KCI0LDEyIiwxNiksCiAgcygiaGg6NCE4IikKICAKICApCiAgLy8gLnJpYigwLDEvNCkKICAub3JiaXQoMikuX3Njb3BlKCkKCl8kYmFzczogcygic3VwZXJzYXchOCIpCi5ub3RlKCI8YyMgZiBkIyBbZCMgYSMyXT4vMiIuc3ViKDEyKSkub3JiaXQoMykKLnJscGYoc2xpZGVyKDAuOTMzKSkubHBlbnYobHBmKS5fcHVuY2hjYXJkKCkKCl8kcmlzZXI6IHMoInB1bHNlITE2IikuZGVjKC4xKS5mbSh0aW1lKS5mbWgodGltZSkub3JiaXQoNSkKCl8kdHA6IHMoInRvcCIpLmZpdCgp
register('rlpf', (x,pat) => {return pat.lpf(pure(x).mul(12).pow(4))})
setcpm(150/4)
const lpf = slider(0,0,40)

$yo : note("<7@4 15@2 10@2>".add(24))
  .detune(.7)
  .s("supersaw")
.rlpf(slider(0.136)).seg(16).lpenv(8)
.diode("1:1").o(4).room(.6).roomsize(3)._scope()

$: note("<g4 f4 d5 g4 g4 f4 d5 g4 g4!2 d5 g4 g4 f4 d5 d#5>").s("piano").delay(.6).rel(2)

