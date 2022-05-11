export const echo = (message: any)=>{
    console.log(`Received ${message} by ${Date.toString()}`);
    return message;
};
