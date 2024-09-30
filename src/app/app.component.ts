import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listItems: Array<{ id: number; title: string; link: string }> = [
    { id: 1, title: 'INICIO', link: '#inicio' },
    { id: 2, title: 'MIS PODERES', link: '#poderes' },
    { id: 3, title: 'PROYECTOS', link: '#proyectos' },
    { id: 4, title: 'CONTACTO', link: '#contacto' },
  ];
}
