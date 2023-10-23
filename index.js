function findMatching(drivers, string) {
    // Use the filter() method to iterate over the drivers array
    // and return only the drivers whose names match the provided string
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  
    return matchingDrivers;
  }
 
function fuzzyMatch(drivers, string) {
    // Use the filter() method to iterate over the drivers array
    // and return only the drivers whose names start with the provided string
    const matchedDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(string.toLowerCase())
    );
  
    return matchedDrivers;
  }
  
  const matchedDrivers = fuzzyMatch(drivers, 'D');
  console.log(matchedDrivers);

  function matchName(drivers, string) {
    const matchedDrivers = drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
    return matchedDrivers;
  }