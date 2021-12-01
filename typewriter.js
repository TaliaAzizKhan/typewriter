const sentence = "hello there from lighthouse labs";


for (const char of sentence) {


  setTimeout(() => {
    
    // print the char here
    process.stdout.write(char);
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

  
}