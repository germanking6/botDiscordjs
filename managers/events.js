module.exports = {
    execute(client) {
        const klawe = klaw(join(__dirname,'..','events'))

        klawe.on('data',(f)=>{
            if(extname(f)!=='.js')
                return 

            const event = require(f)
            if(event.once){
                client.once(evet.name,(...args)=>{
                    event.execute(...args,client)
                })
            }else{
                client.on(evet.name,(...args)=>{
                    event.execute(...args,client)
                })
            }
        })

        klawe.on('end',()=> console.log('todo bien en managers'))
        
        klawe.on('error', (err)=> {
            console.log('error en managers')
            console.log(err)
        })
    }
}