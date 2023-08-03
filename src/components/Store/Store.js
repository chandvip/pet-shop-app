import React, { useEffect } from 'react';
import './Store.css';
import { customers } from '../Data/Data.js';
import Header from '../Header/Header';
const Store = () => {

    return (

        <>
            <Header />
            <div className='container'>
                <div className='common-heading'>
                    <h1>
                        Here we have our customers details!
                    </h1>
                    <p>At our pet-centric establishment, we are delighted to welcome an array of adorable and loyal customers and their beloved furry companions. Each day, the doors swing open to reveal a bustling world of wagging tails, excited purrs, and endearing antics. Our pet customers come in all shapes and sizes, representing a diverse tapestry of breeds and personalities. From the exuberant energy of playful pups to the dignified grace of regal felines, our four-legged patrons never fail to bring joy to our hearts. Their unconditional love and unwavering loyalty have forged strong bonds with their human companions, who cherish every moment spent with their cherished pets. As we cater to the unique needs of both the animals and their owners, we take great pride in fostering a warm and inviting atmosphere that truly feels like a home away from home for every tail-wagging, whisker-twitching member of our extended family.</p>
                </div>
                <div className='grid grid-three-column'>
                    {
                        customers.map((item, index) => (
                            < div className='card' >
                                <div className='card-data'>
                                    <div className='card-data-flex'>
                                        <span key={index}>
                                            customer name:  <h3> {item.name}</h3>
                                            customer email-Id:  <h3>{item.email}</h3>
                                            price:  <h3>{item.price}₹
                                            </h3>
                                        </span>
                                    </div>
                                </div>
                                {
                                    item.pets.map((subItem, id) => (
                                        < div className='pet' key={id}   >
                                            pet name:  <h4>{subItem.pet_name}</h4>
                                            species: <h4>{subItem.species}</h4>
                                            <figure>
                                                <img className='img' src={subItem.img} alt={subItem.pet_name} style={{ height: 300 }} />
                                            </figure>
                                        </div>
                                    )
                                    )
                                }
                            </div>
                        )
                        )
                    }
                </div>


            </div >
        </>

    )
}

export default Store;