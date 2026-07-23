import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const getWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        return [];
    }
}
const addToStoredList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast.error("Already exists in the read list.");
        return false;
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        return true;
    }
}

const addToWishList = (id) =>{
    const wishList = getWishList();
    if(wishList.includes(id)){
        toast.error("Already exists in the wish list.");
        return false;
    }else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list',wishListStr);
        return true;
    }
}

export {addToStoredList,getStoredReadList,getWishList,addToWishList}