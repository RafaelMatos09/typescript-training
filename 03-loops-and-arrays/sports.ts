let sportsOne: string[] = ['Golf', 'Cricket', 'Tennis', 'Swimming'];

for (let i = 0; i < sportsOne.lengthd; i++) {
    console.log(sportsOne[i])
}

//let's use the simplied for loop

for (let tempSports of sportsOne) {
    if (tempSports == 'Cricket') {
        console.log(tempSports + ' << My favorite!');
    } else {
        console.log(tempSports);
    }

}