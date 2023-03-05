"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

class App {
    
     constructor(){
        this.express = _express2.default.call(void 0, )
        this.middlewares()
        this.routes()
    }
     middlewares() {
        this.express.use(_express2.default.json())
        this.express.use(_cors2.default.call(void 0, {origin: true}))
        this.express.use(_bodyparser2.default.urlencoded({extended: true}))
        this.express.use(_bodyparser2.default.json())
    }
     routes() {
        this.express.get("/", async (req, res)=>{
            return res.send("qissodai")
        })
    }
}

exports. default = new App().express