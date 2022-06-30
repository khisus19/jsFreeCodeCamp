/* Map the Debris

According to Kepler's Third Law, the orbital period T

of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π sqr(a^3/μ)

a is the orbit's semi-major axis
μ = GM is the standard gravitational parameter
G is the gravitational constant,
M is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const PI = Math.PI
    for (let i = 0; i < arr.length; i++) {
        arr[i].orbitalPeriod = Math.round(2 * PI * Math.sqrt(((arr[i].avgAlt + earthRadius) ** 3) / GM));
        delete arr[i].avgAlt
    }
    console.log(arr)
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

// Another solution with a for...in loop
function orbitalPeriod2(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];
  
    //Looping through each key in arr object
    for (let elem in arr) {
      //Rounding off the orbital period value
      const orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
}