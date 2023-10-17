import Cookies from "js-cookie";

export const CATEGORYID = "categoryId";
export const LIMITPAGE = 6;
export const TOKEN="token";
export const ROLE = "role";
export const EXPIRE = "expire";
export const API = "https://ap-blog-backend.up.railway.app/";
export const ENDPOINT = API+"api/v1/";
export const URL_IMG = API + "upload/"

export const logOut = () =>{
    Cookies.remove(ROLE);
    Cookies.remove(TOKEN);
    Cookies.remove(EXPIRE);
}

// https://loremflickr.com/320/240?random=3