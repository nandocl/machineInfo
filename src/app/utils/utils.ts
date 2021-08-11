import { Injectable } from '@angular/core';

import { UAParser } from 'ua-parser-js';

import { ImachineInfo } from '../interfaces/useragent.interface';

@Injectable({
    providedIn: 'root'
})

export class Utils{
    
    getMachineInfo(): ImachineInfo{
        let parser = new UAParser();
        let resInfo = parser.getResult();
        const info: ImachineInfo = {
            browserName: resInfo.browser.name?? 'Unknown',
            browserVersion: resInfo.browser.version?? 'Unknown',
            osName: resInfo.os.name?? 'Unknown',
            osVersion: resInfo.os.version?? 'Unknown',
            osVersion2: navigator.platform?? 'Unknown'
        };

        return info;
    }
}