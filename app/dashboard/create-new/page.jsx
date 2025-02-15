"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyele from './_components/selectStyle'
import SelectDuration from './_components/SelectDuration'
import axios from 'axios'
import { Button } from '../../../components/ui/button'
import CustomLoading from '../../dashboard/create-new/_components/CustomLoading'

function CreateNew() {
    const [formData, setFormData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [VideoScript , setVideoScript] = useState();

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue)

        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const onCreateClickHandler = () => {
        GetVideoScript();
    }


    //Get video Script
    const GetVideoScript = async () => {
        setLoading(true)
        const prompt = 'Write a script to generate ' + formData.duration + ' video on topic: ' + formData.topic + ' along with Al image prompt in ' + formData.imageStyle + ' format for each scene and give me result in JSON format with imagePrompt and ContentText as field'
        console.log(prompt);
        const result = await axios.post('/api/get-video-script', {
            prompt: prompt
        }).then(resp => {
            console.log(resp.data.result);
            setVideoScript(resp.data.result);
        });
        setLoading(false)
    }


    return (
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-primary text-center py-10'>Create New</h2>

            <div className='mt-10 shadow-md p-10'>
                {/* Select topic */}
                <SelectTopic onUserSelect={onHandleInputChange} />
                {/* select style*/}
                <SelectStyele onUserSelect={onHandleInputChange} />
                {/* duration*/}
                <SelectDuration onUserSelect={onHandleInputChange} />
                {/* button create*/}
                <Button className="mt-10 w-full" onClick={onCreateClickHandler}>Create Short Video</Button>
            </div>
            <CustomLoading loading={loading}/>
        </div>

    )
}

export default CreateNew