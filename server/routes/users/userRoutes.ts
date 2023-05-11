import express , {Request , Response} from "express";
import { signup } from "../../controllers/users/user-controller";

 const router = express.Router();


 router.post('/signup',signup);
 router.post('/signin');


 export default router;