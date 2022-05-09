# bad apple in hopscotch

rather odd way to do this.

how to run:
```sh
#0. clone this repo to your computer (duh)
#1. get every video frame into a folder named 'framesOG', 6506 frames in this case
deno run -A deno.js			 #2. slow down and store in a folder called 'frames'
automator compress1.workflow #3. scale all images in the 'frames' folder to 50x30 (only works on mac, otherwise use another program)
python -m http.serve 3900	 #4. serve the html file
open http://localhost:3900	 #5. open in browser
#6. open browser console
#7. wait for coounting to end
#8. type 'console.log(str)'
#9. copy the big string outputted
#10. interpret string in hopscotch (1 frame = 1500 digits, black = 0, white = 1, resolution = 50x30, framerate = 2 frames per second, 433 frames, remember to add a letter before the big string in your code to make hopscotch realize it isn't a number)
```
or skip steps 1-9 and get the premade big string from [here](str.txt)

or for the ~8fps version use [this](S2.txt)

[here's an example using the 8fps string, "Bad apple but it's HTML checkboxes"](//electogenius.github.io/hs-bad-apple/checkbox)

also there's a 'compressed' version (~1mb) in [this file](S2.compressed.txt) where '.', '*', '#' and '$' represent 00, 01, 10 and 11 (should have chosen a better set of characters, maybe 0, 1, 2 and 3)
