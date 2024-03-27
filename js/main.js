const express = require('express')
const app = express()
const path = require('path')

//Static Folder
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'))
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
