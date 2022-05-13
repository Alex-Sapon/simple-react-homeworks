import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import styles from './HW11.module.css';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeSRHandler = (value: number) => {
        setValue1(value);
    };

    const onChangeSDRHandler = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    };

    const stateValue = [value1, value2] as (string | number | readonly string[]) & [number, number];

    return (
        <div>
            <hr/>
            <h2>Homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div className={styles.slider_container}>
                <div className={styles.slider_wrapper}>
                    <div className={styles.slider_values}>
                        <span>{value1}</span>                        
                    </div>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeSRHandler}
                    />
                </div>

                <div className={styles.slider_wrapper}>
                    <div className={styles.slider_values}>
                        <span>{value1}</span>
                        <span>{value2}</span>
                    </div>
                    <SuperDoubleRange
                        onChangeRange={onChangeSDRHandler}
                        value={stateValue}
                        min={0}
                        max={100}
                        step={1}
                        disabled={false}
                    />
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
};

export default HW11;
