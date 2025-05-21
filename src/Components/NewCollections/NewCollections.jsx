import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'
const NewCollections = () => {
    return  (
        <div className = 'new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>

            <div className = 'collections'>
                {   
                    new_collections.map((item,id) =>{
                            return <Item    key = {id}
                                            name = {item.name}
                                            old_price = {item.old_price}
                                            new_price = {item.new_price}
                                            image = {item.image}
                                        
                                         
                            
                            />
                        }   

                    )
                }   
            </div>


        </div>
    )
}

export default NewCollections