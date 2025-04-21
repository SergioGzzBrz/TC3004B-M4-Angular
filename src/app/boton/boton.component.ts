import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  @Input() texto = 'dale click';
  @Input() color = 'black';
  @Output() onClick = new EventEmitter<void>();
  
  clicked() {
    this.onClick.emit();
  }
}
