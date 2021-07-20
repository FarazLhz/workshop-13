const cron = require('node-cron');
const express = require('express');

cron.schedule('*/5 * * * * *', () => {
    console.log(Date());
})

const app = express()
app.listen(4000)