const express = require('express');
//out express app which we will call app (its the custom practice)
const app = express();

app.get("/Backreccomendations", async (req,res)=>{
    try{
        const extResult = await fetch("https://tastedive.com/api/similar?q=beyond+evil&type=show&k=1075196-SA-B2132ABD");
        if (!extResult.ok){
            throw new Error(`Error: ${extResult.status}`);
        }
        const data = await extResult.json();
        res.json(data);
    }
    catch(error){
        console.error(error);
    }
});
const port = process.env.PORT || 3000; //get better explination 
app.listen(port,()=> console.log(`listening on port ${port}`)); // use $env.PORT=5000 to change port to 5000 if available
