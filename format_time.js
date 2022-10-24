

//@desc: take a variation of user inputted times and format to Military time ex: 0100-2300
const format_time = (rawTime) => {

    let formTime = rawTime.toUpperCase().replace(/ +/g, ""); // format to upper case, trim whitespace
    let isStandardTime = false;
    let test =  formTime.includes("A");
 
    if (formTime.includes("A")) {
        isStandardTime = true;
    }
    if (formTime.includes("P")) {
        isStandardTime = true;
    }

    let isMilitaryTime = Number(formTime.substring(0, 2)) >= 13 ? true : false;

    let finalTime = '';

    if (isStandardTime) {
        let isAm = formTime.includes("A");
        if (formTime[2] == ':') {

            let hour = isAm ? formTime.substring(0, 2) : Number(formTime.substring(0,2)) + 12;
            hour = hour % 12 == 0 ? hour - 12 : hour;
            let minutes = formTime.substring(3, 5);
            finalTime = hour + minutes;

        } else if (formTime[1] == ':') {

            let hour = isAm ? '0' + formTime.substring(0, 1) : Number(formTime.substring(0,1)) + 12;
            let minutes = formTime.substring(2, 4)
            hour = hour % 12 == 0 ? hour - 12 : hour;
            finalTime = hour + minutes;

        } else if (!formTime.includes(':')) {
            if (formTime.length >= 3) {
                console.log('here')
                console.log(formTime)
                let hour = isAm ? formTime.replace('AM', '') : Number(formTime.replace('PM', '')) + 12;
                
                // if AM or PM isn't found
                if (!hour) {
                    hour = isAm ? formTime.replace('A', '') : Number(formTime.replace('P', '')) + 12;
                }

                hour = hour.length == 1 ? '0' + hour : hour;
                hour = hour % 12 == 0 ? hour - 12 : hour;
                finalTime = hour + '00';
            } else {
                let hour = isAm ? formTime.replace('A', '') : Number(formTime.replace('P', '')) + 12;
                hour = hour.length == 1 ? '0' + hour : hour;
                hour = hour % 12 == 0 ? hour - 12 : hour;
                finalTime = hour + '00';
            }
       
        }
    }
    if (isMilitaryTime || !isStandardTime) {
      finalTime = formTime.replace(':', '');
    }

    if (finalTime.length == 3) {
        finalTime = 0 + finalTime;
    }

    // remove any straglers 
    finalTime = finalTime.replace('A', '');
    finalTime = finalTime.replace('P', '');
    finalTime = finalTime.replace('M', '');

    console.log(finalTime)
    return finalTime;
}


//format_time('10p');
module.exports = format_time;

