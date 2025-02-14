"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyele from './_components/selectStyle'
import SelectDuration from './_components/SelectDuration'

function CreateNew() {
        const [formData,setFormData]=useState([]);
        const onHandleInputChange=(fieldName, fieldValue)=>{
            console.log(fieldName, fieldValue)
        }
    
    return (
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-primary text-center py-10'>Create New</h2>

            <div className='mt-10 shadow-md p-10'>
                {/* Select topic */}
                <SelectTopic onUserSelect={onHandleInputChange}/>
                {/* select style*/}
                <SelectStyele onUserSelect={onHandleInputChange}/>
                {/* duration*/}
                <SelectDuration/>
                {/* button create*/}
            </div>
        </div>
    )
}

export default CreateNew