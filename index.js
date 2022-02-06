const discord = require('discord.js')
const client = new discord.Client({
    intents: 641
})

const config = require('./config.json')

const klaw = require('klaw')
const {join, extname} = require('path')


client.once('ready',async (client)=>{
    console.log("lo siento bb")
})

const klawe = klaw(join(__dirname,'managers'))

klawe.on('data',(f)=>{
    if(extname(f)!=='.js')
        return 

    const manager = require(f)
    manager.execute(client)
})
klawe.on('end',()=> console.log('todo bien en managers'))
        
klawe.on('error', (err)=> {
    console.log('error en managers')
    console.log(err)
})

client.on("messageCreate", async(msg)=>{
    console.log("se registro un mensaje")
    if(msg.author.bot)
    return
    if(msg.content.toLocaleLowerCase()=='hola'){
        msg.channel.send({
            content:'hola ' + msg.author.username
        })
    }
    /*
    msg.reply({
        content:"hola:p"
    })/**/
    /*
    msg.channel.send({
        content:"hola xd"
    })/**/
})

client.login(config.TOKEN)