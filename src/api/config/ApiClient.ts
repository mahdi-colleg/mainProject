import axios from "axios";
import {toast} from "react-toastify";


const apiClient = axios.create({
    baseURL: "https://nest.navaxcollege.com/api",
    timeout: 120000,

})

apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response){
        if (error.response.status === 404) {
            toast.error("منابع درخواستی وجود ندارد")
        }else if(error.response.status === 401) {
            toast.error("ابتدا باید لاگ این کنید")
        }else if(error.response.status === 403){
            toast.error("دسترسی شما به این درخواست قطع است")
        }else if(error.response.status === 400){
            toast.error("پارامتر های ارسالی صحیح نمی باشد")
        }else {
            toast.error("خطای نامعلوم رخ داده است")
        }

    }else if (error.request){
        toast.error("ارتباط با سرور برقرار نیست");
    }else {
        toast.error("خطای نامعلوم");
    }
})

export default apiClient;