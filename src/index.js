import app from './app.js'

const PORT = process.env.PORT || 3001

app.listen(PORT, (err) => {

    if(err) throw `Error Servidor ${err}`
    console.log(`Servidor Express Activo Puerto ${PORT}`)
})