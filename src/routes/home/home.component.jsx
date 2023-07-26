import React, { useContext, useEffect } from 'react'
import { getDocuments } from '../../utils/appwrite/appwrite.utils'
import { PropertiesContext } from '../../context/properties.context'
import ItemCard from '../../components/item-card/item-card.component'
import Dropdown from '../../components/dropdown/dropdown.component'
import DropdownContainer from '../../components/dropdown/dropdown-container.component'
import FormInput from '../../components/form-input/form-input.component'
import { ALERT_TYPE_CLASS, AlertBoxContext } from '../../context/alertbox.context'

export default function Home() {

    const { propertyList, setPropertyList } = useContext(PropertiesContext)
    const { setMessage, setType } = useContext(AlertBoxContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const { documents } = await getDocuments();
                setPropertyList(documents)
            }
            catch (error) {
                setMessage(`${error.message} (Error Code ${error.code})`);
                setType(ALERT_TYPE_CLASS.error)
            }
        }
        getData()
    }, [])

    return (
        <div>
            <Dropdown title="Filter" >
                <DropdownContainer>
                    test
                </DropdownContainer>
            </Dropdown>
            <FormInput type='search' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center my-2 mx-2 px-2 py-2'>
                {propertyList && propertyList.map((doc) => {
                    return <ItemCard document={doc} key={doc.$id} />

                })}
            </div>
        </div>
    )
}
