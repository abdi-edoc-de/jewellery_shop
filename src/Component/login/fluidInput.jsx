import React, { useState, useEffect } from 'react'
import "./login.css"

function FluidInput({
    label, type, handler
}) {
    const { register, formState, control } = handler;

    return (
        <div>
            <div class="input-div pass focus">
                <div class="i">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                    <input type={type} class="input"
                        name={label}
                        id={label}
                        placeholder={label}
                        {...register(label)}   />
                </div>
            </div>
            <p>{formState.errors[label]?.message}</p>

        </div>
    )
}
export default FluidInput;     