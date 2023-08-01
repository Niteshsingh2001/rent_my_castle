import React from 'react'
import { LineWave } from 'react-loader-spinner'

export default function Loader() {
    return (
        <LineWave
            height="200"
            width="500"
            color='#0d9488'
            ariaLabel="line-wave"
            wrapperClass='flex  item-center justify-center h-full'
            visible={true}
        />
    )
}
