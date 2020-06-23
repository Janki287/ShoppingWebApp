import React from 'react';
import './form-input.styles.scss';

const FormInput = ( { handleChange,label,...otherInputProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherInputProps} />
        {
            label ?
            (
                <label className={ ` ${otherInputProps.value.length ? 'shrink' : ''} form-input-label `}>
                    {label}
                </label>
            )
            : null
        }
    </div>
)

export default FormInput;
//otherInputProps.value.length try this line after <input /> tag and see the result

//we are getting name,type,value,required as a otherInputProps in <FormInput /> Component
