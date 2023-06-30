import React from 'react';
import CardTick from '../assets/images/transaction/card-tick.png';
import ChartSquare from '../assets/images/transaction/chart-square.png';
import '../styles/Transaction.css'

const Transaction = () => {
    return (
        <div className='transactionSection'>
            <div className="row mt-5">
                <div className="left col-md-4">
                    <h3 className='text-uppercase'>The amazing nft art of the world here</h3>
                </div>
                <div className="middle col-md-4">
                    <img src={CardTick} alt="card-tick image" /><span>Fast Transaction</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt saepe tempora numquam praesentium dolores atque.</p>
                </div>
                <div className="right col-md-4">
                    <img src={ChartSquare} alt="chart suqare image" /><span>Growth Transaction</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt saepe tempora numquam.</p>
                </div>
            </div>
        </div> 
    );
};

export default Transaction;