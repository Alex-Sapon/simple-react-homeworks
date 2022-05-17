import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'yellow', 'pink', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme);
    const dispatch = useDispatch();

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option));
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.radio_container}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={themes[themes.indexOf(theme)]}
                    onChangeOption={onChangeCallback}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
