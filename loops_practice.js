//HOMEWORK

//Write a for loop that logs 0-15
for (i=0;i<16;i++) {
    console.log (i)
}


console.log ('----------------')

//Write a for loop that counts from 15-0
for (i=15;i>-1;i--) {
    console.log (i)
}


console.log ('----------------')

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps
let laps = 0;

for (laps;laps<10;laps++) {
    console.log ("That's another lap!")
}

console.log (`You ran ${laps} total laps!`)


console.log ('----------------')

//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”

let age = 23;

for (i=0;i<101;i++) {
    if (age == i) {
        console.log (`The user is ${i} years old.`)
    } else {
        console.log ("Age doesn't match.")
    }
}

console.log ('----------------')

//Write a loop that logs all even numbers from 0-700
for (i=0;i<701;i++) {
    if (i%2 == 0) {
        console.log (i)
    }
}

console.log ('----------------')

//Write a loop that logs all odd numbers from 0-700
let r = 0;
while (r<701) {
    if (r%2 == 1) {
        console.log (r)
    }
    r++
}

console.log ('----------------')

//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
const inventionDates = [{keyYear: 1900, keyInvention: 'Zeppelin'}, {keyYear: 1902, keyInvention: 'Teddy bear'}, {keyYear: 1910, keyInvention: 'Talking motion picture'}, {keyYear: 1913, keyInvention: 'Bra'}, {keyYear: 1918, keyInvention: 'Fortune cookie'}, {keyYear: 1923, keyInvention: 'Traffic signal'}, {keyYear: 1935, keyInvention: 'Radar'}, {keyYear: 1938, keyInvention: 'Ballpoint pen'}, {keyYear: 1943, keyInvention: 'Slinky'}]; //{key: value} objects in array

for (year=1900;year<1950;year++) { //iterates through the years
    for (i=0;i<inventionDates.length;i++) { //iterates through array
        if (inventionDates[i].keyYear == year) { //checks if current array index's key == the current year
            console.log ('It is ' + year + ' the ' + inventionDates[i].keyInvention + ' has been invented.') // if true the year and corresponding invention are logged
        }
    }
}