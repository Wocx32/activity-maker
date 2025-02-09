import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useGlobal } from '../../GlobalContext';


const TextItemCreate = ({ task, index}) => {

    const { deleteTaskItem, updateTaskItemContent } = useGlobal();

    // Access the specific item using the index
    const item = task.items[index];

    const handleInputChange = (e) => {
        // Assuming updateTaskItemContent is implemented to update the content of the item in the global state
        updateTaskItem(task.id, index, e.target.value);
    };

    const handleDeleteTaskItem = () => {
        deleteTaskItem(task.id, index);
    }

    return(
        <div className="flex flex-col mt-2 relative">
            {/* Delete button */}
            <button
                className="absolute top-0 right-0 mt-2 mr-2 text-red-500"
                onClick={handleDeleteTaskItem}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <label className="block mb-2 font-bold">{item.type} + "hehe"</label>
            <textarea 
                value={item.content}
                className="px-4 py-2 bg-green-100 border border-gray-300 rounded-md shadow-sm resize-y focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" 
                onChange={handleInputChange} />
        </div>
    )
}

export default TextItemCreate