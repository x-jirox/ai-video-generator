"use client"
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select"
import { Textarea } from '/components/ui/textarea';

function SelectTopic({ onUserSelect }) {
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational Story'];
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <h2 className='font-bold text-xl text-primary'>Content</h2>
      <p className='text-gray-600'>What is the topic of your video</p>
      <Select onValueChange={(value) => {
        setSelectedOption(value)
        value != 'Custom Prompt' && onUserSelect('topic', value)
      }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item}>{item}</SelectItem>
          ))}
        </SelectContent>

      </Select>

      {selectedOption == 'Custom Prompt' &&
        <Textarea className="mt-3"
          onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder='Write prompt on which you want to generate video' />
      }
    </div>
  )
}

export default SelectTopic