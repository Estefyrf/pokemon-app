import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import './Loading.scss';

const Loading = ({message}) => {
const blockName = 'loading';
    return (
        <div className={blockName}>
            <FontAwesomeIcon icon={faCircleNotch} spin/>
            {message}
        </div>
    );
}
export default Loading;