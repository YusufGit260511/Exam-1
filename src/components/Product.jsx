import React from 'react'

import Rating from './Rating'

import productcart from '../assets/productcart.png'

// const img = 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light.jpg'

const Product = ({ product }) => {
    const { img, name, price, aksiya, reting } = product;
    return (
        <div className='w-[270px] h-[350px] mb-[50px]'>
            <div>
                <div className='h-[209px] bg-[#e7e7e7] rounded-t-[4px] relative flex items-center justify-center'>
                    <img src={img} alt="" className='w-[190px] h-[180px]' />
                    {
                        aksiya === false ? null
                            : <span className='absolute top-[12px] left-[12px] bg-[#DB4444] text-white text-[12px] font-[400] leading-[18px] rounded-[4px] w-[55px] h-[26px] flex items-center justify-center'>-{aksiya}</span>
                    }
                </div>
                <button className='w-[270px] h-[41px] rounded-b-[4px] bg-[#000000] text-[12px] leading-[18px] font-[400] text-white flex items-center justify-center gap-[8px]'>
                    <img src={productcart} alt="" />
                    Add To Cart
                </button>
            </div>
            <div className='flex flex-col gap-[8px] mt-[16px]'>
                <p className='text-[16px] font-[500] leading-[24px]'>{name}</p>
                <div className='flex items-center gap-[12px]'>
                    <p className='text-[16px] text-[#DB4444] font-[500] leading-[24px]'>${price}</p>
                    {
                        aksiya === false ? null : (
                            <p className='text-[16px] text-[#000000] font-[500] leading-[24px] line-through opacity-[0.5]'>
                                ${Math.round((price / (1 - parseFloat(aksiya.replace('%', '')) / 100)))}
                            </p>
                        )
                    }

                </div>
                <Rating value={reting} />
            </div>
        </div>
    )
}

export default Product
