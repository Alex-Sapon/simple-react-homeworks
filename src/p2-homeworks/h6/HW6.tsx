import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

type SaveValueType = {
    text: string
}

function HW6() {
    const state: SaveValueType = restoreState<SaveValueType>('editable-span-value', {text: ''})
    const [value, setValue] = useState<string>(state.text)

    const save = () => saveState('editable-span-value', {text: value})
    const restore = () => setValue(state.text)

    return (
        <div>
            <hr/>
            <h2>Homeworks 6</h2>
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save} style={{marginRight: '1rem'}}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
