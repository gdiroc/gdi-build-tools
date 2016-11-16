##  Makefile

* Initially used for compiling C programs
* Can be used for any command-line tasks
* Everything we do later with gulp you could do with make!
* Pre-installed Mac/Linux. [Windows](http://gnuwin32.sourceforge.net/packages/make.htm) <small>(warning - I have not verified Windows installer is legit - do your own research!)</small>

```bash
combine : dependency1.txt dependency2.txt dependency3.txt
    cat dependency1.txt dependency2.txt dependency3.txt > output.txt

dependency1.txt : partialA.txt partialB.txt
    cat partialA.txt partialB.txt > dependency1.txt

clean :
     rm output.txt dependency1.txt
```

