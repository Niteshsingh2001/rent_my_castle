import { useState, useEffect } from 'react';

export default function MsgBox({ msg }) {
    const [visible, setVisible] = useState(true);
    return (
        <div className="bg-white rounded-md shadow-lg absolute max-w-md max-h-32 overflow-y-hidden p-2 border-l-8 border-l-teal-600 top-20 right-2">
            <div className="flex items-center justify-start align-middle text-center h-full ml-2">
                <span className="text-left">{msg}</span>
            </div>
        </div>
    );
}
