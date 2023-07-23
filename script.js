//your JS code here. If required.
 function firstNonRepeatingCharacter(str) {
      const frequencyMap = {};

      // Count the occurrences of each character
      for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
      }

      // Find the first character with frequency 1
      for (let char of str) {
        if (frequencyMap[char] === 1) {
          return char;
        }
      }

      return null; // Return null if no non-repeating character found
    }

    // Test cases
    const input = prompt("Enter a string:");
    const result = firstNonRepeatingCharacter(input);
    if (result) {
      console.log("First non-repeating character:", result);
    } else {
      console.log("No non-repeating character found.");
    }