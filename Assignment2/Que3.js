 
      // wether a character is uppercase or lowercase
 
      function check(ch) {
        if (ch >= "A" && ch <= "Z")
          console.log(ch +
          " is an UpperCase character");
        else if (ch >= "a" && ch <= "z")
          console.log(ch +
          " is an LowerCase character");
        
      }
 
      // Driver Code
       
      let ch;
      // Get the character
      ch = "A";
       
      // Check the character
      check(ch);
       
      // Get the character
      ch = "a";
       
      // Check the character
      check(ch);