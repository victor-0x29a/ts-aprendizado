import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

interface jsonResponse {
    error: boolean
    result: string | Number | null | Object
}

class App {
    public express: express.Application
    public constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }
    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors({origin: true}))
        this.express.use(bodyParser.urlencoded({extended: true}))
        this.express.use(bodyParser.json())
    }
    private routes(): void {
        this.express.get("/sum/:x/:y", async (req, res)=>{
            try{
                const [X, Y] = [req.params.x, req.params.y]
                let response: jsonResponse = {
                    "error": false,
                    "result": Number(Number.parseFloat(X) + Number.parseFloat(Y))
                }
                return res.status(200).json(response)
            } catch(e) {
                let response: jsonResponse = {
                    "error": true,
                    "result": null
                }
                return res.status(400).json(response)
            }
        })
        this.express.post("/login", async (req, res)=>{
            try{
                const [user, pass] = [req.body.user, req.body.pass]
                if (!user || typeof user !== "string" || user.length < 4) {
                    const response: jsonResponse = {
                        error: true,
                        result: "problems in user (min 4)"
                    }
                    return res.status(400).json(response)
                }
                if (!pass || typeof pass !== "string" || pass.length < 4) {
                    const response: jsonResponse = {
                        error: true,
                        result: "problems in pass (min 4)"
                    }
                    return res.status(400).json(response)
                }

                // .... simulate a database


                const response: jsonResponse = {
                    error: false,
                    result: {jwt: "SASX90AKSXSA0ASDKOJSVFIODVMIOSDFA90A09SD"}
                }
                return res.status(200).json(response)
                
            }catch(e) {
                const response: jsonResponse = {
                    error: true,
                    result: null
                }
                return res.status(400).json(response)
            }
        })
    }
}

export default new App().express