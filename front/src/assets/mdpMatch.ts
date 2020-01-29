import { FormGroup } from '@angular/forms';

export function mdpMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mdpMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mdpMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}