import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {Dispatch} from 'redux';
import {ActionsType, loadingAC} from './bll/loadingReducer';
import LoadingImage from './images/loading.gif';
import styles from './HW10.module.css';

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const loading = isLoading

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h2>Homeworks 10</h2>

            {/*should work (должно работать)*/}
            <div className={styles.set_loading}>
                {loading
                    ? (
                        <div><img src={LoadingImage} alt=""/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
