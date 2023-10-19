function chunkArray(arr, n) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += n) {
      chunks.push(arr.slice(i, i + n));
    }
    return chunks;
  }
  
  // Example usage
  const inputArray = [2, 4, 2, 5, 3, 6, 3];
  const chunkSize = 3;
  const result = chunkArray(inputArray, chunkSize);
  console.log(result);
  
  