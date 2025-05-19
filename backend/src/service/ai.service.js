import { GoogleGenAI, Models } from "@google/genai";
import { response } from "express";


const ai = new GoogleGenAI({ apiKey:"AIzaSyASGPH5HrZ6DSztsr-DN_eYrrsgifqv3Ek"});
// async function main(code) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents:{code},
//     // messages: [{ role: 'user', content: message }]
//   });
//   // const result= await response .main(prompt);
//   console.log(response.text);
//   return response.text;
// }




// await main();

// async function generateContent2(prompt) {
//     const result=await response.generateContent2(prompt);

//     return result.response.text();
    
// }


// export default main;

async function GenerateContent(prompt) {
  const model = ai.getGenerativeModel({
    model: "gemini-2.0-flash",
});
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

export default GenerateContent  ;





