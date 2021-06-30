import React from 'react'

export default function Loading(props) {
    return (
        <div className="d-flex align-items-center justify-content-end h-100">
            {/* <!-- Loader 4 --> */}
            <svg height={`${props.Size}px`} width={`${props.Size}px`} version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" space="preserve">
                <circle fill="#00b3f7" stroke="none" cx="6" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"/>    
                </circle>
                <circle fill="#00b3f7" stroke="none" cx="26" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite"  begin="0.2"/>       
                </circle>
                <circle fill="#00b3f7" stroke="none" cx="46" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite"  begin="0.3"/>     
                </circle>
            </svg>

        </div>
    )
}
