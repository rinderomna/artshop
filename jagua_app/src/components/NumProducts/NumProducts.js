import "./NumProducts.css";
import React, { useState, useEffect } from 'react';


const NumProducts = ({handleNumChange}) => {
    const [num, setNum] = useState(1);

    useEffect(() => {
        //atualiza o numero de itens que o usuario quer comprar
        handleNumChange(num);
    }, [num, handleNumChange]);
    

    const subValue = () => {
        if (num === 1) return;
        setNum(num - 1);
    }

    const sumValue = () => {
        if (num === 10) return;
        setNum(num + 1);
    }

    return ( 
        <div id="numProducts">

            <button data-control="less" id="btn_less" onClick={subValue}>-</button>
            <label data-display className="display" id="lbl_num">{num}</label>
            <button data-control="plus" id="btn_more" onClick={sumValue}>+</button>
        </div>
     );
}
 
export default NumProducts;