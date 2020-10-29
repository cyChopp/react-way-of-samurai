
export  const requiredField = (value)=>{
   if(value) return undefined;
   return 'Required Field';
 }



 export const maxLengthCreator = (maxLength)=>(value)=>{
   if(value.length > maxLength) return `Maximum Length of the field is ${maxLength} letters`
   return undefined;
 }