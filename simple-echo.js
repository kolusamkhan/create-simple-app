module.exports = (message)=>{
    console.log(`Received ${message} by ${Date.toString()}`);
    return message;
}