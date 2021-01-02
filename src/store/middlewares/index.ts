import {applyMiddleware} from "redux";
import {todosMdl} from "../../pages/todos";
import {apiMdl} from "./api";
import {notificationMdl} from "../../common/notification";

export default applyMiddleware(...todosMdl, ...notificationMdl, ...apiMdl);
