function Calculate() {
    let oneThird = 1.0 / 3;

    let R = document.getElementById("objectRadius").value;
    let pM = document.getElementById("primaryMass").value;
    let pm = document.getElementById("satelliteDensity").value;

    // 2.4 * R (pM/pm)^1.0/3
    let answer = 2.4 * R * Math.pow((pM/pm), oneThird);
    let D = answer.toFixed(2);
    document.getElementById("rTide").innerHTML = "Roche Radius is " + D + " km";
}

		/*Earth - Moon
        R = 6378;
		pM = 5.5;
		pm = 2.5;
        */
