import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pet } from '../pet/pet.model';

@Component({
  selector: 'app-pet-details',
  standalone: false,
  
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pet: Pet  },
    private dialogRef: MatDialogRef<PetDetailsComponent> 
  ) {}
  close() {
    this.dialogRef.close(); 
  }
}
