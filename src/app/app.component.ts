import {AfterViewInit, Component} from '@angular/core';

import LiferayParams from '../types/LiferayParams';

declare const Liferay: any;
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: '/o/sample-senna-angular-app2-bundle/app/app.component.html',
    styleUrls: ['/o/sample-senna-angular-app2-bundle/css/app.component.css']
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        $('#p_p_id' + this.params.portletNamespace + ' .loader.loader-inline').hide();
    }

    Suivant() {
        console.log("clique btn next");
    }

    title: string = 'Team 2 - App 1';
    labels: any;
    params: LiferayParams;
}
