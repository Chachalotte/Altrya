import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, PanelModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
