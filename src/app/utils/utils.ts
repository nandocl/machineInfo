import { Injectable } from '@angular/core';

import { UAParser } from 'ua-parser-js';

import { ImachineInfo } from '../interfaces/useragent.interface';

@Injectable({
    providedIn: 'root'
})

export class Utils{
    
    getMachineInfo(): ImachineInfo{
        let parser = new UAParser();
        let res = parser.getResult();
        const info: ImachineInfo = {
            browserName: res.browser.name?? 'Unknown',
            browserVersion: res.browser.version?? 'Unknown',
            osName: res.os.name?? 'Unknown',
            osVersion: res.os.version?? 'Unknown',
            osVersion2: navigator.platform
        };

        return info;
    }
}