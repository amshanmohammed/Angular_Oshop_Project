import { AbstractControl } from '@angular/forms';

export function createPasswordStrengthValidator() {
  return (constrol: AbstractControl) => {
    const value = constrol.value;

    if (!value) {
      return null;
    }
    if (value.length < 8) {
      return {
        passwordStrength: true,
      };
    }
    return null;
  };
}
