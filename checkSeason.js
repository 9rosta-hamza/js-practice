
function checkSeason(mounth) {
    switch (mounth) {
        case 1:
        case 2:
        case 12:
            console.log("winter")
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("spring")
            break;
        case 7:
        case 8:
        case 9:
            console.log("summer")
            break;
        default:
            console.log("Autumn")
            break;
    }
    return mounth;
}
console.log(checkSeason(9))