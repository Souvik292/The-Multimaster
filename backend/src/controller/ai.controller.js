import GenerateContent from "../service/ai.service.js";





const aicontroller= async (req,res)=>{
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    } 
    const response = await GenerateContent(code);


    res.send(response);
}

export default aicontroller;


    