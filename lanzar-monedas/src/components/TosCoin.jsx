function TossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}
function TossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  function fiveHeads() {
      return new Promise((resolve, reject) => {
          let headsCount = 0;
          let attempts = 0;
          const maxAttempts = 100;
          const interval = setInterval(() => {
              attempts++;
              let result = TossCoin();
              console.log(`${result} was flipped`);
              if (result === "heads") {
                  headsCount++;
              } else {
                  headsCount = 0;
              }
              if (headsCount === 5) {
                  clearInterval(interval);
                  resolve(`It took ${attempts} tries to flip five "heads"`);
              } else if (attempts === maxAttempts) {
                  clearInterval(interval);
                  reject("Exceeded maximum attempts");
              }
          }, 100);
      });
  }
  fiveHeads()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  console.log("This is run after the fiveHeads function starts");


export default TossCoin;