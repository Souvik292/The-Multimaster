import App from "./src/app.js"
import 'dotenv/config'

import cors from "cors";
// const cors = require('cors');

App.use(cors());
// AnimationEffectpp.get('/api/message', (req, res) => {
//     res.json(["hlw i m sdouigu"])
//   });
App.listen(4000, () => {
    console.log('Server is running on : http://localhost:4000');
});