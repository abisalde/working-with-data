import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Downloads, Text } from '../../asset/css/downloadsUtils.component.styled';


const DownloadsButton = () => {
    return ( 
        <Downloads>
            <FontAwesomeIcon 
                icon={faCloudDownloadAlt}
                color='var(--text)'
            />
            <Text>
                Download results
            </Text>
        </Downloads>
    );
}

export default DownloadsButton;