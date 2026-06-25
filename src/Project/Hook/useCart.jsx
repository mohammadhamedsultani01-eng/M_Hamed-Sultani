import { useEffect, useState } from "react";

export const useCart = () => {
    // اصلاح متد خواندن برای جلوگیری از ارور "undefined"
    const [cratItem, setCartItem] = useState(() => {
        const localData = localStorage.getItem("Sultan_Big");
        if (localData && localData !== "undefined") {
            return JSON.parse(localData);
        }
        return [];
    });

    useEffect(() => {
        if (cratItem !== undefined) {
            localStorage.setItem("Sultan_Big", JSON.stringify(cratItem));
        }
    }, [cratItem]);

    const addItem = (itemId) => {
        const exist = cratItem.find((item) => item.id === itemId);
        if (!exist) {
            setCartItem([...cratItem, { id: itemId, count: 1 }]);
        } else {
            setCartItem(cratItem.map((item) => 
                item.id === itemId ? { ...item, count: item.count + 1 } : item
            ));
        }
    };

    const removerFromitem = (itemId) => {
        setCartItem(cratItem.map((item) => {
            if (item.id === itemId) {
                return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
            }
            return item;
        }));
    };

    // اصلاح تابع ریسیت: مقداردهی اولیه به آرایه خالی به جای undefined
    const resetCart = () => {
        setCartItem([]);
        localStorage.removeItem("Sultan_Big");
    };

    return { cratItem, addItem, removerFromitem, resetCart };
};
