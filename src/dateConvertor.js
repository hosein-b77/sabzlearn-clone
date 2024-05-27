// npm i moment-jalaali

 function dateFarsi(date){
    const moment = require('moment-jalaali');
    //  const jalaaliDate = moment(date).format('jYYYY/jM/jD HH:mm:ss');
    const jalaaliDate = moment(date).format('jYYYY/jM/jD');
    return jalaaliDate
}
export default dateFarsi;
// console.log(dateFarsi("2022-10-20T00:10:07.985Z"))